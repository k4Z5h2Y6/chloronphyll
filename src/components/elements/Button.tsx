import Link from 'next/link';

type Props = {
  title: string;
};

export const Button = ({ title }: Props) => {
  return (
    <>
      <div className='buttonO'>
        <Link href='/'>
          <p>→<span>{title}</span></p>
        </Link>
      </div>


      {/* 20vwbr */}
      <style jsx>{`
        .buttonO {
          width: fit-content;
          margin-bottom: 16px;
          padding: 4px;
          border: var(--borderColor-section);
          border-radius: 8px;
          background-color: var(--backgroundColor-base);
        }
        p {
          margin-bottom: 0;
        }
        span {
          text-decoration: underline;
          font-size: 12px;
          line-height: 16px;
        }
        @media screen and (max-width: 1024px) {
          .pageTitleCO {
            margin: 20px 0 20px -4vw; //var()関数が使えない
            padding: 8px 8px 8px calc(4vw + 8px) //var()関数が使えない
          }
          span {
            font-size: 10px;
            line-height: 12px;
          }
        }
      `}</style>
    </>
  );
};