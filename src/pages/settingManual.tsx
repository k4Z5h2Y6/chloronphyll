import { MovieMaxWidth } from '@/components/elements/MovieMaxWidth';
import { PageTitle } from '@/components/elements/PageTitle';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const DynamicHair = dynamic(() => import( "../components/settingManual/Hair" ).then((mod) => mod.Hair))
const DynamicKemo = dynamic(() => import( "../components/settingManual/Kemo" ).then((mod) => mod.Kemo))
const DynamicClothes = dynamic(() => import( "../components/settingManual/Clothes" ).then((mod) => mod.Clothes))
const DynamicGesture = dynamic(() => import( "../components/settingManual/Gesture" ).then((mod) => mod.Gesture))
const DynamicExpression = dynamic(() => import( "../components/settingManual/Expression" ).then((mod) => mod.Expression))
const DynamicItem = dynamic(() => import( "../components/settingManual/Item" ).then((mod) => mod.Item))
const DynamicMotion = dynamic(() => import( "../components/settingManual/Motion" ).then((mod) => mod.Motion))
const DynamicEmote = dynamic(() => import( "../components/settingManual/Emote" ).then((mod) => mod.Emote))
const DynamicSystem = dynamic(() => import( "../components/settingManual/System" ).then((mod) => mod.System))

//todo:ボーダーカラー変更
export default function SettingManual() {

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
      <section className='topSct'>
        <PageTitle pageTitle='設定資料' />
        <div className='section0contentO'>
          <div className='section0ContentTextO'>
            <ul>
              <li>01 ヘア (6種)(200パターン)</li>
              <li>02 ケモ (16種)</li>
              <li>03 ふく (整数73万パターン)</li>
              <li>04 Gesture (23種)</li>
              <li>05 表情 (45種)</li>
              <li>06 アイテム (7種)</li>
              <li>07 モーション (12種)</li>
              <li>08 エモート (5種)</li>
              <li>09 システム (4種)</li>
            </ul>
          </div>

          <div className='section0ContentMovieO'>
            <MovieMaxWidth src='/SettingManual/00/settingManuel_1024_576.mp4' />
          </div>
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
          {/* <Hair /> */}
          {isSection1Opened ? <DynamicHair/> : (setTimeout(() => { return null; }, 1000), <DynamicHair/>)}
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
          {/* <Kemo /> */}
          {isSection2Opened ? <DynamicKemo/> : (setTimeout(() => { return null; }, 1000), <DynamicKemo/>)}
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
          {/* <Clothes /> */}
          {isSection3Opened ? <DynamicClothes/> : (setTimeout(() => { return null; }, 1000), <DynamicClothes/>)}
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
          {/* <Gesture /> */}
          {isSection4Opened ? <DynamicGesture/> : (setTimeout(() => { return null; }, 1000), <DynamicGesture/>)}
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
          {/* <Expression /> */}
          {isSection5Opened ? <DynamicExpression/> : (setTimeout(() => { return null; }, 1000),  <DynamicExpression/>)}
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
          {/* <Item /> */}
          {isSection6Opened ? <DynamicItem/> : (setTimeout(() => { return null; }, 1000), <DynamicItem/>)}
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
          {/* <Motion /> */}
          {isSection7Opened ? <DynamicMotion/> : (setTimeout(() => { return null; }, 1000), <DynamicMotion/>)}
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
          {/* <Emote /> */}
          {isSection8Opened ? <DynamicEmote/> : (setTimeout(() => { return null; }, 1000), <DynamicEmote/>)}
        </div>
      </section>

      <section className='endSct'>
        <div
          className='sectionTitleCBtn'
          onClick={() => setIsSection9Opened(!isSection9Opened)}
        >
          <div className='sectionTitleCO'>
            <h4>09 システム</h4>
          </div>
        </div>
        <div className={isSection9Opened ? 'section9OpenedO' : 'section9ClosedO'}>
          {/* <System /> */}
          {isSection9Opened ? <DynamicSystem/> : (setTimeout(() => { return null; }, 1000), <DynamicSystem/>)}
        </div>
      </section>

      <style jsx>{`
        .topSct {
          width: 100%;
          height: 100vh;
          border-bottom: var(--borderColor-section);
        }
        //00
        .section0contentO {
          width: 100%;
          height: calc(100% - 16px - 32px - 16px - 24px - 7vh);
          display: flex;
        }
        .section0ContentTextO {
          width: 40%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .section0ContentMovieO {
          width: 60%;
          height: 100%;
          margin: 0 auto;
          padding: 24px;
          display: flex;
          align-items: center;
        }
        //アコーディオン
        .sectionTitleCBtn {
          width: 100%;
          padding: 24px 0;
          display: flex;
          align-items: center;
        }
        .sectionTitleCO {
          width: fit-content;
          padding: 16px;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-title);
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
          padding-bottom: 7vh;
          border-bottom: var(--borderColor-section);
          transition: var(--transition1s);
          position: relative;
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
          border-bottom: var(--borderColor-section);
          transition: var(--transition1s);
        }
        .endSct {
          margin-bottom: calc(7vh + 25vh);
        }
        @media screen and (max-width: 1024px) {
          .topSct {
            height: auto;
          }
          .section0ContentTextO {
            display: none;
          }
          .section0ContentMovieO {
            width: 80%;
            margin: 0 auto;
            padding: 0 0 20px 0; 
            align-items: stretch;
          }
          //アコーディオン
          .sectionTitleCBtn {
            padding: 8px 0;
          }
          .sectionTitleCO {
            width: fit-content;
            padding: 8px;
            border-radius: var(--borderRadius-20);
            background-color: var(--backgroundColor-item);
          }
          .section1OpenedO {
            height: 640px;
          }
          .section2OpenedO {
            height: 880px;
          }
          .section3OpenedO {
            height: 640px;
          }
          .section4OpenedO {
            height: 1160px;
          }
          .section5OpenedO {
            height: 840px;
          }
          .section6OpenedO {
            height: 1000px;
          }
          .section7OpenedO {
            height: 920px;
          }
          .section8OpenedO {
            height: 1560px;
          }
          .section9OpenedO {
            height: 960px;
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
            padding-bottom: 0;
          }
          .section9OpenedO, .section9ClosedO {
            border: none;
          }
          .endSct {
            margin-bottom: 50px;
          }
        }
      `}</style>
    </>
  );
}

