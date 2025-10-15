import { motion } from 'motion/react'
import { useMenuContext } from '../../Hook/useMenuContext'
import { usePageContext } from '@/pages/Hook/usePageContext'

export default function Title() {
  const {
    total,
    round,
    data,
    line,
    radius,
    rotation,
    velcotiy,
    closestLineIndex
  } = useMenuContext()
  const { state, isActive, dimension } = usePageContext()

  return (
    <>
      {[...Array(total)].map((_, i) => {
        const active = i % round === 0
        const step = 360 / total
        const angle = step * i
        const offsetDistance = (angle / 360) * 100

        const currentData = data[i % data.length]

        return (
          <motion.div
            ref={el => {
              if (el) {
                line.current[i] = el
              }
            }}
            key={`dot_${i}`}
            data-index={i}
            className={`pointer-events-none w-[1px] select-none ${active ? (i === closestLineIndex ? `flex justify-center bg-red-600` : currentData.title === '' ? `flex justify-center bg-white/40` : `flex justify-center bg-white/90`) : `bg-gradient-to-t from-white/20 via-white/20 to-white/40`}`}
            animate={{
              offsetPath: `circle(${isActive ? radius + 10 : radius}%)`,
              rotateY: dimension.width < 1080 && dimension.width > 539 && !state.buttonActive ? 90 : 0,
              height: active
                ? isActive
                  ? '5rem'
                  : '6rem'
                : isActive
                  ? '2rem'
                  : '3.4rem',
              transition: {
                height: {
                  duration: 1.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.75
                },
                rotateY: {
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }
              }
            }}
            initial={false}
            style={{
              offsetDistance: `${offsetDistance}%`,
              offsetAnchor: 'bottom left'
            }}
          >
            {active && (
              <motion.span
                className='absolute z-40 flex w-3xs cursor-pointer flex-col items-center 3xl:text-1xl select-none'
                animate={{
                  translateY: -80,
                  rotate: -(rotation + angle),
                  opacity: state.buttonActive ? 1 : 0,
                  transition: {
                    rotate: {
                      duration: isActive && Math.abs(velcotiy) > 13 ? 2.4 : 1.1,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }
                }}
                initial={false}
              >
                <motion.h1 className='font-serif font-semibold select-none'>
                  {currentData.title}
                </motion.h1>
                <motion.h1 className='font-mono text-white/40 select-none'>
                  {currentData.description}
                </motion.h1>
              </motion.span>
            )}
          </motion.div>
        )
      })}
    </>
  )
}
