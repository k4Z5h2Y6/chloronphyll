import { useTheme } from 'next-themes';
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { Logo } from './Logo';

type Props = {
  isNavOpened: boolean;
  setIsNavOpened: Dispatch<SetStateAction<boolean>>;
};

export const Header = ({ isNavOpened, setIsNavOpened }: Props) => {
  const { theme } = useTheme();
  return (
    <>
      {theme === 'light' ?
        <div className='headerI'>
          <Image
            src='/Header/SoilLight1920_450.png'
            alt='soil'
            width={1920}
            height={450}
            layout='responsive'
          />
          <Logo isNavOpened={isNavOpened} setIsNavOpened={setIsNavOpened} />
        </div>
        :
        <div className='headerI'>
          <Image
            src='/Header/SoilDark1920_450.png'
            alt='soil'
            width={1920}
            height={450}
            layout='responsive'
          />
          <Logo isNavOpened={isNavOpened} setIsNavOpened={setIsNavOpened} />
        </div>
      }

      <style jsx>{`
        .headerI {
          width: 100vw;
          position: fixed;
          top: 93vh;
          right: 0;
          left: 0;
          z-index: 10;
        }
        /* widthが1024px以下かつ縦画面(スマホ版） */
        @media screen and (max-width: 1024px) and (orientation: portrait) {
          .headerI {
            top: calc(100vh - 7vw);
          }
        }
      `}</style>
    </>
  );
};