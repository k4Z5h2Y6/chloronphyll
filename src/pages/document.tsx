import { PageTitle } from "@/components/elements/PageTitle";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Document() {
  const [isModalShown, setIsModalShown] = useState<boolean>(false);

  function disableScroll(e: any) {
    e.preventDefault();
  }

  useEffect(() => {
    setIsModalShown(false);
  }, []);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      disableScroll(e);
    };

    if (isModalShown) {
      document.addEventListener("touchmove", handleScroll, { passive: false });
      document.addEventListener("wheel", handleScroll, { passive: false });
      document.addEventListener("mousewheel", handleScroll, { passive: false });
    } else {
      document.removeEventListener("touchmove", handleScroll);
      document.removeEventListener("wheel", handleScroll);
      document.removeEventListener("mousewheel", handleScroll);
    }

    return () => {
      document.removeEventListener("touchmove", handleScroll);
      document.removeEventListener("wheel", handleScroll);
      document.removeEventListener("mousewheel", handleScroll);
    };
  }, [isModalShown]);

  return (
    <>
      <section className="topSct">
        <PageTitle pageTitle="ドキュメント" />
        <div className="section0contentO">
          <div className="seihinOtoiawaseO">
            <div className="seihinO">
              <div className="seihinI">
                <div className="documentTitleCO">
                  <div className="documentTitleCI">
                    <h5 className="documentH5">製品</h5>
                  </div>
                </div>
                <div className="seihinContentO">
                  <p>
                    VRChatでの使用を想定したオリジナル3Dモデルです。
                    <br />
                    名前はフキ。
                    <br />
                    植物のフキをイメージして作っています。
                    <br />
                    #Fuki3D (フキ関係のSNS投稿の際にお使いください)
                  </p>
                  <div className="boothRowO">
                    <p className="boothP">BOOTHで販売しています。</p>
                    <div className="boothIconO">
                      <Image
                        src="/NavMenu/iconBooth.png"
                        alt=""
                        width={64}
                        height={64}
                        style={{
                          width: "48px",
                          height: "48px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="otoiawaseO">
              <div className="otoiawaseI">
                <div className="documentTitleCO">
                  <div className="documentTitleCI">
                    <h5 className="documentH5">お問い合わせ</h5>
                  </div>
                </div>
                <div className="otoiawaseContentO">
                  <p>ご連絡はTwitterのDMかGmailでお受けします。</p>
                  <div className="twitterRowO">
                    <p className="twitterP">
                      <td className="snsTd">Twitter</td>
                      <td className="snsAccountTd">: @Rue_3D</td>
                    </p>
                    <div className="twitterIconO">
                      <Image
                        src="/NavMenu/iconBooth.png"
                        alt=""
                        width={64}
                        height={64}
                        style={{
                          width: "48px",
                          height: "48px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="gmailRowO">
                    <p className="gmailP">
                      <td className="snsTd">Gmail</td>
                      <td className="snsAccountTd">: 1753rue@gmail.com</td>
                    </p>
                    <div className="gmailIconO">
                      <Image
                        src="/NavMenu/iconBooth.png"
                        alt=""
                        width={64}
                        height={64}
                        style={{
                          width: "48px",
                          height: "48px",
                        }}
                      />
                    </div>
                  </div>
                  <p>
                    [直接相談]
                    <br />
                    VRChatでお会いできれば対面で会話できます。
                    <br />
                    夜明けからお昼までの時間帯によく居ます。
                    <br />
                    事前にTwitterのDMで連絡くださると
                    <br />
                    予定を組めてなにかとスムーズです。
                  </p>
                  <div className="vrchatRowO">
                    <p className="vrchatP">
                      VRChatのフレンド申請をしておくと、
                      <br />
                      お会いするまでの道しるべとなります。
                    </p>
                    <div className="vrchatIconO">
                      <Image
                        src="/NavMenu/iconBooth.png"
                        alt=""
                        width={64}
                        height={64}
                        style={{
                          width: "48px",
                          height: "48px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="riyoukiyakuO">
            <div className="riyoukiyakuI">
              <div className="documentTitleCO">
                <div className="documentTitleCI">
                  <h5 className="documentH5">利用規約</h5>
                </div>
              </div>
              <div className="riyoukiyakuContentO">
                <div className="maruO">
                  <div className="maruI">
                    <div className="IconImgO">
                      <Image
                        src="/Document/DocumentMaru256_256.png"
                        alt=""
                        width={256}
                        height={256}
                        style={{
                          width: "48px",
                          height: "48px",
                        }}
                      />
                    </div>
                    <p>許可 (営利、非営利を問いません)</p>
                    <p>
                      ・個人利用 (法人利用はお問い合わせください)
                      <br />
                      ・映像作品、配信
                      <br />
                      ・二次創作
                      <br />
                      ・性的表現
                      <br />
                      ・対応衣装でのボーン、ウェイトのコピー
                    </p>
                  </div>
                </div>

                <div className="batsuO">
                  <div className="batsuI">
                    <div className="IconImgO">
                      <Image
                        src="/Document/DocumentBatu256_256.png"
                        alt=""
                        width={256}
                        height={256}
                        style={{
                          width: "48px",
                          height: "48px",
                        }}
                      />
                    </div>
                    <p>禁止</p>
                    <p>
                      ・パブリックでのアップロード
                      <br />
                      ・未購入者にデータ転送
                      <br />
                      ・転売 , 再配布
                      <br />
                      ・暴力表現 , 政治活用
                    </p>
                    <p>
                      blender、Unityの内部データを、
                      <br />
                      スクリーンショットを撮るなどして無許可で公開しないでください。
                      <br />
                      公開を希望する場合は直接ご相談ください。
                    </p>
                    <p>
                      VRChatのMMDダンスワールドで使われている音源は
                      <br />
                      利用許可されていないものが多いです。
                      <br />
                      SNSで動画投稿する際は無音にしてください。
                    </p>
                    <p>
                      [注意事項]
                      <br />
                      ダウンロード製品の購入後のキャンセル、返金はできません。
                      <br />
                      購入された時、またはギフトを受け取った時に、
                      <br />
                      利用規約が適用されます。
                      <br />
                      製品を使用して発生したトラブルや損害は一切責任を負いません。
                      <br />
                      予告なく価格を変更する場合がございます。
                    </p>
                  </div>
                </div>

                <div className="searchO">
                  <div className="searchI">
                    <div className="IconImgO">
                      <Image
                        src="/Document/DocumentLoupe256_256.png"
                        alt=""
                        width={256}
                        height={256}
                        style={{
                          width: "48px",
                          height: "48px",
                        }}
                      />
                    </div>
                    <p>
                      この一覧はわかりやすく記載しているものです。
                      <br />
                      PDFの利用規約も兼ねてご確認ください。
                      <br />
                      (VN3ライセンスhttps://www.vn3.org/ を使用しています。)
                    </p>
                    <ul className="filesUl">
                      <li className="fileLi">
                        <div className="fileO">
                          <Image
                            src="/Document/DocumentJP256_256.png"
                            alt=""
                            width={256}
                            height={256}
                            style={{
                              width: "100%",
                              height: "auto",
                            }}
                          />
                        </div>
                      </li>
                      <li className="fileLi">
                        <div className="fileO">
                          <Image
                            src="/Document/DocumentEN256_256.png"
                            alt=""
                            width={256}
                            height={256}
                            style={{
                              width: "100%",
                              height: "auto",
                            }}
                          />
                        </div>
                      </li>
                      <li className="fileLi">
                        <div className="fileO">
                          <Image
                            src="/Document/DocumentKO256_256.png"
                            alt=""
                            width={256}
                            height={256}
                            style={{
                              width: "100%",
                              height: "auto",
                            }}
                          />
                        </div>
                      </li>
                      <li className="fileLi">
                        <div className="fileO">
                          <Image
                            src="/Document/DocumentZH256_256.png"
                            alt=""
                            width={256}
                            height={256}
                            style={{
                              width: "100%",
                              height: "auto",
                            }}
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="middleSec">
        <div className="section1contentO">
          <div className="documentTitleCO">
            <div className="documentTitleCI">
              <h5 className="documentH5">同梱データ</h5>
            </div>
          </div>
          <div className="doukondataImgO">
            <div
              className="doukondataImgI"
              onClick={() => setIsModalShown(true)}
            >
              <Image
                src="/Document/DoukonDate1280_720.png"
                alt=""
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="endSec">
        <div className="section2contentO">
          <div className="seisakuO">
            <div className="seisakuIconImgO">
              <Image
                src="/Document/IconRue256_256.png"
                alt=""
                width={256}
                height={256}
                style={{
                  width: "32px",
                  height: "32px",
                }}
              />
            </div>
            <p className="seisakuTextP">制作 : ルー (blender , Unity全行程)</p>
          </div>
          <div className="kanriO">
            <div className="kanriIconImgO">
              <Image
                src="/Document/IconLogo256_256.png"
                alt=""
                width={256}
                height={256}
                style={{
                  width: "32px",
                  height: "32px",
                }}
              />
            </div>
            <p className="kanriTextP">
              管理 : クロロンフィル (ルーの個人サークル)
            </p>
          </div>
        </div>
      </section>

      <div className={isModalShown ? "modalShownO" : "modalClosedO"}>
        <div className="enlargedDoukondataImgO">
          <Image
            src="/Document/DoukonDate1280_720.png"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="closingModalO" onClick={() => setIsModalShown(false)}>
          <Image
            src="/Document/DocumentBatu256_256.png"
            alt=""
            width={256}
            height={256}
            style={{
              width: "48px",
              height: "48px",
            }}
          />
        </div>
      </div>

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
        .riyoukiyakuContentO {
          width: 100%;
          height: calc(100% - 40px);
          display: flex;
          position: relative;
        }
        //まる
        .maruO {
          width: 50%;
          height: calc(100% / 9 * 4);
          padding: var(--document-8px);
          position: absolute;
          top: 0;
          left: 0;
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
        //検索
        .searchO {
          width: 50%;
          height: calc(100% / 9 * 5);
          padding: var(--document-8px);
          position: absolute;
          top: calc(100% / 9 * 4);
          left: 0;
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
        //ばつ
        .batsuO {
          width: 50%;
          height: 100%;
          padding: var(--document-8px);
          position: absolute;
          top: 0;
          right: 0;
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
        .documentTitleCO {
          width: 100%;
          height: 40px;
          padding: var(--document-4px);
        }
        .documentTitleCI {
          width: 100%;
          height: 100%;
          border: var(--borderColor-section);
          border-radius: var(--borderRadius-16);
        }
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
        //セクション１、同梱データ--------------------------
        .middleSec {
          width: 100%;
          height: 80vh;
          padding: var(--document-8px);
          margin-bottom: 20vh;
        }
        .section1contentO {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }
        .doukondataImgO {
          width: 100%;
          height: calc(80vh - 40px);
        }
        .doukondataImgI {
          width: 90%;
          height: 60vh;
          margin: 5% auto auto auto;
          display: flex;
          position: relative;
          justify-content: center;
        }
        //セクション２
        .endSec {
          width: 100%;
          height: 200px;
          padding-bottom: 112px;
        }
        .section2contentO {
          width: fit-content;
          height: fit-content;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
        }
        .seisakuO, .kanriO {
          width: fit-content;
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
          width: fit-content;
          line-height: 32px;
        }
        //モーダル
        .modalShownO {
          width: 95vw;
          height: 95vh;
          padding: var(--document-8px);
          position: fixed;
          top: 2.5vh;
          left: 2.5vw;
          z-index: 11;
          border-radius: var(--borderRadius-20);
          background-color: rgba(128, 128, 128, 0.8); //
          animation: fade-in 0.5s ease 0s 1 normal none running;
        }
        .modalClosedO {
          width: 95vw;
          height: 95vh;
          padding: var(--document-8px);
          position: fixed;
          top: 2.5vh;
          left: 2.5vw;
          z-index: -10;
          border-radius: var(--borderRadius-20);
          background-color: rgba(128, 128, 128, 0.8); //
          animation: fade-out 0.5s ease 0s 1 normal none running;
        }
        .enlargedDoukondataImgO {
          width: 100%;
          height: 100%;
          position: relative;
        }
        .closingModalO {
          position: absolute;
          top: var(--document-8px);
          right: var(--document-8px);
        }
        //アニメーション
        @keyframes fade-in {
          0%{
            opacity: 0;
          }
          100%{
            opacity: 1;
          }
        }
        @keyframes fade-out {
          0%{
            opacity: 1;
            z-index: 11;
          }
          99%{
            opacity: 0;
            z-index: 11;
          }
          100%{
            opacity: 0;
            z-index: -10;
          }
        }
        @media screen and (max-width: 1024px) {
          .topSct {
            height: fit-content;
          }
          .section0contentO {
            flex-direction: column;
          }
          //製品
          .seihinOtoiawaseO {
            width: 100%;
          }
          .seihinO {
            height: fit-content;
          }
          //お問い合わせ
          .otoiawaseO {
            height: fit-content;
          }
          //利用規約
          .riyoukiyakuO {
            width: 100%;
            height: fit-content;
          }
          .riyoukiyakuContentO {
            flex-direction: column;
          }
          //まる
          .maruO {
            width: 100%;
            height: fit-content;
            position: static;
          }
          //サーチ
          .searchO {
            width: 100%;
            height: fit-content;
            position: static;
          }
          //ばつ
          .batsuO {
            width: 100%;
            height: fit-content;
            position: static;
          }
          //セクション１
          .middleSec {
            height: fit-content;
            margin-bottom: 74px;
          }
          .doukondataImgO {
            height: fit-content;
          }
          .doukondataImgI {
            width: 80%;
            height: 200px;
            margin: 8px auto 20px auto;
          }
      `}</style>
    </>
  );
}
