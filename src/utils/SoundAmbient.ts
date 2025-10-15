import useSound from 'use-sound';
import LaterDrums from "/sound/85_LaterDrums_823_2.ogg"
import Ambient from "/sound/80_RainAndKeys_823.ogg"
import Synth from "/sound/ambient.wav"
import Piano from "/sound/ambient.ogg"
import background from "/sound/backgroun.ogg"
import { useEffect, useState } from 'react';
import { animate, useMotionValue } from 'motion/react';
import { usePageContext } from '@/pages/Hook/usePageContext';

export default function SoundAmbient() {
    const { finish, location, state, click, AmbientFlag } = usePageContext()

    const [main, setVolumeMain] = useState(0)
    const [reset, setVolumeReset] = useState(0)
    const volumeMain = useMotionValue(main)
    const volumeRest = useMotionValue(reset)
    const [playDrums] = useSound(LaterDrums, {
      interrupt: true,
      soundEnabled: true,
      volume: main,
      loop: true
    })
    const [playAmbient, { stop }] = useSound(Ambient, {
      interrupt: true,
      soundEnabled: true,
      volume: reset,
      loop: true,
    })
    const [play1] = useSound(Synth, {
        volume: main
    })
    const [play2] = useSound(Piano, {
        volume: reset
    })

    //sound
    useEffect(() => {
        if (!finish) {
        animate(volumeMain, 0, {
            duration: 1.3,
            onUpdate(latest) {
            setVolumeMain(latest)
            },
        })
        }
        if (finish) {
        if (location === "/") {
            animate(volumeMain, 0, {
            duration: 1.3,
            onUpdate(latest) {
                setVolumeMain(latest)
            },
            })
        } else {
            setTimeout(() => {
                if (state.buttonActive) {
                    animate(volumeMain, 0.2, {
                        duration: 1,
                        onUpdate(latest) {
                        setVolumeMain(latest)
                    }})
                } if (!state.buttonActive) {
                    animate(volumeMain, 0.4, {
                        duration: 1.8,
                        onUpdate(latest) {
                        setVolumeMain(latest)
                        },
                    })
                }
            }, 2500)
        }
        }
    }, [location, finish, state.buttonActive, volumeMain])

    useEffect(() => {
        if (!finish) return
        playDrums()
    }, [playDrums, finish])
    useEffect(() => {
        if (finish) return
        stop()
    }, [playDrums, finish, stop])

    useEffect(() => {
        if (!click && !finish && AmbientFlag) {
            animate(volumeRest, 1, {
                duration: 1.3,
                delay: 4,
                onUpdate(latest) {
                    setVolumeReset(latest)
                },
                onPlay() {
                    playAmbient()
                }
            })
        } else {
            animate(volumeRest, 0, {
                duration: 1.3,
                onPlay() {
                    stop()
                },
                onUpdate(latest) {
                setVolumeReset(latest)
                },
            })
        }
    }, [click, playAmbient, AmbientFlag, volumeRest, finish, stop])

    //ambient
    useEffect(() => {
        let soundInterval: number | NodeJS.Timeout;

        const playRandomSound = () => {
          if (!finish) {
            play1();
          } else {
            play2();
          }
        };

        const startSoundInterval = () => {
          const randomDelay = Math.floor(Math.random() * (600000 - 200000)) + 200000;
          soundInterval = setInterval(playRandomSound, randomDelay);
        };

        startSoundInterval();

        return () => clearInterval(soundInterval);
      }, [finish, play1, play2]);

    return null
}