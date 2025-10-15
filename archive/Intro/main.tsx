import Line from './ui/Line'
import MouseProvider from './hook/MouseProvider'
import ErrorBoundary from '../Order/1/Intro/hook/ErrorBoundary'
import Time from './ui/Time'
import Blank from '../Order/1/Intro/ui/Transition'
import Layout from './ui/Layout'
import Page from '@/pages/main'
import {
  motion,
  animate,
  useScroll,
  useTransform,
  AnimatePresence
} from 'motion/react'
import { useMenuContext } from '../Hook/useMenuContext'
import { useState, useEffect } from 'react'

export default function Intro() {
  const { dimension, click, isActive, setClick } = useMenuContext()
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0.4, 1], [0.1, 0])
  const [yParallax, setYParallax] = useState(0)

  useEffect(() => {
    const parallax = (latest: any) => {
      setYParallax(latest)
    }

    const unsub = y.on('change', parallax)
    return () => unsub()
  }, [y])

  const initial = () => {
    //settings
    // const p1 = {
    //     x: state.p11x + state.roundY,
    //     y: 0.3 + state.roundY,
    // }
    // const p2 = {
    //     x: 0.7 + state.left + state.roundY,
    //     y: p1.x + state.p11y + state.roundY,
    // }
    // const p3 = {
    //     x: 0.7 + state.left + state.roundY,
    //     y: 0.7 + state.p11y + state.roundY,
    // }
    // const p4 = {
    //     x: p1.x + state.roundY,
    //     y: 0.7 + state.roundY,
    // }
    const p1 = {
      x: dimension.width > 767 ? 0.25 : 0.1,
      y: dimension.width > 767 ? 0.2 + yParallax : 0.365
    }
    const p2 = {
      x: dimension.width > 767 ? 0.75 : 0.9,
      y: dimension.width > 767 ? 0.2 + yParallax : 0.365
    }
    const p3 = {
      x: dimension.width > 767 ? 0.75 : 0.9,
      y: dimension.width > 767 ? 0.8 + yParallax + yParallax : 0.63
    }
    const p4 = {
      x: dimension.width > 767 ? 0.25 : 0.1,
      y: dimension.width > 767 ? 0.8 + yParallax + yParallax : 0.63
    }
    const radius = dimension.width / 400

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
  }

  const final = () => {
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
    const radius = dimension.width / 400

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
  }

  const base = initial()
  const finish = final()
  const cleanedPath = `path("${base.replace(/\s+/g, ' ').trim()}")`
  const cleane = `path("${finish.replace(/\s+/g, ' ').trim()}")`

  const scrollPage = () => {
    const scrollTo = document.documentElement.scrollHeight - window.innerHeight

    animate(window.scrollY, scrollTo, {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(latest) {
        const percent = latest / scrollTo
        window.scrollTo(0, latest)
        scrollYProgress.set(percent)
      },
      onComplete() {
        setClick(true)
      }
    })
  }

  return (
    <AnimatePresence mode='popLayout'>
      {isActive && (
        <>
          <Page />
          <MouseProvider>
            <ErrorBoundary>
              <motion.div
                initial={{
                  opacity: 0,
                  clipPath: cleanedPath
                }}
                animate={{
                  opacity: 1,
                  clipPath: click ? cleane : cleanedPath,
                  transition: {
                    opacity: {
                      duration: 0.4
                    },
                    clipPath: {
                      duration: 1.3,
                      ease: [0.33, 1, 0.68, 1]
                    }
                  }
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    opacity: {
                      duration: dimension.width < 768 ? 0.1 : 0.4
                    }
                  }
                }}
                transition={{
                  duration: 1.1,
                  ease: [0.33, 1, 0.68, 1],
                  delay: dimension.width < 768 ? 0.4 : 0
                }}
                onClick={scrollPage}
                className='relative z-20 flex h-dvh w-full items-center justify-center overflow-clip bg-emerald-950'
              >
                <Blank />
                <Layout />
                <Time />
                <Line />
                {/* <SVG /> */}
              </motion.div>
            </ErrorBoundary>
          </MouseProvider>
        </>
      )}
    </AnimatePresence>
  )
}
