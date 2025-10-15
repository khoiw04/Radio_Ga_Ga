import { motion } from "motion/react"

export default function NumberOrName({ isFirst, index, delay, right, title = "", loop = false }: { isFirst?: boolean, loop?: boolean, delay: number, index?: number, right?: boolean, title?: string }) {
    return (
        <h2 className={`text-left relative overflow-hidden text-[5dvh] font-PPRadio-grotesk text-oklch-gray ${right ? 'text-right' : 'text-left'}`}>
            {index &&
            <>
            {index < 10 && <motion.span
                initial={{ translateY: isFirst || loop ? "0%" : "-100%" }}
                whileInView={{ translateY: "0%" }}
                transition={{
                delay: delay,
                duration: 0.4,
                ease: [0.34, 1, 0.68, 1]
                }}
                className="inline-block"
            >
                {`0`}
            </motion.span>}
            <motion.span
                initial={{ translateY: isFirst || loop ? "0%" : "-100%" }}
                whileInView={{ translateY: "0%" }}
                transition={{
                delay: delay + 0.1,
                duration: 0.4,
                ease: [0.34, 1, 0.68, 1]
                }}
                className="inline-block"
            >
                <span>{loop ? 1 : index}</span>
            </motion.span>
            </>
            }
            {title && title.split("").map((char, index) => (
                char === " " ? (
                    <span key={index} className="inline-block">&nbsp;</span>
                ) : (
                    <motion.span
                        key={index}
                        initial={{ translateY: isFirst || loop ? "0%" : "-100%" }}
                        whileInView={{ translateY: "0%" }}
                        transition={{
                            delay: index * 0.1 + delay,
                            duration: 0.4,
                            ease: [0.34, 1, 0.68, 1],
                        }}
                        className="inline-block"
                    >
                        {char}
                    </motion.span>
                )
            ))}
        </h2>
    )
}