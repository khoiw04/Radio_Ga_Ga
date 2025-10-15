import { motion, useScroll, useTransform } from 'motion/react'
import { useIntroContext } from '../hook/useIntroContext'
import { usePageContext } from '@/pages/Hook/usePageContext'

export default function Line() {
  const { container, line, mouseX, dimension, setRender, setPercent } = useIntroContext()
  const { finish, click, setReady, inProgress, inProgress2, setInProgress, setInProgress2 } = usePageContext()
  const { scrollYProgress } = useScroll()

  const mouse = mouseX
  const numberReal = Math.ceil(dimension.width / 10 / 8) * 10 + 1
  const number = click
    ? numberReal
    : dimension.width < 1080
      ? Math.ceil(dimension.width / 10 / 8) * 3
      : Math.ceil(dimension.width / 10 / 8) * 2
  const width = container.current?.offsetWidth ?? 0
  const yParallax = useTransform(
    scrollYProgress,
    [0.4, 1],
    [dimension.height * 0.22, 0]
  )

  const onUpdate = (latest: any) => {
    setRender(latest.left)
    const totalDistance =
      dimension.width / 2 - dimension.width * 0.029 - (dimension.width / 2 - width - dimension.width * 0.05)
    const currentDistance =
      dimension.width / 2 - dimension.width * 0.029 - latest.left
    const percent = currentDistance / totalDistance
    setPercent(percent)
  }

  const onComplete = () => {
    if (!inProgress) {
      setInProgress(true)
    }
    if (inProgress) {
      setInProgress2(true)
    }
    if (inProgress2) {
      const timeoutId = setTimeout(() => {
        setReady(true)
      }, 400)

      return () => clearTimeout(timeoutId)
    }
  }

  return (
    <div className='flex h-full w-[92%] items-center justify-start overflow-hidden'>
      {!finish && (
        <motion.div
          ref={container}
          key={dimension.width}
          style={{
            gap: dimension.width > 2560 ? dimension.width / 110 : 12,
            y: yParallax
          }}
          initial={{
            left: dimension.width / 2 - dimension.width * 0.029
          }}
          animate={{
            left: click
              ? dimension.width / 2 - width - dimension.width * 0.05
              : dimension.width / 2 - dimension.width * 0.029
          }}
          transition={{
            delay: 0.7,
            duration: 8,
            ease: [0.65, 0, 0.34, 1]
          }}
          onUpdate={onUpdate}
          onAnimationComplete={onComplete}
          className='relative flex flex-row flex-nowrap items-end gap-3'
          // absolute
        >
          {[...Array(number)].map((_, i) => {
            const active = i % 10 === 0
            const linePercent = (i / numberReal) * 100

            /* unit: px */
            const lines = i * (width / number)
            const gap = Math.abs(mouse - lines)
            const shirnk = width / 30

            const promixity = gap / shirnk

            const curve = Math.pow(1 - promixity, 3.8)
            const final = active ? 2 : 1 * (1 - promixity) + curve * 3

            const scale = Math.max(1, final)
            const accpet = promixity <= 1

            return (
              <>
                <motion.div
                  key={`lines${i}`}
                  ref={el => {
                    if (el) {
                      line.current[i] = el
                    }
                  }}
                  className={`w-[0.4px] ${active ? 'h-6 bg-white/90' : 'h-5 bg-white/40'}`}
                  animate={{ scaleY: accpet && click ? scale : 1 }}
                  transition={{
                    type: 'spring',
                    velocity: 4,
                    mass: 2,
                    damping: 44,
                    stiffness: 1000
                  }}
                  style={{
                    width:
                      dimension.width > 0
                        ? dimension.width / dimension.height / 4
                        : 0.4,
                    height:
                      dimension.height > 2560
                        ? active
                          ? dimension.height / 40
                          : dimension.height / 50
                        : active
                          ? 24
                          : 20
                  }}
                >
                  {active && (
                    <h4 className='absolute -top-8 -translate-x-1/2 text-oklch-white-intro-relative font-Jet-brains-mono font-medium font-stretch-150%'>
                      {Math.ceil(linePercent)}
                    </h4>
                  )}
                </motion.div>
              </>
            )
          })}
        </motion.div>
      )}
    </div>
  )
}
