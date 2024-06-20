import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { Splider } from "./Splide";
import { DropDownContainerType } from "@/libs/colorData";

export const ModalSplide = ({
  isModalShown,
  setIsModalShown,
  currentIndex,
  data,
  key,
}: {
  isModalShown: boolean;
  setIsModalShown: Dispatch<SetStateAction<boolean>>;
  currentIndex: number;
  data: DropDownContainerType;
  key: number;
}) => {
  //複数画像モーダル
  //DropDownContainerBとropDownContainerCで使用中
  return (
    <>
      <div className="modalCover" />

      <div className={isModalShown ? "modalShownO" : "modalClosedO"}>
        <div
          className="closingModalBackgroundO"
          onClick={() => setIsModalShown(false)}
        />
        <div className="modalO">
          <div className="enlargedDoukondataImgO">
            <Splider
              key={key}
              currentIndex={currentIndex}
              contents={data.contents}
            />
          </div>
          <div className="closingModalO" onClick={() => setIsModalShown(false)}>
            <Image
              src="/KaihenNote/Color/popup_batu_128_128.png"
              alt=""
              width={128}
              height={128}
              style={{
                width: "32px",
                height: "32px",
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .modalCover {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: -1;
          background-color: var(--backgroundColor-base);
        }
        .modalShownO {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 11; //
          animation: fade-in 0.5s ease 0s 1 normal none running;
        }
        .modalClosedO {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: -10; //
          animation: fade-out 0.5s ease 0s 1 normal none running;
        }
        .closingModalBackgroundO {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 12; //
        }
        .modalO {
          width: 95vw;
          height: 95vh;
          position: fixed;
          top: 2.5vh;
          left: 2.5vw;
          z-index: 13; //
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-modal);
        }
        .enlargedDoukondataImgO {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
        }
        .closingModalO {
          position: absolute;
          top: 13px; //
          right: 13px; //
          opacity: 0.8;
        }
        .closingModalO:hover {
          opacity: 1;
        }
        //アニメーション
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes fade-out {
          0% {
            opacity: 1;
            z-index: 11;
          }
          99% {
            opacity: 0;
            z-index: 11;
          }
          100% {
            opacity: 0;
            z-index: -10;
          }
        }
      `}</style>
    </>
  );
};
