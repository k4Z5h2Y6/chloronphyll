export type DropDownContainerContentsType = {
  description: string;
  img: string;
};

export type DropDownContainerType = {
  title: string;
  contents: DropDownContainerContentsType[];
};

export type DropDownContainerSingleType = {
  title: string;
  description: string;
  img: string;
};

export const colorData0: DropDownContainerSingleType = {
  title: "Step0. 準備",
  description: `blenderソフトをダウンロード\nhttps://www.blender.org/download/\n↓\nBOOTHから “Fuki_v01.zip” をダウンロード\nhttps://chloronphyll.booth.pm/\n↓\nblenderデータの “Color_Studio” を開く`,
  img: "/KaihenNote/Color/Data/colorStep0_1920_1080.jpg",
};

export const colorData1: DropDownContainerType = {
  title: "Step1. レンダリング",
  contents: [
    {
      description: `起動したら真っ白のアバターが現れます。\n何も触らずにまずはレンダリング。\n↓\n名前をつけて保存\n(このTextureがこれから改変する素材となります。)`,
      img: "/KaihenNote/Color/Data/colorStep1_1920_1080.jpg",
    },
    {
      description: `(画面左上) レンダー > 画像をレンダリング\n↓\nレンダー画面が出てきます。\n(画面左上) 画像 > 名前をつけて保存`,
      img: "/KaihenNote/Color/Data/colorStep1b1920_1080.jpg",
    },
    {
      description: `ファイルビュー画面が出てきます。\n任意の名前で画像を保存してください。\n↓\nレンダー画面を閉じて次のステップに進みます。`,
      img: "/KaihenNote/Color/Data/colorStep1c1920_1080.jpg",
    },
  ],
};
