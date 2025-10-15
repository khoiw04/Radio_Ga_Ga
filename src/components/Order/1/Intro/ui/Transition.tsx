import { motion } from "motion/react"
import { useState } from "react"

export default function Blank() {
    const [isVisible, setIsVisible] = useState(true)

    return (
        isVisible && (
        <motion.div
        initial={{
            opacity: 1
        }}
        whileInView={{
            opacity: 0
        }}
        viewport={{
            amount: "some",
            margin: "40% 0% -40% 0%"
        }}
        transition={{
            delay: 1
        }}
        onAnimationComplete={() => setIsVisible(false)}
        className="w-full h-dvh bg-black z-50 absolute"
        />
        )
    )
}