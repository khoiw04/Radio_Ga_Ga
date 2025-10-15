import { createContext } from 'react'
import { MotionValue } from 'motion/react'

export interface AlbumsContextType {
  container: React.RefObject<HTMLDivElement>
  line: React.RefObject<HTMLDivElement[] | null>
  find: React.RefObject<HTMLDivElement>
  mouseX: number
  albumWidth: number
  dragPercentage: number
  isHover: boolean
  x: MotionValue<number>
  y: MotionValue<number>
  smoothMouse: { x: MotionValue<number>; y: MotionValue<number> }
  dimension: { width: number; height: number }
  hoverAlbum: boolean
  closetLine: { lineRect: HTMLElement | null; distance: number }
  albums: React.RefObject<(HTMLDivElement | HTMLAnchorElement)[]>
  containerRef: React.RefObject<HTMLDivElement>
  totalHeight: number
  totalWidth: number
  dragging: boolean
  setMousePosition: React.Dispatch<React.SetStateAction<number>>
  setAlbumWidth: React.Dispatch<React.SetStateAction<number>>
  setTotalHeight: React.Dispatch<React.SetStateAction<number>>
  setTotalWidth: React.Dispatch<React.SetStateAction<number>>
  setOnHover: React.Dispatch<React.SetStateAction<boolean>>
  setDragging: React.Dispatch<React.SetStateAction<boolean>>
  setClosetLine: React.Dispatch<
    React.SetStateAction<{ lineRect: HTMLElement | null; distance: number }>
  >
  setDragPercentage: React.Dispatch<React.SetStateAction<number>>
  setHoverAlbum: React.Dispatch<React.SetStateAction<boolean>>
}

export const AlbumsContext = createContext<AlbumsContextType | undefined>(
  undefined
)
