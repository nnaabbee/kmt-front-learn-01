## はじめに

パッケージのインストールを行う

```bash
yarn
# or
npm install
```

yarn.lock と同じものをインストールする

```bash
yarn ci
```

ローカルでサーバーを起動する
基本的には yarn を使っていきます

```bash
yarn dev
# or
npm run dev
```

yarn.lock と同じものをインストールする

```bash
yarn ci
```

次の URL で開くことができます  
Port 番号は 3000 だと競合することが多いのであえて 3030 にしています  
 [http://localhost:3000](http://localhost:3030)

`pages/api` ディレクトリは 、React ページではなく`/api/*` にマップされます  
サーバーと接続出来ないうちは、ここを mock api の様に使っていきます
