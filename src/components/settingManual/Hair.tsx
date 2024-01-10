import { MovieMaxHeight } from "../elements/MovieMaxHeight";
import { MovieMaxWidth } from "../elements/MovieMaxWidth";

export const Hair = () => {
  return (
    <>
      <div className="sectionContentsCO">
        <div className="yokogamiO">
          <div className="yokogamiI">
            <div className="yokogamiMovieO">
              {/* <MovieMaxHeight src='/SettingManual/hair_yokogami_1280_720.mp4' /> */}
              <div className="MovieO">
                <video
                  className="video"
                  src="/SettingManual/hair_yokogami_1280_720.mp4"
                  muted
                  loop
                  controls
                  playsInline
                />
              </div>
              {/*  */}
            </div>
            <div className="yokogamiTextO">
              <div className="yokogamiTextI">
                <h5>横髪</h5>
                <p>
                  a_ボブ
                  <br />
                  b_パーマ
                  <br />
                  c_きのこヘア
                  <br />
                  d_ミディアムヘア
                  <br />
                  e_もふヘア
                </p>
                <p>
                  2つ以上を組み合わせて
                  <br />
                  さらに個性を出せます
                  <br />
                  ほぼ全組み合わせ対応です
                  <br />
                  ExMenuでコーデしてみてください
                </p>
              </div>
              <div className="yokogamiSubMovieO">
                <MovieMaxWidth src="/SettingManual/hair_yokogami_sub_1280_720.mp4" />
              </div>
            </div>
          </div>
        </div>

        <div className="maegamiO">
          <div className="maegamiI">
            <div className="maegamiMovieO">
              <MovieMaxWidth src="/SettingManual/hair_maegami_1280_388.mp4" />
            </div>
            <div className="maegamiTextO">
              <h5>前髪</h5>
              <p>
                ・ぱっつん+3種
                <br />
                ・長さ 無段階調整
                <br />
                ・サイドイン
              </p>
              <p>
                ExMenuで調整
                <br />
                まゆげが見えると印象が変わります
              </p>
            </div>
          </div>
        </div>

        <div className="mimikakeO">
          <div className="mimikakeI">
            <div className="mimikakeMovieO">
              <MovieMaxWidth src="/SettingManual/hair_mimikake_720_720.mp4" />
            </div>
            <div className="mimikakeTextO">
              <h5>みみかけ4種類</h5>
              <p>
                ケモみみの時は
                <br />
                (シェイプ)22_c6_ケモノみみかけ
                <br />
                を足す必要があります
              </p>
              <p>
                Parameterが上限に達しているので
                <br />
                デフォルトの実装はありません
              </p>
            </div>
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
        //横髪
        .yokogamiO {
          width: 75%;
          height: 70%;
          padding: var(--settingManual-8px);
          position: absolute;
          top: 0;
          left: 0;
        }
        .yokogamiI {
          width: 100%;
          height: 100%;
          display: flex;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .yokogamiMovieO {
          width: calc(100% / 3 * 2);
          height: 100%;
          padding: var(--settingManual-8px);
          display: flex;
        }



        .MovieO {
          min-height: 100%;
          min-width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .video {
          max-height: 100%;
          max-width: 100%;
          border-radius: var(--borderRadius-20);
        }



        .yokogamiTextO {
          width: calc(100% / 3);
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .yokogamiTextI {
          width: 100%;
          height: calc(100% / 7 * 4);
          padding: var(--settingManual-8px);
          display: flex;
          flex-direction: column;
        }
        .yokogamiSubMovieO {
          width: 100%;
          height: calc(100% / 7 * 3);
          padding: var(--settingManual-8px);
          display: flex;
        }
        //前髪
        .maegamiO {
          width: 75%;
          height: 30%;
          padding: var(--settingManual-8px);
          position: absolute;
          top: 70%;
          left: 0;
        }
        .maegamiI {
          width: 100%;
          height: 100%;
          display: flex;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .maegamiMovieO {
          width: calc(100% / 3 * 2);
          height: 100%;
          padding: var(--settingManual-8px);
          display: flex;
        }
        .maegamiTextO {
          width: calc(100% / 3);
          height: 100%;
          padding: var(--settingManual-8px);
          display: flex;
          flex-direction: column;
        }
        //耳掛け
        .mimikakeO {
          width: 25%;
          height: 80%;
          padding: var(--settingManual-8px);
          position: absolute;
          top: 0;
          left: 75%;
        }
        .mimikakeI {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .mimikakeMovieO {
          width: 100%;
          height: calc(100% / 8 * 5);
          padding: var(--settingManual-8px);
          display: flex;
        }
        .mimikakeTextO {
          width: 100%;
          height: calc(100% / 8 * 3);
          padding: var(--settingManual-8px);
          display: flex;
          flex-direction: column;
        }

        @media screen and (max-width: 1024px) {
          //コンテンツアウター共通
          .sectionContentsCO {
            height: fit-content;
            display: flex;
            flex-direction: column;
            position: static;
          }
          //横髪
          .yokogamiO {
            width: 100%;
            height: 320px;
            position: static;
          }
          .yokogamiI {
            flex-direction: column;
          }
          .yokogamiMovieO {
            width: 100%;
            height: 50%;
          }
          .video {
            height: 100%;
            max-height: inherit;
            max-width: min-content;
          }





          .yokogamiTextO {
            width: 100%;
            height: 50%;
            flex-direction: row-reverse;
          }
          .yokogamiTextI {
            width: 60%;
            height: 100%;
          }
          .yokogamiSubMovieO {
            width: 40%;
            height: 100%;
          }
          //前髪
          .maegamiO {
            width: 100%;
            height: 120px;
            position: static;
          }
          .maegamiMovieO {
            width: 40%;
          }
          .maegamiTextO {
            width: 60%;
          }
          //耳掛け
          .mimikakeO {
            width: 100%;
            height: 160px;
            position: static;
          }
          .mimikakeI {
            flex-direction: row;
          }
          .mimikakeMovieO {
            width: 40%;
            height: 100%;
          }
          .mimikakeTextO {
            width: 60%;
            height: 100%;
          }
        }
      `}</style>
    </>
  );
};
