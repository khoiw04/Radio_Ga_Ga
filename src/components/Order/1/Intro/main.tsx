import Line from './ui/Cursor'
import IntroProvider from './hook/IntroProvider'
import ErrorBoundary from './hook/ErrorBoundary'
import Time from './ui/TimeLine'
import Blank from './ui/Transition'
import Layout from './ui/Details'
import {
  motion,
  animate,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'motion/react'
import { useState, useEffect } from 'react'
import { usePageContext } from '@/pages/Hook/usePageContext'

export default function Intro() {
  const { dimension, finish, click, isActive, setClick, setFlagAmbient, setAnimationComplete } = usePageContext()
  const { scrollYProgress } = useScroll()
  const [inView, setInView] = useState(false)
  const y = useTransform(scrollYProgress, [0.4, 1], [0.04, 0])
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
    const p1 = {
      x: click ? 0 : (dimension.width > 539 ? (dimension.width > 1080 ? 0.25 : 0.15) : 0.1),
      y: click ? 0 : dimension.width > 539 ? (dimension.width > 1080 ? 0.2 : 0.322) + yParallax : 0.365
    }
    const p2 = {
      x: click ? 1 : (dimension.width > 539 ? (dimension.width > 1080 ? 0.75 : 0.83) : 0.9),
      y: click ? 0 : dimension.width > 539 ? (dimension.width > 1080 ? 0.2 : 0.322) + yParallax : 0.365
    }
    const p3 = {
      x: click ? 1 : (dimension.width > 539 ? (dimension.width > 1080 ? 0.75 : 0.83) : 0.9),
      y: click ? 1 : dimension.width > 539 ? (dimension.width > 1080 ? 0.8 : 0.67) + yParallax + yParallax : 0.63
    }
    const p4 = {
      x: click ? 0 : (dimension.width > 539 ? (dimension.width > 1080 ? 0.25 : 0.15) : 0.1),
      y: click ? 1 : dimension.width > 539 ? (dimension.width > 1080 ? 0.8 : 0.67) + yParallax + yParallax : 0.63
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
  }

  const base = initial()
  const cleanedPath = `path("${base.replace(/\s+/g, ' ').trim()}")`

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
        setAnimationComplete(true)
        setFlagAmbient(true)
        setClick(true)
      }
    })
  }

  return (
    <AnimatePresence mode='popLayout'>
      {isActive && (
        <>
          {!finish && <IntroProvider>
            <ErrorBoundary>
              <motion.div
                initial={{
                  opacity: 0,
                  clipPath: cleanedPath
                }}
                animate={{
                  opacity: 1,
                  clipPath: cleanedPath,
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
                      duration: dimension.width < 540 ? 0.1 : (inView ? 0.4 : 0)
                    }
                  }
                }}
                transition={{
                  duration: 1.1,
                  ease: [0.33, 1, 0.68, 1],
                  delay: dimension.width < 540 ? 0.4 : 0
                }}
                onClick={scrollPage}
                onViewportEnter={(entry) => setInView(entry?.isIntersecting || false)}
                onViewportLeave={(entry) => setInView(entry?.isIntersecting || false)}
                className='relative z-20 flex h-dvh w-full items-center justify-center overflow-clip bg-oklch-intro'
              >
                <Blank />
                <Layout />
                {!click && <Line />}
                <Time />
                {click && <Line />}
              </motion.div>
            </ErrorBoundary>
          </IntroProvider>}
        </>
      )}
    </AnimatePresence>
  )
}
