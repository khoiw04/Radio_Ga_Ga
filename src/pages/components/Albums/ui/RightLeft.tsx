import { motion, useTransform, useScroll } from "motion/react"
import NumberOrName from "./NumberOrName"
import { useAlbumsContext } from "../hook/useAlbumsContext"

export default function RightLeft({ index, link, src, isFirst, isLast, name }: {src: string, link: string, isFirst? :boolean, isLast?: boolean, index: number, name: string}) {
    const { container } = useAlbumsContext()
    const { scrollYProgress } = useScroll({
        target: container,
        offset: isFirst
        ? ['start start', 'end start']
        : isLast
        ? ['start end', 'start start']
        : ['start end', 'end start']
    })

    const yFirst = useTransform(scrollYProgress, [0, 0.999, 1], ["0%", "25%", "0%"]);
    const yMiddle = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"])
    const yLast = useTransform(scrollYProgress, [0, 0.001, 1], ["0%" ,"-25%", "0%"]);

    const right = index % 2 === 0 ? true : false;

    return (
    <div ref={container} id={`${index}`} className="size-full relative bg-white">
        <div className={`absolute overflow-clip w-1/2 h-full ${right ? 'right-0' : 'left-0'}`}>
            <a href={link} target="_blank" rel="noopener noreferrer" className={`w-full h-full flex justify-center items-center absolute top-0 select-none ${right ? 'right-0' : 'left-0'}`}>
                <motion.img
                style={{
                    y: isFirst ? yFirst : isLast ? yLast : yMiddle,
                }}
                src={src}
                alt={name}
                loading='lazy'
                className="size-full absolute object-cover"
                />
            </a>
        </div>
        <div className={`w-1/2 h-full absolute px-[0.8%] py-[0.1%] ${right ? 'left-0' : 'right-0'}`}>
            <div className="size-full relative">
                <div className="w-full h-fit text-[5dvh] flex justify-between absolute bottom-0 uppercase">
                    <NumberOrName isFirst={isFirst} index={index} delay={0.4} loop={isLast} />
                    <NumberOrName isFirst={isFirst} title={name} delay={0.4} loop={isLast} />
                </div>
            </div>
        </div>
    </div>
    )
}