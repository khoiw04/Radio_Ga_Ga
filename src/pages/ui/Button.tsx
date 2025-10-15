import { useEffect, useState } from "react"
import { usePageContext } from "../Hook/usePageContext"
import { motion } from "motion/react"
import useSound from 'use-sound';
import ButtonSound from "/sound/ridebutton.wav"

export default function Button() {
    const { state, finish, location, toggleButtonActive } = usePageContext()
    const [button, setButton] = useState(false)
    const [play] = useSound(ButtonSound, {
        interrupt: true,
        playbackRate: 1.9,
        volume: location === "/" ? 0 : 0.1
      });

    const handleButton = (functions: (() => void)[]) => {
        play();
        functions.forEach(func => func())
    };

    useEffect(() => {
        if (finish) {
            const timeoutId = setTimeout(() => {
                setButton(true);
            }, 10000);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [finish]);

    // useEffect(() => {
    //     if (location === "/albums" && state.buttonActive) {
    //     const unsub = scrollYProgress.on("change", (lastest) => {
    //             if (lastest >= 0.95) {
    //                 setButton(false)
    //             } else {
    //                 setButton(true)
    //             }
    //     })

    //     return () => unsub()
    // }
    // }, [button, location, scrollYProgress, state.buttonActive])

    return (
            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: button ? 1 : 0,
                    transition: {
                        duration: 1
                    }
                }}
                onClick={() => handleButton([toggleButtonActive])}
                className="2xl:w-[5%] group xl:w-[6%] z-[99999] w-[7%] lg:h-[3.6%] h-[3%] max-w-40 min-w-14 min-h-7 max-h-8 xl:max-h-14 fixed bottom-[0.4%] md:bottom-[2%] bg-oklch-yellow flex justify-center items-center cursor-pointer"
            >
                <div
                    data-button={state.buttonActive}
                    className="w-full
                    after:content-[''] after:block after:w-[80%] after:m-auto after:bg-oklch-main after:relative after:transition-all after:duration-700 after:ease-in-out
                    before:content-[''] before:block before:w-[80%] before:m-auto before:bg-oklch-main before:relative before:transition-all before:duration-700 before:ease-in-out
                    after:top-[-4px] before:top-[4px] lg:after:top-[-5px] lg:before:top-[5px]
                    data-[button=true]:after:top-0 data-[button=true]:before:top-0
                    data-[button=true]:lg:after:top-0 data-[button=true]:lg:before:top-0
                    data-[button=true]:after:rotate-20 data-[button=true]:before:-rotate-20
                    heightButton after:origin-center before:origin-center
                    "
                />
            </motion.div>
    )
}