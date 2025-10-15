import { useRef, useState, ReactNode } from 'react'
import { MouseContext, MouseContextType } from './MouseContext'
import { useMotionValue, useSpring } from 'motion/react'

interface MouseProviderProps {
  children: ReactNode
}

const MouseProvider = ({ children }: MouseProviderProps) => {
  const container = useRef<HTMLDivElement | null>(null)
  const line = useRef<HTMLDivElement[] | null>([])
  const [mouseX, setMousePosition] = useState<number>(0)
  const [isHover, setOnHover] = useState<boolean>(false)

  const mouseX1 = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }

  const smoothMouse = {
    x: useSpring(mouseX1, smoothOptions),
    y: useSpring(mouseY, smoothOptions)
  }

  const value: MouseContextType = {
    container,
    line,
    mouseX,
    isHover,
    smoothMouse,
    setMousePosition,
    setOnHover
  }

  return <MouseContext.Provider value={value}>{children}</MouseContext.Provider>
}

export default MouseProvider
