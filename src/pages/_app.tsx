import { Header } from '@/components/layouts/Header'
import { LayoutMainI } from '@/components/layouts/LayoutMainI'
import { NavMenu } from '@/components/layouts/NavMenu'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  const [isNavOpened, setIsNavOpened] = useState<boolean>(false);
  console.log(isNavOpened ? '開いている' : '閉まっている')
  return (
    <>
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

      <style jsx>{`
        .mainO {
          width: 100vw;
          height: 100vh;
          overflow: hidden;

        }
        main {
          width: 100vw;
          height: 100vh;
          margin: 0 auto;
        }
        .navMenuOopenedO {
          width: 25vw;
          height: 100vh;
          transition: all 1s ease;
          position: fixed;
          top: 0;
          right: 0;
          z-index: 10;
          background-color: rgba(124,116,105,0.45);
        }
        .navMenuClosedO {
          width: 25vw;
          height: 100vh;
          transition: all 1s ease;
          position: fixed;
          top: 0;
          right: 0;
          transform: translatex(100%);
          z-index: 10;
          background-color: #7C7469;
          opacity: 0.5;
        }
      `}</style>
    </>
  )
}
