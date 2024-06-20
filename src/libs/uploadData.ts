import { DropDownContainerType } from "./colorData";

export const uploadData0: DropDownContainerType = {
  title: "Step0. 準備",
  contents: [
    {
      description: `(準備するもの)\n・Unity Hub\n・Unity\n・VCC\n・lilToon\n・Fuki_v01.unitypackage\n\nUnity2022.3.22f1を使用して解説しています。`,
      img: "/KaihenNote/Upload/00/upload_0_1920_1080.jpg",
    },
    {
      description: `Unity Hubをダウンロード\nhttps://unity.com/ja/download\n“Windows用ダウンロード”の青いボタンを押すとUnity Hubのダウンロードが始まります。\n↓\nUnityをインストール\nUnity Hubを立ち上げて、Installs > Install Editor\n(Install Unity Editor画面) Archive > download archive\n(download archive画面) Unity2022.3.22f1をダウンロード\n\n今までUnity2019や6f1をを使用していた場合は、この後VCCをアップデートすれば22f1を使用できるようになります。`,
      img: "/KaihenNote/Upload/00/upload_0_1920_1080b.jpg",
    },
    {
      description: `VCCをインストール\nhttps://vrchat.com/home/download\n(画像中央) Creator Companion\n↓\nlilToonをダウンロード\nhttps://booth.pm/ja/items/3087170\n↓\nBOOTHからFuki_v01.unitypacageをダウンロード\nhttps://chloronphyll.booth.pm/items/5244140`,
      img: "/KaihenNote/Upload/00/upload_0a_1920_1080.jpg",
    },
  ],
};

export const uploadData1: DropDownContainerType = {
  title: "Step1. プロジェクト作成",
  contents: [
    {
      description: `VCCを起動します。`,
      img: "/KaihenNote/Upload/01/upload_1_1920_1080.jpg",
    },
    {
      description: `(画面右上) Create New Project\n・Avatar2022を選択\n・プロジェクト名を決める (任意の名前)\n・保管するフォルダを決める\n→Create Project`,
      img: "/KaihenNote/Upload/01/upload_1a_1920_1080.jpg",
    },
    {
      description: `(画面右上) Open Project\n(約1分待機)`,
      img: "/KaihenNote/Upload/01/upload_1b_1920_1080.jpg",
    },
  ],
};

export const uploadData2: DropDownContainerType = {
  title: "Step2. インポート",
  contents: [
    {
      description: `(画面左上) Assets > Import Package > Custom Package...\nlilToonを選択してImport\n↓\n(画面左上) Assets > Import Package > Custom Package...\nFuki_v01.unitypackageを選択してImport`,
      img: "/KaihenNote/Upload/02/upload_2_1920_1080.jpg",
    },
  ],
};

export const uploadData3: DropDownContainerType = {
  title: "Step3. Prefabを選ぶ",
  contents: [
    {
      description: `(Projectタブ) Assets > Chloronphyll > Fuki > 0_Prefab\nPrefabを1つ選んでHierarchyにドラッグ&ドロップ。\n容量を気にしない場合は「Fuki」を選んでください。\n(Prefabの詳細はパフォーマンスランクのページに記載しています。)\n↓\nここで一旦セーブしておくと良いです。\n(画面左上) File > Save\n(ファイルビュー画面) 任意の名前をつけて保存`,
      img: "/KaihenNote/Upload/03/upload_3_1920_1080.jpg",
    },
  ],
};

export const uploadData4: DropDownContainerType = {
  title: "Step4. アップロード",
  contents: [
    {
      description: `SDK画面を開きます。\n(画面左上) VRChat SDK > Show Control Panel > ログイン!\n↓\n(Builderタブ) アバターの名前を決める > サムネイル画像を選ぶ > 規約チェック > Build&Publish\n↓\nUpload Succeeded! と表示されたらアップロード完了です。\nSDK画面、Unity、VCCを閉じて、VRChatで動作を確認しましょう。`,
      img: "/KaihenNote/Upload/04/upload_4_1920_1080.jpg",
    },
  ],
};

export const uploadData5: DropDownContainerType = {
  title: "Quest対応",
  contents: [
    {
      description: `フォールバックモデルに設定できるので、\nアバター表示に制限がかかっているユーザーに対して、代わりに軽量版モデルを表示することができます。\nFuki_Questを既存のIDに追加でアップロードする手順を解説します。`,
      img: "/KaihenNote/Upload/05/upload_5_1920_1080.jpg",
    },
    {
      description: `PrefabのFuki_QuestをHierarchyにドラッグ&ドロップ。`,
      img: "/KaihenNote/Upload/05/upload_5a_1920_1080.jpg",
    },
    {
      description: `アバターIDコピペ\n\nSDK画面を開きます。\n(画面左上) VRChat SDK > Show Control Panel\n↓\nContent ManagerタブでアバターのIDをコピーします。\nFuki以外のアバターでもフォールバックできます。コピーしたアバターに影響が出ることはありません。\n↓\nSDK画面を閉じて、「Fuki_Quest」にIDをペーストします。\nHierarchyの「Fuki_Quest」を選択して、Inspectorの一番下にあるPipeline Manager (Script)の文字欄にペーストします。\nAttachをクリックしてコピペ完了です。`,
      img: "/KaihenNote/Upload/05/upload_5b_1920_1080.jpg",
    },
    {
      description: `Android切り替え\n\n(SDK画面) Builderタブに移動\n(Selected Platform) WindowsをAndroidに変更`,
      img: "/KaihenNote/Upload/05/upload_5c_1920_1080.jpg",
    },
    {
      description: `アップロード\n先述のStep4を参考に、PC版と同じ流れでアップロードしてください。`,
      img: "/KaihenNote/Upload/05/upload_5d_1920_1080.jpg",
    },
    {
      description: `Fallbackに設定\n\nFallbackはSDK画面で設定できます。\nSet this avatar as fallbackのボタンをクリックするだけで設定完了です。\nボタンが表示されない場合は、Unityを再起動するかPCを再起動してみてください。\n\nついでにプラットフォームをAndroidからWindowsに戻しておきましょう。`,
      img: "/KaihenNote/Upload/05/upload_5e_1920_1080.jpg",
    },
    {
      description: `SDKを使わずにAndroidに切り替える方法\n(SDK画面で切り替えができない場合の対処法です)\n\n(画面左上) File > Build Settings..\n↓\nAndroidを選択\n↓\nSwitch Platform\n(約20秒待機)\n↓\nSwitch PlatformのボタンがBuildに変わったら、\nAndroid切り替え成功です。`,
      img: "/KaihenNote/Upload/05/upload_5f_1920_1080.jpg",
    },
  ],
};