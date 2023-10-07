import { Movie } from "../elements/Movie"

export const System = () => {
  return (
    <>
      <div className='sectionContentsCO'>

        <div className='mmdmodeO'>
          <div className='mmdmodeTextO'>
            <h5>MMDモード</h5>
            <p>ExMenuでONにすると<br />MMDワールドで音楽に合わせて表情が変わります<br />(MMD担当アバターを再Upする必要はありません)</p>
            <p>Fxレイヤーを無効にするシステムなので<br />ヘア,ケモ,ふく,表情はUpload時の姿になります</p>
            <p>改変した姿で踊る (Unity改変)</p>
            <p>ワールドを移動すると自動でOFFになります<br />(MMDモードで判定しているモーションが他にも<br />あるので常にONにする改変はオススメしません)</p>
          </div>
        </div>

        <div className='billiardsmodeO'>
          <div className='billiardsmodeTextO'>
            <h5>ビリヤードモード</h5>
            <p>ビリヤード特化になるのはGestureだけです<br />(無効化) キャンディ木の実 , 飛び目 , フレミング</p>
            <p>左利き対応 (Unity改変)</p>
            <p>オープンブリッジとスタンダードブリッジの<br />Animationの数値を公開しています</p>
            <p>実装手順の詳細は直接ルーに聞いてください!</p>
          </div>
        </div>

        <div className='akarusachouseiO'>
          <div className='akarusachouseiI'>
            <div className='akarusachouseiTextO'>
              <h5>明るさ調整</h5>
              <p>ExMenuでアバターの明るさを調整できます<br />本来写真が撮りづらいワールドでも<br />背景に馴染むことができます</p>
            </div>
            <div className='akarusachouseiMovieO'>
              <Movie src='/SettingManual/01Hair/HairYokogamiSub1280_720.mp4' />
            </div>
          </div>
        </div>

        <div className='onoffkinouO'>
          <div className='onoffkinouTextO'>
            <div className='onoffkinouFirstTextO'>
              <h5>ONOFF機能</h5>
              <div className='onoffkinouFirstTextI'>
                <div className='onoffkinouFirstLeftTextI'>
                  <p><br />1 キャンディ木の実<br />2 両手パー全身固定<br />3 飛び目<br />4 ハンドサイン , Gesture<br />5 表情ランダム<br />6 フレミング<br />7 ハリケーン,ビリビリ,お星さま<br />8 空気</p>
                </div>
                <div className='onoffkinouFirstRightTextI'>
                  <p>(発動条件)<br />gg1 両手グー<br />gg2 両手パー<br />gg3 両手point<br />全Gesture<br />gg5 両手rock &apos;n&apos; roll<br />gg6 両手gun<br />各Gesture , 各Action<br />AFK , 移動</p>
                </div>
              </div>
            </div>
            <div className='onoffkinouSecondTextO'>
              <p>ExMenuでアイテムや表情の発動を制御できます<br />ワールド移動してもそのままなので<br />いらないと思ったものは常にOFFにできます</p>
              <p>アバターを再動作しても戻らないようにするには<br />Unityで1箇所書き換える必要があります</p>
              <p>ONOFF機能のカスタムを維持する (Unity改変)</p>
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
        //MMD
        .mmdmodeO {
          width: 35%;
          height: 50%;
          padding: var(--settingManual-p8);
          position: absolute;
          top: 0;
          left: 0;
        }
        .mmdmodeTextO {
          width: 100%;
          height: 100%;
          padding: var(--settingManual-p8);
          display: flex;
          flex-direction: column;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        //ビリヤード
        .billiardsmodeO {
          width: 35%;
          height: 50%;
          padding: var(--settingManual-p8);
          position: absolute;
          top: 50%;
          left: 0;
        }
        .billiardsmodeTextO {
          width: 100%;
          height: 100%;
          padding: var(--settingManual-p8);
          display: flex;
          flex-direction: column;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        //明るさ
        .akarusachouseiO {
          width: 30%;
          height: 60%;
          padding: var(--settingManual-p8);
          position: absolute;
          top: 0;
          left: 35%;
        }
        .akarusachouseiI {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .akarusachouseiTextO {
          width: 100%;
          height: calc(100% / 3);
          padding: var(--settingManual-p8);
          display: flex;
          flex-direction: column;
        }
        .akarusachouseiMovieO {
          width: 100%;
          height: calc(100% / 3 * 2);
          padding: var(--settingManual-p8);
          display: flex;
        }
        //ONOFF
        .onoffkinouO {
          width: 35%;
          height: 70%;
          padding: var(--settingManual-p8);
          position: absolute;
          top: 0;
          left: 65%;
        }
        .onoffkinouTextO {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .onoffkinouFirstTextO {
          width: 100%;
          height: calc(100% / 7 * 4);
          padding: var(--settingManual-p8);
          display: flex;
          flex-direction: column;
        }
        .onoffkinouFirstTextI {
          width: 100%;
          display: flex;
        }
        .onoffkinouFirstLeftTextI {
          width: calc(100% / 7 * 4);
        }
        .onoffkinouFirstRightTextI {
          width: calc(100% / 7 * 3);
        }
        .onoffkinouSecondTextO {
          width: 100%;
          height: calc(100% / 7 * 3);
          padding: var(--settingManual-p8);
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  )
}