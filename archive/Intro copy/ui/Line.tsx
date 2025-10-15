import { motion } from 'motion/react'
import { useCallback } from 'react'
import { useMouseContext } from '../hook/useMouseContext'

const number = 100

export default function Line() {
  const { container, line, mouseX, isHover, setOnHover, setMousePosition } =
    useMouseContext()

  const mouse = mouseX
  const width = container.current?.offsetWidth ?? 0

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const { left } = container.current?.getBoundingClientRect() || { left: 0 }
      const mouseX = e.clientX - left
      setMousePosition(mouseX)
    },
    [container, setMousePosition]
  )

  return (
    <div
      ref={container}
      onMouseMove={handleMouseMove}
      onMouseOver={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      className='flex flex-row flex-nowrap items-end gap-3'
    >
      {[...Array(number)].map((_, i) => {
        const active = i % 10 === 0

        /* unit: px */
        const lines = i * (width / number)
        const gap = Math.abs(mouse - lines)
        const shirnk = width / 12

        const promixity = gap / shirnk

        const curve = Math.pow(1 - promixity, 3.8)
        const final = active ? 2 : 1 * (1 - promixity) + curve * 3

        const scale = Math.max(1, final)
        const accpet = promixity <= 1 && isHover

        return (
          <motion.div
            key={`line_${i}`}
            ref={el => {
              if (line.current) {
                line.current[i] = el
              }
            }}
            className={`w-[0.4px] ${active ? 'h-6 bg-white/90' : 'h-5 bg-white/40'}`}
            animate={{ scaleY: accpet ? scale : 1 }}
            transition={{
              type: 'spring',
              velocity: 4,
              mass: 2,
              damping: 44,
              stiffness: 1000
            }}
          />
        )
      })}
    </div>
  )
}
