import { createContext } from 'react'

export interface Dimension {
  width: number
  height: number
}

export interface MenuContextType {
  rotation: number
  setRotation: React.Dispatch<React.SetStateAction<number>>
  velcotiy: number
  setVelcotiy: React.Dispatch<React.SetStateAction<number>>
  isDragging: boolean
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>
  dimension: Dimension
  setDimension: React.Dispatch<React.SetStateAction<Dimension>>
  closestLineIndex: number | null
  setClosestLineIndex: React.Dispatch<React.SetStateAction<number | null>>
  line: React.RefObject<(HTMLDivElement | null)[]>
  container: React.RefObject<(HTMLDivElement | null)>
  data: Array<{ title: string | string[]; description: string; href: string }>
  number: number
  fix: number
  round: number
  total: number
  radius: number
}

export const MenuContext = createContext<MenuContextType | undefined>(undefined)
