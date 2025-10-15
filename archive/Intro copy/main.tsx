import Line from './ui/Line'
import MouseProvider from './hook/MouseProvider'
import ErrorBoundary from './hook/ErrorBoundary'
import Time from './ui/Time'

export default function Intro() {
  return (
    <MouseProvider>
      <ErrorBoundary>
        <div className='relative flex h-dvh w-full items-center justify-center'>
          <Time />
          <Line />
        </div>
      </ErrorBoundary>
    </MouseProvider>
  )
}
