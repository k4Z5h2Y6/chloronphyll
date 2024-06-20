import { DropDownContainerA } from "@/components/elements/DropDownContainerA";
import { DropDownContainerB } from "@/components/elements/DropDownContainerB";
import { DropDownContainerC } from "@/components/elements/DropDownContainerC";
import { PageTitle } from "@/components/elements/PageTitle";
import { RadiusedImg } from "@/components/elements/RadiusedImg";
import { uploadData0, uploadData1, uploadData2, uploadData3, uploadData4, uploadData5 } from "@/libs/uploadData";
import Image from "next/image";

export default function Upload() {
  return (
    <>
      <section className="topSct">
        <PageTitle pageTitle="アップロード手順" />
        <div className="section0contentO">
          <div className="section0ContentImgO">
            <RadiusedImg src="/KaihenNote/Upload/upload_1280_720.jpg" />
          </div>
          <div className="section0ContentTextO">
            <div className="section0ContentTextI">
              <div className="vrchatImgO">
                <Image
                  src="/KaihenNote/Upload/upload_sub_1280_720.jpg"
                  alt=""
                  width={516}
                  height={225}
                  style={{
                    width: "auto",
                    height: "100%",
                  }}
                />
              </div>
              <p className="section0ContentTextTitleP">
                アバターをアップロードする方法
              </p>
              <p>
                VRChatでアバターを使用するには、
                <br />
                Unityでセットアップする必要があります。
              </p>
              <p>フォールバックを設定する手順も記載しています。</p>
              <div className="section0ContentTextSubImgO">
                <Image
                  src="/KaihenNote/Color/colorTime1280_720.png"
                  alt=""
                  width={1280}
                  height={720}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="endSct">
        <DropDownContainerB data={uploadData0} />
        <DropDownContainerB data={uploadData1} />
        <DropDownContainerA data={uploadData2} />
        <DropDownContainerA data={uploadData3} />
        <DropDownContainerA data={uploadData4} />
        <DropDownContainerC data={uploadData5} />
      </section>

      <style jsx>{`
        //top
        .topSct {
          width: 100%;
          height: calc(100vh - 24px);
        }
        .section0contentO {
          width: 100%;
          height: calc(100% - 16px - 32px - 16px - 24px - 7vh);
          display: flex;
          flex-direction: row-reverse;
        }
        .section0ContentImgO {
          width: 60%;
          height: 100%;
          padding: 24px;
        }
        .section0ContentTextO {
          width: 40%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .section0ContentTextI {
          width: calc(100% / 8 * 5);
          height: fit-content;
        }
        .vrchatImgO {
          width: 100%;
          height: 24px;
          margin-bottom: 16px;
        }
        .section0ContentTextTitleP {
          font-size: 20px;
          line-height: 24px;
        }
        .section0ContentTextSubImgO {
          padding-top: 16px;
        }
        //end
        .endSct {
          width: 100%;
          height: fit-content;
          padding-top: 40px;
          margin-bottom: 240px;
        }
        @media screen and (max-width: 1024px) {
          .topSct {
            height: fit-content;
            margin-bottom: 20px;
          }
          .section0contentO {
            flex-direction: column;
          }
          .section0ContentImgO {
            width: 80%;
            margin: 0 auto;
            padding: 0 0 20px 0;
          }
          .section0ContentTextO {
            width: 100%;
          }
          .section0ContentTextI {
            width: 100%;
            margin-bottom: 10px;
          }
          .vrchatImgO {
            margin-bottom: 12px;
          }
          .section0ContentTextTitleP {
            font-size: 12px;
            line-height: 14px;
            margin-bottom: 12px;
          }
          .section0ContentTextSubImgO {
            padding-top: 10px;
          }
          //
          .endSct {
            padding-top: 0;
            margin-bottom: 80px;
          }
        }
      `}</style>
    </>
  );
}
