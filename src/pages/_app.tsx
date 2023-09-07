import { Header } from '@/components/layouts/Header'
import { NavMenu } from '@/components/layouts/NavMenu'
import '@/styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { useState } from 'react'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page)

  const [isNavOpened, setIsNavOpened] = useState<boolean>(false);
  console.log(isNavOpened ? '開いている' : '閉まっている')

  return getLayout (
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
          width: 100vw; //
          overflow: hidden;

        }
        main {
          width: 92vw; //
          margin: 0 auto;
        }
        .navMenuOopenedO {
          width: 20vw;
          height: 100vh;
          transition: all 1s ease;
          position: fixed;
          top: 0;
          right: 0;
          z-index: 10;
          background-color: rgba(124,116,105,0.45);
        }
        .navMenuClosedO {
          width: 20vw;
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
