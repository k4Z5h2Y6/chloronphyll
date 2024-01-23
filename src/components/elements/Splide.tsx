import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import "@splidejs/splide/css";
import { DropDownContainerContentsType } from "@/libs/colorData";
import { useEffect, useRef } from "react";
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export const Splider = ({
  currentIndex,
  contents,
}: {
  currentIndex: number;
  contents: DropDownContainerContentsType[];
}) => {
  return (
    <>
      <div className="SplideO">
        <Splide
          id="main-carousel"
          aria-label="私のお気に入りの画像集"
          options={{
            width: "95vw",
            height: "95vh",
            start: currentIndex,
            perPage: 1,
            pagination: true,
            detectResize: false,
          }}
        >
          {contents.map((dc: DropDownContainerContentsType, index: number) => (
            <SplideSlide key={index}>
              <img
                className="slide-img"
                src={dc?.img}
                alt={`${dc?.description}`}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <style jsx>{`
        .SplideO {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .slide-img {
          width: 100%;
          height: 100%;
          padding: var(--document-8px);
          display: block;
          object-fit: contain;
        }
      `}</style>
    </>
  );
};
