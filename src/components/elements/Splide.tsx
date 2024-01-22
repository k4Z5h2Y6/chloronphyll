import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import "@splidejs/splide/css";
import {
  DropDownContainerContentsType,
  DropDownContainerType,
} from "@/libs/colorData";
import { useLayoutEffect, useState } from "react";

export const Splider = ({
  firstContent,
  exceptFirstContent,
  currentIndex,
  data,
}: {
  firstContent: DropDownContainerContentsType;
  exceptFirstContent: DropDownContainerContentsType[];
  currentIndex: number;
  data: DropDownContainerType;
}) => {

  const dataContents: DropDownContainerContentsType[] = [firstContent, ...(exceptFirstContent || [])]
  // console.log(data)

  return (
    <>
      <div className="SplideO">
        <Splide
          aria-label="私のお気に入りの画像集"
          options={{
            start: 1,
            perPage: 1,
            width: "100%",
            height: "100%",
            pagination: "true",
          }}
        >
          {/* {dataContents?.map( */}
          {exceptFirstContent?.map(
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
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      `}</style>
    </>
  );
};
