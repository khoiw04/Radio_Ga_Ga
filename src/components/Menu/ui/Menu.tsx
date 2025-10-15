import { motion } from 'motion/react'
import { Switch, Route } from 'wouter'
import Drag from './Drag'
import Title from './Title'
import Tutorial from './Tutorial'
import Social from '@/components/Order/2/social'
import Homepage from '@/components/Order/1/Intro/main'
import Album from '@/components/Order/3/Album/main'
import { usePageContext } from '@/pages/Hook/usePageContext'

export default function Menu() {
  const { finish, state, click, isActive, location, dimension } = usePageContext()

  return (
    <>
      {!click && !finish && !state.ShowCredit && state.buttonActive && (
        <motion.div
          style={{
            position: !isActive
              ? 'fixed'
              : dimension.width > 539
                ? 'relative'
                : location === '/albums'
                  ? 'relative'
                  : 'absolute'
          }}
          className='flex h-dvh w-full items-center justify-center overflow-clip will-change-auto'
        >
          <Drag>
            <Title />
          </Drag>
          <Tutorial />
        </motion.div>
      )}
      <Switch>
        <Route path='/' component={Homepage} />
        <Route path='/social' component={Social} />
        <Route path='/albums' component={Album} />
      </Switch>
    </>
  )
}
