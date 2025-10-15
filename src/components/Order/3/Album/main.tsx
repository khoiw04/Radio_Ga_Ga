import TimeLine from './ui/TimeLine'
import Cursor from './ui/Cursor'
import Albums from './ui/Albums'
import Button from './ui/Button'
import { useMenuContext } from '@/components/Hook/useMenuContext'
import { AnimatePresence, motion } from 'motion/react'
import AlbumsProvider from './hook/AlbumsProvider'
import ErrorBoundary from './hook/ErrorBoundary'
import { useState } from 'react'
import { usePageContext } from '@/pages/Hook/usePageContext'

export default function Album() {
  const { isActive, location, state } = usePageContext()
  const [inView, setInView] = useState(false)
  const { dimension } = useMenuContext()

  return (
    <AnimatePresence mode='popLayout'>
      {isActive && location === '/albums' && !state.ShowCredit && state.buttonActive && (
        <AlbumsProvider>
          <ErrorBoundary>
            <motion.div
            key={dimension.width}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.49
              }
            }}
            exit={{
              opacity: 0,
              transition: {
                delay: dimension.width < 540 ? 0.49 : 0,
                duration: inView ? 0.2 : 0
              }
            }}
            className='absolute overflow-clip flex h-dvh w-full items-center justify-center'
          >
            <Cursor inView={inView} />
            <Albums inView={inView} setInView={setInView} />
            {(inView || dimension.width < 540) && <TimeLine />}
            <Button />
          </motion.div>
          </ErrorBoundary>
        </AlbumsProvider>
      )}
    </AnimatePresence>
  )
}
