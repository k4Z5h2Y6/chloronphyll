type Props = {
  children?: React.ReactNode;
  pageTitle: string;
}

export const Main = ({ children, pageTitle }: Props) => {
  return (
    <>
      <main>
        <div className='pageTitleOO'>
          <div className='pageTitleO'>
            <h3>{pageTitle}</h3>
          </div>
        </div>
        <div className='pageO'>{children}</div>
      </main>

      <style jsx>{`
        .pageTitleOO {
          width: fit-content;
          margin: 2.5vw 0; //
          padding-left: 2.5vw;
          border-radius: 0 12px 12px 0;
          background-color: #ADA79E;
        }

        .pageTitleO {
          padding: 12px;
        }

        .pageO {
          width: 95vw;
          height: 30vh; //
          margin: auto;
          border: 1px solid black;
        }
      `}</style>
    </>
  )
}