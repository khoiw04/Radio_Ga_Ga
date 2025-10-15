import { createContext } from 'react'

export interface Dimension {
  width: number
  height: number
}

export interface State {
  buttonActive: boolean;
  ShowLyrics: boolean;
  ShowCredit: boolean;
  changeBodyColor: boolean
}

export interface Album {
  index: number;
  title: string;
  src: string;
  alt: string;
  spotify: string;
  isFirst?: boolean;
  isLast?: boolean;
  mobile: string
}

export interface PageContextType {
  ready: boolean;
  setReady: React.Dispatch<React.SetStateAction<boolean>>;
  finish: boolean;
  setFinish: React.Dispatch<React.SetStateAction<boolean>>;
  dimension: Dimension;
  setDimension: React.Dispatch<React.SetStateAction<Dimension>>;
  click: boolean;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
  AmbientFlag: boolean;
  setFlagAmbient: React.Dispatch<React.SetStateAction<boolean>>;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  location: string
  setSocialSpecial: React.Dispatch<React.SetStateAction<boolean>>;
  socialSpecial: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean
  setInProgress: React.Dispatch<React.SetStateAction<boolean>>;
  inProgress: boolean
  setInProgress2: React.Dispatch<React.SetStateAction<boolean>>;
  inProgress2: boolean
  setWaring: React.Dispatch<React.SetStateAction<boolean>>;
  warning: boolean
  setAnimationComplete: React.Dispatch<React.SetStateAction<boolean>>;
  animationComplete: boolean
  setSize: React.Dispatch<React.SetStateAction<number>>;
  size: number
  setLocation: (url: string) => void
  toggleButtonActive: () => void;
  toggleShowLyrics: () => void;
  toggleShowCredit: () => void;
  Reset: () => void;
  state: {
    buttonActive: boolean;
    ShowLyrics: boolean;
    ShowCredit: boolean;
    changeBodyColor: boolean
  };
  setState: React.Dispatch<React.SetStateAction<{
    buttonActive: boolean;
    ShowLyrics: boolean;
    ShowCredit: boolean;
    changeBodyColor: boolean
  }>>;
  albumsData: Album[];
}
export const PageContext = createContext<PageContextType | undefined>(undefined)
