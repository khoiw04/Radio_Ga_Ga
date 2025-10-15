import { usePageContext } from "@/pages/Hook/usePageContext"
import { motion, AnimatePresence } from "motion/react"
import { useEffect, useState } from "react"

export default function Warning() {
    const { dimension, location, warning, size, animationComplete, setFlagAmbient, setSize, setAnimationComplete, setClick, setWaring, setIsActive, setSocialSpecial, setInProgress } = usePageContext()
    const [shouldLoading, setShouldLoading] = useState(false)

    useEffect(() => {
        if (location === "/") {
            setShouldLoading(true)
        }
        if (location !== "/") {
            setFlagAmbient(true)
        }
    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (dimension.width * 0.8 >= dimension.height) {
            setSize(dimension.width/4)
        } else {
            setSize(dimension.width/3)
        }
      }, [dimension, setSize])

    useEffect(() => {
        if (!warning) {
            const timeoutId = setTimeout(() => {
                setAnimationComplete(true)
            }, 1000)

            return () => clearTimeout(timeoutId)
        }
    }, [setAnimationComplete, warning])

    useEffect(() => {
    if (animationComplete) {
        setClick(true)
        setIsActive(true)
        setSocialSpecial(true)
        setInProgress(true)
    }
    }, [animationComplete, setClick, setInProgress, setIsActive, setSocialSpecial])

    const toogle = () => {
        const timeoutId = setTimeout(() => {
            setFlagAmbient(true)
        }, 10000)
        setWaring(false)
        return () => clearTimeout(timeoutId)
    }

    return (
        <>
        <AnimatePresence mode="popLayout">
        {warning && shouldLoading && <motion.div
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
                    translate: '20% 50%',
                    width: 'auto',
                    height: 'auto',
                    opacity: warning
                        ? 0.6
                        : 0,
                    borderRadius: '4%',
                    transition: {
                    borderRadius: {
                      duration: 1
                    },
                    filter: {
                      duration: 0.5,
                      bounce: 0.4
                    }
                  }
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
                className='pointer-events-none interpolateSize starting:w-auto fixed top-0 left-0 z-[99999] size-12 origin-bottom items-center justify-center overflow-clip bg-transparent text-xl flex'
              >
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
                      className='pointer-events-none lg:px-5 lg:py-2 font-[Corp]'
                    >
                        Click to skip
                    </motion.h1>
        </motion.div>}
        </AnimatePresence>
        <AnimatePresence mode="popLayout">
            {!shouldLoading && <motion.div style={{
                display: dimension.width > 0 ? 'none' : 'block'
            }} className="w-full h-dvh absolute z-[9999] bg-black" />}
            {warning && shouldLoading &&
                <section className="w-full h-dvh absolute z-[9999] bg-black">
                    <motion.div
                    initial={{
                        opacity: 1
                    }}
                    animate={{
                        opacity: 1
                    }}
                    exit={{
                        opacity: 0
                    }}
                    transition={{
                        duration: 1.4
                    }}
                    onClick={toogle}
                    className="size-full relative flex flex-col justify-center items-center">
                        <svg width={size} height={size} viewBox={`0 0 542 542`} fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M162.145 471L150.097 437.16H157.729L166.513 463.272H164.449L173.713 437.16H179.089L187.969 463.272H186.193L195.121 437.16H202.321L190.177 471H184.129L175.633 446.952H176.785L168.193 471H162.145ZM199.567 471L215.119 437.16H221.119L236.671 471H229.183L225.151 461.592L228.127 463.656H208.111L211.087 461.592L207.103 471H199.567ZM218.047 445.08L211.903 459.72L210.607 457.848H225.631L224.335 459.72L218.143 445.08H218.047ZM239.596 471V437.16H255.052C258.828 437.16 261.74 438.072 263.788 439.896C265.836 441.72 266.86 444.264 266.86 447.528C266.86 449.64 266.396 451.464 265.468 453C264.54 454.536 263.196 455.72 261.436 456.552C259.708 457.384 257.58 457.8 255.052 457.8L255.436 456.984H257.404C258.748 456.984 259.916 457.32 260.908 457.992C261.932 458.632 262.812 459.624 263.548 460.968L269.02 471H260.812L254.956 460.2C254.636 459.624 254.268 459.176 253.852 458.856C253.436 458.504 252.956 458.264 252.412 458.136C251.9 457.976 251.324 457.896 250.684 457.896H247.036V471H239.596ZM247.036 452.52H253.708C255.692 452.52 257.18 452.12 258.172 451.32C259.196 450.52 259.708 449.32 259.708 447.72C259.708 446.152 259.196 444.968 258.172 444.168C257.18 443.368 255.692 442.968 253.708 442.968H247.036V452.52ZM273.017 471V437.16H278.537L296.729 460.344H295.433V437.16H302.345V471H296.873L278.681 447.768H279.929V471H273.017ZM309.158 471V437.16H316.598V471H309.158ZM323.361 471V437.16H328.881L347.073 460.344H345.777V437.16H352.689V471H347.217L329.025 447.768H330.273V471H323.361ZM376.254 471.528C372.446 471.528 369.214 470.808 366.558 469.368C363.934 467.928 361.934 465.912 360.558 463.32C359.182 460.728 358.494 457.688 358.494 454.2C358.494 450.616 359.198 447.512 360.606 444.888C362.046 442.264 364.11 440.232 366.798 438.792C369.518 437.352 372.75 436.632 376.494 436.632C378.094 436.632 379.63 436.792 381.102 437.112C382.574 437.4 383.934 437.816 385.182 438.36C386.462 438.904 387.55 439.56 388.446 440.328L386.046 446.136C384.574 445.048 383.07 444.28 381.534 443.832C379.998 443.352 378.334 443.112 376.542 443.112C373.118 443.112 370.542 444.056 368.814 445.944C367.118 447.832 366.27 450.584 366.27 454.2C366.27 457.816 367.134 460.552 368.862 462.408C370.622 464.264 373.214 465.192 376.638 465.192C377.79 465.192 378.974 465.08 380.19 464.856C381.406 464.632 382.606 464.312 383.79 463.896L382.398 466.92V457.704H375.102V452.328H388.542V468.936C387.454 469.48 386.222 469.944 384.846 470.328C383.502 470.712 382.094 471 380.622 471.192C379.15 471.416 377.694 471.528 376.254 471.528Z" fill="white"/>
                            <path d="M258.01 22.5C263.783 12.5 278.217 12.5 283.99 22.5L492.702 384C498.476 394 491.259 406.5 479.712 406.5H62.2879C50.7409 406.5 43.524 394 49.2975 384L258.01 22.5Z" fill="#F3B20E"/>
                            <path d="M248.009 268C249.017 291.378 258.913 294 271.009 294C280.585 294 291.888 292.977 292.509 268C293.013 247.739 301.009 167.14 301.009 147.917C301.009 130.773 282.101 127 270.509 127C258.917 127 238.505 131.812 239.009 147.917C239.513 164.022 246.818 240.37 248.009 268Z" fill="black"/>
                            <circle cx="271.009" cy="340" r="31" fill="black"/>
                        </svg>
                        <p onClick={(event) => event.stopPropagation()} className="flex flex-col justify-center items-center absolute text-sm lg:text-base bottom-[4%] leading-[102.3%] z-[9999] font-Nunito-sans nunito-sans text-center">
                        <span>This website contains copyrighted music, consider before recording video.</span>
                        <span>I do not own any license, all music and logo licenses belong to <span className="font-Cormorant-sC cormorant-sc-regular text-xl lg:text-4xl leading-[90.8%]">Queen</span> and <span className="font-[GillSansExtraBold] text-base lg:text-3xl leading-[90%] tracking-tight">LIVEAID</span></span>
                        </p>
                    </motion.div>
                </section>
            }
        </AnimatePresence>
        </>
    )
}