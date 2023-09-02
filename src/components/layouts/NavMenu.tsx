import Image from "next/image"
import Link from "next/link"
import { Dispatch, SetStateAction } from "react"

type Props = {
  isNavOpened: boolean
  setIsNavOpened: Dispatch<SetStateAction<boolean>>
}

export const NavMenu = ({ isNavOpened, setIsNavOpened }: Props) => {
  return (
    <>
      <div
        className='navMenuI'
        onMouseEnter={() => { setIsNavOpened(true) }}
        onMouseLeave={() => { setIsNavOpened(false) }}
      >
        <div className="navMenuLogoO">
          <Image
            src='/Header/logoB.png'
            alt=''
            width={1080}
            height={1080}
            layout='responsive'
          />
        </div>

        <div className='navMenuNaO'>
          <nav>
            <ul className='navMenuUl'>
              <li className='navMenuLi'><Link href='/input'>資料設定 input</Link></li>
              <li className='navMenuLi'><Link href='/output'>改変ノート output</Link></li>
              <li className='navMenuLi'><Link href='/histry'>変更履歴</Link></li>
              <li className='navMenuLi'><Link href='/document'>ドキュメント</Link></li>
            </ul>
          </nav>
        </div>

      </div>

      <style jsx>{`
        .navMenuI {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 20px;
        }
        .navMenuLogoO {
          width: 10vw;
          height: 10vw;
        }
        .navMenuNaO {
          width: 100%;
          height: fit-content;
          max-height: 60vh;
          padding: 20px;
          background-color: #7C7469;
          border-radius: 20px;
        }
      `}</style>
    </>
  )
}