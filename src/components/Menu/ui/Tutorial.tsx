import { motion, AnimatePresence } from 'motion/react'
import { useMenuContext } from '../../Hook/useMenuContext'
import { usePageContext } from '@/pages/Hook/usePageContext'

export default function Tutorial() {
  const { dimension } = useMenuContext()
  const { isActive, setIsActive } = usePageContext()

  let tutorialText

  if (dimension.width < 540) {
    tutorialText = 'Click here to expand'
  } else {
    tutorialText = (
      <>
        Press <code>ESC</code> to expand
      </>
    )
  }

  return (
    <AnimatePresence mode='wait'>
      {!isActive && (
        <motion.div
          initial={{ opacity: 0, filter: `blur(4px)` }}
          animate={{
            opacity: 1,
            filter: `blur(0px)`,
            transition: {
              delay: 0.49
            }
          }}
          exit={{
            opacity: 0,
            filter: `blur(4px)`,
            transition: {
              delay: 0.4
            }
          }}
          onClick={() => setIsActive(true)}
          className='absolute cursor-pointer right-0 bottom-0 z-20 mr-4 mb-4 md:mr-8 md:mb-5'
        >
          {tutorialText}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
