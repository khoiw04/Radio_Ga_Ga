import { createContext } from 'react'
import { MotionValue } from 'motion/react'

export interface MouseContextType {
  container: React.RefObject<HTMLDivElement>
  line: React.RefObject<HTMLDivElement[]>
  mouseX: number
  isHover: boolean
  smoothMouse: { x: MotionValue<number>; y: MotionValue<number> }
  setMousePosition: React.Dispatch<React.SetStateAction<number>>
  setOnHover: React.Dispatch<React.SetStateAction<boolean>>
}

export const MouseContext = createContext<MouseContextType | undefined>(
  undefined
)
