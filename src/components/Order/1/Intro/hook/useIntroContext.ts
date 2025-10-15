import { useContext } from 'react'
import { IntroContext } from './IntroContext'

export const useIntroContext = () => {
  const context = useContext(IntroContext)
  if (!context) {
    throw new Error('useIntroContext must be used within a IntroProvider')
  }
  return context
}
