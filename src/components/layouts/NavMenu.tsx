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
        className='navMenuO'
        onMouseEnter={() => { setIsNavOpened(true) }}
        onMouseLeave={() => { setIsNavOpened(false) }}
      >
        <div className='navMenuI'>
          <div className='navMenuTextO'>
            <nav>
              <ul className='navMenuUl'>
                <li className='navMenuLi'>
                  <Link href='/'>
                    <h1>
                      <Image
                        src='/NavMenu/LogoMoji.png'
                        alt=''
                        width={1280}
                        height={388}
                        style={{
                          width: 'auto',
                          height: '100%',
                        }}
                      />
                      {/* <Image
                        src='/NavMenu/LogoMoji.png'
                        alt=''
                        width={1280}
                        height={388}
                        // layout='responsive'
                        // layout='fixed'
                        // layout='fill'
                        // objectFit='contain'
                        // objectFit="cover"
                      /> */}
                    </h1>
                  </Link>
                </li>
                <li className='navMenuLi navMenuH2O'><Link href='/settingManual'><h2>資料設定 input</h2></Link></li>
                <li className='navMenuLi navMenuH2O'><Link href='/changeNote'><h2>改変ノート output</h2></Link></li>
                <li className='navMenuLi navMenuSubH2O'><Link href='/changeNote'><h2>アップロード手順</h2></Link></li>
                <li className='navMenuLi navMenuSubH2O'><Link href='/changeNote'><h2>パフォーマンスランク</h2></Link></li>
                <li className='navMenuLi navMenuSubH2O'><Link href='/changeNote'><h2>シェイプキー</h2></Link></li>
                <li className='navMenuLi navMenuSubH2O'><Link href='/changeNote'><h2>ExParameters / ExMenu</h2></Link></li>
                <li className='navMenuLi navMenuSubH2O'><Link href='/changeNote'><h2>　01 いろ改変</h2></Link></li>
                <li className='navMenuLi navMenuSubH2O'><Link href='/changeNote'><h2>　02 ヘア,ケモ,ふく改変</h2></Link></li>
                <li className='navMenuLi navMenuSubH2O'><Link href='/changeNote'><h2>　03 表情改変</h2></Link></li>
                <li className='navMenuLi navMenuSubH2O'><Link href='/changeNote'><h2>　04 イメージボード改変</h2></Link></li>
                <li className='navMenuLi navMenuH2O'><Link href='/histry'><h2>変更履歴</h2></Link></li>
                <li className='navMenuLi navMenuH2O'><Link href='/document'><h2>ドキュメント</h2></Link></li>
              </ul>
            </nav>
          </div>
          <div className='snsO'>
            <div className='space10perO'/>
            <div className='snsI'>
              <Image
                src='/NavMenu/iconTwitter.png'
                alt=''
                width={64}
                height={64}
                style={{
                  width: 'auto',
                  height: '100%',
                }}
              />
            </div>
            <div className='snsI'>
              <Image
                src='/NavMenu/iconBooth.png'
                alt=''
                width={64}
                height={64}
                style={{
                  width: 'auto',
                  height: '100%',
                }}
              />
            </div>
            <div className='snsI'>
              <Image
                src='/NavMenu/iconVRChat.png'
                alt=''
                width={64}
                height={64}
                style={{
                  width: 'auto',
                  height: '100%',
                }}
              />
            </div>
            <div className='snsI'>
              <Image
                src='/NavMenu/iconGmail.png'
                alt=''
                width={64}
                height={64}
                style={{
                  width: 'auto',
                  height: '100%',
                }}
              />
            </div>
            <div className='space10perO'/>
          </div>
        </div>

      </div>

      <style jsx>{`
        .navMenuO {
          width: 100%;
          height: 100%;
          padding: 5vh 16px 30vh 16px;
        }
        .navMenuI {
          width: 100%;
          height: 100%;
          background-color: var(--borderColor);
          border-radius: var(--borderRadius-20);
        }
        .navMenuTextO {
          width: 100%;
          height: 90%;
          padding: 20px 0;
        }
        nav {
          width: 100%;
          height: 100%;
        }
        ul {
          width: 100%;
          height: 100%;
        }
        .navMenuLi {
          width: 100%;
          height: calc(100% / 13);
          padding: 0 8px;
        }
        h1 {
          width: 100%;
          height: 100%;
        }
        .navMenuH2O, .navMenuSubH2O {
          display: flex;
          align-items: center;
        }
        .snsO {
          width: 100%;
          height: 10%;
          display: flex;
          align-items: center;
        }
        .space10perO {
          width: 10%;
          height: 100%;
        }
        .snsI {
          width: 20%;
          height: 50%;
          margin: 0 auto;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </>
  )
}