//ダイナミックルーティングなし

// import { MovieMaxWidth } from '@/components/elements/MovieMaxWidth';
// import { PageTitle } from '@/components/elements/PageTitle';
// import { Clothes } from '@/components/settingManual/Clothes';
// import { Emote } from '@/components/settingManual/Emote';
// import { Expression } from '@/components/settingManual/Expression';
// import { Gesture } from '@/components/settingManual/Gesture';
// import { Hair } from '@/components/settingManual/Hair';
// import { Item } from '@/components/settingManual/Item';
// import { Kemo } from '@/components/settingManual/Kemo';
// import { Motion } from '@/components/settingManual/Motion';
// import { System } from '@/components/settingManual/System';
// import { useState } from 'react';

// //todo:ボーダーカラー変更
// export default function SettingManual() {

//   const [isSection1Opened, setIsSection1Opened] = useState<boolean>(false);
//   const [isSection2Opened, setIsSection2Opened] = useState<boolean>(false);
//   const [isSection3Opened, setIsSection3Opened] = useState<boolean>(false);
//   const [isSection4Opened, setIsSection4Opened] = useState<boolean>(false);
//   const [isSection5Opened, setIsSection5Opened] = useState<boolean>(false);
//   const [isSection6Opened, setIsSection6Opened] = useState<boolean>(false);
//   const [isSection7Opened, setIsSection7Opened] = useState<boolean>(false);
//   const [isSection8Opened, setIsSection8Opened] = useState<boolean>(false);
//   const [isSection9Opened, setIsSection9Opened] = useState<boolean>(false);

