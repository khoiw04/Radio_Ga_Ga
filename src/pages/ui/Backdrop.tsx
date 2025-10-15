import { usePageContext } from "../Hook/usePageContext";

export default function Backdrop() {
    const { state } = usePageContext()

    return (
        <div
        data-button={state.buttonActive}
        data-credit={state.ShowCredit}
        // className="size-full bg-black absolute z-50 opacity-0 data-[credit=true]:opacity-0 data-[button=true]:opacity-100 transition-opacity duration-1000"
        className="size-full bg-black absolute opacity-0 z-50 data-[credit=true]:blur-xs
            //AnimatePresence
            transition-discrete
            //initial
            display: starting:hidden
            opacity: starting:data-[button=true]:opacity-0
            //animate
            display: data-[button=true]:block
            opacity: data-[button=true]:opacity-100
            opacity: data-[credit=true]:opacity-0
            //exit
            display: data-[button=false]:hidden
            opacity: data-[button=false]:opacity-0
            //transition
            transition-all duration-1000
        "
        />
    )
}