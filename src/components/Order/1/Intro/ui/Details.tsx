import { motion } from 'motion/react'
import { useIntroContext } from '../hook/useIntroContext'
import { usePageContext } from '@/pages/Hook/usePageContext'

export default function Layout() {
  const { percent, dimension } = useIntroContext()
  const { click } = usePageContext()

  return (
    <>
      <div
        id='percent'
        className='absolute flex h-dvh w-full items-end justify-center px-1 py-[1%]'
      >
        <svg className='h-full w-full'></svg>
        {/* <motion.h4
          key={dimension.width}
          className='relative block overflow-clip text-center font-Digital-display text-[1dvw] lg:text-[0.8dvw] whitespace-nowrap uppercase font-stretch-semi-condensed'
        >
          <motion.span
            key={dimension.width}
            initial={{ x: '0%' }}
            animate={{ x: click ? '100%' : '0%' }}
            transition={{
              delay: 10.2,
              duration: 0.4
            }}
            className='inline-block'
          >
            {Math.floor(percent * 100) + '%'}
          </motion.span>
        </motion.h4> */}
      </div>
      <div
        id='FM_AM'
        className='absolute flex h-dvh w-[92%] items-center justify-between'
      >
        <div
          style={{ gap: dimension.width > 2560 ? dimension.width / 110 : 12 }}
          className='absolute pt-1'
        >
          <motion.div
            key={dimension.width}
            className='h-6 w-[0.4px] bg-white'
            initial={{
              scaleY: 1,
              opacity: 1
            }}
            animate={{
              scaleY: click ? 0 : 1,
            }}
            transition={{
              delay: 10.2,
              duration: 0.2
            }}
            style={{
              width:
                dimension.width > 0
                  ? dimension.width / dimension.height / 4
                  : 0.4,
              height: dimension.height > 2560 ? dimension.height / 40 : 20
            }}
          >
            <h4 className='absolute -top-8 block -translate-x-1/2 overflow-hidden font-Jet-brains-mono font-bold whitespace-nowrap font-stretch-150%'>
              <motion.span
                initial={{
                  y: '0%'
                }}
                animate={{
                  y: click ? '100%' : '0%',
                }}
                transition={{
                  delay: 10.1,
                  duration: 0.5
                }}
                className='inline-block'
              >
                FM
              </motion.span>
            </h4>
            <h4 className='absolute -bottom-8 block -translate-x-1/2 overflow-hidden font-Jet-brains-mono font-bold whitespace-nowrap font-stretch-150%'>
              <motion.span
                initial={{
                  y: '0%'
                }}
                animate={{
                  y: click ? '-100%' : '0%'
                }}
                transition={{
                  delay: 10.1,
                  duration: 0.5
                }}
                className='inline-block'
              >
                AM
              </motion.span>
            </h4>
          </motion.div>
        </div>
        <div
          style={{ gap: dimension.width > 2560 ? dimension.width / 110 : 12 }}
          className='absolute right-0 pt-1'
        >
          <motion.div
            key={dimension.width}
            className='h-6 w-[0.4px] bg-white'
            initial={{
              scaleY: 1,
              opacity: 1
            }}
            animate={{
              scaleY: click ? 0 : 1,
            }}
            transition={{
              delay: 10.2,
              duration: 0.2
            }}
            style={{
              width:
                dimension.width > 0
                  ? dimension.width / dimension.height / 4
                  : 0.4,
              height: dimension.height > 2560 ? dimension.height / 40 : 20
            }}
          >
            <h4 className='absolute -top-8 block -translate-x-1/2 overflow-hidden font-Jet-brains-mono font-bold whitespace-nowrap font-stretch-150%'>
              <motion.span
                initial={{
                  y: '0%'
                }}
                animate={{
                  y: click ? '100%' : '0%'
                }}
                transition={{
                  delay: 10.1,
                  duration: 0.5
                }}
                className='inline-block'
              >
                MHz
              </motion.span>
            </h4>
            <h4 className='absolute -bottom-8 block -translate-x-1/2 overflow-hidden font-Jet-brains-mono font-bold whitespace-nowrap font-stretch-150%'>
              <motion.span
                initial={{
                  y: '0%'
                }}
                animate={{
                  y: click ? '-100%' : '0%'
                }}
                transition={{
                  delay: 10.1,
                  duration: 0.5
                }}
                className='inline-block'
              >
                kHz
              </motion.span>
            </h4>
          </motion.div>
        </div>
      </div>
    </>
  )
}
