import {
  DropDownContainerContentsType,
  DropDownContainerType,
} from "@/libs/colorData";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export const Modal = ({
  isModalShown,
  setIsModalShown,
  img,
}: {
  isModalShown: boolean;
  setIsModalShown: Dispatch<SetStateAction<boolean>>;
  img: string;
}) => {
  //単一画像モーダル
  //DropDownContainerAと同梱データで使用中
  return (
    <>
      <div className="modalCover" />

      <div className={isModalShown ? "modalShownO" : "modalClosedO"}>
        <div
          className="closeingModalBackgroundO"
          onClick={() => setIsModalShown(false)}
        />
        <div className="modalO">
          <div className="enlargedDoukondataImgO">
            <img className="imgO" src={img} alt="" />
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
        .closeingModalBackgroundO {
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
        .imgO {
          width: 100%;
          height: 100%;
          padding: var(--document-8px);
          display: block;
          object-fit: contain;
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

// import {
//   DropDownContainerContentsType,
//   DropDownContainerType,
// } from "@/libs/colorData";
// import Image from "next/image";
// import { Dispatch, SetStateAction } from "react";

// export const Modal = ({
//   isModalShown,
//   setIsModalShown,
//   img,
// }: {
//   isModalShown: boolean;
//   setIsModalShown: Dispatch<SetStateAction<boolean>>;
//   img: string;
// }) => {
//   //単一画像モーダル
//   //DropDownContainerAと同梱データで使用中
//   return (
//     <>
//       <div className="modalCover" />

//       <div
//         className={isModalShown ? "modalShownO" : "modalClosedO"}
//         onClick={() => setIsModalShown(false)}
//       >
//         <div className="modalO">
//           <div className="enlargedDoukondataImgO">
//             <img className="imgO" src={img} alt="" />
//           </div>
//           <div className="closingModalO" onClick={() => setIsModalShown(false)}>
//             <Image
//               src="/Document/DocumentBatu256_256.png"
//               alt=""
//               width={256}
//               height={256}
//               style={{
//                 width: "48px",
//                 height: "48px",
//               }}
//             />
//           </div>
//         </div>
//       </div>
//       <style jsx>{`
//         .modalCover {
//           position: fixed;
//           top: 0;
//           right: 0;
//           bottom: 0;
//           left: 0;
//           z-index: -1;
//           background-color: var(--backgroundColor-base);
//         }
//         .modalShownO {
//           position: fixed;
//           top: 0;
//           right: 0;
//           bottom: 0;
//           left: 0;
//           z-index: 11; //
//           animation: fade-in 0.5s ease 0s 1 normal none running;
//         }
//         .modalClosedO {
//           position: fixed;
//           top: 0;
//           right: 0;
//           bottom: 0;
//           left: 0;
//           z-index: -10; //
//           animation: fade-out 0.5s ease 0s 1 normal none running;
//         }
//         .modalO {
//           width: 95vw;
//           height: 95vh;
//           position: fixed;
//           top: 2.5vh;
//           left: 2.5vw;
//           z-index: 12; //
//           border-radius: var(--borderRadius-20);
//           background-color: var(--backgroundColor-modal);
//         }
//         .enlargedDoukondataImgO {
//           width: 100%;
//           height: 100%;
//           position: relative;
//           display: flex;
//         }
//         .imgO {
//           width: 100%;
//           height: 100%;
//           padding: var(--document-8px);
//           display: block;
//           object-fit: contain;
//         }
//         .closingModalO {
//           position: absolute;
//           top: var(--document-8px);
//           right: var(--document-8px);
//         }
//         //アニメーション
//         @keyframes fade-in {
//           0% {
//             opacity: 0;
//           }
//           100% {
//             opacity: 1;
//           }
//         }
//         @keyframes fade-out {
//           0% {
//             opacity: 1;
//             z-index: 11;
//           }
//           99% {
//             opacity: 0;
//             z-index: 11;
//           }
//           100% {
//             opacity: 0;
//             z-index: -10;
//           }
//         }
//       `}</style>
//     </>
//   );
// };
