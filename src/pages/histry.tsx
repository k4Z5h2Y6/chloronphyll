import { Movie } from '@/components/elements/Movie';
import { PageTitle } from '@/components/elements/PageTitle';

export default function Histry() {
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
                <td className='dateTd'>0000/00/00</td>
                <td className='volumeTd'>v01</td>
                <td className='descriptionTd'>公開</td>
              </li>
              <li>
                <td className='dateTd'>0000/00/00</td>
                <td className='volumeTd'>v01</td>
                <td className='descriptionTd'>公開</td>
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
              <td className='section1firstTd'>(…未確認)</td>
              <td className='section1secondTd'>受付中…</td>
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
          height: 100vh;
        }
        .section0contentO {
          height: calc(100% - 16px - 32px - 16px - 24px - 7vh);
          display: flex;
          flex-direction: column;
        }
        .section0ContentMovieO {
          width: 100%;
          height: 40%;
          padding-bottom: 24px;
          display: flex;
          border-bottom: 1px solid var(--borderColor-section);
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
        }
        li {
          width: 100%;
          height: 80px;
          margin-bottom: 40px;
          padding: 0 20px;
          display: flex;
          align-items: center;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .dateTd, .volumeTd , .descriptionTd {
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
          border: 1px solid var(--borderColor-section);
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
          border: 1px solid var(--borderColor-section);
          border-radius: var(--borderRadius-20);
        }
        .section1titleP {
          width: 100%;
          height: 100%;
          text-align: center;
          line-height: 64px;
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
          width: calc(100% / 12 * 7);
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
            height: 32px;
            margin-bottom: 16px;
            padding: 0 8px;
          }
          .dateTd, .volumeTd , .descriptionTd {
            font-size: 10px;
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
            line-height: 20px;
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