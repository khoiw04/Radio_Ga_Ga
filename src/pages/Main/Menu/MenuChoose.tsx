import { MenuProvider } from '@/components/Hook/MenuProvider'
import Drag from '@/components/Menu/ui/Drag'
import Title from '@/components/Menu/ui/Title'

export default function MenuChoose() {
  return (
    <div className='absolute bottom-0 flex w-full h-19/20 items-center justify-center overflow-visible md:overflow-hidden lg:overflow-visible'>
        <MenuProvider>
          <Drag>
            <Title />
          </Drag>
        </MenuProvider>
    </div>
  )
}
