// import { Splide, SplideTrack, SplideSlide } from "splide-nextjs/react-splide";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { DropDownContainerContentsType } from "@/libs/colorData";

import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';

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
          hasTrack={ false }
          options={{
            width: "95vw",
            height: "95vh",
            start: currentIndex,
            perPage: 1,
            // pagination: true,
            detectResize: false,
          }}
        >
          <SplideTrack>
            {contents.map(
              (dc: DropDownContainerContentsType, index: number) => (
                <SplideSlide key={index}>
                  <img
                    className="slide-img"
                    src={dc?.img}
                    alt={`${dc?.description}`}
                  />
                </SplideSlide>
              )
            )}
          </SplideTrack>

          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev">Prev</button>
            <button className="splide__arrow splide__arrow--next">Next</button>
          </div>
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
