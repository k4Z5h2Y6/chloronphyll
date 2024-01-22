import { PageTitle } from '@/components/elements/PageTitle';
import { Splider } from '@/components/elements/Splide';
import Image from "next/image";

export default function hairKemoClothes() {

  return (
    <>
      <section className='topSct'>
        <PageTitle pageTitle='02 ヘア,ケモ,ふく改変' />
        <div className='section0contentO'>
          <div className='comingImgO'>
            <Image
              src='/KaihenNote/coming640_360.png'
              alt=''
              width={640}
              height={360}
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        //todo:全体要整理
        .topSct {
          width: 100%;
          height: calc(100vh - 24px);
        }
        .section0contentO {
          height: calc(100% - 16px - 32px - 16px - 24px - 7vh);
          display: flex;
        }
        //
        .comingImgO {
          width: 30vw;
          height: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
        }
        //splideテスト
        .slide-img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </>
  );
};