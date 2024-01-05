import { DropDownContainerType } from "@/libs/colorData";
import Image from "next/image";
import { useState } from "react";

export const DropDownContainerB = ({
  data,
}: {
  data: DropDownContainerType;
}) => {
  const [isContainerOpened, setIsContainerOpened] = useState(false);
  return (
    <>
      <div className="DropDownContainerO">
        <div className="DropDownContainerI">
          <div className="contentO">
            <div className="textO">
              <h5>{data.title}</h5>
              <p className="descriptionP">{data.description}</p>
            </div>
            <div className="imgO">
              <img src={data.img} alt="" />
            </div>
          </div>

          <ul
            className={
              isContainerOpened
                ? "dropDownContentsOOpened"
                : "dropDownContentsOClosed"
            }
          >
            <li className="contentO">
              <div className="textO">
                <p className="descriptionP">{data.contents[0].description}</p>
              </div>
              <div className="imgO">
                <img src={data.contents[0].img} alt="" />
              </div>
            </li>

            <li className="contentO">
              <div className="textO">
                <p className="descriptionP">{data.contents[1].description}</p>
              </div>
              <div className="imgO">
                <img src={data.contents[1].img} alt="" />
              </div>
            </li>
          </ul>

          <div
            className="buttonO"
            onClick={() => {
              setIsContainerOpened(!isContainerOpened);
            }}
          >
            {isContainerOpened ? (
              <Image
                src={"/KaihenNote/dropDownContainerOpenedButton160_80.png"}
                alt={""}
                width={160}
                height={80}
                style={{
                  width: "40px",
                  height: "20px",
                }}
              />
            ) : (
              <Image
                src={"/KaihenNote/dropDownContainerClosedButton160_80.png"}
                alt={""}
                width={160}
                height={80}
                style={{
                  width: "40px",
                  height: "20px",
                }}
              />
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .DropDownContainerO {
          width: 70%;
          height: fit-content; //400px;
          margin: 0 auto;
          padding: 40px 0;
        }
        .DropDownContainerI {
          width: 100%;
          height: fit-content;
          display: flex;
          flex-direction: column;
          border: var(--borderColor-section);
          border-radius: var(--borderRadius-20);
        }
        .contentO {
          width: 100%;
          height: 280px;//
          display: flex;
        }
        .textO {
          width: 50%;
          height: 100%;
          padding: 40px 60px;
        }
        .descriptionP {
          white-space: pre-wrap;
        }
        .imgO {
          width: 50%;
          height: 100%;
          padding: 40px 60px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        img {
          height: 100%;
          border-radius: var(--borderRadius-20);
        }

        .dropDownContentsOOpened {
          width: 100%;
          height: 560px;//
          transition: var(--transition1s);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .dropDownContentsOClosed {
          width: 100%;
          height: 0px;
          transition: var(--transition1s);
          overflow: hidden;
        }

        .buttonO {
          width: 100%;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        @media screen and (max-width: 1024px) {
          .DropDownContainerO {
            width: 100%;
            height: fit-content;
          }
          .contentO {
            height: 100%;
            flex-direction: column;
          }
          img {
            width: 100%;
            height: inherit;
          }
          .textO {
            width: 100%;
            padding: 16px;
          }
          .imgO {
            width: 100%;
            padding: 16px;
          }
          .dropDownContentsOOpened {
            height: 100%;
          }
        }
      `}</style>
    </>
  );
};
