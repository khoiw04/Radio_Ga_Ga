import {
    motion,
    AnimatePresence,
    useSpring,
    useMotionValue
  } from 'motion/react'
  import { useEffect, useState } from 'react'
  import { usePageContext } from '@/pages/Hook/usePageContext'
  import useSound from 'use-sound'
  import Glitch from "/sound/hat.wav"

  export default function Social() {
    const { socialSpecial, location, state, dimension } = usePageContext()
    const [isHover, setIsHover] = useState({
      boolean: false,
      index: 0
    })
    const [moveRight, setMoveRight] = useState(false)
    const social = [
      {
        name: 'o',
        link: 'https://www.youtube.com/channel/UCiMhD4jzUqG-IgPzUmmytRQ',
        alt: 'YouTube'
      },
      {
        name: 'k',
        link: 'https://www.facebook.com/Queen',
        alt: 'Facebook'
      },
      {
        name: 'm',
        link: 'https://www.instagram.com/officialqueenmusic/',
        alt: 'Instagram'
      },
      {
        name: 'l',
        link: 'https://x.com/QueenWillRock',
        alt: 'Twitter'
      },
      {
        name: 'y',
        link: 'https://www.imdb.com/name/nm1277102/',
        alt: 'Imdb'
      },
      {
        name: 'x',
        link: 'https://soundcloud.com/queen-69312',
        alt: 'SoundCloud'
      },
      {
        name: 'z',
        link: 'https://queenonline.com/',
        alt: 'Website'
      }
    ]
    const [play] = useSound(Glitch, {
      volume: 4
    });

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }

    const smoothMouse = {
      x: useSpring(mouseX, smoothOptions),
      y: useSpring(mouseY, smoothOptions)
    }

    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e
        mouseX.set(clientX)
        mouseY.set(clientY)
      }

      const doSomething = () => {
        const right =
          mouseX.get() - (mouseX?.getPrevious() ?? 0) < 0.1 ? true : false
        setMoveRight(right)
      }

      const unSub = mouseX.on('change', doSomething)

      window.addEventListener('mousemove', handleMouseMove)
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        unSub()
      }
    }, [mouseX, mouseY])

    return (
      <AnimatePresence mode='popLayout'>
        {location === '/social' && !state.buttonActive && (
          <motion.div
            className={`absolute ${socialSpecial ? 'h-[100dvh]' : 'h-[56dvh]'} z-[5000] w-full items-center justify-center overflow-clip bg-transparent py-2 text-5xl md:flex`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: !state.buttonActive ? 1 : 0,
              transition: {
                delay: 0.49,
                duration: 0.4
              }
            }}
            exit={{
              opacity: 0,
              transition: {
                delay: dimension.width < 540 ? 0.49 : 0,
                duration: 0.2
              }
            }}
          >
            {dimension.width > 539 && (
              <>
                <motion.div
                  layout
                  initial={{
                    width: 'auto',
                    height: 'auto',
                    opacity: 0,
                    borderRadius: '80%',
                    filter: `blur(0px)`,
                    backdropFilter: `blur(0px)`
                  }}
                  animate={{
                    translate: isHover.boolean
                      ? moveRight
                        ? `-120% 80%`
                        : '50% 80%'
                      : '-50% -50%',
                    width: isHover.boolean ? 'auto' : 40,
                    height: isHover.boolean ? 'auto' : 40,
                    opacity: isHover.boolean
                      ? 1
                      : smoothMouse.x.get() > 0
                        ? 0.6
                        : 0,
                    borderRadius: isHover.boolean ? '4%' : '80%',
                    filter: isHover.boolean
                      ? [`blur(4px)`, `blur(0px)`]
                      : `blur(0px)`,
                    backdropFilter: isHover.boolean
                      ? [`blur(2px)`, `blur(0px)`]
                      : `blur(0px)`,
                    transition: {
                      type: 'spring',
                      stiffness: 150,
                      damping: 15,
                      mass: 0.1,
                      borderRadius: {
                        duration: 1
                      },
                      width: {
                        type: 'spring',
                        duration: 2,
                        bounce: 0.4
                      },
                      translate: {
                        type: 'spring',
                        duration: 2,
                        bounce: 0.4
                      },
                      filter: {
                        duration: 0.5,
                        bounce: 0.4
                      }
                    }
                  }}
                  style={{
                    x: smoothMouse.x,
                    y: smoothMouse.y
                  }}
                  exit={{
                    width: 'auto',
                    height: 'auto',
                    opacity: 0,
                    borderRadius: '80%',
                    filter: `blur(0px)`,
                    backdropFilter: `blur(0px)`
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1
                  }}
                  className='pointer-events-none interpolateSize starting:w-auto fixed top-0 left-0 z-[99999] hidden size-12 origin-bottom items-center justify-center overflow-clip bg-red-900 text-3xl lg:flex'
                >
                  <AnimatePresence mode='wait'>
                    {isHover.boolean && (
                      <motion.h1
                        initial={{
                          opacity: 0
                        }}
                        animate={{
                          opacity: 1
                        }}
                        exit={{
                          opacity: 0
                        }}
                        className='pointer-events-none px-5 py-2 font-[Corp]'
                      >
                        {social[isHover.index].alt}
                      </motion.h1>
                    )}
                  </AnimatePresence>
                </motion.div>
              </>
            )}
            <div
              className='grid z-[400] h-full w-full grid-cols-2 content-center items-center justify-items-center text-5xl md:relative md:flex md:h-fit md:w-2/3 md:flex-row md:items-start md:justify-between lg:w-1/2 lg:justify-around'
              onMouseOver={() =>
                setIsHover(prevState => ({ ...prevState, boolean: true }))
              }
              onMouseLeave={() =>
                setIsHover(prevState => ({ ...prevState, boolean: false }))
              }
            >
              {social.map((data, index) => {
                return (
                  <motion.a
                    key={`social_${index}`}
                    href={data.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    onMouseOver={() =>
                      setIsHover(prevState => ({ ...prevState, index: index }))
                    }
                    onMouseLeave={() =>
                      setIsHover(prevState => ({ ...prevState, index: index }))
                    }
                    onMouseEnter={() => play()}
                    className='font-Social text-oklch-white last:hidden focus:outline focus:outline-red-700 last:md:block'
                  >
                    {data.name}
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    )
  }