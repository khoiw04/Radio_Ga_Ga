import React, { useRef } from 'react'
import { AlbumsContext } from './AlbumsContext'

interface AlbumsProviderProps {
  children: React.ReactNode
}

export const AlbumsProvider: React.FC<AlbumsProviderProps> = ({ children }) => {
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const animationRef = useRef<any>(null); //store animation
  const isUserScrolling = useRef(false); //watch scroll
  const isWheelActive = useRef(false); //watch wheel
  const isPointerActive = useRef(false); //watch pointer
  const container = useRef<HTMLDivElement | null>(null);

  return (
    <AlbumsContext.Provider
      value={{
        scrollTimeout,
        animationRef,
        isUserScrolling,
        isWheelActive,
        container,
        isPointerActive,
      }}
    >
      {children}
    </AlbumsContext.Provider>
  )
}
