import { useRef, useState, ReactNode, useEffect } from 'react'
import { AlbumsContext, AlbumsContextType } from './AlbumContext'
import { useMotionValue, useSpring, MotionValue } from 'motion/react'

interface AlbumsProviderProps {
  children: ReactNode
}

const AlbumsProvider = ({ children }: AlbumsProviderProps) => {
  const container = useRef<HTMLDivElement | null>(null)
  const line = useRef<HTMLDivElement[]>([]);
  const find = useRef<HTMLDivElement | null>(null)
  const [mouseX, setMousePosition] = useState<number>(0)
  const x: MotionValue<number> = useMotionValue(0)
  const y: MotionValue<number> = useMotionValue(0)
  const [isHover, setOnHover] = useState<boolean>(false)
  const [hoverAlbum, setHoverAlbum] = useState<boolean>(false)
  const [albumWidth, setAlbumWidth] = useState<number>(0)
  const [dragPercentage, setDragPercentage] = useState<number>(0)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })
  const [closetLine, setClosetLine] = useState<{
    lineRect: HTMLElement | null
    distance: number
  }>({
    lineRect: null,
    distance: Infinity
  })
  const albums = useRef<(HTMLDivElement | HTMLAnchorElement)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [totalWidth, setTotalWidth] = useState<number>(0)
  const [totalHeight, setTotalHeight] = useState<number>(0)
  const [dragging, setDragging] = useState<boolean>(false)

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

  const value: AlbumsContextType = {
    container,
    line,
    mouseX,
    isHover,
    smoothMouse,
    dimension,
    closetLine,
    find,
    albumWidth,
    dragPercentage,
    hoverAlbum,
    x,
    y,
    albums,
    containerRef,
    totalHeight,
    totalWidth,
    dragging,
    setDragging,
    setTotalHeight,
    setClosetLine,
    setMousePosition,
    setOnHover,
    setTotalWidth,
    setAlbumWidth,
    setDragPercentage,
    setHoverAlbum,
  }

  return <AlbumsContext.Provider value={value}>{children}</AlbumsContext.Provider>
}

export default AlbumsProvider
