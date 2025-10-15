import { motion } from 'motion/react'
import { useEffect } from 'react'
import { useAlbumsContext } from '../hook/useAlbumsContext'

interface ClosetLine {
  lineRect: HTMLElement | null
  distance: number
}

export default function Time({ inView }) {
  const {
    isHover,
    container,
    line,
    find,
    dimension,
    smoothMouse,
    closetLine,
    setClosetLine
  } =
  useAlbumsContext()
  //Distance for update, lineRect for getting line's info near cursor

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      // const { height, top } = container.current?.getBoundingClientRect() || {
      //   height: 0,
      //   top: 0
      // }
      // const middleY = top - height

      // let closest: ClosetLine = { lineRect: null, distance: Infinity }
      // line.current?.forEach(lineRect => {
      //   const { height, width, left, top } = lineRect.getBoundingClientRect()

      //   // const distX = dimension.width / 1.99 - (left + width/2);
      //   // const distY = dimension.height - (top + height);
      //   const distX = clientX - (left + width / 2)
      //   const distY = clientY - (top + height)
      //   const distance = Math.sqrt(distX * distX + distY * distY)

      //   if (distance < closest.distance && isHover) {
      //     closest = { lineRect, distance }
      //   }
      // })

      // setClosetLine(closest)

      // if (closetLine?.lineRect && isHover) {
      //   const { left, width } = closetLine.lineRect.getBoundingClientRect()
      //   const lineCenterX = left + width / 2

      //   smoothMouse.x.set(lineCenterX)
      //   smoothMouse.y.set(clientY)
      //   // smoothMouse.y.set(middleY)
      // } else {
        smoothMouse.x.set(clientX)
        smoothMouse.y.set(clientY)
      // }
    }

    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [
    isHover,
    smoothMouse,
    container,
    line,
    dimension.width,
    dimension.height,
    closetLine.lineRect,
    inView,
    setClosetLine
  ])

  return (
    <motion.div
      ref={find}
      animate={{
        // borderRadius: isHover ? '0%' : '100%',
        // width: isHover ? 4 : 48,
        // height: isHover ? 100 : 48,
        // opacity: isHover ? 1 : 0.6
        borderRadius: '100%',
        width: isHover ? 24 : 48,
        height: isHover ? 24 : 48,
        opacity: 0.6
      }}
      style={{
        x: smoothMouse.x,
        y: smoothMouse.y
      }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className='pointer-events-none fixed top-0 left-0 z-[99999] hidden size-12 origin-bottom -translate-x-1/2 -translate-y-1/2 bg-red-900 lg:block'
    />
  )
}
