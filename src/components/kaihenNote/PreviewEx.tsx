import { DropDownContainerType } from "@/libs/colorData";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RadiusedImg } from "../elements/RadiusedImg";
import { RadiusedImgForHeight } from "../elements/RadiusedImgForHeight";

// const DynamicModalSplide = dynamic(() =>
//   import("./ModalSplide").then((mod) => mod.ModalSplide)
// );

export const PreviewEx = ({ data }: { data: string[] }) => {
  // //アコーディオン開閉関係
  // const [isContainerOpened, setIsContainerOpened] = useState<boolean>(false);

  // //モーダル関係
  // const [isModalShown, setIsModalShown] = useState<boolean>(false);
  // const [currentIndex, setCurrentIndex] = useState<number>(0);
  // const [key, setKey] = useState(1); //レンダリングさせるため

  // const handleModalShow = (index: number) => {
  //   setCurrentIndex(index);
  //   setIsModalShown(true);
  //   setKey((prevKey) => prevKey + 1);
  // };

  // function disableScroll(e: any) {
  //   e.preventDefault();
  // }

  // useEffect(() => {
  //   setIsModalShown(false);
  // }, []);

  // useEffect(() => {
  //   const handleScroll = (e: Event) => {
  //     disableScroll(e);
  //   };

  //   if (isModalShown) {
  //     document.addEventListener("touchmove", handleScroll, { passive: false });
  //     document.addEventListener("wheel", handleScroll, { passive: false });
  //     document.addEventListener("mousewheel", handleScroll, { passive: false });
  //   } else {
  //     document.removeEventListener("touchmove", handleScroll);
  //     document.removeEventListener("wheel", handleScroll);
  //     document.removeEventListener("mousewheel", handleScroll);
  //   }

  //   return () => {
  //     document.removeEventListener("touchmove", handleScroll);
  //     document.removeEventListener("wheel", handleScroll);
  //     document.removeEventListener("mousewheel", handleScroll);
  //   };
  // }, [isModalShown]);
  return (
    <>
      <div className="firstPreviewO">
        <RadiusedImg src="/KaihenNote/Ex/CheatSheet/ex_01_1920_1080.jpg" />
      </div>

      <div className="secondPreviewO">
        <div className="secondPreviewTextO">
          <div className="secondPreviewTextI">
            <p className="secondPreviewTextTitleP">ExMenuを増やす方法</p>
            <p>
              ExMenuを追加する時、発動のカギとなるExParametersも同時に作成することになります。
              <br />
              Unityでセットアップする必要があります。
              <br />
              <br />
              Fukiはデフォルトで制限ギリギリまでExParametersを作成しているので、
              <br />
              改変でExMenuを増やす時に、使わないものを除外して容量を確保しなければなりません。すみません。
              <br />
              (!
              ExParametersを消したら紐付けしているExMenuも消さないとUploadできません。)
            </p>
          </div>
        </div>
        <div className="secondPreviewImgO">
          <RadiusedImgForHeight src="/KaihenNote/Ex/CheatSheet/ex_02_1920_1080.jpg" />
        </div>
      </div>

      <style jsx>{`
        //
        .firstPreviewO {
          width: 100%;
          height: 90vh;
          display: flex;
        }
        //
        .secondPreviewO {
          width: 100%;
          height: calc(93vh - 112px);
          display: flex;
        }
        .secondPreviewTextO {
          width: 40%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .secondPreviewTextI {
          width: calc(100% / 8 * 5);
          height: fit-content;
        }
        .secondPreviewTextTitleP {
          font-size: 20px;
          line-height: 24px;
        }
        .secondPreviewTextSubImgO {
          padding-top: 16px;
        }
        .secondPreviewImgO {
          width: 60%;
          height: 100%;
          padding: 24px;
        }
      `}</style>
    </>
  );
};
