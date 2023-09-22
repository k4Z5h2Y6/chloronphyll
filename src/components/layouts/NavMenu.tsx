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
        <div className='navMenuNaO'>
          <nav>
            <ul className='navMenuUl'>
              <li className='navMenuLi'>
                <Link href='/'>
                  <h2>
                    {/* <h1>
                      <Image
                        src='/Header/logoText.png'
                        alt=''
                        width={235}
                        height={71}
                        layout='responsive'
                      />
                    </h1> */}
                    クロロンフィル
                  </h2>
                </Link>
              </li>
              <li className='navMenuLi'><Link href='/settingManual'><h2>資料設定 input</h2></Link></li>
              <li className='navMenuLi'><Link href='/changeNote'><h2>改変ノート output</h2></Link></li>
              <li className='navMenuLi'><Link href='/histry'><h2>変更履歴</h2></Link></li>
              <li className='navMenuLi'><Link href='/document'><h2>ドキュメント</h2></Link></li>
            </ul>
          </nav>
        </div>

      </div>

      <style jsx>{`
        .navMenuI {
          width: 100%;
          height: 100%;
          padding: 20px;
        }
        .navMenuNaO {
          width: 100%;
          height: fit-content;
          max-height: 60vh;//
          padding: 20px;
          background-color: #7C7469;
          border-radius: var(--borderRadius-20);
        }
      `}</style>
    </>
  )
}