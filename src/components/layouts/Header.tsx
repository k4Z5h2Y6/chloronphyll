import Image from "next/image"
import { Dispatch, SetStateAction } from "react"

type Props = {
  isNavOpened: boolean
  setIsNavOpened: Dispatch<SetStateAction<boolean>>
}

export const Header = ({ isNavOpened, setIsNavOpened }: Props) => {
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
        <div
          className='logoO'
          onMouseEnter={() => { setIsNavOpened(true) }}
          onMouseLeave={() => { setIsNavOpened(false) }}
        >
          <Image
            src='/Header/logoA.png'
            alt='logo'
            width={1080}
            height={1080}
            layout='responsive'
          />
        </div>
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
        .logoO {
          width: 341px;
          height: 294px;
          position: fixed;
          right: 10vw;
          bottom: 0;
          z-index: 11;
          transform: translateX(50%);
        }
      `}</style>
    </>
  )
}