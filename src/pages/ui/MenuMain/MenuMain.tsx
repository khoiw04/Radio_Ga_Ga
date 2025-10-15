import { usePageContext } from '../../Hook/usePageContext'
import ButtonText from './ui/Bottom'
import More from './ui/More'
import { motion } from 'motion/react'
import useSound from 'use-sound';
import ButtonMenu from "/sound/ButtonMenu.wav"

export default function MenuMain({ children }: { children: React.ReactNode }) {
  const { state, toggleShowLyrics, toggleShowCredit } = usePageContext()
  const [play] = useSound(ButtonMenu, {
    volume: 0.1
  });
  const handleButton = (functions: (() => void)[]) => {
      play();
      functions.forEach(func => func());
  };

  return (
    <motion.section
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1
    }}
    transition={{
      delay: 4
    }}
    data-button={state.buttonActive}
    className='fixed data-[button=true]:absolute overflow-hidden flex md:block lg:flex size-full items-end justify-center
    data-[button=true]:pointer-events-auto pointer-events-none
    //AnimatePresence
    transition-discrete
    //initial
    zIndex: starting:data-[button=true]:z-10
    //animate
    zIndex: data-[button=true]:z-[8000]
    //exit
    zIndex: data-[button=false]:z-10
    //transtion
    transition-all duration-1000
    '
    >
      <div
        data-button={state.buttonActive}
        data-credit={state.ShowCredit}
        className={`relative top-0 h-0 w-full origin-bottom transition-all duration-1000
        md:data-[button=true]:h-[85%] data-[button=true]:h-[26%] md:data-[credit=true]:h-0 data-[credit=true]:h-0 bg-[var(--main)]`}
      >
        <div className='absolute size-full text-[2vh] md:text-[2vw] xl:text-[1.1vw]'>
          <More />
          <ButtonText
            onClick={() => handleButton([toggleShowLyrics])}
          >
            Lyrics
          </ButtonText>
          <ButtonText
            onClick={() => handleButton([toggleShowCredit])}
            right={true}
            credit={true}
          >
            Credit
          </ButtonText>
        </div>
        {children}
      </div>
    </motion.section>
  )
}
