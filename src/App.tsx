import ErrorBoundary from './components/Hook/ErrorBoundary'
import Page from '@/pages/main'
import Menu from './components/Menu/main'
import { PageProvider } from './pages/Hook/PageProvider'
import Warning from './pages/Main/Warning/Warning'
import SoundAmbient from './utils/SoundAmbient'

function App() {
  return (
    <PageProvider>
      <ErrorBoundary>
        <Warning />
        <Page />
        <Menu />
        <SoundAmbient />
      </ErrorBoundary>
    </PageProvider>
  )
}

export default App
