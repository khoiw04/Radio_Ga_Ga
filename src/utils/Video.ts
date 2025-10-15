import { useCallback, useEffect, useState } from "react";
import { usePageContext } from "@/pages/Hook/usePageContext";
import { useMotionValue, animate, MotionValue } from "motion/react";
import ReactPlayer from "react-player";
import { Howl, Howler } from 'howler';

interface VideoState {
    playing: boolean;
    ready: boolean;
    volume: number;
    lyric: number;
    muted: boolean;
}

interface Props {
    playerRef: React.RefObject<ReactPlayer | null>
    video: VideoState
    setVideo: React.Dispatch<React.SetStateAction<VideoState>>;
    sound?: Howl;
    play?: () => void;
    pause?: () => void;
    stop?: () => void;
    timeStamps: number[];
}

const animateVolume = (
    volumeMotion: MotionValue,
    targetVolume: number,
    duration: number,
    delay: number,
    setVideo: React.Dispatch<React.SetStateAction<VideoState>>,
    onPlay?: () => void,
    onComplete?: () => void,
) => {
    animate(volumeMotion, targetVolume, {
        duration: duration,
        delay: delay,
        onUpdate(latest) {
            setVideo(prev => ({
                ...prev,
                volume: latest
            }));
        },
        onPlay: () => {
            if (onPlay) {
                onPlay();
            }
        },
        onComplete: () => {
            if (onComplete) {
                onComplete();
            }
        }
    });
};

export default function useVideo({ playerRef, video, setVideo, timeStamps }: Props) {
    const { location, state } = usePageContext();
    const [flag, setFlag] = useState(true)
    const volumeMotion = useMotionValue(video.volume);

    useEffect(() => {
        Howler.autoUnlock = true;
        if (video.ready) {
            if (location === "/" && !state.buttonActive) {
                animateVolume(volumeMotion, 1, 1.3, flag ? 0 : 0, setVideo, () => {
                    setVideo(prev => ({ ...prev, playing: true }));
                }, () => {
                    setFlag(false)
                });
            }
            else if (location !== "/" && state.buttonActive) {
                animateVolume(volumeMotion, 0, 1.8, 0, setVideo, undefined, () => {
                    setVideo(prev => ({ ...prev, playing: false }));
                });
            }
        }
    }, [flag, location, setVideo, state.buttonActive, video.ready, volumeMotion])

    const handleReady = () => {
        setVideo(prev => ({
            ...prev,
            ready: true,
        }));
    }

    const onProgress = useCallback((state) => {
        const currentTime = state.playedSeconds;
        const videoDuration = playerRef.current?.getDuration();

        if (!videoDuration) return
        for (let i = 0; i < timeStamps.length; i++) {
            if (currentTime >= timeStamps[i] && video.lyric <= i) {
                setVideo(prevState => ({
                    ...prevState,
                    lyric: i + 1
                }));
            }
        }
        if (currentTime >= videoDuration - 0.9) {
            setVideo(prevState => ({
                ...prevState,
                volume: 0,
                lyric: 0
            }));
            volumeMotion.set(0)
        }
    }, [playerRef, setVideo, timeStamps, video.lyric, volumeMotion])

    return { onProgress, handleReady, volumeMotion }
}
