---
title: Coin Board
sidebar_label: "\U0001FA99 Coin Board"

---
# 🪙 Coin Board

:::note 개요

바야흐로 대 코인시대! 정보가 난무하는 코인 시장에서 당신의 성투(성공적인 투자)를 위한 코인 정보 대시보드입니다.

:::

```mdx-code-block
import ReactPlayer from "react-player";

<ReactPlayer
  url="https://youtu.be/Cy7RHdDHDjM"
  width="100%"
  style={{
    aspectRatio: "4/3",
    maxWidth: "640px",
  }}
/>
```

## 프로젝트 진행 과정

프로젝트 아키텍쳐는 Binance API,Producer,AWS Kinesis & Glue, Spark on AWS EMR & S3, Lamda, ElasticSearch & Kibana 섹션으로 총 6개의 섹션으로 나뉘어져 있습니다.

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666966226/conference/2021-1/Coin%20Board/coin_1_qqxze0.png)

전체적인 데이터 흐름은 다음과 같습니다.

* Binance API가 제공해주는 코인 데이터를 Producer가 가져온 후 이를 Kinesis DataStream으로 전송해 줍니다.

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666966226/conference/2021-1/Coin%20Board/coin_2_g06irs.png)

* Kinesis DataStream에 저장되어 있는 데이터 레코드를 Kinesis Firehose를 이용해 S3, ElasticSearch에 보내줍니다.

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666966226/conference/2021-1/Coin%20Board/coin_3_it49k2.png)

* S3 객체로 저장된 데이터는 parquet형식으로 저장되고 저장되는 즉시 AWS EMR위에서 작동하는 Spark Streaming이 해당 S3 객체를 스트리밍 객체로 읽어옵니다. 이후 Spark SQL을 이용해 각종 지표를 계산해 냅니다.

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666966226/conference/2021-1/Coin%20Board/coin_4_zapvil.png)

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666966225/conference/2021-1/Coin%20Board/coin_5_jqsz1j.png)

* 이렇게 계산된 지표는 다시 S3에 Json형식으로 저장되고 이렇게 저장된 Json형식의 파일은 AWS Lambda에 의해 저장되는 즉시 ElasticSearch로 전송됩니다.

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666966225/conference/2021-1/Coin%20Board/coin_6_v5ycwi.png)

* ElasticSearch에 저장된 실시간 코인 데이터, 지표 데이터는 Kibana를 통해 시각화되어 대시보드에 나타납니다.

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666966226/conference/2021-1/Coin%20Board/coin_7_ciyxc8.png)

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666966225/conference/2021-1/Coin%20Board/coin_8_snigkl.png)

GitHub WIKI

[tldms0327/CoinDashboard](https://github.com/tldms0327/CoinDashboard/wiki#3)

## 프로젝트 결과

<실시간 코인 가격 그래프와 코인별 거래량 pie chart>

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666966225/conference/2021-1/Coin%20Board/coin_9_ygsref.png)

< 코인별 지표 그래프>

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666966225/conference/2021-1/Coin%20Board/coin_10_fwtfts.png)

<코인별 지표 시각화>

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666966225/conference/2021-1/Coin%20Board/coin_11_qripng.png)