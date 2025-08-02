# 「なついろにっき。」のティザーサイト

このレポジトリは、「なついろにっき。」ティザーサイトとして機能します。

## 環境構築

### 前提条件

以下がインストールされていることを確認してください。

- Node.js
- npm
- git

Visual Studio Codeを使用している場合は、以下の拡張機能をインストールしてください。

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

3. 以下のコマンドを実行して、開発サーバーを起動

```sh
npm run dev
```

## References

- prettier setting

https://docs.astro.build/ja/editor-setup/

- eslint setting

https://ota-meshi.github.io/eslint-plugin-astro/user-guide/

https://r4ai.dev/posts/migrate-eslint-to-v9/

- pre-commit setting

https://r4ai.dev/posts/astro-setup/#lint-staged-husky-%E3%81%AE%E5%B0%8E%E5%85%A5
