import { Movie } from "../elements/Movie"

export const Hair = () => {
  return (
    <>
      <div className='sectionContentsCO'>

        <div className='yokogamiO'>
          <div className='yokogamiI'>
            <div className='yokogamiMovieO'>
              <Movie src='/SettingManuel/01Hair/HairYokogami1280_720.mp4' />
            </div>
            <div className='yokogamiTextO'>
              <div className='yokogamiTextI'>
                <h5>横髪</h5>
                <p>a_ボブ<br />b_パーマ<br />c_きのこヘア<br />d_ミディアムヘア<br />e_もふヘア</p>
                <p>2つ以上を組み合わせて<br />さらに個性を出せます<br />ほぼ全組み合わせ対応です<br />ExMenuでコーデしてみてください</p>
              </div>
              <div className='yokogamiSubMovieO'>
                <Movie src='/SettingManuel/01Hair/HairYokogamiSub1280_720.mp4' />
              </div>
            </div>
          </div>
        </div>

        <div className='maegamiO'>
          <div className='maegamiI'>
            <div className='maegamiMovieO'>
              <Movie src='/SettingManuel/01Hair/HairMaegami1280_388.mp4' />
            </div>
            <div className='maegamiTextO'>
              <h5>前髪</h5>
              <p>・ぱっつん+3種<br />・長さ 無段階調整<br />・サイドイン</p>
              <p>ExMenuで調整<br />まゆげが見えると印象が変わります</p>
            </div>
          </div>
        </div>

        <div className='mimikakeO'>
          <div className='mimikakeI'>
            <div className='mimikakeMovieO'>
              <Movie src='/SettingManuel/01Hair/HairMimikake720_720.mp4' />
            </div>
            <div className='mimikakeTextO'>
              <h5>みみかけ4種類</h5>
              <p>ケモみみの時は<br />(シェイプ)22_c6_ケモノみみかけ<br />を足す必要があります</p>
              <p>Parameterが上限に達しているので<br />デフォルトの実装はありません</p>
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
          padding: 8px;
          position: absolute;
          top: 0;
          left: 0;
        }
        .yokogamiI {
          width: 100%;
          height: 100%;
          display: flex;
          border-radius: 20px;
          background-color: #ADA79E;
        }
        .yokogamiMovieO {
          width: calc(100% / 3 * 2);
          height: 100%;
          padding: 8px;
          display: flex;
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
          padding: 8px;
          display: flex;
          flex-direction: column;
        }
        .yokogamiSubMovieO {
          width: 100%;
          height: calc(100% / 7 * 3);
          padding: 8px;
          display: flex;
        }
        //前髪
        .maegamiO {
          width: 75%;
          height: 30%;
          padding: 8px;
          position: absolute;
          top: 70%;
          left: 0;
        }
        .maegamiI {
          width: 100%;
          height: 100%;
          display: flex;
          border-radius: 20px;
          background-color: #ADA79E;
        }
        .maegamiMovieO {
          width: calc(100% / 3 * 2);
          height: 100%;
          padding: 8px;
          display: flex;
        }
        .maegamiTextO {
          width: calc(100% / 3);
          height: 100%;
          padding: 8px;
          display: flex;
          flex-direction: column;
        }
        //耳掛け
        .mimikakeO {
          width: 25%;
          height: 80%;
          padding: 8px;
          position: absolute;
          top: 0;
          right: 0;
        }
        .mimikakeI {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          border-radius: 20px;
          background-color: #ADA79E;
        }
        .mimikakeMovieO {
          width: 100%;
          height: calc(100% / 8 * 5);
          padding: 8px;
          display: flex;
        }
        .mimikakeTextO {
          width: 100%;
          height: calc(100% / 8 * 3);
          padding: 8px;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  )
}






