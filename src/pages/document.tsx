import { PageTitle } from '@/components/elements/PageTitle';
import Image from "next/image";

export default function Document() {
  return (
    <>
      <section className='topSct'>
        <PageTitle pageTitle='ドキュメント' />
        <div className='section0contentO'>
          <div className='seihinOtoiawaseO'>
            <div className='seihinO'>
              <div className='seihinI'>
                <div className='seihinTitleO'>
                  <div className='seihinTitleI'>
                    <h5 className='documentH5'>製品</h5>
                  </div>
                </div>
                <div className='seihinContentO'>
                  <div className='seihinTextO'>
                    <p>
                      VRChatでの使用を想定したオリジナル3Dモデルです。<br />
                      名前はフキ。<br />
                      植物のフキをイメージして作っています。<br />
                      #Fuki3D (フキ関係のSNS投稿の際にお使いください)
                    </p>
                    <p>
                      BOOTHで販売しています。
                    </p>
                  </div>
                  <div className='seihinIconO'>
                    <div className='boothIconO'>
                      <Image
                        src='/NavMenu/iconBooth.png'
                        alt=''
                        width={64}
                        height={64}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='otoiawaseO'>
              <div className='otoiawaseI'>
                <div className='otoiawaseTitleO'>
                  <div className='otoiawaseTitleI'>
                    <h5 className='documentH5'>お問い合わせ</h5>
                  </div>
                </div>
                <div className='otoiawaseContentO'></div>
              </div>
            </div>
          </div>
          <div className='riyoukiyakuO'>
            <div className='riyoukiyakuI'>
              <div className='riyoukiyakuTitleO'>
                <div className='riyoukiyakuTitleI'>
                  <h5 className='documentH5'>利用規約</h5>
                </div>
              </div>
              <div className='riyoukiyakuContentO'></div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .topSct {
          width: 100%;
          height: 100vh;
          min-height: 100vh;
        }
        .section0contentO {
          height: calc(100% - 16px - 32px - 16px - 24px - 7vh);
          min-height: calc(100% - 16px - 32px - 16px - 24px - 7vh);
          display: flex;
        }
        //製品
        .seihinOtoiawaseO {
          width: calc(100% / 20 * 7);
          height: 100%;
        }
        .seihinO {
          width: 100%;
          height: 40%;
          padding: var(--document-8px);
        }
        .seihinI {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .seihinTitleO {
          width: 100%;
          height: 80px;
          padding: var(--document-8px);
        }
        .seihinTitleI {
          width: 100%;
          height: 100%;
          border: var(--borderColor-section);
          border-radius: var(--borderRadius-20);
        }
        .seihinContentO {
          width: 100%;
          height: 100%;
          padding: var(--document-8px);
          display: flex;
        }
        .seihinTextO {
          width: calc(100% - 64px);
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .seihinIconO {
          width: 64px;
          height: 100%;
        }
        .boothIconO {
          width: 32px;
          height: 32px;
          margin-top: 88px;
          display: flex;
        }
        //お問い合わせ
        .otoiawaseO {
          width: 100%;
          height: 60%;
          padding: var(--document-8px);
        }
        .otoiawaseI {
          width: 100%;
          height: 100%;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .otoiawaseTitleO {
          width: 100%;
          height: 80px;
          padding: var(--document-8px);
        }
        .otoiawaseTitleI {
          width: 100%;
          height: 100%;
          border: var(--borderColor-section);
          border-radius: var(--borderRadius-20);
        }
        //利用規約
        .riyoukiyakuO {
          width: calc(100% / 20 * 13);
          height: 100%;
          padding: var(--document-8px);
        }
        .riyoukiyakuI {
          width: 100%;
          height: 100%;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .riyoukiyakuTitleO {
          width: 100%;
          height: 80px;
          padding: var(--document-8px);
        }
        .riyoukiyakuTitleI {
          width: 100%;
          height: 100%;
          border: var(--borderColor-section);
          border-radius: var(--borderRadius-20);
        }
        //h5
        .documentH5 {
          width: 100%;
          height: 100%;
          text-align: center;
          line-height: 64px;
        }
        @media screen and (max-width: 1024px) {
        }
      `}</style>
    </>
  );
}