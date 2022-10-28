---
title: LoL 대시보드
sidebar_label: "\U0001F3AE LoL 대시보드"

---
# 🎮 LoL 대시보드

:::note 개요

리그오브레전드 API를 이용해 GameBoard (대시보드) 제작

:::

```mdx-code-block
import ReactPlayer from "react-player";

<ReactPlayer
  url="https://youtu.be/L5lPXbOYQMw"
  width="100%"
  style={{
    aspectRatio: "4/3",
    maxWidth: "640px",
  }}
/>
```

## 프로젝트 진행 과정

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666962720/conference/2021-2/LoL%20%EB%8C%80%EC%8B%9C%EB%B3%B4%EB%93%9C/lol_dashboard_1_z1pgt9.png)

* 리그오브레전드 API를 이용해 데이터를 받아오는 프로듀서 6개 생성
* 프로듀서에서 Kafka로 데이터를 보내고 컨슈머를 이용해 Kafka에서 S3에 데이터 저장
* S3에 저장된 데이터를 pandas와 pyspark를 이용해 의미 있는 지표로 바꾸고 다시 S3에 저장
* 마지막으로 github.io와 데모 웹 페이지로 시각화

## 프로젝트 결과

##### [github.io 페이지](https://lutris98.github.io/GameBoard/#/1)

### GameBoard 메인페이지

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666962721/conference/2021-2/LoL%20%EB%8C%80%EC%8B%9C%EB%B3%B4%EB%93%9C/lol_dashboard_2_onwkpw.png)

### Top 라인 트렌드 예시

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666962721/conference/2021-2/LoL%20%EB%8C%80%EC%8B%9C%EB%B3%B4%EB%93%9C/lol_dashboard_3_f1ourk.png)

### 데모 웹 페이지

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666962720/conference/2021-2/LoL%20%EB%8C%80%EC%8B%9C%EB%B3%B4%EB%93%9C/lol_dashboard_4_oxttyc.png)