import { createContext } from 'react'
import { MotionValue } from 'motion/react'

export interface Dimension {
  width: number
  height: number
}

export interface IntroContextType {
  container: React.RefObject<HTMLDivElement>
  line: React.RefObject<HTMLDivElement[]>
  mouseX: number
  percent: number
  isHover: boolean
  finish: boolean
  render: number | string
  widthLine: MotionValue<number>
  heightLine: MotionValue<number>
  dimension: { width: number; height: number }
  smoothMouse: { x: MotionValue<number>; y: MotionValue<number> }
  setMousePosition: React.Dispatch<React.SetStateAction<number>>
  setPercent: React.Dispatch<React.SetStateAction<number>>
  setRender: React.Dispatch<React.SetStateAction<number | string>>
  setDimension: React.Dispatch<React.SetStateAction<{ width: number; height: number }>>;
  setOnHover: React.Dispatch<React.SetStateAction<boolean>>
  setFinish: React.Dispatch<React.SetStateAction<boolean>>
}

export const IntroContext = createContext<IntroContextType | undefined>(
  undefined
)
