import { ReactNode, useState } from 'react'
import { Main } from '@/components/layouts/Main'

export default function SettingManue() {

  const [isContent1Opened, setIsContent1Opened] = useState<boolean>(false);
  const [isContent2Opened, setIsContent2Opened] = useState<boolean>(false);
  const [isContent3Opened, setIsContent3Opened] = useState<boolean>(false);
  const [isContent4Opened, setIsContent4Opened] = useState<boolean>(false);
  const [isContent5Opened, setIsContent5Opened] = useState<boolean>(false);
  const [isContent6Opened, setIsContent6Opened] = useState<boolean>(false);
  const [isContent7Opened, setIsContent7Opened] = useState<boolean>(false);
  const [isContent8Opened, setIsContent8Opened] = useState<boolean>(false);
  const [isContent9Opened, setIsContent9Opened] = useState<boolean>(false);

  return (
    <>
      <div className='content0O'>
        <div className='pageTitleOO'>
          <div className='pageTitleO'>
            <h3>設定資料</h3>
          </div>
        </div>
        <div className='content0I'>
          <div className='content0TextO'></div>
          <div className='content0MovieO'></div>
        </div>
      </div>

      <div className='contentCOO'>
        <div
          className='contentTitleCO'
          onClick={() => setIsContent1Opened(!isContent1Opened)}
        ></div>
        <div className={'contentC0 ' + (isContent1Opened ? 'content1OpenedO' : 'content1OclosedO')}></div>
      </div>



      <div className={'contentCommonO ' + (isContent1Opened ? 'content2OpenedO' : 'content2OclosedO')}></div>

      <style jsx>{`
        .content0O {
          width: 100%;
          height: 100vh;
          padding: 24px 0;
          border-bottom: 1px solid black;
        }
        .pageTitleOO {
          width: fit-content;
          margin-left: -4vw;
          padding-left: 4vw;
          border-radius: 0 16px 16px 0;
          background-color: #ADA79E;
        }
        .pageTitleO {
          padding: 16px;//
        }
        .content0I {
          width: 100%;
        }

        .contentCOO {
          width: 100%;
          height: 100vh;
        }
        .contentTitleO {
          width: ;
        }
      `}</style>
    </>
  )
}

// SettingManue.getLayout = (page: ReactNode) => {
//   return <Main pageTitle={'設定資料'}>{page}</Main>
// }