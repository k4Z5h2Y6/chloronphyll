import {
  DropDownContainerContentsType,
  DropDownContainerType,
} from "@/libs/colorData";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export const Modal = ({
  isModalShown,
  setIsModalShown,
}: {
  isModalShown: boolean;
  setIsModalShown: Dispatch<SetStateAction<boolean>>;
}) => {

  //stateは上階層で管理
  // const []

  return (
    <>
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
