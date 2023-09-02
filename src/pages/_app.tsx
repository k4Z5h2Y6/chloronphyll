import { Header } from '@/components/layouts/Header'
import { NavMenu } from '@/components/layouts/NavMenu'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  const [isNavOpened, setIsNavOpened] = useState<boolean>(false);

  return (
    <>{isNavOpened ? '開いている' : '閉まっている'}
      <Header
        isNavOpened={isNavOpened}
        setIsNavOpened={setIsNavOpened}
      />
      <div className='mainO'>
        <main>
          <Component {...pageProps} />
        </main>
        <NavMenu />
      </div>

      <style jsx>{`
        .mainO {
          width: 100vw;
          height: 100vh;
        }
        main {
          width: 100vw;
          height: 100vh;
        }
      `}</style>
    </>
  )
}
