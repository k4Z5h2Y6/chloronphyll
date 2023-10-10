import { useTheme } from 'next-themes';
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { Logo } from './Logo';

//todo:soil書き換え
export const  Soil = () => {
  const { theme } = useTheme();
  return (
    <>
      {theme === 'light' ?
        <div className='headerI'>
          <Image
            src='/Header/SoilLight1920_288.png'
            alt='soil'
            width={1920}
            height={288}
            layout='responsive'
          />
        </div>
        :
        <div className='headerI'>
          <Image
            src='/Header/SoilDark1920_288.png'
            alt='soil'
            width={1920}
            height={288}
            layout='responsive'
          />
        </div>
      }

      <style jsx>{`
        .headerI {
          width: 100vw;
          position: fixed;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 10;
          transform: translateY(75%);
        }
        /* widthが1024px以下かつ縦画面(スマホ版） */
        @media screen and (max-width: 1024px) {
        .headerI {
          transform: translateY(60%);//60%
        }
      `}</style>
    </>
  );
};

{/* .headerI {
          width: 100vw;
          position: fixed;
          top: 93vh;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 10;
        } */}



//todo:hiroto:
        //やること手順
        //1.soil画像作成(画面表示中の画像を切り取って、二倍の高さに調整)
        //right: 0; bottom: 0; eft: 0; で指定し、y軸に−50%　*topを指定してはいけない
        //widht:100vw; hight:14vh;
        //ロゴの高さを必要に応じて、vw指定からvh指定に変更