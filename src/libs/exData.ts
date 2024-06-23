import { DropDownContainerType } from "./colorData";

export const previewExData: DropDownContainerType = {
  title: "",
  contents: [
    {
      description: "",
      img: "/KaihenNote/Ex/CheatSheet/ex_01_1920_1080.jpg",
    },
    {
      description: "",
      img: "/KaihenNote/Ex/CheatSheet/ex_02_1920_1080.jpg",
    },
    {
      description: "",
      img: "/KaihenNote/Ex/00/ex_17_1920_1080.jpg",
    },
    {
      description: "",
      img: "/KaihenNote/Ex/01/ex_40_1920_1080.jpg",
    },
  ],
};

export const exData0: DropDownContainerType = {
  title: "17byte確保する方法 (前髪を除外)",
  contents: [
    {
      description: `前髪のParameterを除外して17byte確保します。\nExParametersとExMenuから前髪のParameterを除外して、\n目的のオリジナルメニューを新規追加します。\n\nStep1. 使わないExMenuを除外\nStep2. 使わないExParametersを削除\nStep3. ExParametersを追加\nStep4. ExMenuを追加`,
      img: "/KaihenNote/Ex/00/ex_17_1920_1080.jpg",
    },
    {
      description: `Step1. 使わないExMenuを除外\n\nExMenu h2で指定されているParameterを全てNoneにします。\nControlをDeleteしても問題ありません。\nExMenu自体をDeleteする場合は0_HairのSub Menuも切ってください。`,
      img: "/KaihenNote/Ex/00/ex_17a_1920_1080.jpg",
    },
    {
      description: `Step2. 使わないExParametersを削除\n\nExParametersのh2abc , h2de , h2fを削除します。\nこれでExParametersの容量を確保できたので\nParameterを新しく追加し、ExMenuを作成できます。`,
      img: "/KaihenNote/Ex/00/ex_17b_1920_1080.jpg",
    },
    {
      description: `Step3. ExParametersを追加\n\nExParametersのAddを押すと1番下にパラメータが追加されます。\n１つ上のパラメータと同じ名前で追加されるので、名前を変更しましょう。\nパラメータの名前は日本語ではなく英数字を使用します。`,
      img: "/KaihenNote/Ex/00/ex_17c_1920_1080.jpg",
    },
    {
      description: `Step4. ExMenuを追加\n\nExMenuのメインにオリジナルメニューを追加して、作ったパラメータをセットします。\nそれぞれの目的に応じて活用してみてください。`,
      img: "/KaihenNote/Ex/00/ex_17d_1920_1080.jpg",
    },
    {
      description: `デフォルトの数値を変更する\n\nExから除外した前髪はゲーム内で変形できなくなりますが、UnityでControllersのパラメータ数値を指定することで好きな前髪を維持することができます。`,
      img: "/KaihenNote/Ex/00/ex_17e_1920_1080.jpg",
    },
    {
      description: `作成したExMenuを活用する\n\nExMenuでオリジナルのモノを動かすには、\ncontrollerで同じ名前のパラメータを登録して\n動かしたいAnimationをセットする必要があります。\n画像はExMenuが動く仕組みを表した全体図です。`,
      img: "/KaihenNote/Ex/00/ex_17f_1920_1080.jpg",
    },
  ],
};

export const exData1: DropDownContainerType = {
  title: "40byte確保する方法 (スカーフを除外)",
  contents: [
    {
      description: `スカーフのParameterを除外して40byte確保します。\nExParametersとExMenuからスカーフを除外して、\n同期ズレを回避するためにParameterDriverからもスカーフを除外します。\n同期ズレの知識がなくても全く問題ありません。`,
      img: "/KaihenNote/Ex/01/ex_40_1920_1080.jpg",
    },
    {
      description: `Step1. 使わないExMenuを除外\n\nExMenu fsで指定されているParameterをNoneにします。(5箇所)\nfs1のパラメータはfs2~6よりも複雑なので残しておきます。`,
      img: "/KaihenNote/Ex/01/ex_40a_1920_1080.jpg",
    },
    {
      description: `Step2. 使わないExParametersを削除\n\nExParametersのfs2 , fs3 , fs4 , fs5 , fs6を削除します。\nこのままでは同期ズレを起こしてしまうので、\nParameterDriverでも5つのパラメータを削除します。`,
      img: "/KaihenNote/Ex/01/ex_40b_1920_1080.jpg",
    },
    {
      description: `Step3. 同期ズレ対策 1\n\nFxレイヤーのfrのParameterDriverからfsを削除します。\nExParametersに登録されていないparameterは同期ズレを回避できないので、\nParameterDriverで書きかわらないように消してしまいます。`,
      img: "/KaihenNote/Ex/01/ex_40c_1920_1080.jpg",
    },
    {
      description: `Step4. 同期ズレ対策 2\n\n2つめのステートにもParameterDriverがあるので\nStep3と同じ流れでfsのパラメータを削除します。`,
      img: "/KaihenNote/Ex/01/ex_40d_1920_1080.jpg",
    },
    {
      description: `デフォルトの数値を変更する\n\nExから除外したスカーフはゲーム内で変形できなくなりますが、UnityでControllersのパラメータ数値を指定することで好きなスカーフの形状を維持することができます。`,
      img: "/KaihenNote/Ex/01/ex_40e_1920_1080.jpg",
    },
    {
      description: `略称\n\nh→ヘア\nf→ふく (fs→スカーフ)(sk→スカートくつ)\nz→アイテム\ne→エモート\n\nExMenuの名称はパラメータの名称と統一しています。\n長い英文で特定すると、量が多い分わかりずらかったので、\n一目見て探せるスタイルを目指しました。`,
      img: "/KaihenNote/Ex/01/ex_40f_1920_1080.jpg",
    },
  ],
};

export const exData2: DropDownContainerType = {
  title: "ビリヤードモード",
  contents: [
    {
      description: `左利きの場合はExMenuのValueの値を、1から2に変更してください。 (改変は1箇所)\n\nビリヤードしない人にとっては必要ないメニューですが、\n飛び目やフレミングなどスポーツをする時に邪魔になる機能が一斉にOFFになるので何かと便利です。`,
      img: "/KaihenNote/Ex/02/ex_billiard_1920_1080.jpg",
    },
  ],
};

export const exData3: DropDownContainerType = {
  title: "ONOFF機能",
  contents: [
    {
      description: `ExMenuでアイテムや表情の発動を制御する機能です。\nワールド移動しても設定は引き継げます。\nアバターを再動作しても戻らないようにするには、ExMenuの初期状態をUnityで設定する必要があります。`,
      img: "/KaihenNote/Ex/03/ex_onoff_1920_1080.jpg",
    },
  ],
};
