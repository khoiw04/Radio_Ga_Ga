import { ReactNode, useState } from 'react'
import { motion } from 'motion/react'
import { useMenuContext } from '../../Hook/useMenuContext'
import { useCallback, useEffect } from 'react'
import { usePageContext } from '@/pages/Hook/usePageContext'
import useSound from 'use-sound'
import Tick from "/sound/tickradiofilter.ogg"

export default function HandleDrag({ children }: { children: ReactNode }) {
  const {
    dimension,
    line,
    rotation,
    number,
    total,
    radius,
    round,
    data,
    container,
    isDragging,
    velcotiy,
    closestLineIndex,
    setIsDragging,
    setClosestLineIndex,
    setRotation,
    setVelcotiy
  } = useMenuContext()
  const { isActive, location, state, finish, setLocation } = usePageContext()
  const [playbackRate, setPlaybackRate] = useState(1)
  const [play] = useSound(Tick, {
    volume: finish && location === "/" ? 0 : 0.2,
    playbackRate
  });

  const closest = useCallback(() => {
    const centerX = dimension.width / 2
    const centerY = dimension.height / 3
    const fixbug = 100

    let lineRect: number | null = null
    let minDistance = Infinity

    line.current?.forEach((_el, i) => {
      const step = 360 / total
      const angle = step * i + rotation
      const radian = (angle * Math.PI) / 180
      const x = radius * Math.cos(radian) + centerX
      const y = radius * Math.sin(radian) + centerY

      const distance = Math.sqrt(
        Math.pow(x - centerX * fixbug, 2) + Math.pow(y - 0, 2)
      )

      if (i % round === 0 && distance < minDistance && dimension.height > 0) {
        minDistance = distance
        lineRect = i
      }
    })

    if (lineRect !== null && lineRect !== closestLineIndex) {
      setClosestLineIndex(lineRect)
    }
  }, [
    closestLineIndex,
    dimension.height,
    dimension.width,
    line,
    radius,
    rotation,
    round,
    setClosestLineIndex,
    total
  ])

  useEffect(() => {
    closest()
  }, [closest])

  const snap = (rotation: number) => {
    const snapAngle = 360 / number
    return Math.round(rotation / snapAngle) * snapAngle
  }

  const handlePan = (_event, info) => {
    const scale = dimension.width > 1100 ? 0.01 : 10

    const newRotation = rotation + info.delta.x * scale + info.velocity.x / 100
    const vel = info.velocity.x
    setVelcotiy(vel * 0.004)
    setRotation(newRotation)
    setPlaybackRate(info.velocity.x * 0.0004)
    document.body.style.cursor = 'grabbing'
  }

  const handlePanEnd = (_event, _info) => {
    const snappedRotation = snap(rotation)

    setRotation(snappedRotation)
    setIsDragging(true)
    closest()
    setPlaybackRate(1)

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const newRotation = (((snappedRotation % 360) + 360) % 360) - 90

    document.body.style.cursor = 'default'
  }

  useEffect(() => {
    if (location === '/albums') {
      setRotation(150 + 90)
    }
    if (location === '/social') {
      setRotation(30 + 90)
    }
  }, [])

  useEffect(() => {
    if (closestLineIndex !== null) {
      const currentData = data[closestLineIndex % data.length]
      if (currentData && currentData.href && isDragging) {
        setLocation(currentData.href)
      }
    }
  }, [closestLineIndex, data, isDragging, setLocation])

  return (
    <motion.div
      onPan={handlePan}
      onPanEnd={handlePanEnd}
      onPanStart={() => setIsDragging(false)}
      key={dimension.width}
      style={{
        touchAction: 'pan-x'
      }}
      className='relative flex size-full items-center justify-center touch-manipulation'
      animate={{
        width: isActive
          ? dimension.width < 540
            ? '300%'
            : '1000%'
          : 100 + '%',
        height: isActive
          ? dimension.width < 540
            ? '300%'
            : '1000%'
          : 100 + '%',
        translateY: isActive ? (dimension.width < 540 ? '25%' : '7%') : '0%',
        transition: {
          translateY: {
            duration: 0.4,
            ease: [0, 0.54, 0.45, 1]
          },
          width: {
            duration: 1,
            ease: [0, 0.54, 0.45, 1],
            delay: 0.4
          },
          height: {
            duration: 1,
            ease: [0, 0.54, 0.45, 1],
            delay: 0.4
          }
        }
      }}
    >
      <motion.div
        ref={container as React.RefObject<HTMLDivElement>}
        initial={false}
        animate={{
          rotate: -90 + Math.round(rotation),
          opacity: state.buttonActive ? 1 : 0,
        }}
        transition={{ duration: isActive && Math.abs(velcotiy) > 13 ? 2.4 : 1.1, ease: [0.22, 1, 0.36, 1] }}
        className='pointer-events-none absolute z-0 flex size-1/3 cursor-grab flex-nowrap items-center justify-center cursor'
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
