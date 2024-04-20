import { MovieMaxWidth } from "@/components/elements/MovieMaxWidth";
import { PageTitle } from "@/components/elements/PageTitle";
import { RadiusedImg } from "@/components/elements/RadiusedImg";
import Image from "next/image";

//performanceのtopsecのみ画像
export default function performance() {
  return (
    <>
      <section className="topSct">
        <PageTitle pageTitle="パフォーマンスランク" />
        <div className="section0ContentO">
          <div className="section0ContentImgO">
            <RadiusedImg src="/KaihenNote/Performance/performance_1280_720.jpg" />
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
              <p className="section0ContentTextTitleP">パフォーマンスランク</p>
              <p>
                データ容量をまとめたページです。
                <br />
                環境に合わせてアバターの容量を選ぶことができます。
              </p>
              <p>
                「パフォーマンスランク」は、VRChat公式が定めている容量の基準値です。
              </p>
              <div className="section0ContentTextSubImgO">
                <Image
                  src="/KaihenNote/Performance/performance_sub_1280_720.png"
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

      <section className="middleSct">
        <div className="section1ContentO">
          <div className="section1ContentTextO">
            <div className="section1ContentTextI">
              <p className="section1ContentTextTitleP">比較</p>
              <p>
                “Fuki_Light” のオブジェクトを8つに分けたのが ”Fuki” です。
                <br />
                オブジェクトを分けることで改変の幅を広げています。
              </p>
              <p>
                ”Fuki_Quest”はQuest単体で利用できます。
                <br />
                PC版でフォールバックとして利用することもできます。
              </p>
            </div>
          </div>
          <div className="section1ContentImgO">
            <RadiusedImg src="/KaihenNote/Performance/performance_hikaku_1280_720.png" />
          </div>
        </div>
      </section>
      {/* <section className="middoleSct">
        <div className="section1ContentO">
          <div className="section1ContentImgO">
            <RadiusedImg src="/KaihenNote/Performance/performance_hikaku_1280_720.png" />
          </div>
          <div className="section1ContentTextO">
            <div className="section1ContentTextI">
              <p className="section1ContentTextTitleP">比較</p>
              <p>
                “Fuki_Light” のオブジェクトを8つに分けたのが ”Fuki” です。
                <br />
                オブジェクトを分けることで改変の幅を広げています。
              </p>
              <p>
                ”Fuki_Quest”はQuest単体で利用できます。
                <br />
                PC版でフォールバックとして利用することもできます。
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="endSct">
        <div className="section2ContentO">
          <div className="section2ContentTextO">
            <div className="section2ContentTextI">
              <p className="section2ContentTextTitleP">
                ポリゴン数 / シェイプ数
              </p>
              <p>
                容量削減のため、FBXのアイテムはKemoと統合しています。
                <br />
                アイテムだけ使用する場合はケモ耳OFF、
                <br />
                ケモ耳だけ使用する場合はExMenuのONOFF機能、
                <br />
                アイテムを単体で追加する場合は「Fuki_Studio」からexportしてください。
              </p>
            </div>
          </div>
          <div className="section2ContentImgO">
            <RadiusedImg src="/KaihenNote/Performance/performance_polygon_1280_720.png" />
          </div>
        </div>
      </section>

      <style jsx>{`
        //top
        .topSct {
          width: 100%;
          height: calc(100vh - 24px);
        }
        .section0ContentO {
          width: 100%;
          height: calc(100% - 16px - 32px - 16px - 24px - 7vh);
          display: flex;
          flex-direction: row-reverse;
        }
        .section0ContentImgO,
        .section1ContentImgO,
        .section2ContentImgO {
          width: 60%;
          height: 100%;
          padding: 24px;
        }
        .section0ContentTextO,
        .section1ContentTextO,
        .section2ContentTextO {
          width: 40%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .section0ContentTextI,
        .section1ContentTextI,
        .section2ContentTextI {
          width: calc(100% / 8 * 5);
          height: fit-content;
        }
        .vrchatImgO {
          width: 100%;
          height: 24px;
          margin-bottom: 16px;
        }
        .section0ContentTextTitleP,
        .section1ContentTextTitleP,
        .section2ContentTextTitleP {
          font-size: 20px;
          line-height: 24px;
        }
        .section0ContentTextSubImgO {
          padding-top: 16px;
        }
        //middleSct *middleSctはcssなし
        .section1ContentO,
        .section2ContentO {
          width: 100%;
          height: calc(100vh - 24px - 16px - 32px - 16px - 24px - 7vh);
          display: flex;
        }
        //endSct
        .endSct {
          margin-bottom: 240px;
        }
        @media screen and (max-width: 1024px) {
          .topSct {
            height: fit-content;
            margin-bottom: 20px; 
          }
          //
          .section0ContentO {
            flex-direction: column;
          }
          .section0ContentImgO,
          .section1ContentImgO,
          .section2ContentImgO {
            width: 80%;
            margin: 0 auto;
            padding: 0 0 20px 0;
          }
          .section0ContentTextO,
          .section1ContentTextO,
          .section2ContentTextO {
            width: 100%;
          }
          .section0ContentTextI,
          .section1ContentTextI,
          .section2ContentTextI {
            width: 100%;
            margin-bottom: 10px;
          }
          .vrchatImgO {
            margin-bottom: 12px;
          }
          .section0ContentTextTitleP,
          .section1ContentTextTitleP,
          .section2ContentTextTitleP {
            font-size: 12px;
            line-height: 14px;
            margin-bottom: 12px;
          }
          .section0ContentTextSubImgO {
            padding-top: 10px;
            {/* margin-bottom: 20px; */}
          }
          //
          .middleSct {
            margin-bottom: 20px;
          }
          .section1ContentO,
          .section2ContentO {
            height: fit-content;
            flex-direction: column;
          }
          //
          .endSct {
            margin-bottom: 80px;
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
