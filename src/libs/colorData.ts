export type DropDownContainerContentsType = {
  description: string;
  img: string;
};

export type DropDownContainerType = {
  title: string;
  contents: DropDownContainerContentsType[];
};

export const colorData0: DropDownContainerType = {
  title: "Step0. 準備",
  contents: [
    {
      description: `blenderソフトをダウンロード\nhttps://www.blender.org/download/\n↓\nBOOTHから “Fuki_v01.zip” をダウンロード\nhttps://chloronphyll.booth.pm/\n↓\nblenderデータの “Color_Studio” を開く`,
      img: "/KaihenNote/Color/00/colorStep0_1920_1080.jpg",
    },
  ],
};

export const colorData1: DropDownContainerType = {
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

export const colorData2: DropDownContainerType = {
  title: "Step2. Texture割り当て",
  contents: [
    {
      description: `保存したTextureと同梱されているTextureを\nそれぞれのシェーダーに割り当てます。\nシェーダーは全部で4つ、割り当てるTextureは6枚です。`,
      img: "/KaihenNote/Color/02/colorStep2_1920_1080.jpg",
    },
    {
      description: `保存したTextureをシェーダー「Fuki」に割り当てます。\nシェーダータブ(最初の画面) のまま、\nExplorerまたはFinderから保存したTextureをドラッグ&ドロップ。\n↓\nカラーとベースカラーを繋いでアバターに色がついたら成功です。\n|\n(((時短で済ませる場合はここからStep3に飛んでください。)))`,
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
      description: `0p , 16pのシェーダーにもそれぞれのTextureを割り当てます。\nオブジェクトz0を選択した状態(最初の状態)で、\n画面右にあるシェーダーの項目から0pを選びます。\n↓\nImageboardのフォルダ内の「0pA」\nをドラッグ&ドロップしてプリンシプルBSDFに繋げます。\n↓\n16pのシェーダーも同様に「16pA」のTextureを割り当てます。\n|\n(((いろ改変に直接影響が出るわけではないので、割り当てなくても問題ありません。好きな画像を差し込んでもokです。)))`,
      img: "/KaihenNote/Color/02/colorStep2e1920_1080.jpg",
    },
    {
      description: `PlantのシェーダーにもTextureを割り当てます。\nPlantのシェーダーはオブジェクトz6にあります。\n3Dビューポートの白く残っているオブジェクトを選択するとPlantシェーダーに切り替わります。`,
      img: "/KaihenNote/Color/02/colorStep2f1920_1080.jpg",
    },
  ],
};

export const colorData3: DropDownContainerType = {
  title: "Step2. Texture割り当て",
  contents: [
    {
      description: `a. 変えたい色を選ぶ\n↓\nb. 色を変える\n↓\nc. レンダリング\n↓\nd. Auto Reload\n→↑`,
      img: "/KaihenNote/Color/03/colorStep3_1920_1080.jpg",
    },
    {
      description: `a. 変えたい色を選ぶ\nLayoutタブに切り替えて色調整を開始します。\n↓\n”Textureのビューポート” か ”項目のネーム” からオブジェクトを選択します。\n↓\n色を変える前にblenderデータを別名保存でバックアップしておくと、2作目以降が楽です。\n(画面左上) ファイル > 名前をつけて保存\n(ファイルビュー画面) 別名に変更 > 名前をつけて保存`,
      img: "/KaihenNote/Color/03/colorStep3a1920_1080.jpg",
    },
    {
      description: `b. 色を変える\nマテリアルプロパティでベースカラーを調整します。\nデフォルトカラーを元にして「色相→彩度→明度」\nの順で調整すると違和感のない色にしやすいです。`,
      img: "/KaihenNote/Color/03/colorStep3b1920_1080.jpg",
    },
    {
      description: `c. レンダリング\n(画面左上) レンダー > 画像をレンダリング\n↓\nレンダー画面が出てきます。\n(画面左上) 画像 > 保存\n↓\nファイルビュー画面が出てきます。\n“最初に保存したTexture”を選択して、上書きする形で画像を保存してください。`,
      img: "/KaihenNote/Color/03/colorStep3c1920_1080.jpg",
    },
    {
      description: `d. Auto Reload\n(画面右上) Auto Reload > Reload Images\n|\nAuto Reloadとは、Textureを再読み込みするblenderのアドオンです。\nレンダリングする度にblenderソフトを立ち上げ直せばアドオンは必要ありませんが、\n何度も色を調整するとなると手間となるので、インストールをおすすめします。(下記参照)\n|\nNode Wranglerがあれば、ShadingタブでAlt+RすることでTextureを再読み込みすることができます。`,
      img: "/KaihenNote/Color/03/colorStep3d1920_1080.jpg",
    },
    {
      description: `「Auto Reload」のインストール方法\n一旦blenderを保存して終了してください。\n↓\ngithubのダウンロードページにアクセスして、\n「Sourse code (zip)」をダウンロードします。\nzipを解凍せずに、そのままblenderに取り込みます。\n↓\nblenderを立ち上げて、\n(画面左上) 編集 > プリファレンス\n(プリファレンス画面) アドオン > インストール\n(ファイルビュー画面) Auto_Reload_Blender_addon-2_0_3.zip\nを選択 > アドオンをインストール`,
      img: "/KaihenNote/Color/03/colorStep3e1920_1080.jpg",
    },
    {
      description: `補足1\nアニメーションを再生するとターンテーブルします。\n|\n補足2\nアバターの各部位を選択するとシェイプで見た目を変えられます。\n|\n補足3\nUVを照らし合わせることができます。(画像参照)`,
      img: "/KaihenNote/Color/03/colorStep3f1920_1080.jpg",
    },
  ],
};

export const colorData4: DropDownContainerType = {
  title: "Step4. Unityに移動",
  contents: [
    {
      description: `作ったテクスチャをUnityでImportします。\n|\n※アップロードできる状態から説明しています。\n未Upの場合は、アップロード手順のページを参照してください。`,
      img: "/KaihenNote/Color/04/colorStep4_1920_1080.jpg",
    },
    {
      description: `VCCから改変するProjectを立ち上げてください。`,
      img: "/KaihenNote/Color/04/colorStep4a1920_1080.jpg",
    },
    {
      description: `(Projectタブ) Assets > Chloronphyll > Fuki > 2_Material\nMaterialフォルダに改変Textureをドラッグ&ドロップ。\n|\n(Textureサイズ)\nTextureの設定はデフォルトのままでokです。\nAO焼き込み後もそのままでokです。\n(1024px , NoneAlfaにしても容量は変わりません。)`,
      img: "/KaihenNote/Color/04/colorStep4b1920_1080.jpg",
    },
  ],
};

export const colorData5: DropDownContainerType = {
  title: "Step5. AO焼き込み",
  contents: [
    {
      description: `lilToonの焼き込み機能で、作ったテクスチャにAOを焼き込みます。\n(AO焼き込みしないとイメージボードで表示できる枚数が51枚から17枚に減ります。)`,
      img: "/KaihenNote/Color/05/colorStep5_1920_1080.jpg",
    },
    {
      description: `Materialの「AO」を選択。\n↓\n詳細設定タブを開く。\n↓\nメインカラーの画像を改変Textureに差し替え。\n↓\n焼き込み。\n↓\n(ファイルビュー画面) 任意の名前で保存。`,
      img: "/KaihenNote/Color/05/colorStep5a1920_1080.jpg",
    },
    {
      description: `(AO焼き込み 2回目以降)\nMaterial「AO」の詳細設定タブを開く。\n↓\nメインカラーに2作目の改変Textureを割り当て。\n↓\nメインカラー2ndをチェック。\n↓\nメインカラー2ndにAO画像を割り当てます。\nTextureフォルダ内にある「Fuki_AO_01」をドラッグ&ドロップ。\n↓\n焼き込み。`,
      img: "/KaihenNote/Color/05/colorStep5b1920_1080.jpg",
    },
  ],
};

export const colorData6: DropDownContainerType = {
  title: "Step6. マテリアルに割り当て",
  contents: [
    {
      description: `マテリアル「Fuki」に\n“AOを焼き込んだ改変テクスチャ”を割り当てます。\nlilToon項目の4箇所 (メインカラー , 影 , リムライト , 輪郭線) に同じTextureを割り当ててください。`,
      img: "/KaihenNote/Color/06/colorStep6_1920_1080.jpg",
    },
    {
      description: `Materialの「FukiQ」を選択してToon Litにも割り当てます。`,
      img: "/KaihenNote/Color/06/colorStep6a1920_1080.jpg",
    },
    {
      description: `アップロード\n(画面左上) VRChat SDK > Show Control Panel\n(Builderタブ) アバターを選択\n↓\n「Fuki」「Fuki_Light」の場合はWindows表示\n「Fuki_Quest」の場合はAndroid表示\n↓\n(Builderタブ) 警告マーク > 規約チェック > Build&Publish\nUpload Succeeded! と表示されたらアップロード完了です。\n↓\nQuest版をUpした後はWindows表示に戻しておくと、戸惑うことがありません。`,
      img: "/KaihenNote/Color/06/colorStep6b1920_1080.jpg",
    },
  ],
};

export const colorData7: DropDownContainerType = {
  title: "サムネイル改変",
  contents: [
    {
      description: `VRChatのアバターサムネイルを作成できます。\nFukiのアバターを着用している時だけみんなに表示されるアイコンです。`,
      img: "/KaihenNote/Color/07/colorStep7_1920_1080.jpg",
    },
    {
      description: `Step0. 準備\nblenderデータの "Thumbnail_Studio" を開く。`,
      img: "/KaihenNote/Color/07/colorStep7a1920_1080.jpg",
    },
    {
      description: `Step1. Texture割り当て\n開いたら真っ白のアバターが現れます。\n作ったTextureを割り当てます。`,
      img: "/KaihenNote/Color/07/colorStep7b1920_1080.jpg",
    },
    {
      description: `Step2. カスタマイズ\nシェイプやボーンを調整して自分好みに仕上げます。`,
      img: "/KaihenNote/Color/07/colorStep7c1920_1080.jpg",
    },
    {
      description: `Step3. レンダリング\ncycleなのでレンダリングに時間がかかります。(20秒前後)\n線画がついたら完成です。\n↓\n名前をつけて保存`,
      img: "/KaihenNote/Color/07/colorStep7d1920_1080.jpg",
    },
    {
      description: `Step4. Unityで再アップロード\nSDKを開いてサムネイルを割り当てます。\nアップロードしてVRChatで確認しましょう。`,
      img: "/KaihenNote/Color/07/colorStep7e1920_1080.jpg",
    },
    {
      description: `お疲れさまでした\nVRChatライフを満喫しましょう!`,
      img: "/KaihenNote/Color/07/colorStep7f1920_1080.jpg",
    },
  ],
};