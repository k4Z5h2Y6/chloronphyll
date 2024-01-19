import { PageTitle } from '@/components/elements/PageTitle';
import Image from "next/image";
// import { Splide, SplideSlide } from "@splidejs/react-splide";

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

      {/* <Splide
        aria-label="私のお気に入りの画像集"
        options={{
          autoplay: true, // 自動再生を有効
          interval: 3000, // 自動再生の間隔を3秒に設定
        }}
      >
        <SplideSlide>
          <img className="slide-img" src="https://www.pakutaso.com/shared/img/thumb/shikun20220402_114719-2_TP_V.jpg" alt="かわいい猫の画像 part1" />
        </SplideSlide>
        <SplideSlide>
          <img className="slide-img" src="https://www.pakutaso.com/shared/img/thumb/shikun20220402_122123_TP_V.jpg" alt="かわいい猫の画像 part2" />
        </SplideSlide>
        <SplideSlide>
          <img className="slide-img" src="https://www.pakutaso.com/shared/img/thumb/sikun_20220402-180657-2_TP_V.jpg" alt="かわいい猫の画像 part3" />
        </SplideSlide>
      </Splide> */}

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
      `}</style>
    </>
  );
};