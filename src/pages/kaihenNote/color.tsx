import { PageTitle } from "@/components/elements/PageTitle";
import Image from "next/image";
import { MovieMaxWidth } from "@/components/elements/MovieMaxWidth";
import { DropDownContainerA } from "@/components/elements/DropDownContainerA";
import {
  colorData0,
  colorData1,
  colorData2,
  colorData3,
  colorData4,
  colorData5,
  colorData6,
  colorData7,
} from "@/libs/colorData";
import { DropDownContainerB } from "@/components/elements/DropDownContainerB";
import { DropDownContainerC } from "@/components/elements/DropDownContainerC";

export default function Color() {
  return (
    <>
      <section className="topSct">
        <PageTitle pageTitle="01 いろ改変" />
        <div className="section0contentO">
          <div className="section0ContentMovieO">
            <MovieMaxWidth src="/KaihenNote/Color/color1920_1080.mp4" />
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
              <p className="section0ContentTextTitleP">
                アバターの色を変える方法
              </p>
              <p>
                blenderソフトでTextureを作成します。
                <br />
                PSDファイルは存在しません。協力者を探しています。
              </p>
              <p>
                blender内で、アバターの見た目を確認しながら色を調整できるので、
                理想の見た目に近づけやすいです。
              </p>
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
        <DropDownContainerA data={colorData0} />
        <DropDownContainerB data={colorData1} />
        <DropDownContainerC data={colorData2} />
        <DropDownContainerC data={colorData3} />
        <DropDownContainerB data={colorData4} />
        <DropDownContainerB data={colorData5} />
        <DropDownContainerB data={colorData6} />
        <DropDownContainerC data={colorData7} />
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
