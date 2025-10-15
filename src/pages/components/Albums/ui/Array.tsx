import React from "react"
import { motion } from "motion/react"

interface ArrayProps {
    ref: React.RefCallback<HTMLDivElement> | React.RefObject<HTMLDivElement>
    key: string
    id: string
    src: string
    alt: string
}

const ArrayComponent: React.FC<ArrayProps> = ({ id, ref, key, src, alt }) => {
    return (
        <motion.div id={id} ref={ref} key={key} className="h-1/4 aspect-square overflow-hidden border-oklch-yellow border-2 rounded-[1dvh]">
            <div className="size-full">
                <img src={src} alt={alt} loading='lazy' className="size-full object-contain object-center" />
            </div>
        </motion.div>
    )
}

export default ArrayComponent;