import type React from "react"
import { useRef, useEffect, useState, useCallback } from "react"

interface CustomVideoPlayerProps {
  url: string
  playing?: boolean
  controls?: boolean
  volume?: number
  muted?: boolean
  playbackRate?: number
  width?: string | number
  height?: string | number
  style?: React.CSSProperties
  progressInterval?: number
  playsinline?: boolean
  pip?: boolean
  stopOnUnmount?: boolean
  onReady?: () => void
  onStart?: () => void
  onPlay?: () => void
  onPause?: () => void
  onBuffer?: () => void
  onBufferEnd?: () => void
  onEnded?: () => void
  onError?: (error: any) => void
  onDuration?: (duration: number) => void
  onSeek?: (seconds: number) => void
  onProgress?: (state: { played: number; playedSeconds: number; loaded: number; loadedSeconds: number }) => void
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({
  url,
  playing = false,
  controls = false,
  volume = 1,
  muted = false,
  playbackRate = 1,
  width = "100%",
  height = "auto",
  style,
  progressInterval = 1000,
  playsinline = false,
  pip = false,
  stopOnUnmount = true,
  onReady,
  onStart,
  onPlay,
  onPause,
  onBuffer,
  onBufferEnd,
  onEnded,
  onError,
  onDuration,
  onSeek,
  onProgress,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [duration, setDuration] = useState(0)
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const canPlay = useCallback((url: string) => {
    return /\.(mp4|webm|ogg)$/i.test(url)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleDurationChange = () => {
      const newDuration = video.duration
      setDuration(newDuration)
      onDuration?.(newDuration)
    }

    video.addEventListener("durationchange", handleDurationChange)
    video.addEventListener("ended", onEnded)
    video.addEventListener("error", onError)

    onReady?.()

    return () => {
      video.removeEventListener("durationchange", handleDurationChange)
      video.removeEventListener("ended", onEnded)
      video.removeEventListener("error", onError)
      if (stopOnUnmount) {
        video.pause()
        video.currentTime = 0
      }
    }
  }, [onDuration, onEnded, onError, onReady, stopOnUnmount])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (playing) {
      video.play().then(onStart).catch(onError)
    } else {
      video.pause()
    }
  }, [playing, onStart, onError])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.volume = volume
  }, [volume])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = muted
  }, [muted])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.playbackRate = playbackRate
  }, [playbackRate])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateProgress = () => {
      if (!video) return
      const state = {
        played: video.currentTime / duration,
        playedSeconds: video.currentTime,
        loaded: video.buffered.length ? video.buffered.end(video.buffered.length - 1) / duration : 0,
        loadedSeconds: video.buffered.length ? video.buffered.end(video.buffered.length - 1) : 0,
      }
      onProgress?.(state)
    }

    progressIntervalRef.current = setInterval(updateProgress, progressInterval)

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current)
      }
    }
  }, [duration, progressInterval, onProgress])

  const seekTo = useCallback(
    (seconds: number) => {
      const video = videoRef.current
      if (!video) return

      video.currentTime = seconds
      onSeek?.(seconds)
    },
    [onSeek],
  )

  const handlePlay = useCallback(() => {
    onPlay?.()
  }, [onPlay])

  const handlePause = useCallback(() => {
    onPause?.()
  }, [onPause])

  const handleBuffer = useCallback(() => {
    onBuffer?.()
  }, [onBuffer])

  const handleBufferEnd = useCallback(() => {
    onBufferEnd?.()
  }, [onBufferEnd])

  return (
    <video
      ref={videoRef}
      src={url}
      width={width}
      height={height}
      style={style}
      preload="auto"
      controls={controls}
      playsInline={playsinline}
      onPlay={handlePlay}
      onPause={handlePause}
      onWaiting={handleBuffer}
      onCanPlay={handleBufferEnd}
    />
  )
}

export default CustomVideoPlayer

