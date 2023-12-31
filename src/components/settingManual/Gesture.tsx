import SettingManual from "@/pages/settingManual";
import { Button } from "../elements/Button";
import { Movie } from "../elements/Movie";
import Image from "next/image";
import { SettingManualJPG } from "../elements/SettingManualJPG";

export const Gesture = () => {
  return (
    <>
      <div className="sectionContentsCO">
        <div className="katateturntableO">
          <div className="katateturntableI">
            <div className="katateturntableMovieO">
              <Movie src="/SettingManual/gesture_katateturntableI_720_720.mp4" />
            </div>
            <div className="katateturntableTextO">
              <div className="katateturntableTextI">
                <div className="katateturntableTextLeftO">
                  <h5>片手Gesture</h5>
                  <p>
                    g0_フキの手
                    <br />
                    g1_グー
                    <br />
                    g2_パー(~)
                    <br />
                    g3_ご案内する手
                    <br />
                    g4_無敵のぴーす(~)
                    <br />
                    g5_okサイン
                    <br />
                    g6_スティックを握る手
                    <br />
                    g7_ものをつまむ手(~)
                  </p>
                </div>
                <div className="katateturntableTextRightO">
                  <h5>両手Gesture</h5>
                  <p>
                    <br />
                    gg1_(キャンディ発動)
                    <br />
                    gg2_((擬似AFK))
                    <br />
                    gg3_ないしょ
                    <br />
                    gg4_無力のぴーす(~)
                    <br />
                    gg5_シャッターポーズ
                    <br />
                    gg6_(フレミング発動)
                    <br />
                    gg7_水を掬う手
                  </p>
                </div>
              </div>
              <div className="katateturntableSubO">
                <div className="katateturntableSubI">
                  <div className="katateturntableSubMovieO">
                    <Movie src="/SettingManual/gesture_katateturntable_sub_720_720.mp4" />
                  </div>
                  <div className="katateturntableSubTextO">
                    <p className="katateturntableSubTextP">
                      ネイルサイズ (無段階調整)
                      <br />
                      ネイルアクセ (ONOFF)
                    </p>
                    <Button title="色変更はテクスチャです" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ryoutekirakiraposeO">
          <div className="ryoutekirakiraposeMovieO">
            <Movie src="/SettingManual/gesture_ryoutekirakirapose_720_720.mp4" />
          </div>
        </div>

        <div className="kakatoBilliardsSetsumeiO">
          <div className="kakatodachiO">
            <div className="kakatodachiImgO">
              <SettingManualJPG src="/SettingManual/gesture_kakatodachi_720_720.jpg" />
            </div>
          </div>

          <div className="billiardsSetsumeiO">
            <div className="billiardsmodeO">
              <div className="billiardsmodeImgO">
                <SettingManualJPG src="/SettingManual/gesture_shutterpose_1280_720.jpg" />
              </div>
            </div>

            <div className="setsumeiO">
              <div className="setsumeiI">
                <p>
                  ここに表示していないGestureが
                  <br />
                  あと何種か存在します
                  <br />
                  各ポーズ , Actionで変形します
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="penwonigiruO">
          <div className="penwonigiruImgO">
            <SettingManualJPG src="/SettingManual/gesture_penwonigiru_1280_388.jpg" />
          </div>
        </div>

        <div className="mizuwosukuuO">
          <div className="mizuwosukuuImgO">
            <SettingManualJPG src="/SettingManual/gesture_mizuwosukuu_1280_388.jpg" />
          </div>
        </div>

        <div className="uekibachiO">
          <div className="uekibachiImgO">
            <SettingManualJPG src="/SettingManual/gesture_uekibachi_1280_388.jpg" />
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
        //片手ターンテーブル
        .katateturntableO {
          width: 60%;
          height: 60%;
          padding: var(--settingManual-8px);
          position: absolute;
          top: 0;
          left: 0;
        }
        .katateturntableI {
          width: 100%;
          height: 100%;
          display: flex;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .katateturntableMovieO {
          width: calc(50% - 8px - 8px);
          height: 100%;
          padding: var(--settingManual-8px);
          display: flex;
        }
        .katateturntableTextO {
          width: 50%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .katateturntableTextI {
          width: 100%;
          height: calc(100% / 3 * 2);
          display: flex;
        }
        .katateturntableTextLeftO,
        .katateturntableTextRightO {
          width: 50%;
          height: 100%;
          padding: var(--settingManual-8px);
          display: flex;
          flex-direction: column;
        }
        .katateturntableSubO {
          width: 100%;
          height: calc(100% / 3);
          padding: var(--settingManual-8px);
          display: flex;
        }
        .katateturntableSubI {
          width: 100%;
          height: 100%;
          display: flex;
          border: var(--borderColor-section);
          border-radius: var(--borderRadius-20);
        }
        .katateturntableSubMovieO {
          width: calc(100% / 3);
          height: 100%;
          padding: var(--settingManual-8px);
          display: flex;
        }
        .katateturntableSubTextO {
          width: calc(100% / 3 * 2);
          height: 100%;
          padding: var(--settingManual-8px);
          display: flex;
          flex-direction: column;
        }
        //両手キラキラポーズ
        .ryoutekirakiraposeO {
          width: 20%;
          height: 40%;
          padding: var(--settingManual-8px);
          position: absolute;
          top: 60%;
          left: 0;
        }
        .ryoutekirakiraposeMovieO {
          width: 100%;
          height: 100%;
          padding: var(--settingManual-8px);
          display: flex;
        }
        //かかと立ち、ビリヤードモード、説明
        .kakatoBilliardsSetsumeiO {
          width: 40%;
          height: 40%;
          display: flex;
          position: absolute;
          top: 60%;
          left: 20%;
        }
        //かかと立ち
        .kakatodachiO {
          width: 50%;
          height: 100%;
          padding: var(--settingManual-8px);
        }
        .kakatodachiImgO {
          width: 100%;
          height: 100%;
          padding: var(--settingManual-8px);
          display: flex;
        }
        //ビリヤードモード、説明
        .billiardsSetsumeiO {
          width: 50%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        //ビリヤードモード
        .billiardsmodeO {
          width: 100%;
          height: 50%;
          padding: var(--settingManual-8px);
        }
        .billiardsmodeImgO {
          width: 100%;
          height: 100%;
          padding: var(--settingManual-8px);
          display: flex;
        }
        //説明
        .setsumeiO {
          width: 100%;
          height: 50%;
          padding: var(--settingManual-8px);
        }
        .setsumeiI {
          width: 100%;
          height: 100%;
          padding: var(--settingManual-8px);
          display: flex;
          border: var(--borderColor-section);
          border-radius: var(--borderRadius-20);
        }
        //ペンを握る
        .penwonigiruO {
          width: 40%;
          height: 30%;
          padding: var(--settingManual-8px);
          position: absolute;
          top: 0;
          left: 60%;
        }
        .penwonigiruImgO {
          width: 100%;
          height: 100%;
          padding: var(--settingManual-8px);
          display: flex;
          position: relative;
        }
        //水を掬う
        .mizuwosukuuO {
          width: 40%;
          height: 30%;
          padding: var(--settingManual-8px);
          position: absolute;
          top: 30%;
          left: 60%;
        }
        .mizuwosukuuImgO {
          width: 100%;
          height: 100%;
          padding: var(--settingManual-8px);
          display: flex;
          position: relative;
        }
        //植木鉢
        .uekibachiO {
          width: 40%;
          height: 30%;
          padding: var(--settingManual-8px);
          position: absolute;
          top: 60%;
          left: 60%;
        }
        .uekibachiImgO {
          width: 100%;
          height: 100%;
          padding: var(--settingManual-8px);
          display: flex;
          position: relative;
        }
        @media screen and (max-width: 1024px) {
          //コンテンツアウター共通
          .sectionContentsCO {
            height: fit-content;
            display: flex;
            flex-direction: column;
            position: static;
          }
          //片手ターンテーブル
          .katateturntableO {
            width: 100%;
            height: 480px;
            position: static;
          }
          .katateturntableI {
            flex-direction: column;
          }
          .katateturntableMovieO {
            width: 100%;
            height: calc(240px - 4px - 4px);
          }
          .katateturntableTextO {
            width: 100%;
            height: 240px;
          }
          .katateturntableSubO {
            width: 80%;
            height: calc(100% / 3);
            margin: 0 auto;
            padding: var(--settingManual-8px);
            display: flex;
          }
          .katateturntableSubMovieO {
            width: calc(100% / 8 * 3);
          }
          .katateturntableSubTextO {
            width: calc(100% / 8 * 5);
          }
          .katateturntableSubTextP {
            margin-bottom: 4px;
          }
          //両手キラキラポーズ
          .ryoutekirakiraposeO {
            width: 100%;
            height: 240px;
            position: static;
          }
          //かかと立ち、ビリヤードモード、説明
          .kakatoBilliardsSetsumeiO {
            width: 100%;
            height: 160px;
            position: static;
          }
          //ペンを握る,水を掬う,植木鉢
          .penwonigiruO,
          .mizuwosukuuO,
          .uekibachiO {
            width: 100%;
            height: 80px;
            position: static;
          }
        }
      `}</style>
    </>
  );
};
