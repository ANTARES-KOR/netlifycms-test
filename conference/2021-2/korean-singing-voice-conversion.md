---
title: Korean Singing Voice Conversion
sidebar_label: "\U0001F399 Korean Singing Voice Conversion"

---
# AI 모델을 이용한 Korean-Singing Voice Conversion (Style-Transfer)

:::note 개요

내가 좋아하는 가수의 목소리로 다른 가수들의 노래를 듣고 싶다!

:::

```mdx-code-block
import ReactPlayer from "react-player";

<ReactPlayer
  url="https://youtu.be/ndST-4jvx7M"
  width="100%"
  style={{
    aspectRatio: "4/3",
    maxWidth: "640px",
  }}
/>
```

## 프로젝트 과정

1. **Dataset - Opensource package**
   * 모델 Training을 위해 필요한 vocal, MR file은 **youtube-dl opensource**를 이용.
   * 그 외 **melodia package**를 통해 **audio-to-midi model** 구축.
   * 각 가수 당 50곡 정도의 dataset을 준비
2. **모델 준비 및 결과 오디오 파일 생성, Demo 비교**
   * 위 과정을 통해 준비한 dataset을 통해 MLP를 이용한 **MLP-Singer Model**, **MIR-SVC Model**, **DDSP module-based Model inference**를 통한 Demo를 비교
3. **모델 채택 (Structure)과 결과 오디오 파일 생성**
   * **DDSP module based autoencoder structure**를 채택하였으며, structure gin file에 각 audio mel-spectogram의 ****fft size를 더욱 세분화하여 **loss configuration을 변형**하거나, parameter를 조정하여 **feature latent space를 확장**하는 등의 여러 변형을 가해 실험

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666961556/conference/2021-2/Korean%20Singing%20Voice%20Conversion/singing_1_jrpc3u.png)

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666961554/conference/2021-2/Korean%20Singing%20Voice%20Conversion/singing_2_albs3z.png)

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666961562/conference/2021-2/Korean%20Singing%20Voice%20Conversion/singing_3_l3sqbf.png)

## 시연

```mdx-code-block
<iframe 
  src="https://yonjaeee.github.io/demo_page/page/%EC%95%84%EC%9D%B4%EC%9C%A0.html"
  frameborder="0"
/>
```