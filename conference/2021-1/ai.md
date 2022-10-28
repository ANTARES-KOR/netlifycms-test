---
title: 블랙잭 AI
sidebar_label: "♠️ 블랙잭 AI"

---
# ♠️ 블랙잭 AI

:::note 개요

강화학습을 통해 블랙잭 AI를 만들고, 이를 웹으로 구현하여 AI의 플레이를 눈으로 직접 볼 수 있도록 한다.

:::

```mdx-code-block
import ReactPlayer from "react-player";

<ReactPlayer
  url="https://youtu.be/9HFzYmkK0_s"
  width="100%"
  style={{
    aspectRatio: "4/3",
    maxWidth: "640px",
  }}
/>
```

## 프로젝트 과정

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666966747/conference/2021-1/%EB%B8%94%EB%9E%99%EC%9E%AD%20AI/blackjack_1_frca8u.png)

파이썬의 open AI 라이브러리에 구현 되어있는 블랙잭 게임을 이용하여 강화학습을 진행한다. 이를 통해 게임 중 특정 상황에서 어느 행동을 취하면 좋을지 알려주는 state-action-value를 구할 수 있다. 시각화를 위해서 프론트 엔드에서 블랙잭을 구현하고, 백엔드로 파이썬의 flask를 사용하여 실시간으로 게임이 진행됨에 따라 학습한 state-action-value를 이용하여 게임을 진행한다.

## 프로젝트 결과

성공적으로 게임이 잘 진행됨을 확인할 수 있었으며, 우리가 만든 방식으로 10000판을 진행하면 43%의 승률을 얻을 수 있었다.