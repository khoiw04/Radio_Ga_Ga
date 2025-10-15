import { useContext } from 'react'
import { MouseContext } from './MouseContext'

export const useMouseContext = () => {
  const context = useContext(MouseContext)
  if (!context) {
    throw new Error('useMouseContext must be used within a MouseProvider')
  }
  return context
}
