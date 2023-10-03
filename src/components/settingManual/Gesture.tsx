import { Movie } from "../elements/Movie"

export const Gesture = () => {
  return (
    <>
      <div className='sectionContentsCO'>

        <div className='katateturntableO'>
          <div className='katateturntableI'>
            <div className='katateturntableMovieO'>
              <Movie src='/SettingManual/01Hair/HairMimikake720_720.mp4' />
            </div>
            <div className='katateturntableTextO'>
              <div className='katateturntableTextI'>
                <div className='katateturntableTextLeftO'>
                  <h5>片手Gesture</h5>
                  <p>g0_フキの手<br />g1_グー<br />g2_パー(~)<br />g3_ご案内する手<br />g4_無敵のぴーす(~)<br />g5_okサイン<br />g6_スティックを握る手<br />g7_ものをつまむ手(~)</p>
                </div>
                <div className='katateturntableTextRightO'>
                  <h5>両手Gesture</h5>
                  <p><br />gg1_(キャンディ発動)<br />gg2_((擬似AFK))<br />gg3_ないしょ<br />gg4_無力のぴーす(~)<br />gg5_シャッターポーズ<br />gg6_(フレミング発動)<br />gg7_水を掬う手</p>
                </div>
              </div>
              <div className='katateturntableSubO'>
                <div className='katateturntableSubI'>
                  <div className='katateturntableSubMovieO'>
                    <Movie src='/SettingManual/01Hair/HairMimikake720_720.mp4' />
                  </div>
                  <div className='katateturntableSubTextO'>
                    <p>ネイルサイズ (無段階調整)<br />ネイルアクセ (ONOFF)</p>
                    <p>色変更はテクスチャです</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='ryoutekirakiraposeO'>
          <div className='ryoutekirakiraposeMovieO'>
            <Movie src='/SettingManual/01Hair/HairMimikake720_720.mp4' />
          </div>
        </div>

        <div className='kakatodachiO'>
          <div className='kakatodachiMovieO'>
            <Movie src='/SettingManual/01Hair/HairMimikake720_720.mp4' />
          </div>
        </div>

        <div className='billiardsmodeO'>
          <div className='billiardsmodeMovieO'>
            <Movie src='/SettingManual/01Hair/HairYokogami1280_720.mp4' />
          </div>
        </div>

        <div className='setsumeiO'>
          <div className='setsumeiI'>
            <p>ここに表示していないGestureが<br />あと何種か存在します<br />各ポーズ , Actionで変形します</p>
          </div>
        </div>

        <div className='penwonigiruO'>
          <div className='penwonigiruMovieO'>
            <Movie src='/SettingManual/01Hair/HairMaegami1280_388.mp4' />
          </div>
        </div>

        <div className='mizuwosukuuO'>
          <div className='mizuwosukuuMovieO'>
            <Movie src='/SettingManual/01Hair/HairMaegami1280_388.mp4' />
          </div>
        </div>

        <div className='uekibachiO'>
          <div className='uekibachiMovieO'>
            <Movie src='/SettingManual/01Hair/HairMaegami1280_388.mp4' />
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
          padding: var(--settingManual-p8);
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
          width: 50%;
          height: 100%;
          padding: var(--settingManual-p8);
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
        .katateturntableTextLeftO, .katateturntableTextRightO {
          width: 50%;
          height: 100%;
          padding: var(--settingManual-p8);
          display: flex;
          flex-direction: column;
        }
        .katateturntableSubO {
          width: 100%;
          height: calc(100% / 3);
          padding: var(--settingManual-p8);
          display: flex;
        }
        .katateturntableSubI {
          width: 100%;
          height: 100%;
          display: flex;
          border: 1px solid var(--borderColor);
          border-radius: var(--borderRadius-20);
        }
        .katateturntableSubMovieO {
          width: calc(100% / 3);
          height: 100%;
          padding: var(--settingManual-p8);
          display: flex;
        }
        .katateturntableSubTextO {
          width: calc(100% / 3 * 2);
          height: 100%;
          padding: var(--settingManual-p8);
        }
        //両手キラキラポーズ
        .ryoutekirakiraposeO {
          width: 20%;
          height: 40%;
          padding: var(--settingManual-p8);
          position: absolute;
          top: 60%;
          left: 0;
        }
        .ryoutekirakiraposeMovieO {
          width: 100%;
          height: 100%;
          padding: var(--settingManual-p8);
          display: flex;
        }
        //かかと立ち
        .kakatodachiO {
          width: 20%;
          height: 40%;
          padding: var(--settingManual-p8);
          position: absolute;
          top: 60%;
          left: 20%;
        }
        .kakatodachiMovieO {
          width: 100%;
          height: 100%;
          padding: var(--settingManual-p8);
          display: flex;
        }
        //ビリヤードモード
        .billiardsmodeO {
          width: 20%;
          height: 20%;
          padding: var(--settingManual-p8);
          position: absolute;
          top: 60%;
          left: 40%;
        }
        .billiardsmodeMovieO {
          width: 100%;
          height: 100%;
          padding: var(--settingManual-p8);
          display: flex;
        }
        //説明
        .setsumeiO {
          width: 20%;
          height: 20%;
          padding: var(--settingManual-p8);
          position: absolute;
          top: 80%;
          left: 40%;
        }
        .setsumeiI {
          width: 100%;
          height: 100%;
          padding: var(--settingManual-p8);
          display: flex;
          border: 1px solid var(--borderColor);
          border-radius: var(--borderRadius-20);
        }
        //ペンを握る
        .penwonigiruO {
          width: 40%;
          height: 30%;
          padding: var(--settingManual-p8);
          position: absolute;
          top: 0;
          left: 60%;
        }
        .penwonigiruMovieO {
          width: 100%;
          height: 100%;
          padding: var(--settingManual-p8);
          display: flex;
        }
        //水を掬う
        .mizuwosukuuO {
          width: 40%;
          height: 30%;
          padding: var(--settingManual-p8);
          position: absolute;
          top: 30%;
          left: 60%;
        }
        .mizuwosukuuMovieO {
          width: 100%;
          height: 100%;
          padding: var(--settingManual-p8);
          display: flex;
        }
        //植木鉢
        .uekibachiO {
          width: 40%;
          height: 30%;
          padding: var(--settingManual-p8);
          position: absolute;
          top: 60%;
          left: 60%;
        }
        .uekibachiMovieO {
          width: 100%;
          height: 100%;
          padding: var(--settingManual-p8);
          display: flex;
        }
      `}</style>
    </>
  )
}