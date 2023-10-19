type Props = {
  pageTitle: string;
};

export const PageTitle = ({ pageTitle }: Props) => {
  return (
    <>
      <div className='pageTitleCO'>
        <h3>{pageTitle}</h3>
      </div>

      <style jsx>{`
        .pageTitleCO {
          width: fit-content;
          margin: 24px 0 24px -2.5vw; //var()関数が使えない
          padding: 16px 16px 16px calc(2.5vw + 16px); //var()関数が使えない
          border-radius: 0 var(--borderRadius-20) var(--borderRadius-20) 0;
          background-color: var(--backgroundColor-item);
        }
        @media screen and (max-width: 1024px) {
          .pageTitleCO {
            margin: 20px 0 20px -4vw; //var()関数が使えない
            padding: 8px 8px 8px calc(4vw + 8px) //var()関数が使えない
          }
        }
        @media screen and (min-width: 566px) {
          .pageTitleCO {
            margin: 20px 0 20px calc(233px - 50vw); //var()関数が使えない
            padding: 8px 8px 8px calc(50vw - 233px + 8px) //var()関数が使えない
          }
        }
      `}</style>
    </>
  );
};