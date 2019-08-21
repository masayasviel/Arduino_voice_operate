# 準備

- Arduino Uno
- Arduino IDE
- Node.js
- Express Generator
- Google Chrome
- 抵抗
- LED
- ジャンパー線
- ブレッドボード
- Arduinoに繋がるUSBケーブル

Arduino IDEでシリアルポートの設定と、ArduinoにFirmataの書き込みを済ませる。

参照：[JavaScriptエンジニアへのIoTのすすめ：Node.jsとArduinoでスマートデバイスのプロトタイプをしてみよう](https://html5experts.jp/girlie_mac/17684/)

# install

`npm init`の後に以下のコマンドを実行

```
- npm install --save express
- npm install --save ejs
- npm install --save body-parser
- npm install johnny-five
- npm install firmata
```

# 実行

Arduinoの`12`ピンからLEDと過電流にならない程度の抵抗を直列に回路を組む

localhost:3000にアクセス

Ctrl + C ２回でプログラム終了

**LED**が光った状態で終了すると光ったまま

# 参考

- [Arduinoをブラウザから動かした話](https://qiita.com/masayasviel/items/e6bf949b81d42da27d9a)
- [Web Speech API](https://developer.mozilla.org/ja/docs/Web/API/Web_Speech_API)