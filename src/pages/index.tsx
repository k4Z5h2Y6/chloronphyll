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
              <p className='homeDescriptionP'>VRChatでの使用を想定した3Dモデル<br /><span className='fukiO'> フキ </span>の攻略サイト</p>
            </div>
            <div
              className={isHeroImgShown ? 'showHeroImgOnLight' : 'hideHeroImgOnLight'}
              onClick={() => { setIsHeroImgShown(!isHeroImgShown); }}
            >
              <Image
                src='/Home/HomeLightFirst1280_388.gif'
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
              <p className='homeDescriptionP'>VRChatでの使用を想定した3Dモデル<br /><span className='fukiO'> フキ </span>の攻略サイト</p>
            </div>
            <div
              className={isHeroImgShown ? 'showHeroImgOndark' : 'hideHeroImgOndark'}
              onClick={() => { setIsHeroImgShown(!isHeroImgShown); }}
            >
              <Image
                src='/Home/HomeDarkFirst1280_388.gif'
                alt=''
                layout='fill'
                objectFit='contain'
              />
            </div>
          </div>
        }
      </div>

      <style jsx>{`
        {/* img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        } */}
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
        .homeDescriptionP {
          width: 100%;
          margin-bottom: 0;
          text-align: center;
          font-size: 16px;
          line-height: 20px;
        }
        .fukiO {
          font-size: 32px;
          line-height: 36px;
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
        @media screen and (max-width: 1024px) {
          .heroImageO {
            width: 80vw;
            height: 30vh;
            top: 35vh;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            {/* top: 20vh; */}
            {/* justify-content: center; */}
          }
          .homeDescriptionP {
            font-size: 10px;
            line-height: 12px;
          }
          .fukiO {
            font-size: 20px;
            line-height: 22px;
          }
        }
      `}</style>
    </>
  );
}