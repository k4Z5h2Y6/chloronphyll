import { useTheme } from 'next-themes';
import { useState } from 'react';
import Image from "next/image";

export default function Home() {

  const { theme } = useTheme();
  const [isHeroImgShown, setIsHeroImgShown] = useState(true);

  return (
    <>
      <div className='heroImageO'>
        {theme === 'light' ?
          <div className='kokubanO'>
            <Image
              src='/Home/KokubanLightFirst1920_388.png'
              alt=''
              layout='fill'
              objectFit='contain'
            />
            <div className='homeDescriptionO'>
              <p className='homeDescriptionI'>VRChatでの使用を想定した3Dモデル<br /><span> フキ </span>の攻略サイト</p>
            </div>
            <div
              className={isHeroImgShown ? 'showHeroImgOnLight' : 'hideHeroImgOnLight'}
              onClick={() => { setIsHeroImgShown(!isHeroImgShown); }}
            >
              <Image
                src='/Home/RueWalkFirst1280_720.gif'
                alt=''
                layout='fill'
                objectFit='contain'
              />
            </div>
          </div>
          :
          <div className='kokubanO'>
            <Image
              src='/Home/KokubanDarkFirst1920_388.png'
              alt=''
              layout='fill'
              objectFit='contain'
            />
            <div className='homeDescriptionO'>
              <p className='homeDescriptionI'>VRChatでの使用を想定した3Dモデル<br /><span> フキ </span>の攻略サイト</p>
            </div>
            <div
              className={isHeroImgShown ? 'showHeroImgOndark' : 'hideHeroImgOndark'}
              onClick={() => { setIsHeroImgShown(!isHeroImgShown); }}
            >
              <Image
                src='/Home/HomeDarkZzz1280_388_a.png'
                alt=''
                layout='fill'
                objectFit='contain'
              />
            </div>
          </div>
        }
      </div>

      <style jsx>{`
        .heroImageO {
          width: 70vw;
          height: 40vh;
          margin: 0 auto;
          display: flex;
          position: relative;
          top: 10vh;
        }
        .kokubanO {
          width: 100%;
          height: 100%;
          display: flex;
          margin: 0 auto;
        }
        .homeDescriptionO {
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 5;
          display: flex;
          align-items: center;
        }
        .homeDescriptionI {
          width: 100%;
          text-align: center;
        }
        .showHeroImgOnLight, .showHeroImgOndark {
          width: 100%;
          height: 100%;
          display: flex;
          position: absolute;
          z-index: 10;
          opacity: 100;
          transition: var(--transition1s);
        }
        .hideHeroImgOnLight, .hideHeroImgOndark {
          width: 100%;
          height: 100%;
          display: flex;
          position: absolute;
          z-index: 10;
          opacity: 0;
          transition: var(--transition1s);
        }
      `}</style>
    </>
  );
}