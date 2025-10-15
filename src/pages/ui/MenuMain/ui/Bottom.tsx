import { useEffect, useState } from "react"
import { usePageContext } from '../../../Hook/usePageContext'
import { useScroll } from "motion/react"

interface ButtonTextProps {
    onClick: () => void;
    right?: boolean;
    credit?: boolean
    children: React.ReactNode
  }

const ButtonText: React.FC<ButtonTextProps> = ({ onClick, right = false, credit = false, children }) => {
  const { state, location } = usePageContext()
  const { scrollYProgress } = useScroll()
  const [button, setButton] = useState(true)

  useEffect(() => {
      const unsub = scrollYProgress.on("change", (lastest) => {
          if (location === "/social") {
              if (lastest >= 0.95) {
                  setButton(false)
              } else {
                  setButton(true)
              }
          } else if (location === "/") {
              setButton(true)
          } else if (location === "/albums") {
              if (lastest >= 0.31) {
                setButton(false)
              } else {
                  setButton(true)
              }
          }
      })

      return () => unsub()
  }, [button, location, scrollYProgress, state.buttonActive])

    return (
      <div
        data-show={button}
        data-credit={state.ShowCredit}
        data-button={state.buttonActive}
        onClick={onClick}
        className={`group font-PPRadio-grotesk tracking-wide absolute bottom-[0.4%] md:bottom-[2%] xl:bottom-[3%] z-[9000] cursor-default data-[button=true]:cursor-pointer
${right ? 'right-0 pr-[2%]' : 'pl-[2%]'} ${credit ? '' : 'data-[credit=true]:cursor-default'}

        //AnimatePresence
        transition-discrete
        //initial
        display: starting:hidden
        opactiy: starting:data-[button=true]:opacity-0
        //animate
        display: data-[show=true]:block
        opacity: data-[show=true]:opacity-100
        //exit
        display: data-[show=false]:hidden
        opacity: data-[show=false]:opacity-0
        //transition
        transition-all duration-1000
        `
      }
      >
        <div
          data-lyrics={state.ShowLyrics}
          data-button={state.buttonActive}
          data-credit={state.ShowCredit}
          className={`relative size-full translate-y-full opacity-0 blur-xs transition-all duration-700 after:absolute after:-bottom-1 after:h-[1px] after:w-0 data-[credit=true]:after:bg-white after:bg-oklch-white-relative after:opacity-0 after:blur-xs after:transition-all after:duration-700
          data-[button=true]:translate-y-0 data-[button=true]:opacity-100 data-[button=true]:blur-none
          ${credit ? 'data-[credit=false]:duration-1000 data-[credit=true]:-translate-y-[26%] md:data-[credit=true]:-translate-y-[85%] data-[credit=true]:text-black data-[credit=true]:duration-1000 data-[credit=true]:after:w-full data-[credit=true]:after:bg-oklch-white-relative data-[credit=true]:after:opacity-100 data-[credit=true]:after:blur-none'
                   : 'data-[credit=true]:translate-y-full data-[credit=true]:opacity-0 data-[credit=true]:blur-xs data-[lyrics=true]:after:w-full data-[lyrics=true]:after:opacity-100 data-[lyrics=true]:after:blur-none'}
          `}
        >
          <h3
            data-lyrics={state.ShowLyrics}
            data-credit={state.ShowCredit}
            className={`flex size-full flex-col items-center justify-center transition-all duration-700 transform-3d group-hover:rotate-x-90
            ${credit ? 'data-[credit=true]:rotate-x-90'
                     : 'data-[lyrics=true]:rotate-x-90'}`}
          >
            <p
              data-lyrics={state.ShowLyrics}
              data-credit={state.ShowCredit}
              className={`pointer-events-none data-[credit=true]:text-white text-oklch-white-relative transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0 group-hover:blur-xs
              ${credit ? 'data-[credit=true]:-translate-y-full data-[credit=true]:opacity-0 data-[credit=true]:blur-xs'
                       : 'data-[lyrics=true]:-translate-y-full data-[lyrics=true]:opacity-0 data-[lyrics=true]:blur-xs'}`}
            >
              {children}
            </p>
            <p
              data-lyrics={state.ShowLyrics}
              data-credit={state.ShowCredit}
              className={`pointer-events-none data-[credit=true]:text-white text-oklch-white-relative absolute translate-y-2.5 -rotate-x-90 opacity-0 blur-xs transition-all duration-700 transform-3d group-hover:opacity-100 group-hover:blur-none
                ${credit ? 'data-[credit=true]:opacity-100 data-[credit=true]:blur-none'
                         : 'data-[lyrics=true]:opacity-100 data-[lyrics=true]:blur-none'}`}
            >
              {children}
            </p>
          </h3>
        </div>
      </div>
    )
}

export default ButtonText