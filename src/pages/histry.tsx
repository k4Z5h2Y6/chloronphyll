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
            <ul>
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
            </ul>
          </div>
        </div>
      </section>

      <section></section>

      <style jsx>{`
        .topSct {
          width: 100%;
          height: 100vh;
          border-bottom: 1px solid var(--borderColor-section);
        }
        .section0contentO {
          height: calc(100% - 16px - 32px - 16px - 24px - 7vh);
          display: flex;
          flex-direction: column;
        }
        .section0ContentMovieO {
          width: 100%;
          height: 40%;
          border-bottom: 1px solid var(--borderColor);
        }
        .section0ContentMovieI {
          width: 80%;
          height: 100%;
          padding-bottom: 24px;
          margin: 0 auto;
          display: flex;
        }
        .section0ContentTextO {
          width: 100%;
          margin-top: 24px;
          display: flex;
          justify-content: center;
        }
        ul {
          width: 50%;
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
        .dateTd {
          width: 30%;
        }
        .volumeTd {
          width: 20%;
        }
        .descriptionTd {
          width: 50%;
        }
        @media screen and (max-width: 1024px) {
          .topSct {
            height: fit-content;
          }
          .section0ContentTextO {
            margin: 20px 0;
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
          ul {
            width: 280px;
          }
          li {
            height: 40px;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </>
  );
}