import { useMenuContext } from '../src/components/Hook/useMenuContext'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { AnimatePresence } from 'motion/react'
import { useRef, useEffect, useState } from 'react'

export default function Main() {
  const { isActive, dimension } = useMenuContext()
  const ref = useRef(null)
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }
  const smoothOptions = { damping: 15, stiffness: 98, mass: 1 }

  const mouseSpring = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  }

  const dontgay = useTransform(mouseSpring.x, [-0.5, 0, 0.5], [0.2, 0.3, 0.4])
  const [p11, setP1] = useState({ x: 0, y: 0 })

  const down = () => {
    //settings
    // const p1 = {
    //     x: 0.1,
    //     y: 0.1,
    // }
    // const p2 = {
    //     x: 0.7,
    //     y: 0.2,
    // }
    // const p3 = {
    //     x: 0.9,
    //     y: 0.7,
    // }
    // const p4 = {
    //     x: 0.2,
    //     y: 0.9,
    // }
    // square
    const p1 = {
      x: 0.5,
      y: 0.5
    }
    const p2 = {
      x: 0.5,
      y: p1.x
    }
    const p3 = {
      x: p2.x,
      y: p2.x
    }
    const p4 = {
      x: p1.x,
      y: p2.x
    }
    const radius = dimension.width / 4000
    const threew1 = p1.y > p2.y ? dimension.width / (100 * 4) : 1
    const threew2 = p1.y < p2.y ? dimension.width / (100 * 4) : 1
    const threew3 = p4.y > p3.y ? dimension.width / (100 * 10) : 1
    const threew4 = p4.y < p3.y ? dimension.width / (100 * 8) : 1
    const threeh1 = p1.y > p2.y ? dimension.height / (100 * 4) : 1
    const threeh2 = p1.y < p2.y ? dimension.height / (100 * 4) : 1
    const threeh3 = p4.y > p3.y ? dimension.height / (100 * 8) : 1
    const threeh4 = p4.y < p3.y ? dimension.height / (100 * 8) : 1

    //core
    return `
        M${dimension.width * p1.x - radius} ${dimension.height * p1.y + radius}
        Q
        ${dimension.width * p1.x - radius / threew1} ${dimension.height * p1.y - radius / threeh1}
        ${dimension.width * p1.x + radius} ${dimension.height * p1.y - radius}
        L${dimension.width * p2.x - radius} ${dimension.height * p2.y - radius}
        Q
        ${dimension.width * p2.x + radius / threew2} ${dimension.height * p2.y - radius / threeh2}
        ${dimension.width * p2.x + radius} ${dimension.height * p2.y + radius}
        L${dimension.width * p3.x + radius} ${dimension.height * p3.y - radius}
        Q
        ${dimension.width * p3.x + radius / threew3} ${dimension.height * p3.y + radius / threeh3}
        ${dimension.width * p3.x - radius} ${dimension.height * p3.y + radius}
        L${dimension.width * p4.x + radius} ${dimension.height * p4.y + radius}
        Q
        ${dimension.width * p4.x - radius / threew4} ${dimension.height * p4.y + radius / threeh4}
        ${dimension.width * p4.x - radius} ${dimension.height * p4.y - radius}
        Z
    `
  }

  const initial = () => {
    const p1 = {
      x: p11.x,
      y: p11.x
    }
    const p2 = {
      x: 0.7,
      y: p1.x
    }
    const p3 = {
      x: p2.x,
      y: p2.x
    }
    const p4 = {
      x: p1.x,
      y: p2.x
    }
    const radius = dimension.width / 400
    const threew1 =
      p1.y > p2.y ? dimension.width / (100 * Math.min(p1.x, p1.y) * 24) : 1
    const threew2 =
      p1.y < p2.y ? dimension.width / (100 * Math.min(p2.x, p2.y) * 24) : 1
    const threew3 =
      p4.y > p3.y ? dimension.width / (100 * Math.min(p3.x, p3.y) * 24) : 1
    const threew4 =
      p4.y < p3.y ? dimension.width / (100 * Math.min(p4.x, p4.y) * 24) : 1
    const threeh1 =
      p1.y > p2.y ? dimension.height / (100 * Math.min(p1.x, p1.y) * 24) : 1
    const threeh2 =
      p1.y < p2.y ? dimension.height / (100 * Math.min(p2.x, p2.y) * 24) : 1
    const threeh3 =
      p4.y > p3.y ? dimension.height / (100 * Math.min(p3.x, p3.y) * 24) : 1
    const threeh4 =
      p4.y < p3.y ? dimension.height / (100 * Math.min(p4.x, p4.y) * 24) : 1

    //core
    return `
        M${dimension.width * p1.x - radius} ${dimension.height * p1.y + radius}
        Q
        ${dimension.width * p1.x - radius / threew1} ${dimension.height * p1.y - radius / threeh1}
        ${dimension.width * p1.x + radius} ${dimension.height * p1.y - radius}
        L${dimension.width * p2.x - radius} ${dimension.height * p2.y - radius}
        Q
        ${dimension.width * p2.x + radius / threew2} ${dimension.height * p2.y - radius / threeh2}
        ${dimension.width * p2.x + radius} ${dimension.height * p2.y + radius}
        L${dimension.width * p3.x + radius} ${dimension.height * p3.y - radius}
        Q
        ${dimension.width * p3.x + radius / threew3} ${dimension.height * p3.y + radius / threeh3}
        ${dimension.width * p3.x - radius} ${dimension.height * p3.y + radius}
        L${dimension.width * p4.x + radius} ${dimension.height * p4.y + radius}
        Q
        ${dimension.width * p4.x - radius / threew4} ${dimension.height * p4.y + radius / threeh4}
        ${dimension.width * p4.x - radius} ${dimension.height * p4.y - radius}
        Z
    `
  }

  useEffect(() => {
    const unsubscribe = dontgay.on('change', latestValue => {
      setP1({ x: latestValue, y: latestValue })
    })

    return () => unsubscribe()
  }, [dontgay])

  const left = () => {
    const p1 = {
      x: 0.3,
      y: 0.4
    }
    const p2 = {
      x: 0.6,
      y: 0.3
    }
    const p3 = {
      x: 0.6,
      y: 0.7
    }
    const p4 = {
      x: 0.3,
      y: 0.7
    }
    const radius = dimension.width / 100
    const threew1 =
      p1.y > p2.y ? dimension.width / (100 * Math.min(p1.x, p1.y) * 24) : 1
    const threew2 =
      p1.y < p2.y ? dimension.width / (100 * Math.min(p2.x, p2.y) * 24) : 1
    const threew3 =
      p4.y > p3.y ? dimension.width / (100 * Math.min(p3.x, p3.y) * 24) : 1
    const threew4 =
      p4.y < p3.y ? dimension.width / (100 * Math.min(p4.x, p4.y) * 24) : 1
    const threeh1 =
      p1.y > p2.y ? dimension.height / (100 * Math.min(p1.x, p1.y) * 24) : 1
    const threeh2 =
      p1.y < p2.y ? dimension.height / (100 * Math.min(p2.x, p2.y) * 24) : 1
    const threeh3 =
      p4.y > p3.y ? dimension.height / (100 * Math.min(p3.x, p3.y) * 24) : 1
    const threeh4 =
      p4.y < p3.y ? dimension.height / (100 * Math.min(p4.x, p4.y) * 24) : 1

    //core
    return `
        M${dimension.width * p1.x - radius} ${dimension.height * p1.y + radius}
        Q
        ${dimension.width * p1.x - radius / threew1} ${dimension.height * p1.y - radius / threeh1}
        ${dimension.width * p1.x + radius} ${dimension.height * p1.y - radius}
        L${dimension.width * p2.x - radius} ${dimension.height * p2.y - radius}
        Q
        ${dimension.width * p2.x + radius / threew2} ${dimension.height * p2.y - radius / threeh2}
        ${dimension.width * p2.x + radius} ${dimension.height * p2.y + radius}
        L${dimension.width * p3.x + radius} ${dimension.height * p3.y - radius}
        Q
        ${dimension.width * p3.x + radius / threew3} ${dimension.height * p3.y + radius / threeh3}
        ${dimension.width * p3.x - radius} ${dimension.height * p3.y + radius}
        L${dimension.width * p4.x + radius} ${dimension.height * p4.y + radius}
        Q
        ${dimension.width * p4.x - radius / threew4} ${dimension.height * p4.y + radius / threeh4}
        ${dimension.width * p4.x - radius} ${dimension.height * p4.y - radius}
        Z
    `
  }

  const right = () => {
    const p1 = {
      x: 0.4,
      y: 0.3
    }
    const p2 = {
      x: 0.7,
      y: p1.x
    }
    const p3 = {
      x: p2.x,
      y: p2.x
    }
    const p4 = {
      x: p1.x,
      y: p2.x
    }
    const radius = dimension.width / 400
    const threew1 =
      p1.y > p2.y ? dimension.width / (100 * Math.min(p1.x, p1.y) * 24) : 1
    const threew2 =
      p1.y < p2.y ? dimension.width / (100 * Math.min(p2.x, p2.y) * 24) : 1
    const threew3 =
      p4.y > p3.y ? dimension.width / (100 * Math.min(p3.x, p3.y) * 24) : 1
    const threew4 =
      p4.y < p3.y ? dimension.width / (100 * Math.min(p4.x, p4.y) * 24) : 1
    const threeh1 =
      p1.y > p2.y ? dimension.height / (100 * Math.min(p1.x, p1.y) * 24) : 1
    const threeh2 =
      p1.y < p2.y ? dimension.height / (100 * Math.min(p2.x, p2.y) * 24) : 1
    const threeh3 =
      p4.y > p3.y ? dimension.height / (100 * Math.min(p3.x, p3.y) * 24) : 1
    const threeh4 =
      p4.y < p3.y ? dimension.height / (100 * Math.min(p4.x, p4.y) * 24) : 1

    //core
    return `
        M${dimension.width * p1.x - radius} ${dimension.height * p1.y + radius}
        Q
        ${dimension.width * p1.x - radius / threew1} ${dimension.height * p1.y - radius / threeh1}
        ${dimension.width * p1.x + radius} ${dimension.height * p1.y - radius}
        L${dimension.width * p2.x - radius} ${dimension.height * p2.y - radius}
        Q
        ${dimension.width * p2.x + radius / threew2} ${dimension.height * p2.y - radius / threeh2}
        ${dimension.width * p2.x + radius} ${dimension.height * p2.y + radius}
        L${dimension.width * p3.x + radius} ${dimension.height * p3.y - radius}
        Q
        ${dimension.width * p3.x + radius / threew3} ${dimension.height * p3.y + radius / threeh3}
        ${dimension.width * p3.x - radius} ${dimension.height * p3.y + radius}
        L${dimension.width * p4.x + radius} ${dimension.height * p4.y + radius}
        Q
        ${dimension.width * p4.x - radius / threew4} ${dimension.height * p4.y + radius / threeh4}
        ${dimension.width * p4.x - radius} ${dimension.height * p4.y - radius}
        Z
    `
  }

  const top = () => {
    const p1 = {
      x: 0.3,
      y: 0.2
    }
    const p2 = {
      x: 0.7,
      y: 0.2
    }
    const p3 = {
      x: 0.7,
      y: 0.6
    }
    const p4 = {
      x: 0.3,
      y: 0.6
    }
    const radius = dimension.width / 400
    const threew1 =
      p1.y > p2.y ? dimension.width / (100 * Math.min(p1.x, p1.y) * 24) : 1
    const threew2 =
      p1.y < p2.y ? dimension.width / (100 * Math.min(p2.x, p2.y) * 24) : 1
    const threew3 =
      p4.y > p3.y ? dimension.width / (100 * Math.min(p3.x, p3.y) * 24) : 1
    const threew4 =
      p4.y < p3.y ? dimension.width / (100 * Math.min(p4.x, p4.y) * 24) : 1
    const threeh1 =
      p1.y > p2.y ? dimension.height / (100 * Math.min(p1.x, p1.y) * 24) : 1
    const threeh2 =
      p1.y < p2.y ? dimension.height / (100 * Math.min(p2.x, p2.y) * 24) : 1
    const threeh3 =
      p4.y > p3.y ? dimension.height / (100 * Math.min(p3.x, p3.y) * 24) : 1
    const threeh4 =
      p4.y < p3.y ? dimension.height / (100 * Math.min(p4.x, p4.y) * 24) : 1

    //core
    return `
        M${dimension.width * p1.x - radius} ${dimension.height * p1.y + radius}
        Q
        ${dimension.width * p1.x - radius / threew1} ${dimension.height * p1.y - radius / threeh1}
        ${dimension.width * p1.x + radius} ${dimension.height * p1.y - radius}
        L${dimension.width * p2.x - radius} ${dimension.height * p2.y - radius}
        Q
        ${dimension.width * p2.x + radius / threew2} ${dimension.height * p2.y - radius / threeh2}
        ${dimension.width * p2.x + radius} ${dimension.height * p2.y + radius}
        L${dimension.width * p3.x + radius} ${dimension.height * p3.y - radius}
        Q
        ${dimension.width * p3.x + radius / threew3} ${dimension.height * p3.y + radius / threeh3}
        ${dimension.width * p3.x - radius} ${dimension.height * p3.y + radius}
        L${dimension.width * p4.x + radius} ${dimension.height * p4.y + radius}
        Q
        ${dimension.width * p4.x - radius / threew4} ${dimension.height * p4.y + radius / threeh4}
        ${dimension.width * p4.x - radius} ${dimension.height * p4.y - radius}
        Z
    `
  }

  const bottom = () => {
    const p1 = {
      x: 0.3,
      y: 0.4
    }
    const p2 = {
      x: 0.7,
      y: 0.4
    }
    const p3 = {
      x: 0.7,
      y: 0.8
    }
    const p4 = {
      x: 0.3,
      y: 0.8
    }
    const radius = dimension.width / 400
    const threew1 =
      p1.y > p2.y ? dimension.width / (100 * Math.min(p1.x, p1.y) * 24) : 1
    const threew2 =
      p1.y < p2.y ? dimension.width / (100 * Math.min(p2.x, p2.y) * 24) : 1
    const threew3 =
      p4.y > p3.y ? dimension.width / (100 * Math.min(p3.x, p3.y) * 24) : 1
    const threew4 =
      p4.y < p3.y ? dimension.width / (100 * Math.min(p4.x, p4.y) * 24) : 1
    const threeh1 =
      p1.y > p2.y ? dimension.height / (100 * Math.min(p1.x, p1.y) * 24) : 1
    const threeh2 =
      p1.y < p2.y ? dimension.height / (100 * Math.min(p2.x, p2.y) * 24) : 1
    const threeh3 =
      p4.y > p3.y ? dimension.height / (100 * Math.min(p3.x, p3.y) * 24) : 1
    const threeh4 =
      p4.y < p3.y ? dimension.height / (100 * Math.min(p4.x, p4.y) * 24) : 1

    //core
    return `
        M${dimension.width * p1.x - radius} ${dimension.height * p1.y + radius}
        Q
        ${dimension.width * p1.x - radius / threew1} ${dimension.height * p1.y - radius / threeh1}
        ${dimension.width * p1.x + radius} ${dimension.height * p1.y - radius}
        L${dimension.width * p2.x - radius} ${dimension.height * p2.y - radius}
        Q
        ${dimension.width * p2.x + radius / threew2} ${dimension.height * p2.y - radius / threeh2}
        ${dimension.width * p2.x + radius} ${dimension.height * p2.y + radius}
        L${dimension.width * p3.x + radius} ${dimension.height * p3.y - radius}
        Q
        ${dimension.width * p3.x + radius / threew3} ${dimension.height * p3.y + radius / threeh3}
        ${dimension.width * p3.x - radius} ${dimension.height * p3.y + radius}
        L${dimension.width * p4.x + radius} ${dimension.height * p4.y + radius}
        Q
        ${dimension.width * p4.x - radius / threew4} ${dimension.height * p4.y + radius / threeh4}
        ${dimension.width * p4.x - radius} ${dimension.height * p4.y - radius}
        Z
    `
  }

  const scale = down()
  const gayless = left()
  const gay = initial()
  const gay1 = right()
  const gay2 = top()
  const gay3 = bottom()

  const onMouseMove = (e: React.MouseEvent) => {
    const xPct = e.clientX / dimension.width - 0.5
    const yPct = e.clientY / dimension.height - 0.5
    mouse.x.set(xPct)
    mouse.y.set(yPct)
  }

  const leftToRight = useTransform(
    mouseSpring.x,
    [-0.5, 0, 0.5],
    [gayless, gay, gay1]
  )
  const topToBottom = useTransform(
    mouseSpring.y,
    [-0.5, 0, 0.5],
    [gay2, gay, gay3]
  )

  return (
    <AnimatePresence mode='popLayout'>
      {isActive && (
        <motion.div
          ref={ref}
          onMouseMove={onMouseMove}
          className='relative flex h-dvh w-full items-center justify-center'
        >
          <motion.svg
            key={dimension.width}
            className='absolute z-10 flex size-full items-center justify-center transform-3d'
            fill='none'
            stroke='#FFFFFFF'
            strokeWidth={2}
          >
            <motion.path
              fill='#FFFFFF'
              stroke='#FFFFFFF'
              strokeWidth={2}
              initial={{
                d: scale
              }}
              animate={{
                d: gay
              }}
              transition={{
                duration: 1,
                ease: [0.33, 1, 0.68, 1]
              }}
              d={gay}
            ></motion.path>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
