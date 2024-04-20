import { MovieMaxWidth } from "@/components/elements/MovieMaxWidth";
import { PageTitle } from "@/components/elements/PageTitle";
import { RadiusedImg } from "@/components/elements/RadiusedImg";
import { DropDownBoxA } from "@/components/kaihenNote/DropDownBoxA";
import { DropDownBoxB } from "@/components/kaihenNote/DropDownBoxB";
import { DropDownBoxC } from "@/components/kaihenNote/DropDownBoxC";
import Image from "next/image";

export default function Shape() {
  return (
    <>
      <section className="topSct">
        <PageTitle pageTitle="シェイプキー" />
        <div className="section0contentO">
          <div className="section0ContentMovieO">
            <MovieMaxWidth src="/KaihenNote/Shape/shape_1280_720.mp4" />
          </div>
          <div className="section0ContentTextO">
            <div className="section0ContentTextI">
              <div className="vrchatImgO">
                <Image
                  src="/KaihenNote/vrchatLogo516_225.png"
                  alt=""
                  width={516}
                  height={225}
                  style={{
                    width: "auto",
                    height: "100%",
                  }}
                />
              </div>
              <p className="section0ContentTextTitleP">シェイプキー</p>
              <p>
                シェイプキーとは、変形した3Dオブジェクトの形状を保存しておく機能です。
              </p>
              <p>
                Fukiには479個のシェイプキーが備わっています。
                <br />
                これらを調整すると、より個性を出すことができます。
              </p>
              <div className="section0ContentTextSubImgO">
                <Image
                  src="/KaihenNote/Shape/shape_sub_1280_720.png"
                  alt=""
                  width={1280}
                  height={720}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="endSct">
        {/* 1列目 */}
        <div className="dropDownBoxesO">
          <div className="dropDownBoxesI">
            <div className="dropDownBoxesTitleO">
              <div className="dropDownBoxesTitleI">
                <p className="dropDownBoxesTitleP">改変用</p>
              </div>
            </div>
            <div className="dropDownBoxesImgO">
              <RadiusedImg src="/KaihenNote/Shape/shape_kaihen_640_194.gif" />
            </div>
            <DropDownBoxA
              title={"00_素体"}
              description={`00_01_輪郭x\n00_02_輪郭y\n00_03_輪郭z\n00_04_小顔\n00_05_鼻高さ\n00_06_鼻なめらか\n00_07_短いつめ\n00_08_長いつめ\n00_09_ネイルアクセOFF\n00_10_素体スリム_ひじ\n00_11_素体スリム_かた\n00_12_素体スリム_お腹\n00_13_素体スリム_ひざ\n00_14_素体スリム_くび1\n00_15_素体スリム_くび2`}
            />
            <DropDownBoxA
              title={"01_まぶた"}
              description={`01_01_まぶた\n01_02_下まぶた\n01_03_下まぶた2\n01_04_たれ目1\n01_05_たれ目2\n01_06_おこめ\n01_07_おどろき\n01_08_ふとまつげ\n01_09_つけま`}
            />
            <DropDownBoxA
              title={"02_まゆげ"}
              description={`02_01_まゆげOFF\n02_02_真面目\n02_03_キリッ\n02_04_にこり\n02_05_困る\n02_06_怒り\n02_07_悲しい\n02_08_カクまゆ\n02_09_ギザまゆ\n02_10_上まゆ\n02_11_下まゆ\n02_12_前まゆ`}
            />
            <DropDownBoxB
              title={"03_ひとみ"}
              description={`03_01_なめらかなひとみ\n03_02_たまご型のひとみ\n03_03_しかくのひとみ\n03_04_ダイヤのひとみ\n03_05_ふにゃふにゃのひとみ\n03_06_小さいひとみ\n03_07_大きいひとみ\n03_08_たてに短いひとみ\n03_09_たてに長いひとみ\n03_10_よこに短いひとみ\n03_11_よこに長いひとみ\n\n03_21_PP_瞳孔\n03_22_PP縮小\n03_23_PP拡大\n03_24_PP塗りつぶし\n03_25_PPサークル\n03_26_PP形1\n03_27_PP形2\n03_28_PP形3\n03_29_PP形4\n03_30_PP影\n03_31_PPふち`}
            />
            <DropDownBoxC
              title={"04_ハイライト"}
              description={`04_01_HLa_大きさ\n04_02_HLa_中心1\n04_03_HLa_中心2\n04_04_HLa_OFF\n\n04_05_HLb_OFF\n\n04_06_HLc_OFF\n04_07_HLc_大きさ\n04_08_HLc_形\n04_09_HLc_中心\n04_10_HLc_下\n\n04_11_HLde\n04_12_HLde_移動1\n04_13_HLde_移動2\n04_14_HLde_移動3\n04_15_HLde_形1\n04_16_HLde_形2\n\n04_21_ぐるぐる\n04_22_キラりん\n04_23_ハート\n04_24_ハイライトキラりん\n04_25_ハイライトハート\n04_26_キラメキハイライト\n04_27_キラキラハイライト\n04_28_ダイヤのハイライト\n04_29_しずくのハイライト\n04_30_ワンダーランド\n04_31_ハイライト移動1\n04_32_ハイライト移動2\n04_33_ハイライト移動3\n04_34_ハイライト移動4\n04_35_ハイライト移動5\n04_36_ハイライト移動6\n04_37_ハイライトa下\n04_38_ハイライトb下`}
            />
          </div>
        </div>

        {/* 2列目 */}
        <div className="dropDownBoxesO">
          <div className="dropDownBoxesI">
            <div className="dropDownBoxesTitleO">
              <div className="dropDownBoxesTitleI">
                <p className="dropDownBoxesTitleP">表情</p>
              </div>
            </div>
            <div className="dropDownBoxesImgO">
              <RadiusedImg src="/KaihenNote/Shape/shape_facial_640_194.gif" />
            </div>
            <DropDownBoxB
              title={"11_hs_片手ハンドサイン"}
              description={`11_hs1_よりめ\n11_hs2_汗\n11_hs3_キラりん\n11_hs4_ハート\n11_hs5_ウィンク\n11_hs6_くるりんハイライト01_定位置\n11_hs6_くるりんハイライト02_関数x\n11_hs6_くるりんハイライト03_関数y\n11_hs6_くるりんハイライト04_形0\n11_hs6_くるりんハイライト05_形1\n11_hs6_くるりんハイライト06_形2\n11_hs6_くるりんハイライト07_形3\n11_hs6_くるりんハイライト08_形4\n11_hs6_くるりんハイライト09_まる口\n11_hs6_くるりんハイライト10_おどろき\n11_hs6_くるりんハイライト11_de定位置\n11_hs6_くるりんハイライト12_dx\n11_hs6_くるりんハイライト13_dy\n11_hs6_くるりんハイライト14_ex\n11_hs6_くるりんハイライト15_ey\n11_hs6_ダイヤ\n11_hs7_にこ`}
            />
            <DropDownBoxA
              title={"12_hss_両手ハンドサイン"}
              description={`12_hss1_ジト目ハム口\n12_hss3a_飛び目\n12_hss3b_飛び目p\n12_hss3c_飛び目c\n12_hss3d_飛び目d\n12_hss3e_飛び目くち\n12_hss3f_白目\n12_hss3g_ないしょ\n12_hss4_キラキラ\n12_hss6_つり目ふにゃふにゃ\n12_hss7_しょげ口`}
            />
            <DropDownBoxA
              title={"13_hp_PB,コンタクト"}
              description={`13_hp1_たれ目ハートふにゃふにゃ\n13_hp2_ハートなみだ\n13_hp3_ふにゃふにゃ\n13_hp4_ぐるぐるなみだ\n13_hp5_ぽかーん\n13_hp6_なごみ\n13_hp7_にこにこ\n13_hp8_はぅ`}
            />
            <DropDownBoxA
              title={"14_he_エモート"}
              description={`14_he1a_AFKa\n14_he1b_AFKb\n14_he1zL_AFKzL\n14_he1zR_AFKzR\n14_he2_走行\n14_he3_ズサー歩行\n14_he4_ジャンプ\n14_he5_カーテシー\n14_he6_Yes\n14_he7_No\n14_he8a_うとうと\n14_he8b_うとうとあわわ口\n14_he8c_うとうとすいみん`}
            />
            <DropDownBoxA
              title={"15_hr_ランダム"}
              description={`15_hr01_無感情1\n15_hr02_無感情2\n15_hr03_感激\n15_hr04_小宇宙\n15_hr05_つり目1\n15_hr06_つり目2\n15_hr07_しょげ口なみだ\n15_hr08_画面\n15_hr09_にが\n15_hr10_ウッ\n15_hr11_おどろきさんかく\n15_hr12_xx\n15_hr13_x\n15_hr14_xy\n15_hr15_おこ`}
            />
            <DropDownBoxA
              title={"16_hu_追加動作"}
              description={`16_hu0_深すいみん\n16_hu1_うるうるハイライト\n16_hu2_ゆらゆらハイライト\n16_hu3_はぅゆらゆら\n16_hu4_うるうるなみだ\n16_hu5_しずくのなみだ\n16_hu5_しずくのなみだa\n16_hu5_しずくのなみだb\n16_hu6_すいみんハイライト\n16_hu7_キラキラすいみんハイライト`}
            />
            <DropDownBoxA
              title={"17_hy_輪郭y対応"}
              description={`17_hy1_しずくのなみだy\n17_hy2_汗y\n17_hy3_おこy\n17_hy4_ぽかーんy`}
            />
          </div>
        </div>

        {/* 3列目 */}
        <div className="dropDownBoxesO">
          <div className="dropDownBoxesI">
            <div className="dropDownBoxesTitleO">
              <div className="dropDownBoxesTitleI">
                <p className="dropDownBoxesTitleP">ヘア,ケモ,ふく</p>
              </div>
            </div>
            <div className="dropDownBoxesImgO">
              <RadiusedImg src="/KaihenNote/Shape/shape_fashion_640_194.gif" />
            </div>
            <DropDownBoxC
              title={"21_h_ヘア"}
              description={`21_h1a_ボブ\n21_h1b_パーマ\n21_h1c_きのこヘア\n21_h1d_ミディアムヘア\n21_h1e_もふヘア\n\n21_h2a_前髪1\n21_h2b_前髪2\n21_h2c_前髪3\n21_h2d_前髪オンまゆ\n21_h2e_前髪ロング\n21_h2f_前髪サイドイン\n21_h2g_擬似オールバック\n\n21_h3L1_みみかけL1\n21_h3L2_みみかけL2\n21_h3L3_みみかけL3\n21_h3L4_みみかけL4\n21_h3R1_みみかけR1\n21_h3R2_みみかけR2\n21_h3R3_みみかけR3\n21_h3R4_みみかけR4\n21_h4_二つ編みL\n21_h4_二つ編みR\n21_h5_ゆらぎヘア\n\n21_hg1_ボブきのこ互換\n21_hg3a_みみかけボブ互換\n21_hg3b_みみかけパーマ互換\n21_hg3d_みみかけミディアム互換\n21_hg3e_みみかけもふ互換`}
            />
            <DropDownBoxC
              title={"22_c_ケモ"}
              description={`22_c0a_ケモ耳モード\n22_c0a_ケモ耳モードボブ\n\n22_c1_ケモ耳OFF\n22_c2_ツノOFF\n22_c3_しっぽ曲げ\n\n22_c4a_耳はね\n22_c4b_耳とじ\n\n22_c5a_ケモ耳ミニ\n22_c5b_ケモ耳ロング\n22_c5c_ケモ耳曲げ\n22_c5d_ケモ耳丸み\n22_c5e_ケモ耳きのこ\n22_c6_ケモノみみかけ\n\n22_cc_ツノ01\n22_cc_ツノ02\n22_cc_ツノ03\n22_cc_ツノ04\n22_cc_ツノ05\n22_cc_ツノ06\n22_cc_ツノ07\n22_cc_ツノ08\n22_cc_ツノ09\n22_cc_ツノ10\n22_cc_ツノ11\n22_cc_ツノ12\n22_cc_ツノ13\n22_cc_ツノ14\n22_cc_ツノ15\n22_cc_ツノ16`}
            />
            <DropDownBoxB
              title={"23_f_ふく"}
              description={`23_f1b_おでかけ\n23_f1c_ラフ着\n23_f1d_おやすみコーデ\n\n23_f2a_ボタン\n23_f2b_むなもと\n\n23_f3a_ヒラえり\n23_f3b_まるえり\n23_f3c_とげえり\n23_f3d_なでえり\n\n23_f4a_ヒラそで\n23_f4b_はんそで\n23_f4c_そでまくり\n23_f5_パワーショルダー\n23_f6_ボリュームスリーブ\n\n23_fg1_おでかけ_ヒラそで\n23_fg2_はんそで_ボリュームスリーブ\n23_fg3_おでかけ_そでまくり\n23_fg4_ひじふせ_ラフ着`}
            />
            <DropDownBoxA
              title={"24_fs_スカーフ"}
              description={`24_fs1a_スカーフOFF\n24_fs1b_サイドスカーフ\n24_fs1c_フリルスカーフ\n\n24_fs2_ショートスカーフ\n24_fs3_ロングスカーフ\n24_fs4_風スカーフ\n24_fs5_たてスカーフ\n24_fs6_スリムスカーフ\n\n24_fsg1_まるえり_サイド_ショート\n24_fsg2_まるえり_フリル_ショート`}
            />
            <DropDownBoxA
              title={"25_d_ドロワーズ"}
              description={`25_d1_ドロワーズOFF\n25_d2_ドロワーズゆるめ1\n25_d3_ドロワーズゆるめ2\n25_d3_ドロワーズしぼり1\n25_d4_ドロワーズしぼり2`}
            />
            <DropDownBoxC
              title={"26_s_スカート"}
              description={`26_s1b_ミニスカート\n26_s1d_ロングスカート\n26_s2a_空気イス\n26_s2b_空気イス_ミニ\n26_s2c_空気イス_ミニ中間\n26_s2d_空気イス_ロング\n26_s3Aa_ひじふせ\n26_s3Ab_ひじふせ_ミニ\n26_s3Ad_ひじふせ_ロング\n26_s4La_V睡L\n26_s4Lb_V睡L_ミニ\n26_s4Ld_V睡L_ロング\n26_s4Ra_V睡R\n26_s4Rb_V睡R_ミニ\n26_s4Rd_V睡R_ロング\n26_s5a_イス\n26_s5b_イス_ミニ\n26_s5c_イス_ミニ中間\n26_s5d_イス_ロング\n26_s6a1_カーテシー_1\n26_s6a2_カーテシー_2\n26_s6b_カーテシー_ミニ\n26_s6d_カーテシー_ロング\n\n26_s9La_横座りL\n26_s9Lb_横座りL_ミニ\n26_s9Lc_横座りL_ミニ中間\n26_s9Ld_横座りL_ロング\n26_s9Le_横座りL_ホバー\n26_s9Ra_横座りR\n26_s9Rb_横座りR_ミニ\n26_s9Rc_横座りR_ミニ中間\n26_s9Rd_横座りR_ロング\n26_s9Re_横座りR_ホバー\n\n26_ss1_スカートOFF\n26_ss2_ゆらぎスカート\n26_ss3_ゆとりスカート\n26_ss4_ゆとりHips1\n26_ss5_ゆとりHips2\n26_ss5_ゆとりHips3`}
            />
            <DropDownBoxA
              title={"27_k_くつ"}
              description={`27_k1_ハーフブーツ\n27_k2_オペラシューズ\n27_k3_はだし`}
            />
          </div>
        </div>

        {/* 4列目 */}
        <div className="dropDownBoxesO">
          <div className="dropDownBoxesI">
            <div className="dropDownBoxesTitleO">
              <div className="dropDownBoxesTitleI">
                <p className="dropDownBoxesTitleP">そのた</p>
              </div>
            </div>
            <div className="dropDownBoxesImgO">
              <RadiusedImg src="/KaihenNote/Shape/shape_item_640_194.gif" />
            </div>
            <DropDownBoxB
              title={"30_z0_イメージボード"}
              description={`30_01_side\n30_02_16_9\n30_03_16_9_side\n30_p0\n30_p01\n30_p02\n30_p03\n30_p04\n30_p05\n30_p06\n30_p07\n30_p08\n30_p09\n30_p10\n30_p11\n30_p12\n30_p13\n30_p14\n30_p15\n30_p16`}
            />
            <DropDownBoxC
              title={"31_z_アイテム"}
              description={`31_01_ハート型バルーン\n\n32_01_木の実\n\n33_L1_風\n33_L2_ビリビリL\n33_L3_電磁力\n33_R1_方位磁石\n33_R2_ビリビリR\n33_R3_ビリ点滅1\n33_R4_ビリ点滅2\n33_R5_光関数x\n33_R6_光関数y\n33_R7_光関数z\n\n35_01_ふわふわ1\n35_02_ふわふわ2\n35_03_あしあと\n35_04_空気のイス1\n35_05_空気のイス2\n35_06_空気のイス3\n\n36_01_お辞儀\n36_02_リズムL\n36_03_リズムR\n36_04_葉っぱ曲げ\n36_05_ゆらぎヘンルーダ`}
            />
            <DropDownBoxC
              title={"41_単体"}
              description={`41_01_すいみん\n41_02_つり目\n41_03_ジト目\n41_04_にこ\n41_05_にこにこ\n41_06_ウィンクL\n41_07_ウィンクR\n41_08_ウィンク2L\n41_09_ウィンク2R\n\n41_10_はぅ\n41_11_なごみ\n41_12_xx\n41_13_x\n41_14_xy\n41_15_おこ\n41_16_ぽかーん\n\n41_17_すいみんハイライト\n41_18_キラキラすいみんハイライト\n41_19_よりめ\n41_20_青め\n41_21_白め\n41_22_黒ふち\n41_23_画面\n\n41_24_まつげ\n41_25_まつげ2\n41_26_ふちおどおど\n41_27_汗\n41_28_よだれ\n\n41_29_なみだ\n41_30_外なみだ\n41_31_外なみだ上\n41_32_片なみだ`}
            />
            <DropDownBoxB
              title={"42_くち"}
              description={`42_01_a\n42_02_e\n42_03_i\n42_04_o\n42_05_u\n42_06_さんかく口\n42_07_しかく口\n42_08_まる口\n42_09_わーい口\n42_10_あわわ口\n42_11_たて口\n42_12_しょげ口\n42_13_ふにゃふにゃ口1\n42_14_ふにゃふにゃ口2\n42_15_トゲ口1\n42_16_トゲ口2\n42_17_トゲ口3\n42_18_ハム口1\n42_19_ハム口2\n42_20_ギザ口1\n42_21_ギザ口2\n42_22_ギザ口3`}
            />
            <DropDownBoxB
              title={"v_リップシンク"}
              description={`v_sil\nv_PP\nv_FF\nv_TH\nv_DD\nv_kk\nv_CH\nv_SS\nv_nn\nv_RR\nv_aa\nv_E\nv_ih\nv_oh\nv_ou\n\nv_Blink`}
            />
            <DropDownBoxC
              title={"z_MMD"}
              description={`あ/い/う/え/お\nん\nワ\n□\nヘ\n▲\nω\nω□\n\nまばたき\n笑い\nウィンク\nウィンク2\nウィンク右\nｳｨﾝｸ2右\nつり目\nじと目\nびっくり\nたれ目\nにや\n\nはぅ\nなごみ\nｷﾞｭｯ\nおこ\n星目\nはぁと\n丸目\n瞳小\n涙\n汗\n\n真面目\nｷﾘｯ\nにこり\n困る\n怒り\n悲しい\n上\n下`}
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        //top
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
        .section0ContentTextSubImgO {
          padding-top: 16px;
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
          width: 88%; //
          height: 80px; //
          display: flex;
          margin: 0 auto 16px auto;
        }
        @media screen and (max-width: 1024px) {
          .topSct {
            height: fit-content;
            margin-bottom: 20px; 
          }
          //
          .section0contentO {
            flex-direction: column;
          }
          .section0ContentMovieO {
            width: 80%;
            margin: 0 auto;
            padding: 0 0 20px 0;
          }
          .section0ContentTextO {
            width: 100%;
          }
          .section0ContentTextI {
            width: 100%;
            margin-bottom: 10px;
          }
          .vrchatImgO {
            margin-bottom: 12px;
          }
          .section0ContentTextTitleP {
            font-size: 12px;
            line-height: 14px;
            margin-bottom: 12px;
          }
          .section0ContentTextSubImgO {
            padding-top: 10px;
          }
          //
          .endSct {
            margin-bottom: 80px;
            flex-direction: column;
          }
          //
          .dropDownBoxesO {
            width: 100%;
          }
          .dropDownBoxesTitleP {
            font-size: 16px;
            line-height: 29px;
          }
        }
      `}</style>
    </>
  );
}
