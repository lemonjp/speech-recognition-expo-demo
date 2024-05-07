# speech-recognition-expo-example
Speech Recognition Expo Example

## Expo Speech Recognition Example

This is a simple example of how to use the Speech Recognition API in Expo.

## Requirements

- Node.js

```bash
❯ node --version
v18.14.2
```
- Expo CLI

```bash
❯ expo --version
6.3.10
```


## How to run

1. Clone the repository

```bash
git clone
```

2. Prebuild the project

```bash
npx expo prebuild -p ios
```

3. Run the project

```bash
npx expo run:ios
```

## Error handling

```
 name:Any iOS Device, error:iOS 17.4 is not installed.
```

If you get this error, you need to install the iOS 17.4 simulator.
make sure you have extra disk space 7.5GB on your machine.

open xcode -> Settings -> Platforms -> iOS 17.4 -> Install

## Working

- log

```log
› Logs for your project will appear below. Press Ctrl+C to exit.
iOS Bundling complete 2018ms
[CoreFoundation] AddInstanceForFactory: No factory registered for id <CFUUID 0x6000002b5980> F8BB1C28-BAE8-11D6-9C31-00039315CD46
[AudioToolbox]            AQMEIO_HAL.cpp:2773  iOSSimulatorAudioDevice-64526-1: Abandoning I/O cycle because reconfig pending (1).
 LOG  {"value": 2.13045072555542}
 LOG  {"value": 1.443158507347107}
 LOG  {"value": 1.1324111223220825}
 LOG  {"value": 0.9325081706047058}
 LOG  {"value": 0.9415683746337891}
 LOG  {"value": 1.1001770496368408}
 LOG  {"value": 1.1234228610992432}
 LOG  {"value": 1.0015058517456055}
 LOG  {"value": 0.9531130790710449}
 LOG  {"value": 1.9118549823760986}
 LOG  {"value": 2.6803781986236572}
 LOG  {"value": 2.5648560523986816}
 LOG  {"value": 2.8309905529022217}
 LOG  {"value": 2.33882474899292}
 LOG  {"value": 1.7575640678405762}
 LOG  {"value": 1.6257847547531128}
 LOG  {"value": 1.5421535968780518}
 LOG  {"value": 1.2570523023605347}
 LOG  {"value": 0.9385954737663269}
 LOG  {"value": 0.8568538427352905}
 LOG  {"value": 0.7404940128326416}
 LOG  {"value": 0.6743080615997314}
 LOG  {"value": 0.7784121632575989}
 LOG  {"value": 0.6758400797843933}
 LOG  {"value": 0.5671322345733643}
 LOG  {"value": 0.5699955224990845}
 LOG  {"value": 0.5532531142234802}
 LOG  {"value": 0.6152896881103516}
 LOG  {"value": 0.6052521467208862}
 LOG  {"value": 0.6439273357391357}
 LOG  {"value": 0.715911865234375}
 LOG  {"value": 1.0285590887069702}
 ERROR  {"message": "Speech recognition already started!"}
 LOG  {"value": 0.9697138667106628}
 LOG  {"value": 0.8638917803764343}
[AudioSession]     AVAudioSession_iOS.mm:2241  Error: category option 'defaultToSpeaker' is only applicable with category 'playAndRecord'

```

「テストです」という音声を認識した結果が以下のように表示される。

```ts
{
  "recognized": "✅",
  "pitch": "0.9697138667106628",
  "error": "Speech recognition already started!",
  "end": "✅",
  "started": "",
  "results": [
    "テストです"
  ],
  "partialResults": [
    "テストです"
  ]
  "isRecording": false
}
```

pitch は音声のボリュームを数値で表し、0 から 3 くらいの範囲で表される。
1以上は大きい音声、1未満は小さい音声と捉えることができる。
