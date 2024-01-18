import {
  DropDownContainerContentsType,
  DropDownContainerType,
} from "@/libs/colorData";
import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";
import { Modal } from "./Modal";

export const DropDownContainerB = ({
  data,
}: {
  data: DropDownContainerType;
}) => {
  const [isContainerOpened, setIsContainerOpened] = useState<boolean>(false);
  const [isModalShown, setIsModalShown] = useState<boolean>(false);

  const [firstContent, setFirstContent] =
    useState<DropDownContainerContentsType>();
  const [exceptFirstContent, setExceptFirstContent] =
    useState<DropDownContainerContentsType[]>();
  const dataContents: DropDownContainerContentsType[] = data.contents;

  useEffect(() => {
    setIsModalShown(false);
  }, []);

  useLayoutEffect(() => {
    setFirstContent(dataContents.shift());
    setExceptFirstContent(dataContents);
  }, []);

  const handleModalShow = (index: number) => {
    setIsModalShown(true);
    console.log(index)
  };

  return (
    <>
      <div className="DropDownContainerO">
        <div className="DropDownContainerI">
          <div className="contentO">
            <div className="textO">
              <h5>{data.title}</h5>
              <p className="descriptionP">{firstContent?.description}</p>
            </div>
            <div className="imgO" onClick={() => handleModalShow(-1)}>
              <img src={firstContent?.img} alt="" />
            </div>
          </div>
          <ul
            className={
              isContainerOpened
                ? "dropDownContentsOOpened"
                : "dropDownContentsOClosed"
            }
          >
            {exceptFirstContent?.map(
              (e: DropDownContainerContentsType, index: number) => (
                <li className="contentO" key={index}>
                  <div className="textO">
                    <p className="descriptionP">{e.description}</p>
                  </div>
                  {/* <div className="imgO" onClick={() => setIsModalShown(true)}> */}
                  <div className="imgO" onClick={() => handleModalShow(index)}>
                    <img src={e.img} alt="" />
                  </div>
                </li>
              )
            )}
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

      {/* <Modal isModalShown={isModalShown} setIsModalShown={setIsModalShown} /> */}

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

      {/* ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}

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
          height: 280px; //
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
          height: 560px; //
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

{
  /* <li className="contentO">
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
            </li> */
}
