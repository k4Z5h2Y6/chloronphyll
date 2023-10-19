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
          margin-bottom: 10px;
          padding: 4px;
          border: 1px solid var(--borderColor);
          border-radius: 8px;
          background-color: var(--backgroundColor-base);
        }
        p {
          margin-bottom: 0;
        }
        span {
          text-decoration: underline;
        }
        @media screen and (max-width: 1024px) {
          .pageTitleCO {
            margin: 20px 0 20px -4vw; //var()関数が使えない
            padding: 8px 8px 8px calc(4vw + 8px) //var()関数が使えない
          }
        }
      `}</style>
    </>
  );
};