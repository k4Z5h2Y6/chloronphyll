import { DropDownContainerType } from "@/libs/colorData";
import { Splider } from "./Splide";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Modal } from "./Modal";

export const DropDownContainerA = ({
  data,
}: {
  data: DropDownContainerType;
}) => {
  const [isModalShown, setIsModalShown] = useState<boolean>(false);
  const handleModalShow = (index: number) => {
    setIsModalShown(true);
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
              <p className="descriptionP">{data.contents[0].description}</p>
            </div>
            <div className="imgO" onClick={() => handleModalShow(0)}>
              <img src={data.contents[0].img} alt="" />
            </div>
          </div>
          <div className="buttonO"></div>
        </div>
      </div>

      {/* ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}

      <Modal isModalShown={isModalShown} setIsModalShown={setIsModalShown} img={data.contents[0].img}/>

      {/* ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}

      <style jsx>{`
        .DropDownContainerO {
          width: 70%;
          height: 400px;
          margin: 0 auto;
          padding: 40px 0;
        }
        .DropDownContainerI {
          width: 100%;
          height: 100%;
          padding-bottom: 40px;
          display: flex;
          flex-direction: column;
          border: var(--borderColor-section);
          border-radius: var(--borderRadius-20);
        }
        .contentO {
          width: 100%;
          height: 100%;
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
        @media screen and (max-width: 1024px) {
          .DropDownContainerO {
            width: 100%;
            height: fit-content;
          }
          .contentO {
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
            height: 100%;
            padding: 16px;
          }
        }
      `}</style>
    </>
  );
};
