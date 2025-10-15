import { usePageContext } from "@/pages/Hook/usePageContext"
import ArrayComponent from "./Array"
import { motion } from "motion/react"
import { useState, useEffect, useRef, useCallback } from "react"

export default function Ipad() {
    const { dimension, albumsData } = usePageContext()
    const albumsHomepage = useRef<HTMLDivElement[]>([])
    const [totalHeight, setTotalHeight] = useState<number | null>(0)
    const [nearestIndex, setNearestIndex] = useState<number | null>(0);

    //get height
    useEffect(() => {
        albumsHomepage.current = albumsHomepage.current.slice(0, albumsData.length)

        const ReSize = () => {
            const height = albumsHomepage.current.reduce((accumulator, album) => {
                if (album) {
                    return accumulator + album.offsetHeight + dimension.height * 0.01
                }
                return accumulator
            }, 0)

            setTotalHeight(height)
        }
        ReSize()

        window.addEventListener("resize", ReSize)
        return () => window.removeEventListener("resize", ReSize)
    }, [albumsData.length, dimension])

    //get element
    const findNearestElement = useCallback(() => {
        let nearest: number | null = null;
        let minDistance = Infinity;

        albumsHomepage.current.forEach((el, i) => {
          const rect = el.getBoundingClientRect();
          const distance = rect.top;

          if (distance >= 0 && distance < minDistance) {
            minDistance = distance;
            nearest = i;
          }
        });

        const clampedIndex = nearest !== null ? Math.max(0, Math.min(albumsData.length - 1, nearest)) : null;

        setNearestIndex(clampedIndex);
      }, [albumsData.length]);

    return (
        <section className="size-full absolute overflow-clip z-[10] px-[3dvh] py-[2dvh]">
            <div className="size-full relative">
                <motion.div
                drag="y"
                key={dimension.width}
                dragConstraints={{
                    top: -totalHeight, bottom: 0
                }}
                onUpdate={findNearestElement}
                className="h-full absolute space-y-[4dvh] cursor-pointer">
                    {albumsData.slice(0, albumsData.length - 1).map((album, i) => {
                        return (
                            <ArrayComponent
                            ref={el => { if (el) albumsHomepage.current[i] = el }}
                            key={`albummini_${i}`}
                            src={album.mobile}
                            alt={album.title}
                            id={`${album.index}`}
                            />
                        )
                    })}
                </motion.div>
                <div className="absolute w-2/3 h-full right-0">
                {albumsData.slice(0, albumsData.length - 1).map((album, i) => {
                    if (nearestIndex === i) {
                        return (
                            <a
                            href={album.spotify}
                            target="_blank" rel="noopener noreferrer"
                            className="aspect-square w-[80%] z-[20] overflow-clip rounded-[10dvh] origin-right absolute right-0 bottom-0">
                                <img
                                    alt={album.title}
                                    src={album.mobile}
                                    loading='lazy'
                                    className="size-full bg-black"
                                />
                            </a>
                        )
                    }
                })}
                </div>
            </div>
            <div className="w-full absolute left-0 h-[0.2dvh] top-[28dvh] bg-red-900" />
        </section>
    )
}