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
        .logoLightOnLightMode {
          width: 341px;
          height: 294px;
          position: fixed;
          right: 12.5vw;
          bottom: 0;
          z-index: 11;
          transform: translateX(50%);
          transition: all 1s ease;
        }
        .logoDarkOnDarkMode {
          width: 341px;
          height: 294px;
          position: fixed;
          right: 12.5vw;
          bottom: 0;
          z-index: 11;
          transform: translateX(50%);
          transition: all 1s ease;
        }
      `}</style>
    </>
  );
};