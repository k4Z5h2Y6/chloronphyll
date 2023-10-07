import { Header } from '@/components/layouts/Header';
import { NavMenu } from '@/components/layouts/NavMenu';
import Providers from '@/components/layouts/Providers';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';


export default function App({ Component, pageProps }: AppProps) {

  const [isNavOpened, setIsNavOpened] = useState<boolean>(true);

  return (
    <>
      <Providers>
        <Header
          isNavOpened={isNavOpened}
          setIsNavOpened={setIsNavOpened}
        />
        <div className='mainO'>
          <main>
            <Component {...pageProps} />
          </main>
          <div className={isNavOpened ? 'navMenuOopenedO' : 'navMenuClosedO'}>
            <NavMenu
              isNavOpened={isNavOpened}
              setIsNavOpened={setIsNavOpened}
            />
          </div>
        </div>
      </Providers>

      <style jsx>{`
        .mainO {
          width: 100vw;
          overflow: hidden;
        }
        main {
          width: 95vw;
          margin: 0 auto;
        }
        .navMenuOopenedO {
          width: 25vw;
          height: 100vh;
          transition: var(--transition1s);
          position: fixed;
          top: 0;
          right: 0;
          z-index: 10;
          background-color: var(--backgroundColor-navO);
        }
        .navMenuClosedO {
          width: 25vw;
          height: 100vh;
          transition: var(--transition1s);
          position: fixed;
          top: 0;
          right: 0;
          z-index: 10;
          background-color: var(--backgroundColor-navO);
          transform: translatex(100%);
        }
        /* widthが1024px以下かつ縦画面(スマホ版） */
        {/* @media screen and (max-width: 1024px) and (orientation: portrait) { */}
        @media screen and (max-width: 1024px) {
          main {
            width: 92vw;
          }
          .navMenuOopenedO, .navMenuClosedO {
            width: 70vw;
          }
        }
      `}</style>
    </>
  );
}

