## はじめに

ローカルでサーバーを起動する
基本的にはyarnを使っていきます  
```bash
yarn dev
# or
npm run dev
```

次のURLで開くことができます  
Port番号は3000だと競合することが多いのであえて3030にしています  
 [http://localhost:3000](http://localhost:3030) 


`pages/api` ディレクトリは 、React ページではなく`/api/*` にマップされます  
サーバーと接続出来ないうちは、ここをmock apiの様に使っていきます  
