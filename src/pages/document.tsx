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
                  <p>
                    VRChatでの使用を想定したオリジナル3Dモデルです。<br />
                    名前はフキ。<br />
                    植物のフキをイメージして作っています。<br />
                    #Fuki3D (フキ関係のSNS投稿の際にお使いください)
                  </p>
                  <div className='boothRowO'>
                    <p className='boothP'>
                      BOOTHで販売しています。
                    </p>
                    <div className='boothIconO'>
                      <Image
                        src='/NavMenu/iconBooth.png'
                        alt=''
                        width={64}
                        height={64}
                        style={{
                          width: '48px',
                          height: '48px',
                        }}
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
                <div className='otoiawaseContentO'>
                  <p>ご連絡はTwitterのDMかGmailでお受けします。</p>
                  <div className='twitterRowO'>
                    <p className='twitterP'>
                      <td className='snsTd'>Twitter</td>
                      <td className='snsAccountTd'>: @Rue_3D</td>
                    </p>
                    <div className='twitterIconO'>
                      <Image
                        src='/NavMenu/iconBooth.png'
                        alt=''
                        width={64}
                        height={64}
                        style={{
                          width: '48px',
                          height: '48px',
                        }}
                      />
                    </div>
                  </div>
                  <div className='gmailRowO'>
                    <p className='gmailP'>
                      <td className='snsTd'>Gmail</td>
                      <td className='snsAccountTd'>: 3.14rue@gmail.com</td>
                    </p>
                    <div className='gmailIconO'>
                      <Image
                        src='/NavMenu/iconBooth.png'
                        alt=''
                        width={64}
                        height={64}
                        style={{
                          width: '48px',
                          height: '48px',
                        }}
                      />
                    </div>
                  </div>
                  <p>
                    [直接相談]<br />
                    VRChatでお会いできれば対面で会話できます。<br />
                    夜明けからお昼までの時間帯によく居ます。<br />
                    事前にTwitterのDMで連絡くださると<br />
                    予定を組めてなにかとスムーズです。
                  </p>
                  <div className='vrchatRowO'>
                    <p className='vrchatP'>
                      VRChatのフレンド申請をしておくと、<br />
                      お会いするまでの道しるべとなります。
                    </p>
                    <div className='vrchatIconO'>
                      <Image
                        src='/NavMenu/iconBooth.png'
                        alt=''
                        width={64}
                        height={64}
                        style={{
                          width: '48px',
                          height: '48px',
                        }}
                      />
                    </div>
                  </div>
                </div>
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
              <div className='riyoukiyakuContentO'>
                <div className='maruSearchO'>
                  <div className='maruO'>
                    <div className='maruI'>
                      <div className='IconImgO'>
                        <Image
                          src='/Document/DocumentMaru256_256.png'
                          alt=''
                          width={256}
                          height={256}
                          style={{
                            width: '48px',
                            height: '48px',
                          }}
                        />
                      </div>
                      <p>許可 (営利、非営利を問いません)</p>
                      <p>
                        ・個人利用 (法人利用はお問い合わせください)<br />
                        ・映像作品、配信<br />
                        ・二次創作<br />
                        ・性的表現<br />
                        ・対応衣装でのボーン、ウェイトのコピー
                      </p>
                    </div>
                  </div>
                  <div className='searchO'>
                    <div className='searchI'>
                      <div className='IconImgO'>
                        <Image
                          src='/Document/DocumentLoupe256_256.png'
                          alt=''
                          width={256}
                          height={256}
                          style={{
                            width: '48px',
                            height: '48px',
                          }}
                        />
                      </div>
                      <p>
                        この一覧はわかりやすく記載しているものです。<br />
                        PDFの利用規約も兼ねてご確認ください。<br />
                        (VN3ライセンスhttps://www.vn3.org/ を使用しています。)
                      </p>

                      <ul className='filesUl'>
                        <li className='fileLi'>
                          <div className='fileO'>
                            <Image
                              src='/Document/DocumentJP256_256.png'
                              alt=''
                              width={256}
                              height={256}
                              style={{
                                width: '100%',
                                height: 'auto',
                              }}
                            />
                          </div>
                        </li>
                        <li className='fileLi'>
                          <div className='fileO'>
                            <Image
                              src='/Document/DocumentEN256_256.png'
                              alt=''
                              width={256}
                              height={256}
                              style={{
                                width: '100%',
                                height: 'auto',
                              }}
                            />
                          </div>
                        </li>
                        <li className='fileLi'>
                          <div className='fileO'>
                            <Image
                              src='/Document/DocumentKO256_256.png'
                              alt=''
                              width={256}
                              height={256}
                              style={{
                                width: '100%',
                                height: 'auto',
                              }}
                            />
                          </div>
                        </li>
                        <li className='fileLi'>
                          <div className='fileO'>
                            <Image
                              src='/Document/DocumentZH256_256.png'
                              alt=''
                              width={256}
                              height={256}
                              style={{
                                width: '100%',
                                height: 'auto',
                              }}
                            />
                          </div>
                        </li>
                      </ul>

                    </div>
                  </div>
                </div>
                <div className='batsuO'>
                  <div className='batsuI'>
                    <div className='IconImgO'>
                      <Image
                        src='/Document/DocumentBatu256_256.png'
                        alt=''
                        width={256}
                        height={256}
                        style={{
                          width: '48px',
                          height: '48px',
                        }}
                      />
                    </div>
                    <p>禁止</p>
                    <p>
                      ・パブリックでのアップロード<br />
                      ・未購入者にデータ転送<br />
                      ・転売 , 再配布<br />
                      ・暴力表現 , 政治活用
                    </p>
                    <p>
                      blender、Unityの内部データを、<br />
                      スクリーンショットを撮るなどして無許可で公開しないでください。<br />
                      公開を希望する場合は直接ご相談ください。
                    </p>
                    <p>
                      VRChatのMMDダンスワールドで使われている音源は<br />
                      利用許可されていないものが多いです。<br />
                      SNSで動画投稿する際は無音にしてください。
                    </p>
                    <p>
                      [注意事項]<br />
                      ダウンロード製品の購入後のキャンセル、返金はできません。<br />
                      購入された時、またはギフトを受け取った時に、<br />
                      利用規約が適用されます。<br />
                      製品を使用して発生したトラブルや損害は一切責任を負いません。<br />
                      予告なく価格を変更する場合がございます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='middleSec'>
        <div className='section1contentO'>
          <div className='doukondataTitleO'>
            <div className='doukondataTitleI'>
              <h5 className='documentH5'>同梱データ</h5>
            </div>
          </div>
          <div className='doukondataMovieO'>
            <div className='doukondataMovieI'>
              <Image
                src='/Document/DocumentZH256_256.png'
                alt=''
                width={1280}
                height={720}
                style={{
                  width: 'auto',
                  height: '100%',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className='endSec'>
        <div className='section2contentO'>
          <div className='seisakuO'>
            <div className='seisakuIconImgO'>
              <Image
                src='/Document/DocumentMaru256_256.png'
                alt=''
                width={256}
                height={256}
                style={{
                  width: '32px',
                  height: '32px',
                }}
              />
            </div>
            <p className='seisakuTextP'>制作 : ルー (blender , Unity全行程)</p>
          </div>
          <div className='kanriO'>
            <div className='kanriIconImgO'>
              <Image
                src='/Document/DocumentMaru256_256.png'
                alt=''
                width={256}
                height={256}
                style={{
                  width: '32px',
                  height: '32px',
                }}
              />
            </div>
            <p className='kanriTextP'>管理 : クロロンフィル (ルーの個人サークル)</p>
          </div>
        </div>
      </section>


      <style jsx>{`
        //todo:全体要整理
        .topSct {
          width: 100%;
          height: 100vh;
        }
        .section0contentO {
          height: calc(100% - 16px - 32px - 16px - 24px - 7vh);
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
          height: 40px;
          padding: var(--document-4px);
        }
        .seihinTitleI {
          width: 100%;
          height: 100%;
          border: var(--borderColor-section);
          border-radius: var(--borderRadius-20);
        }
        .seihinContentO {
          width: 100%;
          height: calc(100% - 40px);
          padding: var(--document-8px);
          display: flex;
          flex-direction: column;
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
          height: 40px;
          padding: var(--document-4px);
        }
        .otoiawaseTitleI {
          width: 100%;
          height: 100%;
          border: var(--borderColor-section);
          border-radius: var(--borderRadius-20);
        }
        .otoiawaseContentO {
          width: 100%;
          height: calc(100% - 40px);
          padding: var(--document-8px);
          display: flex;
          flex-direction: column;
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
          height: 40px;
          padding: var(--document-4px);
        }
        .riyoukiyakuTitleI {
          width: 100%;
          height: 100%;
          border: var(--borderColor-section);
          border-radius: var(--borderRadius-20);
        }
        .riyoukiyakuContentO {
          width: 100%;
          height: calc(100% - 40px);
          display: flex;
        }
        .maruSearchO {
          width: 50%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .maruO {
          width: 100%;
          height: calc(100% / 9 * 4);
          padding: var(--document-8px);
        }
        .maruI {
          width: 100%;
          height: 100%;
          padding: var(--document-8px);
          display: flex;
          flex-direction: column;
          border: var(--borderColor-section);
          border-radius: var(--borderRadius-20);
        }
        .searchO {
          width: 100%;
          height: calc(100% / 9 * 5);
          padding: var(--document-8px);
        }
        .searchI {
          width: 100%;
          height: 100%;
          padding: var(--document-8px);
          display: flex;
          flex-direction: column;
          border: var(--borderColor-section);
          border-radius: var(--borderRadius-20);
        }
        .filesUl {
          width: 100%;
          display: flex;
        }
        .fileLi {
          width: 25%;
        }
        .fileO {
          width: 100%;
          display: flex;
        }
        .batsuO {
          width: 50%;
          height: 100%;
          padding: var(--document-8px);
        }
        .batsuI {
          width: 100%;
          height: 100%;
          padding: var(--document-8px);
          display: flex;
          flex-direction: column;
          border: var(--borderColor-section);
          border-radius: var(--borderRadius-20);
        }
        //h5,td,icon,共通
        .documentH5 {
          width: 100%;
          height: 100%;
          text-align: center;
          line-height: 28px;
        }
        .boothRowO, .twitterRowO, .gmailRowO, .vrchatRowO {
          width: 100%;
          display: flex;
        }
        .boothP, .twitterP, .gmailP, .vrchatP {
          width: calc(100% - 48px);
          display: flex;
        }
        .boothIconO, .twitterIconO, .gmailIconO, .vrchatIconO,  {
          width: 48px;
          height: 48px;
          display: flex;
        }
        td {
          font-size: 12px;
          line-height: 16px;
        }
        .snsTd {
          width: 50px;
        }
        .IconImgO {
          margin-bottom: 16px;
        }
        //セクション１
        .middleSec {
          width: 100%;
          height: 100vh;
          padding: var(--document-8px);
        }
        .section1contentO {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .doukondataTitleO {
          width: 100%;
          height: 40px;
          padding: var(--document-4px);
        }
        .doukondataTitleI {
          width: 100%;
          height: 100%;
          border: var(--borderColor-section);
          border-radius: var(--borderRadius-20);
        }
        .doukondataMovieO {
          width: 100%;
          height: calc(100% - 40px);
        }
        .doukondataMovieI {
          width: 90%;
          height: 60%;
          margin: 5% auto auto auto;
          display: flex;
          justify-content: center;
        }
        //セクション２
        .endSec {
          width: 100%;
          height: 200px;
          padding-bottom: 112px;
        }
        .section2contentO {
          width: 368px;
          height: 80px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
        }
        .seisakuO, .kanriO {
          width: 368px;
          height: 32px;
          margin-bottom: 8px;
          display: flex;
        }
        .seisakuIconImgO, .kanriIconImgO {
          width: 32px;
          height: 32px;
          display: flex;
          margin-right: 16px;
        }
        .seisakuTextP, .kanriTextP {
          width: 320px;
          line-height: 32px;
        }
        @media screen and (max-width: 1024px) {
        }
      `}</style>
    </>
  );
}