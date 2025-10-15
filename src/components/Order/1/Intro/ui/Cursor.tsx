import { motion, useScroll, useTransform } from 'motion/react'
import { useEffect, useState, useCallback } from 'react'
import { useIntroContext } from '../hook/useIntroContext'
import { usePageContext } from '@/pages/Hook/usePageContext'
import useSound from 'use-sound'
import Tick from "/sound/tickradiofilter.ogg"

interface ClosetLine {
  lineRect: HTMLElement | null
  distance: number
}

export default function Time() {
  const {
    click
  } = usePageContext()
  const {
    isHover,
    container,
    line,
    smoothMouse,
    dimension,
    render,
    widthLine,
    heightLine,
    setMousePosition,
    setOnHover
   }
  =
  useIntroContext()
  const { scrollYProgress } = useScroll()
  const [closetLine, setClosetLine] = useState<ClosetLine>({
    lineRect: null,
    distance: Infinity
  })
  //Distance to update, lineRect to get line's info near cursor

  const yParallax = useTransform(
    scrollYProgress,
    [0.4, 1],
    [dimension.height / 2 + dimension.height * 0.15, dimension.height / 2]
  )
  const [play] = useSound(Tick);

  useEffect(() => {
    const onMouseMove = () => {
      let closest: ClosetLine = { lineRect: null, distance: Infinity }
      if (line.current) {
        line.current.forEach(lineRect => {
          const { height, width, left, top } = lineRect.getBoundingClientRect()

          const distX = dimension.width / 2 - (left + width / 2)
          const distY = dimension.height / 2 - (top + height / 2)
          const distance = Math.sqrt(distX * distX + distY * distY)
          if (distance < closest.distance) {
            closest = { lineRect, distance }
            //it will choose which one closest
            //Example: distance has [0, 100, 200, 300, 400, ...], it will choose distance has 0
          }
        })
      }

      setClosetLine(closest)
    }

    if (dimension.width > 0) {
      requestAnimationFrame(onMouseMove)
      setOnHover(true)
    }

    if (closetLine.lineRect && line.current) {
      const { left, width } = closetLine.lineRect.getBoundingClientRect()
        const lineCenterX = left + width / 2
        smoothMouse.x.set(lineCenterX)
        setOnHover(true)
      }
  }, [
    isHover,
    smoothMouse,
    heightLine,
    container,
    line,
    dimension.width,
    render,
    setOnHover,
    click,
    closetLine.lineRect,
    dimension.height,
    play
  ])

  const handleMouseMove = useCallback(
    (latest: any) => {
      const { left } = container.current?.getBoundingClientRect() || { left: 0 }
      const mouseX = latest.x - left
      setMousePosition(mouseX)
    },
    [container, setMousePosition]
  )

  return (
    <motion.div
      animate={{
        width: isHover ? 4 : 48,
        height: isHover ? 200 : 48,
        opacity: isHover ? 1 : 0.6,
        transition: {
          width: {
            delay: 0
          },
          height: {
            delay: 0
          }
        }
      }}
      style={{
        x: smoothMouse.x,
        y: yParallax,
        width: widthLine,
        height: heightLine
      }}
      onUpdate={handleMouseMove}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className='pointer-events-none absolute top-0 left-0 size-12 -translate-x-1/2 -translate-y-1/2 bg-red-900'
    />
  )
}
