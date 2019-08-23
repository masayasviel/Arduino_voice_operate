# 準備

- Arduino Uno
- Arduino IDE
- Node.js
- Express Generator
- Google Chrome
- 抵抗
- フルカラーLED
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

以下の図通りに回路を組む。

[回路図](http://johnny-five.io/img/breadboard/led-rgb.png)

RGBそれぞれに過電流にならない程度の抵抗を挟んだ。

`npm index.js`してlocalhost:3000にアクセス

＊LEDが光った状態で終了すると光ったまま

# 参考

- [Arduinoをブラウザから動かした話](https://qiita.com/masayasviel/items/e6bf949b81d42da27d9a)
- [Web Speech API](https://developer.mozilla.org/ja/docs/Web/API/Web_Speech_API)
- [johnny-five LED-RGB](http://johnny-five.io/examples/led-rgb/)