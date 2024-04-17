import { useTheme } from 'next-themes';
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
  isNavOpened: boolean;
  setIsNavOpened: Dispatch<SetStateAction<boolean>>;
};

export const NavMenu = ({ isNavOpened, setIsNavOpened }: Props) => {
  
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  const darkModeSwitch = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <div
        className='navMenuO'
        onMouseEnter={() => { setIsNavOpened(true); }}
        onMouseLeave={() => { setIsNavOpened(false); }}
      >
        <div className='navMenuI'>
          <div className='navMenuTextO'>
            <nav>
              <ul className='navMenuUl'>
                <li className='navMenuLi'>
                  <Link href='/'>
                    <h1>
                      <Image
                        src='/Header/LogoMoji.png'
                        alt=''
                        width={1280}
                        height={388}
                        style={{
                          width: 'auto',
                          height: '100%',
                        }}
                      />
                    </h1>
                  </Link>
                </li>
                <li className='navMenuLi navMenuH2O'><Link href='/settingManual'><h2 className='dark'>資料設定 input</h2></Link></li>
                <li className='navMenuLi navMenuH2O'><Link href='/kaihenNote'><h2>改変ノート output</h2></Link></li>
                <li className='navMenuLi navMenuSubH2O'><Link href='/kaihenNote/upload'><h2>　アップロード手順</h2></Link></li>
                <li className='navMenuLi navMenuSubH2O'><Link href='/kaihenNote/performance'><h2>　パフォーマンスランク</h2></Link></li>
                <li className='navMenuLi navMenuSubH2O'><Link href='/kaihenNote/ex'><h2>　ExParameters / ExMenu</h2></Link></li>
                <li className='navMenuLi navMenuSubH2O'><Link href='/kaihenNote/shape'><h2>　シェイプキー</h2></Link></li>
                <li className='navMenuLi navMenuSubH2O'><Link href='/kaihenNote/color'><h2>　01 いろ改変</h2></Link></li>
                <li className='navMenuLi navMenuSubH2O'><Link href='/kaihenNote/hairKemoClothes'><h2>　02 ヘア,ケモ,ふく改変</h2></Link></li>
                <li className='navMenuLi navMenuSubH2O'><Link href='/kaihenNote/facial'><h2>　03 表情改変</h2></Link></li>
                <li className='navMenuLi navMenuSubH2O'><Link href='/kaihenNote/imageboard'><h2>　04 イメージボード改変</h2></Link></li>
                <li className='navMenuLi navMenuH2O'><Link href='/history'><h2>更新履歴</h2></Link></li>
                <li className='navMenuLi navMenuH2O'><Link href='/document'><h2>ドキュメント</h2></Link></li>
              </ul>
            </nav>
          </div>
          <div className='snsO' onClick={() => console.log(theme)}>
            <div className='space10perO' />
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
            <div className='space10perO' />
          </div>

          <div className='lightDarkSwichO' onClick={() => darkModeSwitch()}>
            <div className={theme === 'dark' ? 'lightIconOnDarkMode' : 'lightIconOnLightMode'}>
              <Image
                src='/NavMenu/Light.png'
                alt=''
                width={48}
                height={48}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
            <div className={theme === 'dark' ? 'darkIconOnDarkMode' : 'darkIconOnLightMode'}>
              <Image
                src='/NavMenu/Dark.png'
                alt=''
                width={48}
                height={48}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
            <div className={theme === 'dark' ? 'separateLineOnDarkMode' : 'separateLineOnLightMode'} />
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
          position: relative;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-navI);
          transition: var(--transition1s);
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
          padding: 0 16px;
        }
        h1 {
          width: 100%;
          height: 100%;
        }
        .navMenuH2O, .navMenuSubH2O {
          display: flex;
          align-items: center;
        }
        //sns
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
        //ダークモードスイッチ
        .lightDarkSwichO {
          width: 64px;
          height: 48px;
          display: flex;
          align-items: flex-end;
          position: absolute;
          top: 8px;
          right: 8px;
          z-index: 10;
        }
        .lightIconOnLightMode, .darkIconOnDarkMode {
          width: 48px;
          height: 48px;
          display: flex;
          transition: var(--transition1s);
        }
        .darkIconOnLightMode, .lightIconOnDarkMode {
          width: 16px;
          height: 16px;
          display: flex;
          transition: var(--transition1s);
        }
        .separateLineOnDarkMode {
          width: 0;
          height: 32px;
          position: absolute;
          bottom: 0;
          left: 24px;
          border: 1px solid #b3b3b3;
          border-radius: 1px;
          transform-origin: 0 100%; 
          transform:rotate(-30deg);
          transition: var(--transition1s);
        }
        .separateLineOnLightMode {
          width: 0;
          height: 32px;
          position: absolute;
          bottom: 0;
          left: 40px;
          border: 1px solid #b3b3b3;
          border-radius: 1px;
          transform-origin: 0 100%; 
          transform:rotate(30deg);
          transition: var(--transition1s);
        }
      `}</style>
    </>
  );
};