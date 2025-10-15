import {
  DOMKeyframesDefinition,
  DynamicAnimationOptions,
  useAnimate
} from 'motion/react'
import { ElementOrSelector } from 'motion-dom'
import { useEffect, useRef } from 'react'
import { useMenuContext } from '@/components/Hook/useMenuContext'

type AnimateParams = [
  ElementOrSelector,
  DOMKeyframesDefinition,
  (DynamicAnimationOptions | undefined)?
]

type Animation = AnimateParams | Animation[]

export default function useMotionTimeline(
  keyframes: Animation[],
  count: number = 1
) {
  const { ready } = useMenuContext()
  const mounted = useRef(true)
  const [scope, animate] = useAnimate()

  useEffect(() => {
    mounted.current = true
    const processAnimation = async (animation: Animation) => {
      if (Array.isArray(animation[0])) {
        await Promise.all(
          animation.map(async (a: any) => {
            await processAnimation(a as Animation)
          })
        )
      } else {
        await animate(...(animation as AnimateParams))
      }
    }

    const handleAnimate = async () => {
      for (let i = 0; i < count; i++) {
        for (const animation of keyframes) {
          if (!mounted.current) return

          if (ready && mounted.current) {
            await processAnimation(animation)
          }
        }
      }
    }

    handleAnimate()

    return () => {
      mounted.current = false
    }
  }, [animate, count, keyframes, ready])

  return scope
}
