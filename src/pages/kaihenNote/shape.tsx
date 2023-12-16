import { Movie } from '@/components/elements/Movie';
import { PageTitle } from '@/components/elements/PageTitle';
import { DropDownBoxA } from '@/components/kaihenNote/DropDownBoxA';
import { DropDownBoxB } from '@/components/kaihenNote/DropDownBoxB';
import { DropDownBoxC } from '@/components/kaihenNote/DropDownBoxC';
import Image from "next/image";

export default function Shape() {

  return (
    <>
      <section className='topSct'>
        <PageTitle pageTitle='シェイプキー' />
        <div className='section0contentO'>
          <div className='section0ContentMovieO'>
            <Movie src='/SettingManual/01Hair/HairYokogami1280_720.mp4' />
          </div>
          <div className='section0ContentTextO'>
            <div className='section0ContentTextI'>
              <div className='vrchatImgO'>
                <Image
                  src='/KaihenNote/vrchatLogo516_225.png'
                  alt=''
                  width={516}
                  height={225}
                  style={{
                    width: 'auto',
                    height: '100%',
                  }}
                />
              </div>
              <p className='section0ContentTextTitleP'>シェイプキー</p>
              <p>シェイプキーとは、変形した3Dオブジェクトの形状を保存しておく機能です。</p>
              <p className='section0ContentTextEndP'>
                Fukiには479個のシェイプキーが備わっています。<br />
                これらを調整すると、より個性を出すことができます。
              </p>
              <Image
                src='/Document/DoukonDate1280_720.png'
                alt=''
                width={1280}
                height={720}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>

          </div>
        </div>
      </section>

      <section className='endSct'>

        {/* 1列目 */}
        <div className='dropDownBoxesO'>
          <div className='dropDownBoxesI'>
            <div className='dropDownBoxesTitleO'>
              <div className='dropDownBoxesTitleI'>
                <p className='dropDownBoxesTitleP'>表情</p>
              </div>
            </div>
            <div className='dropDownBoxesImgO'>
              <Image
                src='/History/RueWalkFirst1280_720.gif'
                alt=''
                layout='fill'
              />
            </div>
            <DropDownBoxA
              title={'00_素体'}
              description={`00_01_輪郭x\n00_02_輪郭y\n00_03_輪郭z\n00_04_小顔\n00_05_鼻高さ\n00_06_鼻なめらか\n00_07_短いつめ\n00_08_長いつめ\n00_09_ネイルアクセOFF\n00_10_素体スリム_ひじ\n00_11_素体スリム_かた\n00_12_素体スリム_お腹\n00_13_素体スリム_ひざ\n00_14_素体スリム_くび1\n00_15_素体スリム_くび2`}
            />
            <DropDownBoxA
              title={'01_まぶた'}
              description={``}
            />
            <DropDownBoxA
              title={'02_まゆげ'}
              description={``}
            />
            <DropDownBoxB
              title={'03_ひとみ'}
              description={``}
            />
            <DropDownBoxC
              title={'04_ハイライト'}
              description={``}
            />
          </div>
        </div>

        {/* 2列目 */}
        <div className='dropDownBoxesO'>
          <div className='dropDownBoxesI'>
            <div className='dropDownBoxesTitleO'>
              <div className='dropDownBoxesTitleI'>
                <p className='dropDownBoxesTitleP'>表情</p>
              </div>
            </div>
            <div className='dropDownBoxesImgO'>
              <Image
                src='/History/RueWalkFirst1280_720.gif'
                alt=''
                layout='fill'
              />
            </div>
            <DropDownBoxB
              title={'11_hs_片手ハンドサイン'}
              description={``}
            />
            <DropDownBoxA
              title={'12_hss_両手ハンドサイン'}
              description={``}
            />
            <DropDownBoxA
              title={'13_hp_PB,コンタクト'}
              description={``}
            />
            <DropDownBoxA
              title={'14_he_エモート'}
              description={``}
            />
            <DropDownBoxA
              title={'15_hr_ランダム'}
              description={``}
            />
            <DropDownBoxA
              title={'16_hu_追加動作'}
              description={``}
            />
            <DropDownBoxA
              title={'17_hy_輪郭y対応'}
              description={``}
            />
          </div>
        </div>
        
        {/* 3列目 */}
        <div className='dropDownBoxesO'>
          <div className='dropDownBoxesI'>
            <div className='dropDownBoxesTitleO'>
              <div className='dropDownBoxesTitleI'>
                <p className='dropDownBoxesTitleP'>ヘア,ケモ,ふく</p>
              </div>
            </div>
            <div className='dropDownBoxesImgO'>
              <Image
                src='/History/RueWalkFirst1280_720.gif'
                alt=''
                layout='fill'
              />
            </div>
            <DropDownBoxC
              title={'21_h_ヘア'}
              description={``}
            />
            <DropDownBoxC
              title={'22_c_ケモ'}
              description={``}
            />
            <DropDownBoxB
              title={'23_f_ふく'}
              description={``}
            />
            <DropDownBoxA
              title={'24_fs_スカーフ'}
              description={``}
            />
            <DropDownBoxA
              title={'25_d_ドロワーズ'}
              description={``}
            />
            <DropDownBoxC
              title={'26_s_スカート'}
              description={``}
            />
            <DropDownBoxA
              title={'27_k_くつ'}
              description={``}
            />
          </div>
        </div>

        {/* 4列目 */}
        <div className='dropDownBoxesO'>
          <div className='dropDownBoxesI'>
            <div className='dropDownBoxesTitleO'>
              <div className='dropDownBoxesTitleI'>
                <p className='dropDownBoxesTitleP'>そのた</p>
              </div>
            </div>
            <div className='dropDownBoxesImgO'>
              <Image
                src='/History/RueWalkFirst1280_720.gif'
                alt=''
                layout='fill'
              />
            </div>
            <DropDownBoxB
              title={'30_z0_イメージボード'}
              description={``}
            />
            <DropDownBoxC
              title={'31_z_アイテム'}
              description={``}
            />
            <DropDownBoxC
              title={'41_単体'}
              description={``}
            />
            <DropDownBoxB
              title={'42_くち'}
              description={``}
            />
            <DropDownBoxB
              title={'v_リップシンク'}
              description={``}
            />
            <DropDownBoxC
              title={'z_MMD'}
              description={``}
            />
          </div>
        </div>
      </section>


      <style jsx>{`
        //
        .topSct {
          width: 100%;
          height: calc(100vh - 24px);
        }
        .section0contentO {
          width: 100%;
          height: calc(100% - 16px - 32px - 16px - 24px - 7vh);
          display: flex;
          flex-direction: row-reverse;
        }
        .section0ContentMovieO {
          width: 60%;
          height: 100%;
          padding: 24px;
        }
        .section0ContentTextO {
          width: 40%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .section0ContentTextI {
          width: calc(100% / 8 * 5);
          height: fit-content;
        }
        .vrchatImgO {
          width: 100%;
          height: 24px;
          margin-bottom: 16px;
        }
        .section0ContentTextTitleP {
          font-size: 20px;
          line-height: 24px;
        }
        .section0ContentTextEndP {
          margin-bottom: 32px;
        }
        //
        .endSct {
          width: 100%;
          height: fit-content;
          margin-bottom: 240px;
          display: flex;
        }
        //
        .dropDownBoxesO {
          width: 25%;
          height: fit-content;
          padding: 20px 8px;
        }
        .dropDownBoxesI {
          width: 100%;
          height: 100%;
          border: var(--borderColor-section);
          border-radius: var(--borderRadius-20);
        }
        .dropDownBoxesTitleO {
          width: 100%;
          height: 40px;
          padding: 4px;
          margin-bottom: 16px;
        }
        .dropDownBoxesTitleI {
          width: 100%;
          height: 100%;
          border: var(--borderColor-section);
          border-radius: var(--borderRadius-20);
        }
        .dropDownBoxesTitleP {
          width: 100%;
          height: 100%;
          text-align: center;
          line-height: 32px;
          margin-bottom: 0;
        }
        .dropDownBoxesImgO {
          width: 14.25vw;
          height: calc(14.25vw / 3.3);
          margin: 0 auto 16px auto;
          position: relative;
        }
      `}</style>
    </>
  );
};