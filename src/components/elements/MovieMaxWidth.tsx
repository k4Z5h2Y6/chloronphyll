type Props = {
  src: string;
};

export const MovieMaxWidth = ({ src }: Props) => {
  return (
    <>
      <div className="MovieO">
        <video src={src} muted loop controls playsInline />
      </div>

      <style jsx>{`
        .MovieO {
          min-width: 100%;
          min-height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        video {
          max-width: 100%;
          max-height: 100%;
          border-radius: var(--borderRadius-20);
        }
      `}</style>
    </>
  );
};
