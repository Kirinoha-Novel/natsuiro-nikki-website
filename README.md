# 「なついろにっき。」のティザーサイト

このレポジトリは、「なついろにっき。」ティザーサイトとして機能します。

## セットアップ

### 前提条件

以下がインストールされていることを確認してください。

- Node.js 22.23.4 以上（Astro 7 の要件。`nix develop` を使うと揃います）
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
git clone https://github.com/Kirinoha-Novel/natsuiro-nikki-website.git
cd natsuiro-nikki-website
```

2. 以下のコマンドをレポジトリのルートで実行

```sh
npm ci && echo "npx lint-staged" > .husky/pre-commit
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
    url: 'News内容に関連したURLをここに記述してください。（リンク先がない場合は省略できます）',
    date: '日付を YYYY年MM月DD日の形式で記述してください。',
    title: 'Newsのタイトルをここに記述してください。',
  },
```

Newsは、`infoArray`配列の最上部が最新のNewsとして表示されます。

そのため、追加するNewsを配列の最上部に追加してください。

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
