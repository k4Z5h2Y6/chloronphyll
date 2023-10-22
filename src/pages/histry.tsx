import { Movie } from '@/components/elements/Movie';
import { PageTitle } from '@/components/elements/PageTitle';
import { useState } from 'react';

export default function Histry() {

  const [isSection0Li1Opened, setIsSection0Li1Opened] = useState<boolean>(false);
  const [isSection0Li2Opened, setIsSection0Li2Opened] = useState<boolean>(false);
  const [isSection1Li1Opened, setIsSection1Li1Opened] = useState<boolean>(false);

  return (
    <>
      <section className='topSct'>
        <PageTitle pageTitle='更新履歴' />
        <div className='section0contentO'>
          <div className='section0ContentMovieO'>
            <div className='section0ContentMovieI'>
              <Movie src='/SettingManual/00SettingManual/test10m1280_720.mov' />
            </div>
          </div>
          <div className='section0ContentTextO'>
            <ul className='section0Ul'>

              <li>
                <div
                  className={isSection0Li1Opened ? 'section0Li1Opened' : 'section0Li1Closed'}
                  onClick={() => { setIsSection0Li1Opened(!isSection0Li1Opened) }}
                >
                  <div className='section0LiTitleO'>
                    <td className='dateTd'>0000/00/00</td>
                    <td className='volumeTd'>v01</td>
                    <td className='descriptionTd'>公開</td>
                  </div>
                  <div className='section0LiContentO'></div>
                </div>
              </li>

              <li>
                <div
                  className={isSection0Li2Opened ? 'section0Li2Opened' : 'section0Li2Closed'}
                  onClick={() => { setIsSection0Li2Opened(!isSection0Li2Opened) }}
                >
                  <div className='section0LiTitleO'>
                    <td className='dateTd'>0000/00/00</td>
                    <td className='volumeTd'>v02</td>
                    <td className='descriptionTd'>公開</td>
                  </div>
                  <div className='section0LiContentO'></div>
                </div>
              </li>

              <li className='endLi'>
                <div className='dotO'><div className='dot' /></div>
                <div className='dotO'><div className='dot' /></div>
                <div className='dotO'><div className='dot' /></div>
              </li>

            </ul>
          </div>
        </div>
      </section>

      <section className='endSec'>
        <div className='section1contentO'>
          <div className='section1titleO'>
            <div className='section1titleI'>
              <p className='section1titleP'>確認済/対応中</p>
            </div>
          </div>
          <ul className='section1Ul'>

            <li>
              <div
                className={isSection1Li1Opened ? 'section1Li1Opened' : 'section1Li1Closed'}
                onClick={() => { setIsSection1Li1Opened(!isSection1Li1Opened) }}
              >
                <div className='section1LiTitleO'>
                  <td className='section1firstTd'>(…未確認)</td>
                  <td className='section1secondTd'>受付中…</td>
                </div>
                <div className='sectionLiContentO'></div>
              </div>
            </li>

            <li className='endLi'>
              <div className='dotO'><div className='dot' /></div>
              <div className='dotO'><div className='dot' /></div>
              <div className='dotO'><div className='dot' /></div>
            </li>

          </ul>
        </div>
      </section>

      <style jsx>{`
        .topSct {
          width: 100%;
          min-height: 100vh;
        }
        .section0contentO {
          min-height: calc(100% - 16px - 32px - 16px - 24px - 7vh);
          display: flex;
          flex-direction: column;
        }
        .section0ContentMovieO {
          width: 100%;
          height: 40%;
          padding-bottom: 24px;
          display: flex;
          border-bottom: var(--borderColor-section);
        }
        .section0ContentMovieI {
          width: 20%;
          height: 100%;
          margin: 0 auto 80px auto;
        }
        .section0ContentTextO {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .section0Ul {
          width: 60%;
          margin: 80px 0;
          display: flex;
          flex-direction: column;
        }
        li {
          width: 100%;
          height: fit-content;
          margin-bottom: 40px;
          border-radius: var(--borderRadius-20);
        }
        .section0Li1Closed,
        .section0Li2Closed,
        .section1Li1Closed {
          width: 100%;
          height: 80px;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
          transition: var(--transition1s);
        }
        .section0Li1Opened,
        .section0Li2Opened,
        .section1Li1Opened {
          width: 100%;
          height: calc(80px + 400px);
          display: flex;
          flex-direction: column;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
          transition: var(--transition1s);
        }
        .section0LiTitleO,
        .section1LiTitleO {
          width: 100%;
          height: 80px;
          padding: 0 20px;
          display: flex;
          align-items: center;
          line-height: 80px;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .section0LiContentO {
          width: 100%;
          height: 400px;
        }
        .dateTd, .volumeTd , .descriptionTd, .section1firstTd, .section1secondTd {
          font-size: 16px;
        }
        .dateTd {
          width: calc(100% / 12 * 3);
        }
        .volumeTd {
          width: calc(100% / 12 * 2);
        }
        .descriptionTd {
          width: calc(100% / 12 * 7);
        }
        .endLi {
          height: 40px;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          background-color: transparent;
        }
        .dotO {
          width: 100%;
          height: calc(80px / 3);
          display: flex;
          align-items: center;
        }
        .dot {
          width: 10px;
          height: 10px;
          margin: 0 auto;
          border-radius: 50%;
          background-color: var(--backgroundColor-item);
        }
        //エンドセクション
        .endSec {
          width: 100%;
          height: fit-content;
          margin-bottom: 240px;
        }
        .section1contentO {
          width: 70%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          border: var(--borderColor-section);
          border-radius: var(--borderRadius-20);
        }
        .section1titleO {
          width: 100%;
          height: 80px;
          padding: 8px;
        }
        .section1titleI {
          width: 100%;
          height: 100%;
          border: var(--borderColor-section);
          border-radius: var(--borderRadius-20);
        }
        .section1titleP {
          width: 100%;
          height: 100%;
          text-align: center;
          line-height: 64px;
          font-size: 16px;
        }
        .section1Ul {
          width: calc(100% / 7 * 6);
          height: fit-content;
          margin: 0 auto;
          padding-top: 80px;
          display: flex;
          flex-direction: column;
        }
        .section1firstTd {
          width: calc(100% / 12 * 5);
        }
        .section1secondTd {
          width: calc(100% / 12 * 5);
        }
        @media screen and (max-width: 1024px) {
          .topSct {
            height: fit-content;
          }
          .section0ContentMovieO {
            padding-bottom: 20px;
          }
          .section0ContentTextO {
            margin-top: 40px;
          }
          .section0ContentMovieO {
            height: fit-content;
          }
          .section0ContentMovieI {
            width: 140px;
            height: 96px;
            margin: 32px auto;
            display: flex;
          }
          .section0Ul {
            width: 280px;
            margin: 32px 0;
          }
          li {
            width: 280px;
            margin-bottom: 16px;
            padding: 0 8px;
          }
          .section0Li1Closed,
          .section0Li2Closed,
          .section1Li1Closed {
            height: 32px;
          }
          .section0Li1Opened,
          .section0Li2Opened,
          .section1Li1Opened {
            height: calc(32px + 400px);
          }
          .section0LiTitleO,
          .section1LiTitleO {
            height: 32px;
            line-height: 32px;
          }
          .dateTd, .volumeTd , .descriptionTd, .section1firstTd, .section1secondTd {
            font-size: 10px;
          }
          .dateTd {
            width: calc(100% / 12 * 4);
          }
          .volumeTd {
            width: calc(100% / 12 * 2);
          }
          .descriptionTd {
            width: calc(100% / 12 * 6);
          }
          .endLi {
            height: 32px;
          }
          .dot {
            width: 4px;
            height: 4px;
          }
          //エンドセクション
          .endSec {
            margin-bottom: 80px;
          }
          .section1contentO {
            width: 100%;
          }
          .section1titleO {
            width: 100%;
            height: 32px;
            padding: 4px;
          }
          .section1titleP {
            line-height: 20px; //
          }
          .section1Ul {
            width: fit-content;
            padding: 32px 4px 0 4px;
          }
        }
      `}</style>
    </>
  );
}