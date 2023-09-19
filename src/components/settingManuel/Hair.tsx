import { Movie } from "../elements/Movie"

export const Hair = () => {
  return (
    <>
      <div className='sectionContentsCO'>

        <div className='yokogamiO'>
          <div className='yokogamiI'>
            <div className='yokogamiMovieO'>
              <Movie src='/SettingManuel/01Hair/test10m1280_720.mov' />
            </div>
            <div className='yokogamiTextO'>
              <h5>横髪</h5>
              <p>a_ボブ<br />b_パーマ<br />c_きのこヘア<br />d_ミディアムヘア<br />e_もふヘア</p>
              <p>2つ以上を組み合わせて<br />さらに個性を出せます<br />ほぼ全組み合わせ対応です<br />ExMenuでコーデしてみてください</p>
              <div className='yokogamiSubMovieO'>
                <Movie src='/SettingManuel/01Hair/test10m1280_720.mov' />
              </div>
            </div>
          </div>
        </div>

        <div className='maegamiO'>
          <div className='maegamiI'>
            <div className='maegamiMovieO'>
              <Movie src='/SettingManuel/01Hair/test10m1280_388.mov' />
            </div>
            <div className='maegamiTextO'>
              <h5>前髪</h5>
              <p>・ぱっつん+3種<br />・長さ 無段階調整<br />・サイドイン</p>
              <p>ExMenuで調整<br />まゆげの形はUnityでシェイプを調整してください</p>
              <p>まゆげ改変 (Unity改変)</p>
            </div>
          </div>
        </div>

        <div className='mimikakeO'>
          <div className='mimikakeI'>
            <div className='mimikakeMovieO'>
              <Movie src='/SettingManuel/01Hair/test10m720_720.mov' />
            </div>
            <div className='mimikakeTextO'>
              <h5>みみかけ4種類</h5>
              <p>ケモみみの時は<br />(シェイプ)22_c6_ケモノみみかけ<br />を足す必要があります<br />デフォルトの実装はありません</p>
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
          width: 70%;
          height: 60%;
          padding: 8px;
          position: absolute;
          top: 0;
          left: 0;
        }
        .yokogamiI {
          width: 100%;
          height: 100%;
          padding: 4px;
          display: flex;
          border-radius: 20px;
          background-color: #ADA79E;
        }
        .yokogamiMovieO {
          width: 70%;
          height: 100%;
          margin-right: 8px;
          display: flex;
          background-color: aqua;
        }
        .yokogamiTextO {
          width: 30%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .yokogamiSubMovieO {
          width: 100%;
          height: 100%;
          background-color: aqua;
        }
        //前髪
        .maegamiO {
          width: 70%;
          height: 40%;
          padding: 8px;
          position: absolute;
          top: 60%;
          left: 0;
        }
        .maegamiI {
          width: fit-content;//100%
          height: 100%;
          padding: 4px;
          display: flex;
          border-radius: 20px;
          background-color: #ADA79E;
        }
        .maegamiMovieO {
          //width: 60%;
          height: 100%;
          margin-right: 8px;
          display: flex;
          background-color: aqua;
        }
        .maegamiTextO {
          //width: 40%;
          width: fit-content;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        //耳掛け
        .mimikakeO {
          width: 30%;
          height: 100%;
          padding: 8px;
          position: absolute;
          top: 0;
          right: 0;
        }
        .mimikakeI {
          width: 100%;
          height: 100%;
          padding: 4px;
          display: flex;
          flex-direction: column;
          border-radius: 20px;
          background-color: #ADA79E;
        }
      `}</style>
    </>
  )
}






