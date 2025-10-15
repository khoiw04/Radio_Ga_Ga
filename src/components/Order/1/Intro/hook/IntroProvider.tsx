import { useRef, useState, useEffect, ReactNode } from 'react'
import { IntroContext, IntroContextType, Dimension } from './IntroContext'
import { useMotionValue, useSpring } from 'motion/react'

interface IntroProviderProps {
  children: ReactNode
}

const IntroProvider = ({ children }: IntroProviderProps) => {
  const container = useRef<HTMLDivElement | null>(null)
  const line = useRef<HTMLDivElement[] | null>([])
  const widthLine = useMotionValue(0)
  const heightLine = useMotionValue(0)
  const [dimension, setDimension] = useState<Dimension>({ width: 0, height: 0 })
  const [mouseX, setMousePosition] = useState<number>(0)
  const [percent, setPercent] = useState<number>(0)
  const [isHover, setOnHover] = useState<boolean>(false)
  const [finish, setFinish] = useState<boolean>(false)
  const [render, setRender] = useState<number | string>(0)

  const mouseX1 = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }

  const smoothMouse = {
    x: useSpring(mouseX1, smoothOptions),
    y: useSpring(mouseY, smoothOptions)
  }

  useEffect(() => {
    const handleWindow = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    const resizeWindow = new ResizeObserver(handleWindow)
    resizeWindow.observe(document.body)

    return () => {
      resizeWindow.disconnect()
    }
  }, [])

  const value: IntroContextType = {
    container,
    line,
    mouseX,
    isHover,
    smoothMouse,
    dimension,
    render,
    widthLine,
    heightLine,
    finish,
    percent,
    setPercent,
    setMousePosition,
    setDimension,
    setOnHover,
    setRender,
    setFinish
  }

  return <IntroContext.Provider value={value}>{children}</IntroContext.Provider>
}

export default IntroProvider
