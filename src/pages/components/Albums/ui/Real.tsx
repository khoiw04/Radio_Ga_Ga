/* eslint-disable @typescript-eslint/no-unused-vars */
import RightLeft from "./RightLeft";
import { useEffect, useRef } from 'react';
import { usePageContext } from "@/pages/Hook/usePageContext";
import { useAlbumsContext } from "../hook/useAlbumsContext";
import Lenis from 'lenis'
import Snap from 'lenis/snap'

export default function Real() {
    const { state, location, dimension, albumsData } = usePageContext();
    const section = useRef<HTMLElement>(null)
    const { scrollTimeout, animationRef, isUserScrolling, isWheelActive, isPointerActive } = useAlbumsContext()

    // useEffect(() => {
    //     const handleScrollEnd = () => {
    //         const nextElement = document.getElementById(`${indexCurrent}`);
    //         if (nextElement) {
    //             const targetScroll = nextElement.offsetTop;

    //             if (state.buttonActive === false && !isUserScrolling.current && !isWheelActive.current) {
    //                 animationRef.current = animate(scrollY, targetScroll, {
    //                     duration: 1.4,
    //                     ease: [0.16, 1, 0.3, 1],
    //                     onUpdate(latest) {
    //                         window.scrollTo({
    //                             top: latest,
    //                             left: 0
    //                         });
    //                     }
    //                 });
    //             }
    //         }
    //     };

    //     const onScroll = () => {
    //         if (state.buttonActive === false && !isUserScrolling.current && !isWheelActive.current) {
    //             if (scrollTimeout.current) {
    //                 clearTimeout(scrollTimeout.current);
    //             }
    //             scrollTimeout.current = setTimeout(handleScrollEnd, 290);
    //         }
    //     };

    //     const onWheelStart = () => {
    //         // eslint-disable-next-line react-compiler/react-compiler
    //         isUserScrolling.current = true;
    //         isWheelActive.current = true;
    //         if (animationRef.current) {
    //             animationRef.current.stop();
    //         }
    //     };

    //     const onWheelEnd = () => {
    //         isUserScrolling.current = false;
    //         isWheelActive.current = false;
    //     };

    //     // const onPointerMove = (e: MouseEvent) => {
    //     //     if (isUserScrolling.current && isPointerActive.current) {
    //     //         animate(scrollY, scrollY.get() + e.movementY, {
    //     //             duration: 1.4,
    //     //             ease: [0.16, 1, 0.3, 1],
    //     //             onUpdate(latest) {
    //     //                 window.scrollTo({
    //     //                     top: latest,
    //     //                     left: 0
    //     //                 });
    //     //             }
    //     //         })
    //     //     }
    //     // };

    //     // const onPointerStart = () => {
    //     //     isUserScrolling.current = true;
    //     //     isPointerActive.current = true;
    //     //     if (animationRef.current) {
    //     //         animationRef.current.stop();
    //     //     }
    //     // };

    //     // const onPointerEnd = () => {
    //     //     isUserScrolling.current = false;
    //     //     isPointerActive.current = false;
    //     // };

    //     window.addEventListener('wheel', onWheelStart, { passive: false });
    //     window.addEventListener('wheel', onWheelEnd, { passive: true });
    //     window.addEventListener('scroll', onScroll, { passive: false });
    //     // window.addEventListener('pointerdown', onPointerStart);
    //     // window.addEventListener('pointerup', onPointerEnd, { passive: true });
    //     // window.addEventListener('pointermove', onPointerMove, { passive: false });
    //     return () => {
    //         window.removeEventListener('wheel', onWheelStart);
    //         window.removeEventListener('wheel', onWheelEnd);
    //         window.removeEventListener('scroll', onScroll);
    //         if (scrollTimeout.current) {
    //             clearTimeout(scrollTimeout.current);
    //           }
    //         // window.removeEventListener('pointerdown', onPointerStart);
    //         // window.removeEventListener('pointerup', onPointerEnd);
    //         // window.removeEventListener('pointermove', onPointerMove);
    //     };
    // }, [animationRef, indexCurrent, isUserScrolling, isWheelActive, scrollTimeout, scrollY, state.buttonActive]);

    useEffect(() => {
        if (location === "/albums" && !state.buttonActive && dimension.width > 1100) {
            const lenis = new Lenis({
                infinite: true,
                syncTouch: true
            })
            function onRaf(time) {
                lenis.raf(time);
                requestAnimationFrame(onRaf);
            }

            requestAnimationFrame(onRaf);

            const snap = new Snap(lenis, {
                velocityThreshold: 0.1,
                lerp: 0,
                duration: 1.3
            })

            albumsData.forEach((album) => {
                const section = document.getElementById(`${album.index}`)
                if (section) {
                    snap.add(section.offsetTop)
                }
            })

            return () => {
                snap.destroy()
                lenis.destroy()
            }
        }
    }, [location, state.buttonActive, dimension.width, albumsData]);

    return (
        <section ref={section} className="size-full absolute z-[10]">
            {albumsData.slice(0, state.buttonActive ? 1 : albumsData.length).map((album) => (
                <RightLeft
                    key={album.index}
                    link={album.spotify}
                    src={album.src}
                    name={album.title}
                    index={album.index}
                    isFirst={album.isFirst}
                    isLast={album.isLast}
                />
            ))}
        </section>
    );
}
