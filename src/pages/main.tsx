import { AnimatePresence } from 'motion/react'
import Transitions from './Main/Transitions/Transitions'
import Layout from './Main/Layout/Layout'
import { usePageContext } from './Hook/usePageContext'

export default function Page() {
  const { ready, finish } = usePageContext()

  return (
    <AnimatePresence mode='popLayout'>
      {ready && (
        <>
          {!finish && <Transitions />}
          {finish && <Layout />}
        </>
      )}
    </AnimatePresence>
  )
}
