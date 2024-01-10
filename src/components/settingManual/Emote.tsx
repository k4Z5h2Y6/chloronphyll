import { MovieMaxHeight } from "../elements/MovieMaxHeight";
import { MovieMaxWidth } from "../elements/MovieMaxWidth";
import { RadiusedImg } from "../elements/RadiusedImg";

export const Emote = () => {
  return (
    <>
      <div className="sectionContentsCO">
        <div className="curtsyO">
          <div className="curtsyI">
            <div className="curtsyMovieO">
              <MovieMaxHeight src="/SettingManual/emote_curtsy_720_720.mp4" />
            </div>
            <div className="curtsyTextO">
              <h5>e1_カーテシー</h5>
              <p>
                ExMenuで発動 (VR , デスクトップ 両対応)
                <br />
                両手でスカートPBを伸ばすと反応 (VRのみ)
              </p>
            </div>
            <div className="curtsySubO">
              <div className="curtsySubImgO">
                <RadiusedImg src="/SettingManual/emote_curtsy_sub_720_720.jpg" />
              </div>
              <div className="curtsySubTextO">
                <p>
                  (スカートPBを伸ばすコツ)
                  <br />
                  肩からまっすぐに手を落として...
                  <br />
                  ほんの少し後ろから両手で掴んで..
                  <br />
                  引き上げる.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="yesnoO">
          <div className="yesnoI">
            <div className="yesnoTextO">
              <h5>e2_Yes / No</h5>
              <p>
                ExMenuで発動
                <br />
                各ポーズ対応
              </p>
              <p>
                デスクトップ無言勢
                <br />
                になれます
              </p>
            </div>
            <div className="yesnoMovieO">
              <MovieMaxWidth src="/SettingManual/emote_yesno_852_480.mp4" />
            </div>
          </div>
        </div>

        <div className="utoutoO">
          <div className="utoutoI">
            <div className="utoutoMovieO">
              <MovieMaxWidth src="/SettingManual/emote_utouto_640_194.mp4" />
            </div>
            <div className="utoutoTextO">
              <h5>e3_うとうと</h5>
              <p>
                ExMenuで発動 / AFK中にスカートを掴まれると反応
                <br />
                各ポーズに対応しています
                <br />
                全身固定中はAFKでもうとうとします
              </p>
            </div>
          </div>
        </div>

        <div className="vsuiO">
          <div className="vsuiI">
            <div className="vsuiMovieO">
              <MovieMaxWidth src="/SettingManual/emote_vsui_640_194.mp4" />
            </div>
            <div className="vsuiTextO">
              <h5>e4_V睡</h5>
              <p>
                ExMenuでLR切り替え (V睡の発動は”ふせAFK”です)
                <br />
                全身固定すると目を開けて通常の表情に変わります
              </p>
              <p>
                e4y_V睡高さ調整
                <br />
                ベッドが高い時に使えます (VR , デスクトップ 両対応)
                <br />
                (ViewPointは変わりませんがAFKなのでリアルが動ければokです)
                <br />
                10%以上高くするとしゃがみAFKにならずにV睡し続けます
              </p>
            </div>
          </div>
        </div>

        <div className="zenshinkoteiO">
          <div className="zenshinkoteiTextO">
            <div className="zenshinkoteiFirstTextO">
              <h5>e5_全身固定</h5>
              <p>
                ExMenuで切り替え
                <br />
                Trackingしないシステム
              </p>
              <p>
                演奏や劇を鑑賞する時に重宝します
                <br />
                アイテムやパーツが飛び出ることがないので、
                <br />
                周りの迷惑を気にせずに遊べます
                <br />
                じっとするべき場面で身体を動かしたい時にも使えます
              </p>
            </div>
            <div className="zenshinkoteiSecondTextO">
              <div className="zenshinkoteiSecondTextI">
                <div className="zenshinkoteiSecondLeftTextI">
                  <p>
                    全身固定中
                    <br />
                    全身固定中のAFK
                    <br />
                    全身固定中のV睡
                    <br />
                    全身固定中のしゃがみ
                    <br />
                    全身固定中のふせ
                    <br />
                    全身固定中のSit
                    <br />
                    全身固定中のエモート
                    <br />
                    全身固定中のアイテム
                  </p>
                </div>
                <div className="zenshinkoteiSecondRightTextI">
                  <p>
                    →いろいろ無効化
                    <br />
                    →完全固定 (すやすやしない)
                    <br />
                    →目を開ける (寝転んで話せる)
                    <br />
                    →スカートがイスに貫通しない
                    <br />
                    →ちゃんとひじが地面に設置する
                    <br />
                    →イスから離脱しない
                    <br />
                    →開始と戻りのズレがない
                    <br />
                    →位置と角度を保ち続ける
                  </p>
                </div>
              </div>
            </div>
            <div className="zenshinkoteiThirdTextO">
              <p>
                (無効化) Gesture , ハンドサイン , アイテム , 待機モーション
                <br />
                アイテムを出したくないだけの場合はONOFF機能です
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
        //カーテシー
        .curtsyO {
          width: 30%;
          height: 100%;
          padding: var(--settingManual-8px);
          position: absolute;
          top: 0;
          left: 0;
        }
        .curtsyI {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .curtsyMovieO {
          width: 100%;
          height: 60%;
          padding: var(--settingManual-8px);
          display: flex;
        }
        .curtsyTextO {
          width: 100%;
          height: 20%;
          padding: var(--settingManual-8px);
          display: flex;
          flex-direction: column;
        }
        .curtsySubO {
          width: 100%;
          height: 20%;
          display: flex;
        }
        .curtsySubImgO {
          width: calc(100% / 3);
          height: 100%;
          padding: var(--settingManual-8px);
          display: flex;
          position: relative;
        }
        .curtsySubTextO {
          width: calc(100% / 3 * 2);
          height: 100%;
          padding: var(--settingManual-8px);
        }
        //yes/no
        .yesnoO {
          width: 35%;
          height: 30%;
          padding: var(--settingManual-8px);
          position: absolute;
          top: 0;
          left: 65%;
        }
        .yesnoI {
          width: 100%;
          height: 100%;
          display: flex;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .yesnoTextO {
          width: calc(100% / 7 * 3);
          height: 100%;
          padding: var(--settingManual-8px);
          display: flex;
          flex-direction: column;
        }
        .yesnoMovieO {
          width: calc(100% / 7 * 4);
          height: 100%;
          padding: var(--settingManual-8px);
          display: flex;
        }
        //うとうと
        .utoutoO {
          width: 35%;
          height: 40%;
          padding: var(--settingManual-8px);
          position: absolute;
          top: 0;
          left: 30%;
        }
        .utoutoI {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .utoutoMovieO {
          width: 100%;
          height: 50%;
          padding: var(--settingManual-8px);
          display: flex;
        }
        .utoutoTextO {
          width: 100%;
          height: 50%;
          padding: var(--settingManual-8px);
          display: flex;
          flex-direction: column;
        }
        //v睡
        .vsuiO {
          width: 35%;
          height: 60%;
          padding: var(--settingManual-8px);
          position: absolute;
          top: 40%;
          left: 30%;
        }
        .vsuiI {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .vsuiMovieO {
          width: 100%;
          height: 50%;
          padding: var(--settingManual-8px);
          display: flex;
        }
        .vsuiTextO {
          width: 100%;
          height: 50%;
          padding: var(--settingManual-8px);
          display: flex;
          flex-direction: column;
        }
        //全身固定
        .zenshinkoteiO {
          width: 35%;
          height: 70%;
          padding: var(--settingManual-8px);
          position: absolute;
          top: 30%;
          left: 65%;
        }
        .zenshinkoteiTextO {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .zenshinkoteiFirstTextO {
          width: 100%;
          height: calc(100% / 7 * 3);
          padding: var(--settingManual-8px);
          display: flex;
          flex-direction: column;
        }
        .zenshinkoteiSecondTextO {
          width: 100%;
          height: calc(100% / 7 * 3);
          padding: var(--settingManual-8px);
        }
        .zenshinkoteiSecondTextI {
          width: 100%;
          height: 100%;
          display: flex;
          border: var(--borderColor-section);
          border-radius: var(--borderRadius-20);
        }
        .zenshinkoteiSecondLeftTextI {
          width: calc(100% / 7 * 3);
          height: 100%;
          padding: var(--settingManual-8px);
        }
        .zenshinkoteiSecondRightTextI {
          width: calc(100% / 7 * 4);
          height: 100%;
          padding: var(--settingManual-8px);
        }
        .zenshinkoteiThirdTextO {
          width: 100%;
          height: calc(100% / 7);
          padding: var(--settingManual-8px);
        }
        @media screen and (max-width: 1024px) {
          //コンテンツアウター共通
          .sectionContentsCO {
            height: fit-content;
            display: flex;
            flex-direction: column;
            position: static;
          }
          //カーテシー
          .curtsyO {
            width: 100%;
            height: 480px;
            position: static;
          }
          .curtsyMovieO {
            height: calc(100% / 12 * 7);
          }
          .curtsyTextO {
            height: 20%;
            padding: var(--settingManual-8px);
            display: flex;
            flex-direction: column;
          }
          .curtsySubO {
            height: 25%;
          }
          //yes/no
          .yesnoO {
            width: 100%;
            height: 160px;
            position: static;
          }
          .yesnoTextO {
            width: 40%;
          }
          .yesnoMovieO {
            width: 60%;
          }
          //うとうと
          .utoutoO {
            width: 100%;
            height: 240px;
            position: static;
          }
          //v睡
          .vsuiO {
            width: 100%;
            height: 280px;
            position: static;
          }
          .vsuiMovieO {
            height: calc(100% / 7 * 3);
          }
          .vsuiTextO {
            height: calc(100% / 7 * 4);
          }
          //全身固定
          .zenshinkoteiO {
            width: 100%;
            height: 360px;
            position: static;
          }
          .zenshinkoteiFirstTextO {
            height: calc(100% / 9 * 4);
          }
          .zenshinkoteiSecondTextO {
            height: calc(100% / 3);
          }
          .zenshinkoteiThirdTextO {
            height: calc(100% / 9 * 2);
          }
      `}</style>
    </>
  );
};
