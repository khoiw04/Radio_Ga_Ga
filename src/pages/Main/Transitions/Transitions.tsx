/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion, useAnimate, useMotionValue } from 'motion/react'
import { useEffect, useCallback, useRef } from 'react'
import { usePageContext } from '@/pages/Hook/usePageContext'

export default function Transitions() {
    const { ready, dimension, setFinish, setSocialSpecial, setState } = usePageContext()
    const [scope, animate] = useAnimate()
    const first = useMotionValue(0)
    const second = useMotionValue(0)
    const svg = useRef<SVGPathElement | null>(null)

    const small = useCallback(() => {
      //settings
      const p1 = {
        x: 0.49,
        y: 0.5
      }
      const p2 = {
        x: 0.49,
        y: 0.5
      }
      const p3 = {
        x: 0.49,
        y: 0.5
      }
      const p4 = {
        x: 0.49,
        y: 0.5
      }
      const radius = 1
      // dimension.width / 1000

      //don't touch
      const threew1 =
        p1.y > p2.y ? dimension.width / (100 * Math.min(p1.x, p1.y) * 10) : 1
      const threew2 =
        p1.y < p2.y ? dimension.width / (100 * Math.min(p2.x, p2.y) * 10) : 1
      const threew3 =
        p4.y > p3.y ? dimension.width / (100 * Math.min(p3.x, p3.y) * 10) : 1
      const threew4 =
        p4.y < p3.y ? dimension.width / (100 * Math.min(p4.x, p4.y) * 10) : 1
      const threeh1 =
        p1.y > p2.y ? dimension.height / (100 * Math.min(p1.x, p1.y) * 10) : 1
      const threeh2 =
        p1.y < p2.y ? dimension.height / (100 * Math.min(p2.x, p2.y) * 10) : 1
      const threeh3 =
        p4.y > p3.y ? dimension.height / (100 * Math.min(p3.x, p3.y) * 10) : 1
      const threeh4 =
        p4.y < p3.y ? dimension.height / (100 * Math.min(p4.x, p4.y) * 10) : 1

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
    }, [dimension.height, dimension.width])

    const initial = useCallback(() => {
      //settings
      const p1 = {
        x: 0.4894,
        y: 0.395
      }
      const p2 = {
        x: 0.491,
        y: 0.395
      }
      const p3 = {
        x: 0.491,
        y: 0.606
      }
      const p4 = {
        x: 0.4894,
        y: 0.606
      }
      const radius =
        dimension.width < 540 ? dimension.width / 1000 : dimension.width / 4000

      //don't touch
      const threew1 =
        p1.y > p2.y ? dimension.width / (100 * Math.min(p1.x, p1.y) * 10) : 1
      const threew2 =
        p1.y < p2.y ? dimension.width / (100 * Math.min(p2.x, p2.y) * 10) : 1
      const threew3 =
        p4.y > p3.y ? dimension.width / (100 * Math.min(p3.x, p3.y) * 10) : 1
      const threew4 =
        p4.y < p3.y ? dimension.width / (100 * Math.min(p4.x, p4.y) * 10) : 1
      const threeh1 =
        p1.y > p2.y ? dimension.height / (100 * Math.min(p1.x, p1.y) * 10) : 1
      const threeh2 =
        p1.y < p2.y ? dimension.height / (100 * Math.min(p2.x, p2.y) * 10) : 1
      const threeh3 =
        p4.y > p3.y ? dimension.height / (100 * Math.min(p3.x, p3.y) * 10) : 1
      const threeh4 =
        p4.y < p3.y ? dimension.height / (100 * Math.min(p4.x, p4.y) * 10) : 1

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
    }, [dimension.height, dimension.width])

    const between = useCallback(() => {
      //settings
      const p1 = {
        x: 0.3,
        y: 0.25
      }
      const p2 = {
        x: 0.7,
        y: 0.25
      }
      const p3 = {
        x: 0.7,
        y: 0.75
      }
      const p4 = {
        x: 0.3,
        y: 0.75
      }
      const radius = dimension.width / 200

      //don't touch
      const threew1 =
        p1.y > p2.y ? dimension.width / (100 * Math.min(p1.x, p1.y) * 10) : 1
      const threew2 =
        p1.y < p2.y ? dimension.width / (100 * Math.min(p2.x, p2.y) * 10) : 1
      const threew3 =
        p4.y > p3.y ? dimension.width / (100 * Math.min(p3.x, p3.y) * 10) : 1
      const threew4 =
        p4.y < p3.y ? dimension.width / (100 * Math.min(p4.x, p4.y) * 10) : 1
      const threeh1 =
        p1.y > p2.y ? dimension.height / (100 * Math.min(p1.x, p1.y) * 10) : 1
      const threeh2 =
        p1.y < p2.y ? dimension.height / (100 * Math.min(p2.x, p2.y) * 10) : 1
      const threeh3 =
        p4.y > p3.y ? dimension.height / (100 * Math.min(p3.x, p3.y) * 10) : 1
      const threeh4 =
        p4.y < p3.y ? dimension.height / (100 * Math.min(p4.x, p4.y) * 10) : 1

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
    }, [dimension.height, dimension.width])

    const finial = useCallback(() => {
      //settings
      const p1 = {
        x: 0,
        y: 0
      }
      const p2 = {
        x: 1,
        y: 0
      }
      const p3 = {
        x: 1,
        y: 1
      }
      const p4 = {
        x: 0,
        y: 1
      }
      const radius = dimension.width / 600

      //don't touch
      const threew1 =
        p1.y > p2.y ? dimension.width / (100 * Math.min(p1.x, p1.y) * 10) : 1
      const threew2 =
        p1.y < p2.y ? dimension.width / (100 * Math.min(p2.x, p2.y) * 10) : 1
      const threew3 =
        p4.y > p3.y ? dimension.width / (100 * Math.min(p3.x, p3.y) * 10) : 1
      const threew4 =
        p4.y < p3.y ? dimension.width / (100 * Math.min(p4.x, p4.y) * 10) : 1
      const threeh1 =
        p1.y > p2.y ? dimension.height / (100 * Math.min(p1.x, p1.y) * 10) : 1
      const threeh2 =
        p1.y < p2.y ? dimension.height / (100 * Math.min(p2.x, p2.y) * 10) : 1
      const threeh3 =
        p4.y > p3.y ? dimension.height / (100 * Math.min(p3.x, p3.y) * 10) : 1
      const threeh4 =
        p4.y < p3.y ? dimension.height / (100 * Math.min(p4.x, p4.y) * 10) : 1

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
    }, [dimension.width, dimension.height])

    const down = small()
    const smalClean = `path("${down.replace(/\s+/g, ' ').trim()}")`

    const base = initial()
    const baseClean = `path("${base.replace(/\s+/g, ' ').trim()}")`

    const radio = between()
    const radioClean = `path("${radio.replace(/\s+/g, ' ').trim()}")`

    const window = finial()
    const windowClean = `path("${window.replace(/\s+/g, ' ').trim()}")`

    useEffect(() => {
      if (ready && svg.current) {
        animate(
          svg.current,
          { d: [base, radio, window] },
          {
            ease: ["easeInOut", "easeIn", [0.34, 1, 0.68, 1]],
            duration: 1.5,
            times: [0, 0.4, 1],
            onComplete() {
              setFinish(true)
              setSocialSpecial(true)
              setState(prevState => ({
                ...prevState,
                buttonActive: false,
              }));
            },
          }
        )
      }
    }, [animate, setFinish, setState, setSocialSpecial, base, down, radio, ready, scope, window])

    // useEffect(() => {
    //   if (ready) {
    //     animate(first, 1, {
    //       duration: 1.6,
    //       ease: [0.37, 0, 0.63, 1]
    //     })
    //     animate(second, 1, {
    //       type: "spring",
    //       // stiffness: 175,
    //       // damping: 95,
    //       // mass: 1
    //       duration: 2,
    //       bounce: 0
    //     })
    //   }
    // }, [first, ready, second])
  
    // const x1 = useTransform(first, [0, 1], ['50%', '0%'])
    // const y1 = useTransform(first, [0, 1], ['25%', '0%'])
    // const x2 = useTransform(second, [0, 1], ['50%', '100%'])
    // const y2 = useTransform(second, [0, 1], ['35%', '0%'])
    // const x3 = useTransform(first, [0, 1], ['50%', '100%'])
    // const y3 = useTransform(first, [0, 1], ['75%', '100%'])
    // const x4 = useTransform(second, [0, 1], ['50%', '0%'])
    // const y4 = useTransform(second, [0, 1], ['65%', '100%'])
  
    // const clipPath = useTransform(
    //   [x1, y1, x2, y2, x3, y3, x4, y4],
    //   ([x1, y1, x2, y2, x3, y3, x4, y4]) => {
    //     return `polygon(${x1} ${y1}, ${x2} ${y2}, ${x3} ${y3}, ${x4} ${y4})`
    //   }
    // )

    return (
        <motion.svg
          ref={scope}
          className='absolute z-50'
          width='100%'
          height='100%'
          // style={{
          //   clipPath: clipPath,
          // }}
        >
          <path
            ref={svg}
            className='clipPath absolute z-50 size-full fill-oklch-amber stroke-oklch-amber'
            d={down}
          />
        </motion.svg>
    )
}