import { useTheme } from 'next-themes';
import Image from "next/image";

//todo:soil書き換え
export const  Soil = () => {
  const { theme } = useTheme();
  return (
    <>
      {theme === 'light' ?
        <div className='soilI'>
          <Image
            src='/Header/SoilLight1920_288.png'
            alt='soil'
            width={1920}
            height={288}
            layout='responsive'
          />
        </div>
        :
        <div className='soilI'>
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
        .soilI {
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
        .soilI {
          transform: translateY(60%);//60%
        }
      `}</style>
    </>
  );
};