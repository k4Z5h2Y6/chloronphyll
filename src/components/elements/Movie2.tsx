type Props = {
  src: string;
};

export const MovieMaxhight = ({ src }: Props) => {
  return (
    <>
      <div className="MovieO">
        <video src={src} muted loop controls playsInline />
      </div>

      <style jsx>{`
        .MovieO {
          min-height: 100%;
          min-width: auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        video {
          max-height: 100%;
          max-width: auto;
          border-radius: var(--borderRadius-20);
        }
      `}</style>
    </>
  );
};
