import { DropDownContainerSingleType } from "@/libs/colorData";

export const DropDownContainerA = ({data}: { data: DropDownContainerSingleType }) => {
  return (
    <>
      <div className="DropDownContainerAO">
        <div className="DropDownContainerAI">
          <div className="contentO">
            <div className="textO">
              <h5>{data.title}</h5>
              <p className="descriptionP">{data.description}</p>
            </div>
            <div className="imgO">
              <img src={data.img} alt="" />
            </div>
          </div>
          <div className="buttonO"></div>
        </div>
      </div>

      <style jsx>{`
        .DropDownContainerAO {
          width: 70%;
          height: 400px;
          margin: 0 auto;
          padding: 40px 0;
        }
        .DropDownContainerAI {
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
          .DropDownContainerAO {
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
            padding: 16px;
          }
        }
      `}</style>
    </>
  );
};
