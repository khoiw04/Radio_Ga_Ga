import React, { useState, useEffect } from 'react'
import { animate, useScroll } from 'motion/react'
import { PageContext, Dimension, State, Album } from './PageContext'
import { useLocation } from 'wouter'
import Lenis from 'lenis'
import Tempus from 'tempus'

interface PageProvideProps {
  children: React.ReactNode
}

export const PageProvider: React.FC<PageProvideProps> = ({ children }) => {
  const [ready, setReady] = useState<boolean>(false)
  const [finish, setFinish] = useState<boolean>(false)
  const [click, setClick] = useState<boolean>(false)
  const [isActive, setIsActive] = useState<boolean>(false)
  const [socialSpecial, setSocialSpecial] = useState<boolean>(false)
  const [location, setLocation] = useLocation()
  const [dimension, setDimension] = useState<Dimension>({ width: 0, height: 0 })
  const [show, setShow] = useState<boolean>(true)
  const [inProgress, setInProgress] = useState<boolean>(false)
  const [inProgress2, setInProgress2] = useState<boolean>(false)
  const { scrollYProgress } = useScroll()
  const [warning, setWaring] = useState<boolean>(true)
  const [AmbientFlag, setFlagAmbient] = useState<boolean>(false)
  const [animationComplete, setAnimationComplete] = useState<boolean>(false)
  const [size, setSize] = useState<number>(dimension.width / 3)
  const [state, setState] = useState<State>({
    buttonActive: true,
    ShowLyrics: false,
    ShowCredit: false,
    changeBodyColor: false
  })

  const albumsData: Album[] = [
    {
      index: 1,
      title: "Bohemian Rhapsody",
      src: "/albums/bohemian.avif",
      alt: "Bohemian Rhapsody",
      spotify: "https://open.spotify.com/album/6i6folBtxKV28WX3msQ4FE",
      isFirst: true,
      mobile: "https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b"
    },
    {
      index: 2,
      title: "The Night Come Down",
      src: "/albums/thenightcomedown.avif",
      alt: "The Night Come Down",
      spotify: "https://open.spotify.com/track/6QZ72YhYrglkOFfjWs1QGM",
      mobile: "https://i.scdn.co/image/ab67616d0000b2733a7cc585fb449f55ddfad638"
    },
    {
      index: 3,
      title: "Queen Rock Montreal",
      src: "/albums/montreal.avif",
      alt: "Montreal",
      spotify: "https://open.spotify.com/album/58cLPp4yE9IkQ7TvuHS5r9",
      mobile: "https://i.scdn.co/image/ab67616d0000b273efd5124f95524b047ff71be8"
    },
    {
      index: 4,
      title: "Made In Heaven",
      src: "/albums/madeinheaven.avif",
      alt: "Made In Heaven",
      spotify: "https://open.spotify.com/album/391ScNR3xKywWSpfDwP3n0",
      mobile: "https://i.scdn.co/image/ab67616d0000b2735f8c271d01157fdb59478f14"
    },
    {
      index: 5,
      title: "The Miracle",
      src: "/albums/miracle.avif",
      alt: "Miracle",
      spotify: "https://open.spotify.com/album/3h6SV9wHJtNL1YswZUJs8V",
      mobile: "https://i.scdn.co/image/ab67616d0000b27327fda1adf296f242416b4230"
    },
    {
      index: 6,
      title: "The Works",
      src: "/albums/works.avif",
      alt: "THE WORKS",
      spotify: "https://open.spotify.com/album/5RS9xkMuDmeVISqGDBmnSa",
      mobile: "https://i.scdn.co/image/ab67616d0000b2735be5f807f6f0549e198a44b4"
    },
    {
      index: 7,
      title: "Hot Space",
      src: "/albums/hotspace.avif",
      alt: "Hot Space",
      spotify: "https://open.spotify.com/album/6reTSIf5MoBco62rk8T7Q1",
      mobile: "https://i.scdn.co/image/ab67616d0000b273d254ca497999ae980a5a38c5"
    },
    {
      index: 8,
      title: "Greatest Hits",
      src: "/albums/greatesthits.avif",
      alt: "Greatest Hits",
      spotify: "https://open.spotify.com/album/3VWrUk4vBznMYXGMPc7dRB",
      mobile: "https://i.scdn.co/image/ab67616d0000b273bb19d0c22d5709c9d73c8263"
    },
    {
      index: 9,
      title: "Live Killers",
      src: "/albums/livekiller.avif",
      alt: "Live Killers",
      spotify: "https://open.spotify.com/album/4i5lh5phaCZaM35CytCbvc",
      mobile: "https://i.scdn.co/image/ab67616d0000b273655f330280ab2b4913c33a81"
    },
    {
      index: 10,
      title: "Jazz",
      src: "/albums/jazz.avif",
      alt: "Jazz",
      spotify: "https://open.spotify.com/album/2yuTRGIackbcReLUXOYBqU",
      mobile: "https://i.scdn.co/image/ab67616d0000b2737c39dd133836c2c1c87e34d6"
    },
    {
      index: 11,
      title: "Sheer Heart Attack",
      src: "/albums/SHA.avif",
      alt: "Sheer Heart Attack",
      spotify: "https://open.spotify.com/album/5SBHID8qGG3x52zgoh2ilz",
      mobile: "https://i.scdn.co/image/ab67616d0000b27322fcc5e24b98c4acae781c52"
    },
    {
      index: 12,
      title: "Queen II",
      src: "/albums/queen 2.avif",
      alt: "Queen II",
      spotify: "https://open.spotify.com/album/48MhNEYxMJvcBbqz85UTQP",
      mobile: "https://i.scdn.co/image/ab67616d0000b273d92f69c3b3adb389afdde64f"
    },
    {
      index: 13,
      title: "Bohemian Rhapsody",
      src: "/albums/bohemian.avif",
      alt: "Bohemian Rhapsody",
      spotify: "https://open.spotify.com/album/6i6folBtxKV28WX3msQ4FE",
      isLast: true,
      mobile: "https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b"
    },
  ];

  //reset
  const Reset = async (): Promise<void> => {
      setState(prevState => ({
        ...prevState,
        buttonActive: true,
        ShowLyrics: false,
        ShowCredit: false,
        changeBodyColor: false,
      }));
      setFinish(false);
      setReady(false);
      setClick(false);
      setIsActive(false);
      setInProgress(false);
      setInProgress2(false);
      setSocialSpecial(false);
      setFlagAmbient(true);
      setAnimationComplete(false)
  };

  //button hompage
  const toggleButtonActive = (): void => {
      animate(window.scrollY, 0, {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        onUpdate(latest) {
          window.scrollTo(0, latest)
        },
        onComplete() {
          setState(prevState => ({
            ...prevState,
            buttonActive: !prevState.buttonActive,
            changeBodyColor: true,
            ShowCredit: false
          }))
        }
      })
  }
  const toggleShowLyrics = (): void => {
    setState(prevState => ({
      ...prevState,
      buttonActive: !prevState.buttonActive,
      ShowLyrics: !prevState.ShowLyrics
    }))
  }
  const toggleShowCredit = (): void => {
    animate(window.scrollY, 0, {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(latest) {
        window.scrollTo(0, latest)
      },
      onComplete() {
        setState(prevState => ({
          ...prevState,
          ShowCredit: !prevState.ShowCredit
        }))
      }
    })
  }

  //support//key
  useEffect(() => {
    const handleWindow = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    const resizeWindow = new ResizeObserver(handleWindow)
    resizeWindow.observe(document.body)

    return () => {
      resizeWindow.disconnect()
    }
  }, [])
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.key === 'Escape' || event.key === 'Enter' || event.key === 'Backspace' || event.key === 'Control') && !click) {
        setIsActive(prevIsActive => !prevIsActive)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [click])
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.key === 'Escape' || event.key === 'Enter' || event.key === 'Backspace') && ready) {
        animate(window.scrollY, 0, {
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
          onUpdate(latest) {
            window.scrollTo(0, latest)
          },
          onComplete() {
            setState(prevState => ({
              ...prevState,
              buttonActive: !prevState.buttonActive,
              changeBodyColor: true,
              ShowCredit: false
            }))
          }
        })
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [ready, click])

  //scroll
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      infinite: false,
      syncTouch: true
    })

    const animateLenis = (time: number) => {
      lenis.raf(time)
    }

    Tempus.patch()
    const un = Tempus.add(animateLenis, {
      priority: -1,
      fps: 120
    })

    if (location === "/albums" && ready && !state.buttonActive) {
      lenis.destroy()
    }

    return () => {
      un()
      lenis.destroy()
    }
}, [location, ready, state.buttonActive])
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [isActive])

  //document color
  useEffect(() => {
    if (state.changeBodyColor) {
      document.documentElement.style.setProperty(
        '--main',
        'oklch(33.86% 0.1038 338.96)'
      )
    } else {
      document.documentElement.style.setProperty(
        '--main',
        'oklch(26.03% 0 0)'
      )
    }

    return () =>
      document.documentElement.style.setProperty(
        '--main',
        'oklch(26.03% 0 0)'
      )
  }, [state.changeBodyColor])
  useEffect(() => {
    const handleScrollChange = (progress: number) => {
      if (state.changeBodyColor) {
        if (location === '/albums') {
          const color = progress >= 0.95 ? 'oklch(26.03% 0 0)' : 'oklch(33.86% 0.1038 338.96)';
          document.documentElement.style.setProperty('--main', color);
        } else if (location === '/social') {
          const color = progress >= 0.95 ? 'oklch(88.53% 0 0)' : 'oklch(33.86% 0.1038 338.96)';
          document.documentElement.style.setProperty('--main', color);
        } else if (location === '/') {
          document.documentElement.style.setProperty('--main', 'oklch(33.86% 0.1038 338.96)');
        }
      }
    };
    const unsub = scrollYProgress.on('change', handleScrollChange);

    return () => {
      unsub()
    };
  }, [scrollYProgress, location, state.changeBodyColor])

  return (
    <PageContext.Provider
      value={{
        ready,
        setReady,
        finish,
        setFinish,
        dimension,
        setDimension,
        click,
        setClick,
        state,
        setState,
        isActive,
        setIsActive,
        location,
        setLocation,
        socialSpecial,
        Reset,
        show,
        setShow,
        inProgress,
        setInProgress,
        inProgress2,
        setWaring,
        warning,
        setAnimationComplete,
        animationComplete,
        setSize,
        size,
        albumsData,
        setInProgress2,
        setSocialSpecial,
        toggleButtonActive,
        toggleShowLyrics,
        toggleShowCredit,
        AmbientFlag,
        setFlagAmbient
      }}
    >
      {children}
    </PageContext.Provider>
  )
}
