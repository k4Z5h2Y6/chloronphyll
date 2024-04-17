type Props = {
  src: string;
};

export const MovieMaxHeight = ({ src }: Props) => {
  console.log(src)
  return (
    <>
      <div className="MovieO">
        <video src={src} autoPlay muted loop controls playsInline />
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
