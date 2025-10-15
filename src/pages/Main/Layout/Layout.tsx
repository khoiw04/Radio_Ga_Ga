import { usePageContext } from '@/pages/Hook/usePageContext'
import Albums from '@/pages/components/Albums/Albums'
import Social from '@/pages/components/Social/Social'
import MenuChoose from '../../Main/Menu/MenuChoose'
import MenuMain from '../../ui/MenuMain/MenuMain'
import Video from '../../Main/Video/Video'
import Backdrop from '../../ui/Backdrop'
import { Switch, Route } from 'wouter'
import Button from '../../ui/Button'
import Credit from '../../ui/Credit'
import Sounds from '../../ui/Sounds'

export default function Layout() {
  const { state } = usePageContext()

  return (
    <main data-button={state.buttonActive} className='relative z-[200] flex h-dvh w-full items-center justify-center overflow-visible data-[button=true]:overflow-hidden'>
      <Switch>
        <Route path='/' />
        <Route path='/social' component={Social} />
        <Route path='/albums' component={Albums} />
      </Switch>
      <Credit />
      <Sounds />
      <Button />
      <MenuMain>
        <MenuChoose />
      </MenuMain>
      <Backdrop />
      <Video />
    </main>
  )
}
