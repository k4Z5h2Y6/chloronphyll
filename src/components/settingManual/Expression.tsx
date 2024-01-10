import { MovieMaxHeight } from "../elements/MovieMaxHeight";
import { MovieMaxWidth } from "../elements/MovieMaxWidth";

export const Expression = () => {
  return (
    <>
      <div className='sectionContentsCO'>

        <div className='handsignO'>
          <div className='handsignI'>
            <div className='handsignMovieO'>
              <MovieMaxHeight src='/SettingManual/facial_handsign_1280_720.mp4' />
            </div>
            <div className='handsignTextO'>
              <div className='handsignTextI'>
                <div className='handsignKatateTextO'>
                  <h5>片手ハンドサイン</h5>
                  <p>hs1_よりめ<br />hs2_汗<br />hs3_ビリビリキラりん<br />hs4_ハート<br />hs5_ウィンク星<br />hs6_くるりんハイライト / ダイヤ<br />hs7_にこ</p>
                </div>
                <div className='handsignRyouteTextO'>
                  <h5>両手ハンドサイン</h5>
                  <p>hss1_ジト目ハム口<br />hss2_(None)<br />hss3_飛び目 / 白目 / ないしょ<br />hss4_キラキラ<br />hss5_(ランダム45種)<br />hss6_つり目ふにゃふにゃ<br />hss7_しょげ口</p>
                </div>
              </div>
              <div className='handsignSubMovieO'>
                <MovieMaxWidth src='/SettingManual/facial_handsign_sub_1280_388.mp4' />
              </div>
            </div>
          </div>
        </div>

        <div className='tobimeO'>
          <div className='tobimeMovieO'>
            <MovieMaxWidth src='/SettingManual/facial_tobime_1280_388.mp4' />
          </div>
        </div>

        <div className='shizukunonamidaO'>
          <div className='shizukunonamidaMovieO'>
            <MovieMaxWidth src='/SettingManual/facial_shizukunonamida_1280_720.mp4' />
          </div>
        </div>

        <div className='explanationO'>
          <div className='explanationTextO'>
            <p>ExMenu<br />→45種の表情固定<br />→まぶた固定 (無段階調整)(まぶた+追加表情)</p>
            <p>各エモート , PB , Contact ,<br />走行 , ジャンプなどで変形</p>
            <p>MMDモーフあり (JP.fbxのみ)</p>
          </div>
        </div>

      </div>

      <style jsx>{`
        //コンテンツアウター共通
        .sectionContentsCO {
          width: 100%;
          height: 100%;
          position: relative;
        }
        //ハンドサイン
        .handsignO {
          width: 100%;
          height: 70%;
          padding: var(--settingManual-8px);
          position: absolute;
          top: 0;
          left: 0;
        }
        .handsignI {
          width: 100%;
          height: 100%;
          display: flex;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .handsignMovieO {
          width: 50%;
          height: 100%;
          padding: var(--settingManual-8px);
          display: flex;
        }
        .handsignTextO {
          width: 50%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .handsignTextI {
          width: 100%;
          height: calc(100% / 7 * 4);
          display: flex;
        }
        .handsignKatateTextO {
          width: 40%;
          height: 100%;
          padding: var(--settingManual-8px);
          display: flex;
          flex-direction: column;
        }
        .handsignRyouteTextO {
          width: 60%;
          height: 100%;
          padding: var(--settingManual-8px);
          display: flex;
          flex-direction: column;
        }
        .handsignSubMovieO {
          width: 100%;
          height: calc(100% / 7 * 3);
          padding: var(--settingManual-8px);
          display: flex;
        }
        //飛び目
        .tobimeO {
          width: 40%;
          height: 30%;
          padding: var(--settingManual-8px);
          position: absolute;
          top: 70%;
          left: 5%;
        }
        .tobimeMovieO {
          width: 100%;
          height: 100%;
          padding: var(--settingManual-8px);
          display: flex;
        }
        //しずくのなみだ
        .shizukunonamidaO {
          width: 25%;
          height: 30%;
          padding: var(--settingManual-8px);
          position: absolute;
          top: 70%;
          left: 45%;
        }
        .shizukunonamidaMovieO {
          width: 100%;
          height: 100%;
          padding: var(--settingManual-8px);
          display: flex;
        }
        //説明
        .explanationO {
          width: 30%;
          height: 30%;
          padding: var(--settingManual-8px);
          position: absolute;
          top: 70%;
          left: 70%;
        }
        .explanationTextO {
          width: 100%;
          height: 100%;
          padding: var(--settingManual-8px);
          border: var(--borderColor-section);
          border-radius: var(--borderRadius-20);
        }
        @media screen and (max-width: 1024px) {
          //コンテンツアウター共通
          .sectionContentsCO {
            height: fit-content;
            display: flex;
            flex-direction: column;
            position: static;
          }
          //ハンドサイン
          .handsignO {
            width: 100%;
            height: 400px;
            position: static;
          }
          .handsignI {
            flex-direction: column;
          }
          .handsignMovieO {
            width: 100%;
            height: 40%;
          }
          .handsignTextO {
            width: 100%;
            height: 60%;
          }
          .handsignTextI {
            height: calc(100% / 3 * 2);
          }
          .handsignKatateTextO, .handsignRyouteTextO {
            width: 50%;
          }
          .handsignSubMovieO {
            height: calc(100% / 3);
          }
          //飛び目
          .tobimeO {
            width: 100%;
            height: 120px;
            position: static;
          }
          //しずくのなみだ
          .shizukunonamidaO {
            width: 100%;
            height: 120px;
            position: static;
          }
          //説明
          .explanationO {
            width: 100%;
            height: 160px;
            position: static;
          }
        }
      `}</style>
    </>
  );
};