import { PageTitle } from '@/components/elements/PageTitle';
import Image from "next/image";

export default function Upload() {

  return (
    <>
      <section className='topSct'>
        <PageTitle pageTitle='アップロード手順' />
        <div className='section0contentO'>
          <div className='section0ContentMovieO'></div>
          <div className='section0ContentTextO'></div>
        </div>
      </section>


      <style jsx>{`
        //
        .topSct {
          width: 100%;
          height: 100vh;
        }
        .section0contentO {
          width: 100%;
          height: calc(100% - 16px - 32px - 16px - 24px - 7vh);
          display: flex;
          background-color: aqua;
        }
        //
      `}</style>
    </>
  );
};