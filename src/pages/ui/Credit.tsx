import { usePageContext } from "../Hook/usePageContext"

export default function Credit() {
    const { state } = usePageContext()

    return (
    <section data-credit={state.ShowCredit} className="text-[#581D49] size-full justify-center items-center z-[8000] absolute bg-amber-100/40 backdrop-blur-sm backdrop-brightness-110 backdrop-opacity-90
    //AnimatePresence
    transition-discrete
    //initial
    display: hidden
    opacity: starting:data-[credit=true]:opacity-0
    //animate
    display: data-[credit=true]:flex
    opacity: data-[credit=true]:opacity-100
    //exit
    display: data-[credit=false]:hidden
    opacity: data-[credit=false]:opacity-0
    //tranistion
    transition-all duration-1000
    ">
        <h3 className="top-1/4 creditTitle absolute overflow-clip">
            <span data-button={state.buttonActive} className="font-Nabla nabla text-xl data-[button=true]:translate-y-0 inline-block -translate-y-full transition-transform duration-1000">
                Credit
            </span>
        </h3>
        <main className="xl:w-1/2 w-2/3 h-1/3 absolute flex items-center">
            <div className="w-full sm:h-3/4 h-full font-DMSerif-text flex flex-col justify-between items-center transition-all text-center creditInformation">
                <p className="overflow-clip relative">
                    <span data-button={state.buttonActive} className="data-[button=true]:translate-y-0 text-2xl inline-block -translate-y-full transition-transform duration-1000">
                        A-Side: <span className="font-Bebas-neue">"Radio Ga Ga" (extended version)</span>  — B-Side: <span className="font-Bebas-neue">"Radio Ga Ga" (instrumental)</span>
                    </span>
                </p>
                <p className="overflow-clip relative">
                    <span data-button={state.buttonActive} className="data-[button=true]:translate-y-0 text-2xl inline-block -translate-y-full transition-transform duration-1000">
                        Released: <span className="font-Bebas-neue">23 January 1984</span>
                    </span>
                </p>
                <p className="overflow-clip relative sm:hidden inline-block">
                    <span data-button={state.buttonActive} className="data-[button=true]:translate-y-0 text-2xl inline-block -translate-y-full transition-transform duration-1000">
                        Songwriters: <span className="font-Bebas-neue">Roger taylor —</span> Producers: <span className="font-Bebas-neue">Queen & REinhold mack —</span> Genres: <span className="font-Bebas-neue">Synth-pop, stadium rock, Pop Rock</span>
                    </span>
                </p>
                <p className="overflow-clip relative hidden sm:block">
                    <span data-button={state.buttonActive} className="inline-block data-[button=true]:translate-y-0 text-2xl -translate-y-full transition-transform duration-1000">
                        <span>Songwriters: <span className="font-Bebas-neue">Roger Taylor —</span> Producers: <span className="font-Bebas-neue">Queen & REinhold mack —</span></span>
                        <br />
                        <span>Genres: <span className="font-Bebas-neue">Synth-pop, stadium rock, Pop Rock</span></span>
                    </span>
                </p>
            </div>
        </main>
    </section>
    )
}