import { MovieMaxWidth } from "../elements/MovieMaxWidth";
import { RadiusedImg } from "../elements/RadiusedImg";

export const Motion = () => {
  return (
    <>
      <div className='sectionContentsCO'>

        <div className='motionO'>
          <div className='motionI'>
            <div className='motionMovieO'>
              <MovieMaxWidth src='/SettingManual/07/motion_all_1024_576.mp4' />
            </div>
            <div className='motionTextO'>
              <div className='tachiO'>
                <div className='tachiI'>
                  <h5>立ち</h5>
                  <p>・かかと立ち<br />・フキ歩行<br />・フキ走行<br /> <br />*ヘンルーダ</p>
                </div>
              </div>
              <div className='syagamiO'>
                <div className='syagamiI'>
                  <h5>しゃがみ</h5>
                  <p>・空気イス<br />・空気イスホバー<br /> <br /> <br />*ヘンルーダ</p>
                </div>
              </div>
              <div className='fuseO'>
                <div className='fuseI'>
                  <h5>ふせ</h5>
                  <p>・ひじふせ<br />・ズサー歩行<br /> <br /> <br />*ヘンルーダ</p>
                </div>
              </div>
              <div className='afkO'>
                <div className='afkI'>
                  <h5>AFK</h5>
                  <p>・すやすや<br />・V睡<br />・うとうと<br />・全身固定<br />*ヘンルーダすやすや</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='furutoraO'>
          <div className='furutoraTextO'>
            <div className='furutoraTextI'>
              <h5>フルトラ <span>(4点以上)</span></h5>
            </div>
            <p>通常通りフルトラで自由に動けます<br />(VIVE2.0 , mocopiで動作確認済み)</p>
            <p>両手パーか全身固定(ExMenu)でポーズ状態になります<br />ONOFF機能(ExMenu)で<br />両手パーでもTrackingを維持することができます</p>
          </div>
        </div>

        <div className='taikimotionO'>
          <div className='taikimotionTextO'>
            <h5>待機モーション</h5>
            <p>かかと立ち<br />60秒に1回 足を入れ替えます<br />(VRCメニューのアバターも動きます)</p>
            <p>ゆらぎヘア,ゆらぎスカート,ゆらぎヘンルーダ<br />100秒に1回 風がなびきます</p>
          </div>
        </div>

        <div className='sitO'>
          <div className='sitI'>
            <div className='sitTextO'>
              <h5>Sit</h5>
              <p>全エモート対応<br />両手パーで腰固定<br />全身固定で腰固定</p>
            </div>
            <div className='sitImgO'>
              {/* <MovieMaxWidth src='/SettingManual/07/motion_sit_852_480.mp4' /> */}
              <RadiusedImg src="/SettingManual/07/motion_sit_1920_1080.jpg" />
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
        //モーション
        .motionO {
          width: 65%;
          height: 100%;
          padding: var(--settingManual-8px);
          position: absolute;
          top: 0;
          left: 0;
        }
        .motionI {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .motionMovieO {
          width: 100%;
          height: 70%;
          padding: var(--settingManual-8px);
          display: flex;
        }
        .motionTextO {
          width: 100%;
          height: 30%;
          display: flex;
        }
        //共通
        .tachiO, .syagamiO, .fuseO, .afkO {
          width: 25%;
          height: 100%;
          padding: var(--settingManual-8px);
        }
        .tachiI, .syagamiI, .fuseI, .afkI {
          width: 100%;
          height: 100%;
          padding: var(--settingManual-8px);
          border: var(--borderColor-section);
          border-radius: var(--borderRadius-20);
        }
        //フルトラ
        .furutoraO {
          width: 35%;
          height: 30%;
          padding: var(--settingManual-8px);
          position: absolute;
          top: 0;
          left: 65%;
        }
        .furutoraTextO {
          width: 100%;
          height: 100%;
          padding: var(--settingManual-8px);
          display: flex;
          flex-direction: column;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .furutoraTextI {
          display: flex;
        }
        //待機モーション
        .taikimotionO {
          width: 35%;
          height: 30%;
          padding: var(--settingManual-8px);
          position: absolute;
          top: 30%;
          left: 65%;
        }
        .taikimotionTextO {
          width: 100%;
          height: 100%;
          padding: var(--settingManual-8px);
          display: flex;
          flex-direction: column;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        //シット
        .sitO {
          width: 35%;
          height: 30%;
          padding: var(--settingManual-8px);
          position: absolute;
          top: 60%;
          left: 65%;
        }
        .sitI {
          width: 100%;
          height: 100%;
          display: flex;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .sitTextO {
          width: calc(100% / 7 * 3);
          height: 100%;
          padding: var(--settingManual-8px);
          display: flex;
          flex-direction: column;
        }
        .sitImgO {
          width: calc(100% / 7 * 4);
          height: 100%;
          padding: var(--settingManual-8px);
          display: flex;
        }
        @media screen and (max-width: 1024px) {
          //コンテンツアウター共通
          .sectionContentsCO {
            height: fit-content;
          }
          //モーション
          .motionO {
            width: 100%;
            height: 440px;
          }
          .motionMovieO {
            height: calc(100% / 11 * 5);
          }
          .motionTextO {
            height: calc(100% / 11 * 6);
            display: flex;
            flex-wrap: wrap;
          }
          //共通
          .tachiO, .syagamiO, .fuseO, .afkO {
            width: 50%;
            height: 50%;
          }
          //フルトラ
          .furutoraO {
            width: 100%;
            height: 160px;
            top: 440px;
            left: 0;
          }
          //待機モーション
          .taikimotionO {
            width: 100%;
            height: 160px;
            top: 600px;
            left: 0;
          }
          //シット
          .sitO {
            width: 100%;
            height: 120px;
            top: 760px;
            left: 0;
          }
      `}</style>
    </>
  );
};