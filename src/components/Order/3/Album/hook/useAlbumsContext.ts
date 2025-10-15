import { useContext } from 'react'
import { AlbumsContext } from './AlbumContext'

export const useAlbumsContext = () => {
  const context = useContext(AlbumsContext)
  if (!context) {
    throw new Error('useAlbumsContext must be used within a AlbumsContext')
  }
  return context
}
