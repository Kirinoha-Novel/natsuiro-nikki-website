# 「なついろにっき。」のティザーサイト

このレポジトリは、「なついろにっき。」ティザーサイトとして機能します。

## セットアップ

### 前提条件

以下がインストールされていることを確認してください。

- Node.js
- npm
- git

Visual Studio Codeを使用している場合は、以下の拡張機能をインストールしてください。

- ecmel.vscode-html-css
- astro-build.astro-vscode
- esbenp.prettier-vscode
- dbaeumer.vscode-eslint

### 手順

以下の手順に従って、開発環境を構築してください。

1. レポジトリをcloneして、レポジトリのディレクトリに移動

```sh
git clone https://github.com/tsukuba-GSK-bishoge/natsuiro-website.git
cd natsuiro-website
```

2. 以下のコマンドをレポジトリのルートで実行

```sh
npm i && npm exec husky-init -y &&  npm exec husky set .husky/pre-commit "npm exec lint-staged"
```

## 開発サーバーの起動

```sh
npm run dev
```


## ビルドとビルドのプレビュー

```sh
# build command
npm run build
# preview command
npm run preview
```

## `News`の更新

`src/news.ts`を編集してください。

一つのNewsは以下のような形で記述します。

```ts
  {
    url: "News内容に関連したURLをここに記述してください。",
    date: "日付を YYYY年MM月DD日の形式で記述してください。",
    title: "Newsのタイトルをここに記述してください。",
  },
```


Newsは、`infoArray`配列の最上部が最新のNewsとして表示されます。

そのため、追加するNewsを配列の最上部に追加してください。

以下は、`src/news.ts`の内容の例です。

```ts
type Info = {
  url: string;
  date: string;
  title: string;
};

//* News Information *//
/*
export const infoArray: Info[] = [
  # small index (New Information)
  {
    url: 'https://x.com/kirinohanovel/status/1962108105124360515',
    date: '2025年8月31日',
    title: 'ティザーサイト公開',
  },
  ...
  # large index (Old Information)
  {
    url: 'https://x.com/kirinohanovel/status/1959571641484128619',
    date: '2025年8月24日',
    title: 'なついろにっき。のキービジュアル公開',
  },
]
*/

export const infoArray: Info[] = [
  {
    url: 'https://x.com/kirinohanovel/status/1962108105124360515',
    date: '2025年8月31日',
    title: 'ティザーサイト公開',
  },
  {
    url: 'https://x.com/kirinohanovel/status/1962108103618633751',
    date: '2025年8月31日',
    title: '公式YouTubeチャンネル開設',
  },
  {
    url: 'https://x.com/kirinohanovel/status/1959571641484128619',
    date: '2025年8月24日',
    title: 'なついろにっき。のキービジュアル公開',
  },
];
```

## References

- prettier setting

https://docs.astro.build/ja/editor-setup/

- eslint setting

https://ota-meshi.github.io/eslint-plugin-astro/user-guide/

https://r4ai.dev/posts/migrate-eslint-to-v9/

- pre-commit setting

https://r4ai.dev/posts/astro-setup/#lint-staged-husky-%E3%81%AE%E5%B0%8E%E5%85%A5

- dash expression

https://www.rebirth-j.com/blog/web/post-3140

- sitemap integration

https://qiita.com/takeshi_du/items/3e073974fdd393c70528
