import { Movie } from "../elements/Movie"

export const Emote = () => {
  return (
    <>
      <div className='sectionContentsCO'>

        <div className='curtsyO'>
          <div className='curtsyO'>
            <div className='curtsyO'></div>
            <div className='curtsyO'></div>
          </div>
        </div>

        <div className='utoutoO'>
          <div className='utoutoO'>
            <div className='utoutoO'></div>
            <div className='utoutoO'></div>
          </div>
        </div>

        <div className='vsuiO'>
          <div className='vsuiO'>
            <div className='vsuiO'></div>
            <div className='vsuiO'></div>
          </div>
        </div>

        <div className='yesno'>
          <div className='yesno'>
            <div className='yesno'></div>
            <div className='yesno'></div>
          </div>
        </div>

        <div className='zenshinkoteiO'>
          <div className='zenshinkoteiO'>
            <div className='zenshinkoteiO'></div>
            <div className='zenshinkoteiO'></div>
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
      `}</style>
    </>
  )
}