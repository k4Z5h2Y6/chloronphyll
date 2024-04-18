import { useEffect, useRef } from "react";

type Props = {
  src: string;
};

export const MovieMaxHeight = ({ src }: Props) => {

  //loadingアニメーション用、コードが冗長？、アニメ入れる？

  // const videoRef = useRef<HTMLVideoElement>(null);
  // useEffect(() => {
  //   const video = videoRef.current;
  //   if (video) {
  //     video.addEventListener("loadeddata", handleLoadedData);
  //     return () => {
  //       video.removeEventListener("loadeddata", handleLoadedData);
  //     };
  //   }
  // }, []);

  // const handleLoadedData = () => {
  //   console.log("loadeddata発生");
  // };

  return (
    <>
      <div className="MovieO">
        <video
          // ref={videoRef} 
          src={src} autoPlay muted loop controls playsInline />
      </div>

      <style jsx>{`
        .MovieO {
          min-height: 100%;
          min-width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        video {
          max-height: 100%;
          max-width: 100%;
          border-radius: var(--borderRadius-20);
        }
        @media screen and (max-width: 1024px) {
          video {
            height: 100%;
            max-height: inherit;
            max-width: min-content;
          }
        }
      `}</style>
    </>
  );
};