//   return (
//     <>
//       <section className='topSct'>
//         <PageTitle pageTitle='設定資料' />
//         <div className='section0contentO'>
//           <div className='section0ContentTextO'>
//             <ul>
//               <li>01 ヘア (6種)(200パターン)</li>
//               <li>02 ケモ (16種)</li>
//               <li>03 ふく (整数73万パターン)</li>
//               <li>04 Gesture (23種)</li>
//               <li>05 表情 (45種)</li>
//               <li>06 アイテム (7種)</li>
//               <li>07 モーション (12種)</li>
//               <li>08 エモート (5種)</li>
//               <li>09 システム (4種)</li>
//             </ul>
//           </div>

//           <div className='section0ContentMovieO'>
//             <MovieMaxWidth src='/SettingManual/section0_content_852_480.mp4' />
//           </div>
//         </div>
//       </section>

//       <section>
//         <div
//           className='sectionTitleCBtn'
//           onClick={() => setIsSection1Opened(!isSection1Opened)}
//         >
//           <div className='sectionTitleCO'>
//             <h4>01 ヘア</h4>
//           </div>
//         </div>
//         <div className={isSection1Opened ? 'section1OpenedO' : 'section1ClosedO'}>
//           {/* <Hair /> */}
//           {isSection1Opened ? <DynamicHair/> : null}
//         </div>
//       </section>

//       <section>
//         <div
//           className='sectionTitleCBtn'
//           onClick={() => setIsSection2Opened(!isSection2Opened)}
//         >
//           <div className='sectionTitleCO'>
//             <h4>02 ケモ</h4>
//           </div>
//         </div>
//         <div className={isSection2Opened ? 'section2OpenedO' : 'section2ClosedO'}>
//           <Kemo />
//         </div>
//       </section>

//       <section>
//         <div
//           className='sectionTitleCBtn'
//           onClick={() => setIsSection3Opened(!isSection3Opened)}
//         >
//           <div className='sectionTitleCO'>
//             <h4>03 ふく</h4>
//           </div>
//         </div>
//         <div className={isSection3Opened ? 'section3OpenedO' : 'section3ClosedO'}>
//           <Clothes />
//         </div>
//       </section>

//       <section>
//         <div
//           className='sectionTitleCBtn'
//           onClick={() => setIsSection4Opened(!isSection4Opened)}
//         >
//           <div className='sectionTitleCO'>
//             <h4>04 Gesture</h4>
//           </div>
//         </div>
//         <div className={isSection4Opened ? 'section4OpenedO' : 'section4ClosedO'}>
//           <Gesture />
//         </div>
//       </section>

//       <section>
//         <div
//           className='sectionTitleCBtn'
//           onClick={() => setIsSection5Opened(!isSection5Opened)}
//         >
//           <div className='sectionTitleCO'>
//             <h4>05 表情</h4>
//           </div>
//         </div>
//         <div className={isSection5Opened ? 'section5OpenedO' : 'section5ClosedO'}>
//           <Expression />
//         </div>
//       </section>

//       <section>
//         <div
//           className='sectionTitleCBtn'
//           onClick={() => setIsSection6Opened(!isSection6Opened)}
//         >
//           <div className='sectionTitleCO'>
//             <h4>06 アイテム</h4>
//           </div>
//         </div>
//         <div className={isSection6Opened ? 'section6OpenedO' : 'section6ClosedO'}>
//           <Item />
//         </div>
//       </section>

//       <section>
//         <div
//           className='sectionTitleCBtn'
//           onClick={() => setIsSection7Opened(!isSection7Opened)}
//         >
//           <div className='sectionTitleCO'>
//             <h4>07 モーション</h4>
//           </div>
//         </div>
//         <div className={isSection7Opened ? 'section7OpenedO' : 'section7ClosedO'}>
//           <Motion />
//         </div>
//       </section>

//       <section>
//         <div
//           className='sectionTitleCBtn'
//           onClick={() => setIsSection8Opened(!isSection8Opened)}
//         >
//           <div className='sectionTitleCO'>
//             <h4>08 エモート</h4>
//           </div>
//         </div>
//         <div className={isSection8Opened ? 'section8OpenedO' : 'section8ClosedO'}>
//           <Emote />
//         </div>
//       </section>

