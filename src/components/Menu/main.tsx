import { MenuProvider } from '../Hook/MenuProvider'
import ErrorBoundary from '../Hook/ErrorBoundary'
import Menu from './ui/Menu'

export default function Main() {
  return (
    <MenuProvider>
      <ErrorBoundary>
        <Menu />
      </ErrorBoundary>
    </MenuProvider>
  )
}
