import { DropDownContainerType } from "@/libs/colorData";
import Image from "next/image";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DynamicModalSplide = dynamic(() =>
  import("./ModalSplide").then((mod) => mod.ModalSplide)
);

export const DropDownContainerB = ({
  data,
}: {
  data: DropDownContainerType;
}) => {
  //todo
  //矢印

  //アコーディオン開閉関係
  const [isContainerOpened, setIsContainerOpened] = useState<boolean>(false);

  //モーダル関係
  const [isModalShown, setIsModalShown] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [key, setKey] = useState<number>(1); //レンダリングさせるため

  const handleModalShow = (index: number) => {
    setCurrentIndex(index);
    setIsModalShown(true);
    setKey((prevKey) => prevKey + 1);
  };

  function disableScroll(e: any) {
    e.preventDefault();
  }

  useEffect(() => {
    setIsModalShown(false);
  }, []);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      disableScroll(e);
    };

    if (isModalShown) {
      document.addEventListener("touchmove", handleScroll, { passive: false });
      document.addEventListener("wheel", handleScroll, { passive: false });
      document.addEventListener("mousewheel", handleScroll, { passive: false });
    } else {
      document.removeEventListener("touchmove", handleScroll);
      document.removeEventListener("wheel", handleScroll);
      document.removeEventListener("mousewheel", handleScroll);
    }

    return () => {
      document.removeEventListener("touchmove", handleScroll);
      document.removeEventListener("wheel", handleScroll);
      document.removeEventListener("mousewheel", handleScroll);
    };
  }, [isModalShown]);

  return (
    <>
      <div className="DropDownContainerO">
        <div className="DropDownContainerI">
          <div className="contentO">
            <div className="textO">
              <h5>{data.title}</h5>
              <p className="descriptionP">{data?.contents[0].description}</p>
            </div>
            <div className="imgO" onClick={() => handleModalShow(0)}>
              <img src={data?.contents[0].img} alt="" />
            </div>
          </div>
          <ul
            className={
              isContainerOpened
                ? "dropDownContentsOOpened"
                : "dropDownContentsOClosed"
            }
          >
            {data?.contents.slice(1).map((dc, index) => (
              <li className="contentO" key={index}>
                <div className="textO">
                  <p className="descriptionP">
                    {dc.description}
                  </p>
                </div>
                <div className="imgO" onClick={() => handleModalShow(index + 1)}>
                  <img src={dc.img} alt="" />
                </div>
              </li>
            ))}
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

      {isModalShown ? (
        <DynamicModalSplide
          isModalShown={isModalShown}
          setIsModalShown={setIsModalShown}
          currentIndex={currentIndex}
          data={data}
          key={key}
        />
      ) : null}

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