import { DropDownContainerA } from "@/components/elements/DropDownContainerA";
import { DropDownContainerC } from "@/components/elements/DropDownContainerC";
import { MovieMaxWidth } from "@/components/elements/MovieMaxWidth";
import { PageTitle } from "@/components/elements/PageTitle";
import { PreviewEx } from "@/components/kaihenNote/PreviewEx";
import {
  exData0,
  exData1,
  exData2,
  exData3,
  previewExData,
} from "@/libs/exData";
import Image from "next/image";

export default function Ex() {
  return (
    <>
      <section className="topSct">
        <PageTitle pageTitle="ExParameters / ExMenu" />
        <div className="section0contentO">
          <div className="section0ContentMovieO">
            <MovieMaxWidth src="/KaihenNote/Ex/ex_1024_576.mp4" />
          </div>
          <div className="section0ContentTextO">
            <div className="section0ContentTextI">
              <div className="vrchatImgO">
                <Image
                  src="/KaihenNote/vrchatLogo516_225.png"
                  alt=""
                  width={516}
                  height={225}
                  style={{
                    width: "auto",
                    height: "100%",
                  }}
                />
              </div>
              <p className="section0ContentTextTitleP">Action Menu</p>
              <p>
                ExMenuはVRChat内で手軽に開けるメニューです。
                <br />
                ExMenuを発動するためにExParametersが存在します。
              </p>
              <p>
                VRChat内でアイテムを取り出したり、専用アニメーションを発動することができます。
              </p>
              <div className="section0ContentTextSubImgO">
                <Image
                  src="/KaihenNote/Ex/ex_sub_1280_720.png"
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

      <section className="cheatSheetSct">
        <PreviewEx data={previewExData} />
      </section>

      <section className="endSct">
        <DropDownContainerC data={exData0} />
        <DropDownContainerC data={exData1} />
        <div className="pianoO">
          <Image
            src={"/KaihenNote/Ex/ex_piano_256_256.png"}
            alt={""}
            width={256}
            height={256}
            style={{
              width: "128px",
              height: "128px",
            }}
          />
        </div>
        <DropDownContainerA data={exData2} />
        <DropDownContainerA data={exData3} />
      </section>

      <style jsx>{`
        //top
        .topSct {
          width: 100%;
          height: calc(100vh - 24px);
          margin-bottom: 7vh;
        }
        .section0contentO {
          width: 100%;
          height: calc(100% - 16px - 32px - 16px - 24px - 7vh);
          display: flex;
          flex-direction: row-reverse;
        }
        .section0ContentMovieO {
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
        //cheatSheet
        .cheatSheetSct {
          width: 100%;
        }
        //end
        .endSct {
          width: 100%;
          height: fit-content;
          padding-top: 40px;
          margin-bottom: 240px;
        } //
        .pianoO {
          width: 100%;
          height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media screen and (max-width: 1024px) {
          .topSct {
            height: fit-content;
            margin-bottom: 20px;
          }
          .section0contentO {
            flex-direction: column;
          }
          .section0ContentMovieO {
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
