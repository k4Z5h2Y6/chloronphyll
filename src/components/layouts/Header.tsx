import { useTheme } from 'next-themes';
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type Props = {
  isNavOpened: boolean;
  setIsNavOpened: Dispatch<SetStateAction<boolean>>;
};

export const Header = ({ isNavOpened, setIsNavOpened }: Props) => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div className='headerI'>
        <Image
          src='/Header/soil.png'
          alt='soil'
          width={1920}
          height={400}
          layout='responsive'
        />
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
      </div>

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