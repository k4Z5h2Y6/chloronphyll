import { MovieMaxHeight } from "../elements/MovieMaxHeight"
import { MovieMaxWidth } from "../elements/MovieMaxWidth"

export const Clothes = () => {
  return (
    <>
      <div className='sectionContentsCO'>

        <div className='clothesMovieO'>
          <MovieMaxHeight src='/SettingManual/clothes_all_1280_1280.mp4' />
        </div>

        <div className='clothesTextO'>

          <div className='fukuO'>
            <div className='fukuI'>
              <h5>ふく3種</h5>
              <p>・ブラウス<br />・おでかけ<br />・ラフ着</p>
            </div>
          </div>

          <div className='sodeO'>
            <div className='sodeI'>
              <h5>そで3種</h5>
              <p>・ヒラそで<br />・はんそで<br />・そでまくり</p>
            </div>
          </div>

          <div className='scarfO'>
            <div className='scarfI'>
              <h5>スカーフ3種</h5>
              <p>・サイドスカーフ<br />・フリルスカーフ<br />・スカーフOFF</p>
            </div>
          </div>

          <div className='eriO'>
            <div className='eriI'>
              <h5>えり4種</h5>
              <p>・ヒラえり<br />・まるえり<br />・とげえり<br />・なでえり</p>
            </div>
          </div>

          <div className='sodehenkeiO'>
            <div className='sodehenkeiI'>
              <h5>そで変形 <span className='phOut'>無段階</span></h5>
              <p>・パワーショルダー<br />・ボリュームスリーブ</p>
            </div>
          </div>

          <div className='scarfhenkeiO'>
            <div className='scarfhenkeiI'>
              <h5>スカーフ変形 <span className='phOut'>無段階</span></h5>
              <p>・ショートスカーフ<br />・ロングスカーフ<br />・風スカーフ<br />・たてスカーフ<br />・スリムスカーフ</p>
            </div>
          </div>

          <div className='skirtO'>
            <div className='skirtI'>
              <div className='skirtMovieO'>
                <MovieMaxWidth src='/SettingManual/clothes_skirt_720_720.mp4' />
              </div>
              <div className='skirtTextO'>
                <h5>スカート</h5>
                <p> ・無段階調整</p>
                <p>あらゆるモーション<br />に対応しています</p>
              </div>
            </div>
          </div>

          <div className='kutsuO'>
            <div className='kutsuI'>
              <h5>くつ4種</h5>
              <p>・バックルローファー<br />・ハーフブーツ<br />・オペラシューズ<br />・はだし</p>
            </div>
          </div>
          
        </div>
      </div>

      <style jsx>{`
        //コンテンツアウター共通
        .sectionContentsCO {
          width: 100%;
          height: 100%;
          display: flex;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .clothesMovieO {
          width: 50%;
          height: 100%;
          padding: var(--settingManual-8px);
          display: flex;
        }
        .clothesTextO {
          width: 50%;
          height: 100%;
          display: flex;
          flex-wrap: wrap;
        }
        //skirtOのみ別指定
        .fukuO, .sodeO, .eriO, .sodehenkeiO, .scarfhenkeiO, .kutsuO {
          width: 30%;
          height: calc(100% / 3);
          padding: var(--settingManual-8px);
        }
        .scarfO, .scarfhenkeiO, .kutsuO {
          width: 40%;
          height: calc(100% / 3);
          padding: var(--settingManual-8px);
        }
        .skirtO {
          width: 60%;
          height: calc(100% / 3);
          padding: var(--settingManual-8px);
        }
        //兼textO、skirtIのみ別指定
        .fukuI, .sodeI, .scarfI, .eriI, .sodehenkeiI, .scarfhenkeiI, .kutsuI {
          width: 100%;
          height: 100%;
          padding: var(--settingManual-8px);
          display: flex;
          flex-direction: column;
          border: var(--borderColor-section);
          border-radius: var(--borderRadius-20);
        }
        .skirtI {
          width: 100%;
          height: 100%;
          display: flex;
          border: var(--borderColor-section);
          border-radius: var(--borderRadius-20);
        }
        .skirtMovieO {
          width: 50%;
          height: 100%;
          padding: var(--settingManual-8px);
          display: flex;
        }
        .skirtTextO {
          width: 50%;
          height: 100%;
          padding: var(--settingManual-8px) var(--settingManual-8px) var(--settingManual-8px) 0;
        }
        @media screen and (max-width: 1024px) {
          .sectionContentsCO {
            height: fit-content;
            display: flex;
            flex-direction: column;
          }
          .clothesMovieO {
            width: 100%;
            height: 280px;
          }
          .clothesTextO {
            width: 100%;
            height: 320px;
          }
          .phOut {
            display: none;
          }
        }
      `}</style>
    </>
  )
}






