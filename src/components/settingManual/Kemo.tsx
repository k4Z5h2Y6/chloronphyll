import { Movie } from "../elements/Movie";

export const Kemo = () => {
  return (
    <>
      <div className='sectionContentsCO'>

        <div className='tsunoO'>
          <div className='tsunoI'>
            <div className='tsunoMovieO'>
              <Movie src='/SettingManual/01Hair/HairYokogami1280_720.mp4' />
            </div>
            <div className='tsunoTextO'>
              <h5>ツノ16種類 <span>(ExMenuで選択)</span></h5>
            </div>
          </div>
        </div>

        <div className='kemozokuseiO'>
          <div className='kemozokuseiI'>
            <div className='kemozokuseiTextO'>
              <h5>ケモ属性</h5>
              <p>シュバルツナーゼというスイスアルプスが原産の山羊がモデルです</p>
              <p>オスメスどちらもツノがありますが , ツノがないメス羊もたまに見かけます<br />耳しっぽ のみにしたい場合はUnityでシェイプを調整してください<br />(シェイプ)22_c2_ツノOFF</p>
              <p>シュバルツナーゼ Walliser Schwarznasen<br />ヴァレー ブラックノーズ シープ Walliser Schwarznasenschaf<br />(Youtubeで検索するといろんな形のツノが見られます)</p>
            </div>
          </div>
        </div>

        <div className='mimihanemimitojiO'>
          <div className='mimihanemimitojiI'>
            <div className='mimihanemimitojiMovieO'>
              <Movie src='/SettingManual/01Hair/HairYokogami1280_720.mp4' />
            </div>
            <div className='mimihanemimitojiTextO'>
              <h5>耳はね、耳とじ <span>(ハンドサインで発動)</span></h5>
            </div>
          </div>
        </div>

        <div className='shippoO'>
          <div className='shippoI'>
            <div className='shippoMovieO'>
              <Movie src='/SettingManual/01Hair/HairYokogami1280_720.mp4' />
            </div>
            <div className='shippoTextO'>
              <h5>しっぽ <span>(ハンドサインで発動)</span></h5>
              <p>・ゆらゆらしっぽ<br />・くるりんしっぽ<br />・しっぽ曲げ (Sit時)</p>
            </div>
          </div>
        </div>

        <div className='kemomiminokatachiO'>
          <div className='kemomiminokatachiI'>
            <div className='kemomiminokatachiMovieO'>
              <Movie src='/SettingManual/01Hair/HairMimikake720_720.mp4' />
            </div>
            <div className='kemomiminokatachiTextO'>
              <h5>ケモ耳のかたち</h5>
              <p>a_ケモ耳ミニ<br />b_ケモ耳ロング<br />c_ケモ耳曲げ<br />d_ケモ耳丸み<br />e_ケモ耳きのこ</p>
              <p>ヘアに合わせてUnityでシェイプを調整<br />ExMenuの実装はありません</p>
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
        //つの
        .tsunoO {
          width: 45%;
          height: 60%;
          padding: var(--settingManual-p8);
          position: absolute;
          top: 0;
          left: 0;
        }
        .tsunoI {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .tsunoMovieO {
          width: 100%;
          height: calc(100% / 6 * 5);
          padding: var(--settingManual-p8);
          display: flex;
        }
        .tsunoTextO {
          width: 100%;
          height: calc(100% / 6);
          padding: var(--settingManual-p8);
          display: flex;
        }
        //ケモ属性
        .kemozokuseiO {
          width: 45%;
          height: 40%;
          padding: var(--settingManual-p8);
          position: absolute;
          top: 60%;
          left: 0;
        }
        .kemozokuseiI {
          width: 100%;
          height: 100%;
          display: flex;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .kemozokuseiTextO {
          width: 100%;
          height: 100%;
          padding: var(--settingManual-p8);
          display: flex;
          flex-direction: column;
        }
        //耳はね耳とじ
        .mimihanemimitojiO {
          width: 30%;
          height: 40%;
          padding: var(--settingManual-p8);
          position: absolute;
          top: 0;
          left: 45%;
        }
        .mimihanemimitojiI {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .mimihanemimitojiMovieO {
          width: 100%;
          height: calc(100% / 4 * 3);
          padding: var(--settingManual-p8);
          display: flex;
        }
        .mimihanemimitojiTextO {
          width: 100%;
          height: calc(100% / 4);
          padding: var(--settingManual-p8);
          display: flex;
        }
        //しっぽ
        .shippoO {
          width: 30%;
          height: 60%;
          padding: var(--settingManual-p8);
          position: absolute;
          top: 40%;
          left: 45%;
        }
        .shippoI {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .shippoMovieO {
          width: 100%;
          height: calc(100% / 6 * 4);
          padding: var(--settingManual-p8);
          display: flex;
        }
        .shippoTextO {
          width: 100%;
          height: calc(100% / 6 * 2);
          padding: var(--settingManual-p8);
          display: flex;
          flex-direction: column;
        }
        //ケモ耳
        .kemomiminokatachiO {
          width: 25%;
          height: 90%;
          padding: var(--settingManual-p8);
          position: absolute;
          top: 0;
          left: 75%;
        }
        .kemomiminokatachiI {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .kemomiminokatachiMovieO {
          width: 100%;
          height: calc(100% / 9 * 5);
          padding: var(--settingManual-p8);
          display: flex;
        }
        .kemomiminokatachiTextO {
          width: 100%;
          height: calc(100% / 9 * 4);
          padding: var(--settingManual-p8);
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
          //つの
          .tsunoO {
            width: 100%;
            height: 200px;
            position: static;
          }
          //ケモ属性
          .kemozokuseiO {
            width: 100%;
            height: 200px;
            position: static;
          }
          //耳はね耳とじ
          .mimihanemimitojiO {
            width: 100%;
            height: 160px;
            position: static;
          }
          //しっぽ
          .shippoO {
            width: 100%;
            height: 120px;
            position: static;
          }
          .shippoI {
            flex-direction: row;
          }
          .shippoMovieO {
            width: 40%;
            height: 100%;
          }
          .shippoTextO {
            width: 60%;
            height: 100%;
          }
          //ケモ耳
          .kemomiminokatachiO {
            width: 100%;
            height: 160px;
            position: static;
          }
          .kemomiminokatachiI {
            flex-direction: row;
          }
          .kemomiminokatachiMovieO {
            width: 40%;
            height: 100%;
          }
          .kemomiminokatachiTextO {
            width: 60%;
            height: 100%;
          }
        }
      `}</style>
    </>
  );
}






