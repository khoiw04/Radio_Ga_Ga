import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { useAlbumsContext } from '../hook/useAlbumsContext'
import { usePageContext } from '@/pages/Hook/usePageContext'
import useSound from 'use-sound'
import TickAudio from '/sound/tickradiofilter.ogg'

export default function Albums({ inView, setInView }) {
  const {
    dimension,
    albums,
    totalWidth,
    totalHeight,
    containerRef,
    x,
    y,
    dragging,
    setDragging,
    setTotalWidth,
    setTotalHeight,
    setHoverAlbum,
    setAlbumWidth,
    setDragPercentage
  } =
  useAlbumsContext()
  const { albumsData } = usePageContext()
  const total = (inView || dimension.width < 540) ? albumsData.length - 5 : 2
  const [lastLeft, setLastLeft] = useState(0);
  const [play] = useSound(TickAudio)

  useEffect(() => {
    if (albums.current && dimension.width > 539) {
      const totalWidth = albums.current?.reduce((acc, el) => {
        if (el) {
          return acc + el.offsetWidth
        }

        return acc
      }, 0)
      setTotalWidth(
        totalWidth + dimension.width * 0.2 * total - dimension.width * 0.44
      )
      setAlbumWidth(
        totalWidth + dimension.width * 0.2 * total - dimension.width * 0.44
      )
    }
    if (albums.current && dimension.width < 540) {
      const totalHeight = albums.current?.reduce((acc, el) => {
        if (el) {
          return acc + el.offsetHeight
        }

        return acc
      }, 0)
      setTotalHeight(
        totalHeight + dimension.height * 0.2 * total - dimension.height * 0.5
      )
      setAlbumWidth(
        totalHeight + dimension.height * 0.2 * total - dimension.height * 0.5
      )
    }
  }, [dimension.width, dimension.height, total, setAlbumWidth, setTotalWidth, setTotalHeight, inView, albums])

  const onUpdate = (latest: any) => {
    if (containerRef.current) {
      const clampedX =
        typeof latest.x === 'string' ? parseFloat(latest.x) : latest.x
      const clampedY =
        typeof latest.y === 'string' ? parseFloat(latest.y) : latest.y

      if (dimension.width > 539) {
        setDragPercentage(clampedX)
        const diff = Math.abs(latest.x - lastLeft);
        if (diff >= 800) {
          play();
          setLastLeft(latest.x);
        }
      } else {
        setDragPercentage(clampedY)
        const diff = Math.abs(latest.y - lastLeft);
        if (diff >= 200) {
          play();
          setLastLeft(latest.y);
        }
      }
    }
  }

  const onDragStart = () => {
    setHoverAlbum(true)
    setDragging(true)
  }

  const onDragEnd = () => {
    setHoverAlbum(false)
    setDragging(false)
  }

  return (
    <motion.div
      drag={dimension.width > 539 ? 'x' : 'y'}
      draggable
      dragElastic={1}
      ref={containerRef}
      key={dimension.width}
      dragConstraints={{
        right: 0,
        left: -totalWidth,
        bottom: 0,
        top: -totalHeight
      }}
      style={{
        width: dimension.width > 539 ? total * 100 + '%' : 100 + '%',
        x: x,
        y: y
      }}
      onUpdate={onUpdate}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onViewportEnter={(entry) => setInView(entry?.isIntersecting)}
      onViewportLeave={(entry) => setInView(entry?.isIntersecting)}
      className={`absolute z-10 flex h-1/3 w-full flex-col items-center space-y-[20dvh] md:left-1/2 md:flex-row md:space-y-0 md:space-x-[20dvw]`}
    >
      {albumsData.map((album, i) => {
        return (
          <motion.a
            initial={{ filter: `blur(2px)`, opacity: 0.6 }}
            whileInView={{ filter: `blur(0px)`, opacity: 1 }}
            whileHover={{ filter: `blur(0px)`, opacity: 1 }}
            viewport={{
              amount: 0.4,
              margin: '0px -30% 0px -30%'
            }}
            ref={el => {
              if (el) {
                albums.current[i] = el as unknown as HTMLDivElement
              }
            }}
            key={`album_${i}`}
            href={album.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className={`aspect-square h-full flex-none transform overflow-hidden rounded transition-all perspective-distant perspective-origin-center transform-3d hover:scale-105 md:-translate-x-1/2 ${dragging ? 'pointer-events-none' : 'pointer-events-auto'}`}
          >
            <img
              src={album.mobile}
              alt={album.alt}
              className='size-full bg-oklch-amber'
            />
          </motion.a>
        )
      })}
    </motion.div>
  )
}
