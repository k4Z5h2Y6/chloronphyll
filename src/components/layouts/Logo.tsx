import { useTheme } from 'next-themes';
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type Props = {
  isNavOpened: boolean;
  setIsNavOpened: Dispatch<SetStateAction<boolean>>;
};

export const Logo = ({ isNavOpened, setIsNavOpened }: Props) => {
  const { theme } = useTheme();
  return (
    <>
      {theme === 'light' ?
        <div
          className='logoLightOnLightMode'
          onMouseEnter={() => { setIsNavOpened(true); }}
          onMouseLeave={() => { setIsNavOpened(false); }}
        >
          <Image
            src='/Header/LogoLight1024_1024.png'
            alt='logo'
            width={1024}
            height={1024}
            layout='responsive'
          />
        </div>
        :
        <div
          className='logoDarkOnDarkMode'
          onMouseEnter={() => { setIsNavOpened(true); }}
          onMouseLeave={() => { setIsNavOpened(false); }}
        >
          <Image
            src='/Header/LogoDark1024_1024.png'
            alt='logo'
            width={1024}
            height={1024}
            layout='responsive'
          />
        </div>
      }


{/* 20vwbr */}
      <style jsx>{`
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
        {/* @media screen and (max-width: 1024px) and (orientation: portrait) { */}
        @media screen and (max-width: 1024px) {
          .logoLightOnLightMode, .logoDarkOnDarkMode {
            width: 20vw;
            height: 20vw;
            right: 0;
            bottom: 0;
            transform: none;
          }
        }
      `}</style>
    </>
  );
};