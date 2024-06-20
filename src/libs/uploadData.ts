import { DropDownContainerType } from "./colorData";

export const uploadData0: DropDownContainerType = {
  title: "Step1. レンダリング",
  contents: [
    {
      description: `起動したら真っ白のアバターが現れます。\n何も触らずにまずはレンダリング。\n↓\n名前をつけて保存\n(このTextureがこれから改変する素材となります。)`,
      img: "/KaihenNote/Color/01/colorStep1_1920_1080.jpg",
    },
    {
      description: `(画面左上) レンダー > 画像をレンダリング\n↓\nレンダー画面が出てきます。\n(画面左上) 画像 > 名前をつけて保存`,
      img: "/KaihenNote/Color/01/colorStep1ab1920_1080.jpg",
    },
    {
      description: `ファイルビュー画面が出てきます。\n任意の名前で画像を保存してください。\n↓\nレンダー画面を閉じて次のステップに進みます。`,
      img: "/KaihenNote/Color/01/colorStep1c1920_1080.jpg",
    },
  ],
};

export const uploadData1: DropDownContainerType = {
  title: "Step0. 準備",
  contents: [
    {
      description: `blenderソフトをダウンロード\nhttps://www.blender.org/download/\n↓\nBOOTHから “Fuki_v01.zip” をダウンロード\nhttps://chloronphyll.booth.pm/\n↓\nblenderデータの “Color_Studio” を開く`,
      img: "/KaihenNote/Color/00/colorStep0_1920_1080.jpg",
    },
  ],
};

export const uploadData2: DropDownContainerType = {
  title: "Step2. Texture割り当て",
  contents: [
    {
      description: `保存したTextureと同梱されているTextureを\nそれぞれのシェーダーに割り当てます。\nシェーダーは全部で4つ、割り当てるTextureは6枚です。`,
      img: "/KaihenNote/Color/02/colorStep2_1920_1080.jpg",
    },
    {
      description: `保存したTextureをシェーダー「Fuki」に割り当てます。\nシェーダータブ(最初の画面) のまま、\nExplorerまたはFinderから保存したTextureをドラッグ&ドロップ。\n↓\nカラーとベースカラーを繋いでアバターに色がついたら成功です。\n\n(((時短で済ませる場合はここからStep3に飛んでください。)))`,
      img: "/KaihenNote/Color/02/colorStep2a1920_1080.jpg",
    },
    {
      description: `ここからさらにVRChatでの見た目に近づけていきます。\n同梱されているTextureから\n・Fuki_AO_01\n・Fuki_Normal_01\nを選択して、さっきと同じ場所にドラッグ&ドロップ。\n↓\nAOとNormalを「非カラー」にします。`,
      img: "/KaihenNote/Color/02/colorStep2b1920_1080.jpg",
    },
    {
      description: `次にノードを追加します。\nShift+A > カラー > カラーミックス\n↓\n「ミックス」を「乗算」に変更。\n係数を0.45に変更。`,
      img: "/KaihenNote/Color/02/colorStep2c1920_1080.jpg",
    },
    {
      description: `図のようにノードを繋いだら綺麗な見た目になります。\n変な見た目になる場合は「非カラー」や「乗算」の設定、\n「ノードをアルファに繋いでいないか」など\nを見直してみてください。`,
      img: "/KaihenNote/Color/02/colorStep2d1920_1080.jpg",
    },
    {
      description: `0p , 16pのシェーダーにもそれぞれのTextureを割り当てます。\nオブジェクトz0を選択した状態(最初の状態)で、\n画面右にあるシェーダーの項目から0pを選びます。\n↓\nImageboardのフォルダ内の「0pA」\nをドラッグ&ドロップしてプリンシプルBSDFに繋げます。\n↓\n16pのシェーダーも同様に「16pA」のTextureを割り当てます。\n\n(((いろ改変に直接影響が出るわけではないので、割り当てなくても問題ありません。好きな画像を差し込んでもokです。)))`,
      img: "/KaihenNote/Color/02/colorStep2e1920_1080.jpg",
    },
    {
      description: `PlantのシェーダーにもTextureを割り当てます。\nPlantのシェーダーはオブジェクトz6にあります。\n3Dビューポートの白く残っているオブジェクトを選択するとPlantシェーダーに切り替わります。`,
      img: "/KaihenNote/Color/02/colorStep2f1920_1080.jpg",
    },
  ],
};