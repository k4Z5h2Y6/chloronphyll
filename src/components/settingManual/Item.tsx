import { Button } from '../elements/Button';
import { Movie } from "../elements/Movie"

export const Item = () => {
  return (
    <>
      <div className='sectionContentsCO'>

      <div className='imageboardO'>
          <div className='imageboardI'>
            <div className='imageboardTextO'>
              <h5>z0_イメージボード</h5>
              <p>好きな画像を差し込んでUpload<br />計51枚の画像をVRChatで直感的に表示できます<br />(1枚画像×3)+(16Set画像×3)</p>
              <p>イメージを共有したい時に使ってください<br />(VR , デスクトップ 両対応)(全モーション対応)</p>
              <Button title='イメージボード画像変更 (Unity改変)'/>
            </div>
            <div className='imageboardMovieO'>
              <Movie src='/SettingManual/01Hair/HairMimikake720_720.mp4' />
            </div>
          </div>
        </div>

        <div className='fuusenO'>
          <div className='fuusenI'>
            <div className='fuusenMovieO'>
              <Movie src='/SettingManual/01Hair/HairMimikake720_720.mp4' />
            </div>
            <div className='fuusenTextO'>
              <h5>z1_ふうせん</h5>
              <p>ExMenuで発動<br />反重力PBでどの角度にしても宙に浮きます<br />形はノーマルとハート型バルーンの2種です<br />色改変はテクスチャでできます</p>
            </div>
          </div>
        </div>

        <div className='candyO'>
          <div className='candyI'>
            <div className='candyMovieO'>
              <Movie src='/SettingManual/01Hair/HairMimikake720_720.mp4' />
            </div>
            <div className='candyTextO'>
              <h5>z2_キャンディ / 木の実</h5>
              <p>両手グーでどちらかの手にキャンディが出てきます<br />ケモ耳モードの時は木の実を持っています<br />くちに近づけると食べて無くなります (Contact)</p>
              <p>VRで2択の選択肢が欲しい時に使ってください<br />(VRモードのみ)(ONOFF機能あり)</p>
            </div>
          </div>
        </div>

        <div className='flemingO'>
          <div className='flemingI'>
            <div className='flemingMovieO'>
              <Movie src='/SettingManual/01Hair/HairMimikake720_720.mp4' />
            </div>
            <div className='flemingTextO'>
              <div className='flemingTextI'>
                <h5>z3_フレミングの左手の法則 / 右ねじの法則</h5>
                <p>両手gunで発動 (ハンドサインgg6)</p>
                <p>VRで電磁気学の議論をする時に使ってください<br />(VRモードのみ)(ONOFF機能あり)</p>
              </div>
              <div className='flemingSubMovieO'>
                <Movie src='/SettingManual/01Hair/HairMaegami1280_388.mp4' />
              </div>
            </div>
          </div>
        </div>

        <div className='ohoshisamaO'>
          <div className='ohoshisamaI'>
            <div className='ohoshisamaMovieO'>
              <Movie src='/SettingManual/01Hair/HairMimikake720_720.mp4' />
            </div>
            <div className='ohoshisamaTextO'>
              <h5>z4_お星さま</h5>
              <div className='ohoshisamaTextI'>
                <div className='ohoshisamaLeftTextO'>
                  <p>a_火花星<br />b_ビックバン<br />c_火花星<br />d_流れ星<br />e_星の雨</p>
                </div>
                <div className='ohoshisamaRightTextO'>
                  <p>Contact左手に触れられると発動<br />Contact右手に触れられると発動<br />(表情) ウィンク , 飛び目 とか..<br />(表情) 両手ピース とか..<br />AFK , フレミング とか..</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='kuukiO'>
          <div className='kuukiI'>
            <div className='kuukiMovieO'>
              <Movie src='/SettingManual/01Hair/HairMimikake720_720.mp4' />
            </div>
            <div className='kuukiTextO'>
              <h5>z5_空気</h5>
              <div className='kuukiTextI'>
                <div className='kuukiLeftTextO'>
                  <p>a_空気<br />b_あしあと<br />c_空気のイス</p>
                </div>
                <div className='kuukiRightTextO'>
                  <p>すやすや , うとうと , V睡 で発動<br />走行 , ズサー歩行 で発動<br />ON状態でもしゃがみの時だけ発動</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='henrudaO'>
          <div className='henrudaI'>
            <div className='henrudaMovieO'>
              <Movie src='/SettingManual/01Hair/HairMimikake720_720.mp4' />
            </div>
            <div className='henrudaTextO'>
              <h5>z6_ヘンルーダ</h5>
              <p>全モーション対応<br />全エモート対応<br />VRでも腕固定します</p>
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
        //風船
        .fuusenO {
          width: 40%;
          height: 30%;
          padding: var(--settingManual-p8);
          position: absolute;
          top: 0;
          left: 0;
        }
        .fuusenI {
          width: 100%;
          height: 100%;
          display: flex;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .fuusenMovieO {
          width: 25%;
          height: 100%;
          padding: var(--settingManual-p8);
          display: flex;
        }
        .fuusenTextO {
          width: 75%;
          height: 100%;
          padding: var(--settingManual-p8);
          display: flex;
          flex-direction: column;
        }
        //キャンディ
        .candyO {
          width: 40%;
          height: 30%;
          padding: var(--settingManual-p8);
          position: absolute;
          top: 30%;
          left: 0;
        }
        .candyI {
          width: 100%;
          height: 100%;
          display: flex;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .candyMovieO {
          width: 25%;
          height: 100%;
          padding: var(--settingManual-p8);
          display: flex;
        }
        .candyTextO {
          width: 75%;
          height: 100%;
          padding: var(--settingManual-p8);
          display: flex;
          flex-direction: column;
        }
        //お星さま
        .ohoshisamaO {
          width: 40%;
          height: 30%;
          padding: var(--settingManual-p8);
          position: absolute;
          top: 0;
          left: 40%;
        }
        .ohoshisamaI {
          width: 100%;
          height: 100%;
          display: flex;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .ohoshisamaMovieO {
          width: 25%;
          height: 100%;
          padding: var(--settingManual-p8);
          display: flex;
        }
        .ohoshisamaTextO {
          width: 75%;
          height: 100%;
          padding: var(--settingManual-p8);
          display: flex;
          flex-direction: column;
        }
        .ohoshisamaTextI {
          width: 100%;
          display: flex;
        }
        .ohoshisamaLeftTextO {
          width: calc(100% / 3);
        }
        .ohoshisamaRightTextO {
          width: calc(100% / 3 * 2);
        }
        //空気
        .kuukiO {
          width: 40%;
          height: 30%;
          padding: var(--settingManual-p8);
          position: absolute;
          top: 30%;
          left: 40%;
        }
        .kuukiI {
          width: 100%;
          height: 100%;
          display: flex;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .kuukiMovieO {
          width: 25%;
          height: 100%;
          padding: var(--settingManual-p8);
          display: flex;
        }
        .kuukiTextO {
          width: 75%;
          height: 100%;
          padding: var(--settingManual-p8);
          display: flex;
          flex-direction: column;
        }
        .kuukiTextI {
          width: 100%;
          display: flex;
        }
        .kuukiLeftTextO {
          width: calc(100% / 3);
        }
        .kuukiRightTextO {
          width: calc(100% / 3 * 2);
        }
        //ヘンルーダ
        .henrudaO {
          width: 20%;
          height: 60%;
          padding: var(--settingManual-p8);
          position: absolute;
          top: 0;
          left: 80%;
        }
        .henrudaI {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .henrudaMovieO {
          width: 100%;
          height: calc(100% / 3 * 2);
          padding: var(--settingManual-p8);
          display: flex;
        }
        .henrudaTextO {
          width: 100%;
          height: calc(100% / 3);
          padding: var(--settingManual-p8);
          display: flex;
          flex-direction: column;
        }
        //フレミング
        .flemingO {
          width: 50%;
          height: 40%;
          padding: var(--settingManual-p8);
          position: absolute;
          top: 60%;
          left: 0;
        }
        .flemingI {
          width: 100%;
          height: 100%;
          display: flex;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .flemingMovieO {
          width: 20%;
          height: 75%;
          padding: var(--settingManual-p8);
          display: flex;
        }
        .flemingTextO {
          width: 80%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .flemingTextI {
          width: 100%;
          height: 50%;
          padding: var(--settingManual-p8);
          display: flex;
          flex-direction: column;
        }
        .flemingSubMovieO {
          width: 100%;
          height: 50%;
          padding: var(--settingManual-p8);
          display: flex;
        }
        //イメージボード
        .imageboardO {
          width: 50%;
          height: 40%;
          padding: var(--settingManual-p8);
          position: absolute;
          top: 60%;
          left: 50%;
        }
        .imageboardI {
          width: 100%;
          height: 100%;
          display: flex;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .imageboardTextO {
          width: 60%;
          height: 100%;
          padding: var(--settingManual-p8);
          display: flex;
          flex-direction: column;
        }
        .imageboardMovieO {
          width: 40%;
          height: 100%;
          padding: var(--settingManual-p8);
          display: flex;
        }
        @media screen and (max-width: 1024px) {
          //コンテンツアウター共通
          .sectionContentsCO {
            height: fit-content;
            display: flex;
            flex-direction: column;
            position: static;
          }
          //イメージボード
          .imageboardO {
            width: 100%;
            height: 160px;
            position: static;
          }
          .imageboardI {
            flex-direction: row-reverse;
          }
          .imageboardMovieO {
            width: 20%;
            height: 80px;
          }
          .imageboardTextO {
            width: 80%;
          }
          //風船
          .fuusenO {
            width: 100%;
            height: 120px;
            position: static;
          }
          .fuusenMovieO {
            width: 20%;
            height: 80px;
          }
          .fuusenTextO {
            width: 80%;
          }
          //キャンディ
          .candyO {
            width: 100%;
            height: 120px;
            position: static;
          }
          .candyMovieO {
            width: 20%;
            height: 80px;
          }
          .candyTextO {
            width: 80%;
          }
          //フレミング
          .flemingO {
            width: 100%;
            height: 200px;
            position: static;
          }
          .flemingMovieO {
            height: 80px;
          }
          //お星さま
          .ohoshisamaO {
            width: 100%;
            height: 120px;
            position: static;
          }
          .ohoshisamaMovieO {
            width: 20%;
            height: 80px;
          }
          .ohoshisamaTextO {
            width: 80%;
          }
          //空気
          .kuukiO {
            width: 100%;
            height: 120px;
            position: static;
          }
          .kuukiMovieO {
            width: 20%;
            height: 80px;
          }
          .kuukiTextO {
            width: 80%;
            height: 100%;
          }
          //ヘンルーダ
          .henrudaO {
            width: 100%;
            height: 120px;
            position: static;
          }
          .henrudaI {
            flex-direction: row;
          }
          .henrudaMovieO {
            width: 40%;
            height: 100%;
          }
          .henrudaTextO {
            width: 60%;
            height: 100%;
          }
        }
      `}</style>
    </>
  )
}