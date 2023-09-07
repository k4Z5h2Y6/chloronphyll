import { useState } from 'react'

export default function SettingManue() {

  const [isSection1Opened, setIsSection1Opened] = useState<boolean>(false);
  const [isSection2Opened, setIsSection2Opened] = useState<boolean>(false);
  const [isSection3Opened, setIsSection3Opened] = useState<boolean>(false);
  const [isSection4Opened, setIsSection4Opened] = useState<boolean>(false);
  const [isSection5Opened, setIsSection5Opened] = useState<boolean>(false);
  const [isSection6Opened, setIsSection6Opened] = useState<boolean>(false);
  const [isSection7Opened, setIsSection7Opened] = useState<boolean>(false);
  const [isSection8Opened, setIsSection8Opened] = useState<boolean>(false);
  const [isSection9Opened, setIsSection9Opened] = useState<boolean>(false);

  return (
    <>
      <section className='sectionCO'>
        <div className='pageTitleCO'>
          <h3>設定資料</h3>
        </div>
        <div className='section0contentO'>
          <div className='section0ContentTextO'></div>
          <div className='section0ContentMovieO'></div>
        </div>
      </section>

      <section>
        <div 
          className='sectionTitleCBtn'
          onClick={() => setIsSection1Opened(!isSection1Opened)}
        >
          <div className='sectionTitleCO'>
            <h4>01 ヘア</h4>
          </div>
        </div>
        <div className={isSection1Opened ? 'section1OpenedO' : 'section1ClosedO'}>
          
        </div>
      </section>

      <section>
        <div 
          className='sectionTitleCBtn'
          onClick={() => setIsSection2Opened(!isSection2Opened)}
        >
          <div className='sectionTitleCO'>
            <h4>02 ケモ</h4>
          </div>
        </div>
        <div className={isSection2Opened ? 'section2OpenedO' : 'section2ClosedO'}>
          
        </div>
      </section>

      <section>
        <div 
          className='sectionTitleCBtn'
          onClick={() => setIsSection3Opened(!isSection3Opened)}
        >
          <div className='sectionTitleCO'>
            <h4>03 ふく</h4>
          </div>
        </div>
        <div className={isSection3Opened ? 'section3OpenedO' : 'section3ClosedO'}>
          
        </div>
      </section>

      <section>
        <div 
          className='sectionTitleCBtn'
          onClick={() => setIsSection4Opened(!isSection4Opened)}
        >
          <div className='sectionTitleCO'>
            <h4>04 Gesture</h4>
          </div>
        </div>
        <div className={isSection4Opened ? 'section4OpenedO' : 'section4ClosedO'}>
          
        </div>
      </section>

      <section>
        <div 
          className='sectionTitleCBtn'
          onClick={() => setIsSection5Opened(!isSection5Opened)}
        >
          <div className='sectionTitleCO'>
            <h4>05 表情</h4>
          </div>
        </div>
        <div className={isSection5Opened ? 'section5OpenedO' : 'section5ClosedO'}>
          
        </div>
      </section>

      <section>
        <div 
          className='sectionTitleCBtn'
          onClick={() => setIsSection6Opened(!isSection6Opened)}
        >
          <div className='sectionTitleCO'>
            <h4>06 アイテム</h4>
          </div>
        </div>
        <div className={isSection6Opened ? 'section6OpenedO' : 'section6ClosedO'}>
          
        </div>
      </section>

      <section>
        <div 
          className='sectionTitleCBtn'
          onClick={() => setIsSection7Opened(!isSection7Opened)}
        >
          <div className='sectionTitleCO'>
            <h4>07 モーション</h4>
          </div>
        </div>
        <div className={isSection7Opened ? 'section7OpenedO' : 'section7ClosedO'}>
          
        </div>
      </section>

      <section>
        <div 
          className='sectionTitleCBtn'
          onClick={() => setIsSection8Opened(!isSection8Opened)}
        >
          <div className='sectionTitleCO'>
            <h4>08 エモート</h4>
          </div>
        </div>
        <div className={isSection8Opened ? 'section8OpenedO' : 'section8ClosedO'}>
          
        </div>
      </section>

      <section>
        <div 
          className='sectionTitleCBtn'
          onClick={() => setIsSection9Opened(!isSection9Opened)}
        >
          <div className='sectionTitleCO'>
            <h4>09 システム</h4>
          </div>
        </div>
        <div className={isSection9Opened ? 'section9OpenedO' : 'section9ClosedO'}>
          
        </div>
      </section>

      {/* テンプレート
      <section>
        <div 
          className='sectionTitleCBtn'
          onClick={() => setIsSection1Opened(!isSection1Opened)}
        >
          <div className='sectionTitleCO'>
            <h4>01 ヘア</h4>
          </div>
        </div>
        <div className={isSection1Opened ? 'section1OpenedO' : 'section1ClosedO'}>
          {isSection1Opened ? '空いてます' : '閉じてます'}
        </div>
      </section> */}

      <style jsx>{`
        .sectionCO {
          width: 100%;
          height: 100vh;
          border-bottom: 1px solid black;
        }
        .pageTitleCO {
          width: fit-content;
          margin: 24px 0 24px -4vw;
          padding: 16px 16px 16px calc(4vw + 16px);
          border-radius: 0 16px 16px 0;
          background-color: #ADA79E;
        }

        .sectionTitleCBtn {
          width: 100%;
          padding: 24px 0;
        }
        .sectionTitleCO {
          width: fit-content;
          padding: 16px;
          border-radius: 16px;
          background-color: #ADA79E;
        }
        .section1OpenedO,
        .section2OpenedO,
        .section3OpenedO,
        .section4OpenedO,
        .section5OpenedO,
        .section6OpenedO,
        .section7OpenedO,
        .section8OpenedO,
        .section9OpenedO {
          width: 100%;
          height: calc(100vh - 24px - 16px - 32px - 16px - 24px);
          border-bottom: 1px solid black;
          transition: all 1s ease;
        }
        .section1ClosedO,
        .section2ClosedO,
        .section3ClosedO,
        .section4ClosedO,
        .section5ClosedO,
        .section6ClosedO,
        .section7ClosedO,
        .section8ClosedO,
        .section9ClosedO {
          width: 100%;
          height: 0;
          overflow: hidden;
          border-bottom: 1px solid black;
          transition: all 1s ease;
        }
      `}</style>
    </>
  )
}