import { useState } from 'react';

type Props = {
  title: string;
  description: string;
};

export const DropDownBoxA = ({ title, description }: Props) => {
  const [isBoxOpened, setIsBoxOpend] = useState(false);
  return (
    <>
      <div className='dropDownBoxO'>
        <div className='dropDownBoxI'>
          <div
            className='dropDownBoxTitleO'
            onClick={() => setIsBoxOpend(!isBoxOpened)}
          >
            <p className='titleP'>{title}</p>
          </div>
          <div className={isBoxOpened ? 'dropDownBoxDescriptionOOpened' : 'dropDownBoxDescriptionOClosed'}>
            <p className='descriptionP'>{description}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dropDownBoxO {
          width: 100%;
          height: fit-content;
          padding: 0 8px 8px 8px;
        }
        .dropDownBoxI {
          width: 100%;
          height: fit-content;
          display: flex;
          flex-direction: column;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-item);
        }

        .descriptionP {
          white-space: pre-wrap;
        }
        .dropDownBoxTitleO {
          width: 100%;
          height: 32px;
          border-radius: var(--borderRadius-20);
          background-color: var(--backgroundColor-title);
        }
        .titleP {
          width: 184px;
          height: 100%;
          margin: 0 auto;
          line-height: 32px;
        }
        .dropDownBoxDescriptionOOpened {
          width: 100%;
          height: 212px; //
          transition: var(--transition1s);
          overflow: hidden;
        }
        .dropDownBoxDescriptionOClosed {
          width: 100%;
          height: 0px;
          transition: var(--transition1s);
          overflow: hidden;
        }
        .descriptionP {
          width: 184px;
          height: 100%;
          margin: 16px auto;
          font-size: 10px;
          line-height: 12px;
        }
      `}</style>
    </>
  );
};