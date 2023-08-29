import { Header } from '@/components/layouts/Header'
import { NavMenu } from '@/components/layouts/NavMenu'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <div className='mainO'>
        <main>
          <Component {...pageProps} />
        </main>
        <NavMenu/>
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
