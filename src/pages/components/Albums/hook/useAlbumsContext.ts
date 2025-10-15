import { useContext } from 'react'
import { AlbumsContext } from './AlbumsContext'

export const useAlbumsContext = () => {
  const context = useContext(AlbumsContext)
  if (!context) {
    throw new Error('useAlbumsContext must be used within a AlbumsProvider')
  }
  return context
}
