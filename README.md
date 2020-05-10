# リアルタイムチャット

> '『[はじめてのNode.jsプログラミング Kindle版](https://www.amazon.co.jp/%E3%81%AF%E3%81%98%E3%82%81%E3%81%A6%E3%81%AENode-js%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-%E6%9D%BE%E5%B0%BE-%E5%8B%87%E4%B9%9F-ebook/dp/B00B2SKE8M/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=socket.io&qid=1589086272&s=digital-text&sr=1-1)』(松尾 勇也 著)' 【[GitHub](https://github.com/niusounds/easy-chat)】を参考にしてリアルタイムチャットアプリを作った。

![file.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/230954/cc661f3c-9ff1-144f-5d38-2bdfa602469f.gif)


- [`set` と `get` を使っている部分でエラー](https://github.com/niusounds/easy-chat/blob/963446a85ff702984c8e706ef5ab58a1aa9ed948/server.js#L13-L35)
- [ここにあるよう](https://stackoverflow.com/questions/10360110/socket-io-socket-set-and-socket-get-what-is-the-callback-argument-for#answer-24393900)に`set`と`get`は廃止になっているので修正した。

## 環境

- Node v12.16.3
- Express v4.17.1
- Socket.IO v2.3.0

## 記事
- 『[メモ: Socket.IO の set と get メソッドは廃止されている - Qiita](https://qiita.com/toshikisugiyama/items/2512751b25b835dd782e)』にも書いたので御覧ください。

