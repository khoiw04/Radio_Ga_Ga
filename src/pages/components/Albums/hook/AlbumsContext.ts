import { createContext } from 'react'

export interface AlbumsContextType {
  scrollTimeout: React.RefObject<NodeJS.Timeout | null>;
  animationRef: React.RefObject<any>;
  container: React.RefObject<HTMLDivElement | null>;
  isUserScrolling: React.RefObject<boolean>;
  isWheelActive: React.RefObject<boolean>;
  isPointerActive: React.RefObject<boolean>;
}

export const AlbumsContext = createContext<AlbumsContextType | undefined>(undefined)
