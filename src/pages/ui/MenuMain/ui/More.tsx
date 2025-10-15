import { usePageContext } from '../../../Hook/usePageContext'
import useSound from 'use-sound';
import ButtonMenu from "/sound/tickradiofilter.ogg"
import Piano from "/sound/piano.ogg"
import { useState } from 'react';

export default function More() {
  const [playbackRate, setPlaybackRate] = useState(0.75);
    const { state, Reset } = usePageContext()
    const [play] = useSound(ButtonMenu, {
      playbackRate
    });
    const [playReset] = useSound(Piano, {
      sprite: {
        '1': [0, 8000],
        '2': [8000, 4000],
        '3': [12000, 8000],
        '4': [20000, 8000]
      },
      volume: 2
    });

    const handleGroupHover = (className: string) => {
      const letters = document.querySelectorAll(className);

      letters.forEach((_letter, index) => {
        const timeoutid = setTimeout(() => {
          play();
          if (className === '.reset') {
            setPlaybackRate(playbackRate + 0.4);
          } else {
            setPlaybackRate(playbackRate - 0.44);
          }
        }, index * 23.4);

        return () => clearTimeout(timeoutid)
      });
    };

    const playRandomSound = () => {
      const randomIndex = Math.floor(Math.random() * 4) + 1;

      playReset({ id: `${randomIndex}` });
    };

    return (
    <h3 onClick={Reset} className='absolute top-[0.4%] hidden w-full overflow-clip pl-[1.8%] md:top-[2%] md:block xl:top-[3%]'>
        <span
          onMouseDown={playRandomSound}
          data-credit={state.ShowCredit}
          data-button={state.buttonActive}
          onMouseEnter={() => handleGroupHover('.reset')}
          onMouseLeave={() => handleGroupHover('.more')}
          className='group relative z-[9000] whitespace-nowrap max-w-fit inline-block -translate-y-full rounded-full transition-all duration-1000 data-[button=true]:translate-y-0 data-[credit=true]:-translate-y-full'
        >
          {'Reset'.split('').map((letter: string, index: number) => {
            return (
              <em
                key={index}
                style={{ transitionDelay: `${index * 19.5}ms` }}
                className='inline-block reset -translate-y-[130%] font-sans cursor-pointer blur-sm transition-all duration-700 group-hover:translate-y-0 group-hover:blur-none'
              >
                {letter}
              </em>
            )
          })}
          <span className='absolute inset-0'>
            {'More'.split('').map((letter: string, index: number) => {
              return (
                <span
                  key={index}
                  style={{ transitionDelay: `${index * 10}ms` }}
                  className='more inline-block translate-y-0 blur-none transition-all duration-700 group-hover:translate-y-[130%] group-hover:blur-sm'
                >
                  {letter}
                </span>
              )
            })}
          </span>
        </span>
      </h3>
    )
}