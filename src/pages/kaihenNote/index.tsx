import { PageTitle } from "@/components/elements/PageTitle";
import Image from "next/image";

export default function KaihenNote() {
  return (
    <>
      <div className='kaihenNoteO'>
        <PageTitle pageTitle='改変ノート' />
        <div className='kaihenNoteContentO'>
          <div className='flemingImgO'>
            <Image
              src='/KaihenNote/Fleming640_360.gif'
              alt=''
              layout='fill'
              objectFit='contain'
            />
          </div>
          <div className='kaihenNoteMenuO'>
            <div className='kaihenNoteMenuI'>
              <div className='kaihenNoteMenuItemO'>
                <div className='kaihenNoteMenuItemI'>
                  <div className='kaihenNoteMenuItemTextO'>アップロード手順</div>
                </div>
              </div>
              <div className='kaihenNoteMenuItemO'>
                <div className='kaihenNoteMenuItemI'>
                  <div className='kaihenNoteMenuItemTextO'>パフォーマンスランク</div>
                </div>
              </div>
              <div className='kaihenNoteMenuItemO'>
                <div className='kaihenNoteMenuItemI'>
                  <div className='kaihenNoteMenuItemTextO'>ExParameters / ExMenu</div>
                </div>
              </div>
              <div className='kaihenNoteMenuItemO'>
                <div className='kaihenNoteMenuItemI'>
                  <div className='kaihenNoteMenuItemTextO'>シェイプキー</div>
                </div>
              </div>
              <div className='kaihenNoteMenuItemO'>
                <div className='kaihenNoteMenuItemI'>
                  <div className='kaihenNoteMenuItemTextO'>01 いろ改変</div>
                </div>
              </div>
              <div className='kaihenNoteMenuItemO'>
                <div className='kaihenNoteMenuItemI'>
                  <div className='kaihenNoteMenuItemTextO'>02 ヘア,ケモ,ふく改変</div>
                </div>
              </div>
              <div className='kaihenNoteMenuItemO'>
                <div className='kaihenNoteMenuItemI'>
                  <div className='kaihenNoteMenuItemTextO'>03 表情改変</div>
                </div>
              </div>
              <div className='kaihenNoteMenuItemO'>
                <div className='kaihenNoteMenuItemI'>
                  <div className='kaihenNoteMenuItemTextO'>04 イメージボード改変</div>
                </div>
              </div>
            </div>

            <div className='kaihenNoteMenuImgO'>
              <Image
                src='/KaihenNote/kisekaeSugekae360_360.png'
                alt=''
                layout='fill'
                objectFit='contain'
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .kaihenNoteO {
          width: 100%;
          height: calc(100vh - 24px);
        }
        .kaihenNoteContentO {
          width: 100%;
          height: calc(100% - 16px - 32px - 16px - 24px - 7vh);
          padding-top: 80px;
          position: relative;
        }
        //gif
        .flemingImgO {
          width: 50vw;
          height: 50vh;
          position: absolute;
          right: -2.5vw;
          bottom: -7vh;
        }
        //改変メニュー
        .kaihenNoteMenuO {
          width: 960px; //800+160
          height: 416px;
          display: flex;
          position: absolute;
          z-index: 9; //10だとsoilの上に重なる
        }
        .kaihenNoteMenuI {
          width: 800px;
          height: 100%;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
        }
        .kaihenNoteMenuItemO {
          width: 400px;
          height: 104px;
          padding: 20px;
        }
        .kaihenNoteMenuItemI {
          width: 100%;
          height: 100%;
          padding: 20px;
          border: 1.5px solid #b3b3b3;
          border-radius: var(--borderRadius-16);
          background-color: var(--backgroundColor-kaihenItem);
        }
        .kaihenNoteMenuItemTextO {
          font-size: 22px;
          line-height: 22px;
        }
        //着せ替え
        .kaihenNoteMenuImgO {
          width: 160px;
          height: 160px;
          position: relative;
        }
        @media screen and (max-width: 1024px) {
          .kaihenNoteContentO {
            padding-top: inherit;
          }
          //gif
          .flemingImgO {
            width: 50vw;
            height: 50vw;
            position: absolute;
            right: -4vw;
            bottom: -18vh;
          }
          //改変メニュー
          .kaihenNoteMenuO {
            width: 344px; //240+104
            height: 512px;
          }
          .kaihenNoteMenuI {
            width: 240px;
          }
          .kaihenNoteMenuItemO {
            width: 240px;
            height: 64px;
            padding: 12px;
          }
          .kaihenNoteMenuItemI {
            padding: 12px;
          }
          .kaihenNoteMenuItemTextO {
            font-size: 14px;
            line-height: 14px;
          }
          .kaihenNoteMenuImgO {
            width: 104px;
            height: 104px;
            margin-top: 256px;
          }
        }
      `}</style>
    </>
  )
}