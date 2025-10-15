import { animate } from 'motion/react'
import { useAlbumsContext } from '../hook/useAlbumsContext'


export default function Button() {
  const { y } = useAlbumsContext()

  const scrollPage = () => {
    const scrollAmount = window.innerHeight
    const isAtBottom =
      window.scrollY >=
      document.documentElement.scrollHeight - window.innerHeight
    const direction = isAtBottom ? -scrollAmount : scrollAmount
    const scrollTo = window.scrollY + direction

    animate(y, 0, {
      duration: 1.4,
      ease: [0.12, 0, 0.39, 0],
      onComplete: () => {
        animate(window.scrollY, scrollTo, {
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
          onUpdate: latest => {
            window.scrollTo(0, latest)
          }
        })
      }
    })
  }

  return (
    <div className='fixed bottom-0 left-0 z-[9999]'>
      <div
        onClick={scrollPage}
        className='size-10 rounded-full border border-amber-900 bg-oklch-amber md:hidden'
      ></div>
    </div>
  )
}
