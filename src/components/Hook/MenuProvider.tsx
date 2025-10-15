import React, { useState, useEffect, useRef } from 'react'
import { MenuContext, Dimension } from './MenuContext'

interface MenuProviderProps {
  children: React.ReactNode
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [rotation, setRotation] = useState<number>(0)
  const [velcotiy, setVelcotiy] = useState<number>(0)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [dimension, setDimension] = useState<Dimension>({ width: 0, height: 0 })
  const [closestLineIndex, setClosestLineIndex] = useState<number | null>(null)
  const container = useRef<(HTMLDivElement | null)>(null)
  const line = useRef<(HTMLDivElement | null)[]>([])


  const data = [
    {
      title: 'Music Video',
      description: 'Home',
      href: '/'
    },
    {
      title: "Queen's songs",
      description: 'Albums',
      href: '/albums'
    },
    {
      title: 'Social Media',
      description: 'Internet',
      href: '/social'
    }
  ]

  const number = data.length
  const fix = 4
  const round = 10
  const total = number * round
  const radius = 31

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


  return (
    <MenuContext.Provider
      value={{
        rotation,
        setRotation,
        isDragging,
        setIsDragging,
        dimension,
        setDimension,
        closestLineIndex,
        setClosestLineIndex,
        velcotiy,
        setVelcotiy,
        container,
        line,
        data,
        number,
        fix,
        round,
        total,
        radius,
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}
