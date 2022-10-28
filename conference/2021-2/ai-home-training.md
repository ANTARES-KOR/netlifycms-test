---
title: ai-home-training
sidebar_label: 🏃🏻 AI 홈 트레이닝 코치
---

:::note 개요
사용자의 현재 운동 동작에 대해 횟수 카운트, 자세 교정과 같은 실시간 피드백을 제공하는 온디바이스 어플리케이션 제작
:::

## 프로젝트 진행 과정

### 전체 파이프라인(Swift로 앱 개발)

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666878435/conference/2021-2/1_qhqvws.png)

### 1. Pose detection

- 2018년 구글에서 공개한 PoseNet 모델 사용. 총 17개 신체부위의 좌표를 x,y 형태로 반환해주는 모델

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666878434/conference/2021-2/2_tsseva.png)

### 2. 각도 기반의 PT모드(푸시업, 스쿼트, 런지, 사이드 크런치, 플랭크, 싯업 6가지 진행)

- **진행목표**
  운동별로 각도 조건을 걸어두고 만족한 경우 개수를 카운팅하는 방식. 각도 계산을 통한 알고리즘적 접근
- **진행과정**
  동작 촬영 → PoseNet 모델을 통한 좌표 추출 → 좌표값을 통해 각 운동별 주요 신체부위 간 각도 계산 → 주어진 각도 조건을 충족시키며 동작 수행 시 개수 카운트

### 3. 좌표 기반의 자세 교정 모드(스쿼트만 진행)

- **진행목표**
  5초 동안의 좌표 데이터 자체를 통해 그에 해당하는 자세를 분류하는 모델을 직접 만들어보는 모델링적 접근
- **진행과정**
  동작 촬영 → PoseNet 모델을 통한 좌표 추출 → 5초(150 frame) 동안의 신체 부위별 x,y 좌표 데이터 수집 → RandomForest 모델을 통해 5초동안의 자세가 Good(올바른 자세), Round Back(등이 굽은 자세), Shallowness(덜 내려간 자세) 중 어떤 자세인지 분류

## 프로젝트 결과

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666878436/conference/2021-2/3_am1yur.png)

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666878695/conference/2021-2/5_bebngb.png)

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666878435/conference/2021-2/4_m1jcjl.png)
