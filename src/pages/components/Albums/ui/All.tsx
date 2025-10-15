import { motion, AnimatePresence } from "motion/react"
import { usePageContext } from "@/pages/Hook/usePageContext"
import { MenuProvider } from "@/components/Hook/MenuProvider"
import ErrorBoundary from "@/pages/Hook/ErrorBoundary"
import AlbumsProvider from "@/components/Order/3/Album/hook/AlbumsProvider"
import Cursor from "@/components/Order/3/Album/ui/Cursor"
import TimeLine from "@/components/Order/3/Album/ui/TimeLine"
import Albums from "@/components/Order/3/Album/ui/Albums"
import { useState } from "react"

export default function All() {
    const { dimension, location } = usePageContext()
    const [inView, setInView] = useState(false)

    return (
        <MenuProvider>
            <AnimatePresence mode='popLayout'>
                {location === '/albums' && (
                    <AlbumsProvider>
                    <ErrorBoundary>
                        <motion.div
                        key={dimension.width}
                        initial={{ opacity: 0 }}
                        animate={{
                        opacity: 1,
                        transition: {
                            delay: 0.49
                        }
                        }}
                        exit={{
                        opacity: 0,
                        transition: {
                            delay: dimension.width < 540 ? 0.49 : 0,
                            duration: inView ? 0.2 : 0
                        }
                        }}
                        className='absolute overflow-clip flex h-dvh w-full items-center justify-center z-[200]'
                    >
                        <Cursor inView={inView} />
                        <Albums inView={inView} setInView={setInView} />
                        {(inView || dimension.width < 540) && <TimeLine />}
                    </motion.div>
                    </ErrorBoundary>
                    </AlbumsProvider>
                )}
            </AnimatePresence>
        </MenuProvider>
    )
}