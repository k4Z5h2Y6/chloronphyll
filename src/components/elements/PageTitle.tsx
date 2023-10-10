type Props = {
  pageTitle: string;
};

export const PageTitle = ({ pageTitle }: Props) => {
  return (
    <>
      <div className='pageTitleCO'>
        <h3>{pageTitle}</h3>
      </div>


      {/* 20vwbr */}
      <style jsx>{`
        .pageTitleCO {
          width: fit-content;
          margin: 24px 0 24px -2.5vw; //var()関数が使えない
          padding: 16px 16px 16px calc(2.5vw + 16px); //var()関数が使えない
          border-radius: 0 var(--borderRadius-20) var(--borderRadius-20) 0;
          background-color: var(--backgroundColor-item);
        }
        @media screen and (max-width: 1024px) {
        }
      `}</style>
    </>
  );
};