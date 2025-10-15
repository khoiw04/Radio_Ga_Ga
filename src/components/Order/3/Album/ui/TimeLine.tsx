import { motion, animate } from 'motion/react'
import { useCallback } from 'react'
import { useAlbumsContext } from '../hook/useAlbumsContext'

export default function Line() {
  const {
    container,
    line,
    mouseX,
    isHover,
    dimension,
    albumWidth,
    x,
    y,
    setOnHover,
    setMousePosition
  } = useAlbumsContext()

  const number = dimension.width > 1000 ? 80 + 1 : 40 + 1
  const mouse = mouseX
  const width = container.current?.offsetWidth ?? 0

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { left } = container.current?.getBoundingClientRect() || { left: 0 }
      const mouseX = e.clientX - left
      setMousePosition(mouseX)
    },
    [container, setMousePosition]
  )

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (container.current) {
      const rect = container.current.getBoundingClientRect()
      const clickPosition = e.clientX - rect.left
      const percentage = clickPosition / rect.width
      const final = percentage * -albumWidth
      if (dimension.width > 539) {
        animate(x, final, {
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        })
      } else if (dimension.width < 540) {
        animate(y, final, {
          duration: 1,
          ease: [0.22, 1, 0.36, 1]
        })
      }
    }
  }

  return (
    <div className='relative flex size-full items-end justify-center lg:justify-end'>
      <div
        ref={container}
        onMouseMove={handleMouseMove}
        onMouseDown={handleClick}
        onMouseOver={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        className='relative flex flex-row flex-nowrap items-end gap-2 lg:right-36'
      >
        {[...Array(number)].map((_, i) => {
          const active = i % 10 === 0

          /* unit: px */
          const width_lines = i * (width / number)
          const gap = Math.abs(mouse - width_lines)
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
                  line.current[i] = el as unknown as HTMLDivElement
                }
              }}
              className={`origin-bottom will-change-auto ${active ? 'h-6 w-[1.8px] bg-white/90' : 'h-4 w-[0.4px] bg-white/40'}`}
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
        <Detect />
      </div>
      <Percentage />
    </div>
  )
}

function Detect() {
  const { dimension, albumWidth, dragPercentage } = useAlbumsContext()

  return (
    <motion.div
      key={dimension.width}
      initial={{
        opacity: 0,
        filter: `blur(4px)`
      }}
      animate={{
        opacity: 1,
        filter: `blur(0px)`
      }}
      exit={{
        opacity: 0,
        filter: `blur(4px)`
      }}
      transition={{
        duration: 0.4
      }}
      className='absolute h-24 w-[3px] bg-red-900'
      style={{
        left: `${(dragPercentage / -albumWidth) * 100 - 0.04}%`,
        x: -1
      }}
    />
  )
}

function Percentage() {
  const { albumWidth, dragPercentage } = useAlbumsContext()

  return (
    <h1 className='absolute right-0 font-mono text-[1.4dvh]'>{`${Math.round((dragPercentage / -albumWidth) * 100 - 0.04)}%`}</h1>
  )
}
