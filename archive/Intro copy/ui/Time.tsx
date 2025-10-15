import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { useMouseContext } from '../hook/useMouseContext'

interface ClosetLine {
  lineRect: HTMLElement | null
  distance: number
}

export default function Time() {
  const { isHover, container, line, smoothMouse } = useMouseContext()
  const [closetLine, setClosetLine] = useState<ClosetLine>({
    lineRect: null,
    distance: Infinity
  })
  //Distance to update, lineRect to get line's info near cursor

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { height, top } = container.current?.getBoundingClientRect() || {
        height: 0,
        top: 0
      }
      const middleY = clientY - (top + height / 2)

      if (isHover) {
        smoothMouse.y.set(clientY - middleY * 0.2)
      } else {
        smoothMouse.x.set(clientX)
        smoothMouse.y.set(clientY)
      }

      let closest: ClosetLine = { lineRect: null, distance: Infinity }
      line.current?.forEach(lineRect => {
        const { height, width, left, top } = lineRect.getBoundingClientRect()

        const distX = clientX - (left + width / 2)
        const distY = clientY - (top + height / 2)
        const distance = Math.sqrt(distX * distX + distY * distY)

        if (distance < closest.distance) {
          closest = { lineRect, distance }
        }
      })

      setClosetLine(closest)
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [isHover, smoothMouse, container, line])

  useEffect(() => {
    if (closetLine.lineRect && isHover) {
      const { left, width } = closetLine.lineRect.getBoundingClientRect()
      const lineCenterX = left + width / 2

      smoothMouse.x.set(lineCenterX)
    }
  }, [closetLine, isHover, smoothMouse])

  return (
    <motion.div
      layout
      style={{
        x: smoothMouse.x,
        y: smoothMouse.y,
        borderRadius: isHover ? '0%' : '100%',
        width: isHover ? 4 : 48,
        height: isHover ? 200 : 48,
        opacity: isHover ? 1 : 0.6
      }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className='pointer-events-none absolute top-0 left-0 size-12 -translate-x-1/2 -translate-y-1/2 bg-red-900'
    />
  )
}
