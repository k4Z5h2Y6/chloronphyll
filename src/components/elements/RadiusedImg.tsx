type Props = {
  src: string;
};

export const RadiusedImg = ({ src }: Props) => {
  return (
    <>
      <div className="jpgO">
        <img src={src} alt="" />
      </div>

      <style jsx>{`
        .jpgO {
          min-width: 100%;
          min-height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        img {
          max-width: 100%;
          max-height: 100%;
          border-radius: var(--borderRadius-20);
        }
        @media screen and (max-width: 1024px) {
          
        }
      `}</style>
    </>
  );
};

{
  /* min-width: 100%;
          min-height: 100%; */
}
