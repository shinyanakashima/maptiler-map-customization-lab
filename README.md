# maptiler-map-customization-lab

MapTiler を使った地図カスタマイズ手法を検証するためのサンプルプロジェクトです。

MapTiler の記事「[Top 5 ways to customize your map](https://www.maptiler.com/news/2024/11/top-5-ways-to-customize-your-map/)」で紹介されている手法をベースに、MapLibre GL JS 上で実際に動かしながら確認します。

## 検証する内容

- カスタムアイコン・マーカーの表示
- ブランドカラーに合わせた地図スタイル変更
- POIやラベル・レイヤーの表示制御
- 言語・境界・単位系のカスタマイズ
- ポリゴンのパターン塗り
- MapLibre GL JS でのスタイル適用

## 技術構成

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/)
- [MapTiler Cloud](https://www.maptiler.com/cloud/)（ベースマップ・スタイル）
- [Vite](https://vitejs.dev/)（開発サーバー・ビルド）

## セットアップ

### 1. 依存パッケージのインストール

```bash
npm install
```

### 2. MapTiler API キーの設定

[MapTiler Cloud](https://cloud.maptiler.com/account/keys/) で API キーを取得し、`.env` を作成します。

```bash
cp .env.example .env
```

`.env` を開き、取得したキーを設定します。

```
VITE_MAPTILER_KEY=取得したAPIキー
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで表示された URL（デフォルト http://localhost:5173 ）を開くと地図が表示されます。

## ビルド

```bash
npm run build
npm run preview
```

## ディレクトリ構成

```
.
├── index.html              # エントリーポイント
├── src/
│   ├── main.tsx            # React のエントリーポイント
│   ├── App.tsx             # ルートコンポーネント
│   ├── components/
│   │   └── MapView.tsx     # 地図の初期化と各カスタマイズの実装
│   ├── index.css           # レイアウト用スタイル
│   └── vite-env.d.ts       # 環境変数の型定義
├── .env.example            # 環境変数のサンプル
├── tsconfig.json           # TypeScript 設定
├── vite.config.ts          # Vite 設定
└── package.json
```

## 参考

- [Top 5 ways to customize your map (MapTiler)](https://www.maptiler.com/news/2024/11/top-5-ways-to-customize-your-map/)
- [MapLibre GL JS Documentation](https://maplibre.org/maplibre-gl-js/docs/)
