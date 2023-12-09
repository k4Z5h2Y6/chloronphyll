import { PageTitle } from '@/components/elements/PageTitle';
import Image from "next/image";

export default function Shape() {

  return (
    <>
      <section className='topSct'>
        <PageTitle pageTitle='シェイプキー' />
        <div className='section0contentO'>
          <div className='section0ContentTextO'></div>
          <div className='section0ContentTextO'></div>
        </div>
      </section>


      <style jsx>{`
        //
        .topSct {
          width: 100%;
          height: calc(100vh - 24px);
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