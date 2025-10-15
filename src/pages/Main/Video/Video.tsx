import ReactPlayer from 'react-player'
import { useRef, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { usePageContext } from "../../Hook/usePageContext"
import useVideo from '@/utils/Video';
import Lyrics from './Lyrics';

const timeStamps = [

    29.19,
    33.74,
    37.86,
    41.94,

    46.13,

    47.62,
    52.06,
    56.30,
    60.22,

    64.06,

    66.27,
    70.66,
    74.90,
    78.90,

    82.90,
    86.58,
    90.58,
    93.58,
    94.86,
    99.38,
    103.50,
    107.46,
    109.38,

    113.14,
    113.68,
    119.74,

    131.46,
    135.58,
    139.66,
    143.70,

    147.88,

    149.62,
    153.18,
    157.82,
    161.48,

    165.83,
    169.98,
    173.86,
    175.70,

    177.42,
    181.88,
    186.16,
    189.36,
    193.24,
    197.60,
    199.85,

    203.08,

    204.16,
    206.08,

    215.18,
    218.89,
    222.86,
    227.49,
];

export default function Video() {
    const { finish, location } = usePageContext()
    const playerRef = useRef<ReactPlayer | null>(null);
    const [button, setButton] = useState(false)
    const [video, setVideo] = useState({
        playing: false,
        ready: false,
        muted: false,
        lyric: 0,
        volume: 0
    });
    const { handleReady, onProgress } = useVideo({ playerRef, video, setVideo, timeStamps })

    useEffect(() => {
        if (finish) {
            const timeoutId = setTimeout(() => {
                setButton(true);
            }, 4000);

            return () => clearTimeout(timeoutId);
        }
    }, [finish]);

    return (
        <>
        <AnimatePresence mode='wait'>
        {(!button || location !== "/") &&
            <motion.div
                initial={{
                    opacity: 1
                }}
                animate={{
                    opacity: 1,
                    transition: { delay: 0, duration: 0 }
                }}
                exit={{
                    opacity: 0,
                    transition: { delay: 2, duration: 2 }
                }}
                className='absolute size-full bg-oklch-amber pointer-events-none'
            />}
        </AnimatePresence>
        <div className='size-full absolute flex justify-center items-center flex-col -z-5'>
            <Lyrics video={video} />
        </div>
        <ReactPlayer
            url='https://vimeo.com/1082195863'
            stopOnUnmount={false}
            progressInterval={90}
            onProgress={onProgress}
            playing={video.playing}
            volume={video.volume}
            onReady={handleReady}
            muted={video.muted}
            ref={playerRef}
            loop
            className='size-full absolute -z-10 focus-visible:ring outline-none focus-visible:ring-amber-100 touch-none pointer-events-none'
            width='100%'
            height='100%'
            style={{
                pointerEvents: 'none'
            }}
            config={{
                vimeo: {
                    title: ' ',
                    playerOptions: {
                        byline: false,
                        autoplay: true,
                        controls: false,
                        portrait: false,
                        background: true,
                        vimeo_logo: false,
                        color: 'oklch(33.86% 0.1038 338.96)'
                     }
                }
            }}
        />
        </>
    )
}