//       <section className='endSct'>
//         <div
//           className='sectionTitleCBtn'
//           onClick={() => setIsSection9Opened(!isSection9Opened)}
//         >
//           <div className='sectionTitleCO'>
//             <h4>09 システム</h4>
//           </div>
//         </div>
//         <div className={isSection9Opened ? 'section9OpenedO' : 'section9ClosedO'}>
//           <System />
//         </div>
//       </section>

//       <style jsx>{`
//         .topSct {
//           width: 100%;
//           height: 100vh;
//           border-bottom: var(--borderColor-section);
//         }
//         //00
//         .section0contentO {
//           width: 100%;
//           height: calc(100% - 16px - 32px - 16px - 24px - 7vh);
//           display: flex;
//         }
//         .section0ContentTextO {
//           width: 40%;
//           height: 100%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
//         .section0ContentMovieO {
//           width: 60%;
//           height: 100%;
//           margin: 0 auto;
//           padding: 24px;
//           display: flex;
//           align-items: center;
//         }
//         //アコーディオン
//         .sectionTitleCBtn {
//           width: 100%;
//           padding: 24px 0;
//           display: flex;
//           align-items: center;
//         }
//         .sectionTitleCO {
//           width: fit-content;
//           padding: 16px;
//           border-radius: var(--borderRadius-20);
//           background-color: var(--backgroundColor-title);
//         }
//         .section1OpenedO,
//         .section2OpenedO,
//         .section3OpenedO,
//         .section4OpenedO,
//         .section5OpenedO,
//         .section6OpenedO,
//         .section7OpenedO,
//         .section8OpenedO,
//         .section9OpenedO {
//           width: 100%;
//           height: calc(100vh - 24px - 16px - 32px - 16px - 24px);
//           padding-bottom: 7vh;
//           border-bottom: var(--borderColor-section);
//           transition: var(--transition1s);
//           position: relative;
//         }
//         .section1ClosedO,
//         .section2ClosedO,
//         .section3ClosedO,
//         .section4ClosedO,
//         .section5ClosedO,
//         .section6ClosedO,
//         .section7ClosedO,
//         .section8ClosedO,
//         .section9ClosedO {
//           width: 100%;
//           height: 0;
//           overflow: hidden;
//           border-bottom: var(--borderColor-section);
//           transition: var(--transition1s);
//         }
//         .endSct {
//           margin-bottom: calc(7vh + 25vh);
//         }
//         @media screen and (max-width: 1024px) {
//           .topSct {
//             height: auto;
//           }
//           .section0contentO {
//             height: 158px;
//             padding: 0;
//           }
//           .section0ContentTextO {
//             display: none;
//           }
//           .section0ContentMovieOO {
//             width: 100%;
//             padding: 0 0 20px 0; 
//             align-items: stretch;
//           }
//           //アコーディオン
//           .sectionTitleCBtn {
//             padding: 8px 0;
//           }
//           .sectionTitleCO {
//             width: fit-content;
//             padding: 8px;
//             border-radius: var(--borderRadius-20);
//             background-color: var(--backgroundColor-item);
//           }
//           .section1OpenedO {
//             height: 640px;
//           }
//           .section2OpenedO {
//             height: 880px;
//           }
//           .section3OpenedO {
//             height: 640px;
//           }
//           .section4OpenedO {
//             height: 1160px;
//           }
//           .section5OpenedO {
//             height: 840px;
//           }
//           .section6OpenedO {
//             height: 1000px;
//           }
//           .section7OpenedO {
//             height: 920px;
//           }
//           .section8OpenedO {
//             height: 1560px;
//           }
//           .section9OpenedO {
//             height: 960px;
//           }
//           .section1OpenedO,
//           .section2OpenedO,
//           .section3OpenedO,
//           .section4OpenedO,
//           .section5OpenedO,
//           .section6OpenedO,
//           .section7OpenedO,
//           .section8OpenedO,
//           .section9OpenedO {
//             padding-bottom: 0;
//           }
//           .section9OpenedO, .section9ClosedO {
//             border: none;
//           }
//           .endSct {
//             margin-bottom: 50px;
//           }
//         }
//       `}</style>
//     </>
//   );
// }