import { usePageContext } from "@/pages/Hook/usePageContext"
import All from "./ui/All"
import Ipad from "./ui/Ipad"
import Real from "./ui/Real"
import { AlbumsProvider } from "./hook/AlbumsProvider"
import ErrorBoundary from "./hook/ErrorBoundary"

export default function Albums() {
    const { dimension } = usePageContext()

    return (
        <>
            {dimension.width < 1101 && <All />}
            {/* {dimension.width > 539 && dimension.width * 4/5 < dimension.height && <Ipad />} */}
        <AlbumsProvider>
            <ErrorBoundary>
                {dimension.width > 1100 && <Real />}
            </ErrorBoundary>
        </AlbumsProvider>
        </>
    )
}