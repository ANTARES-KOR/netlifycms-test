---
title: Coin Board
sidebar_label: "\U0001FA99 Coin Board"

---
# ๐ช Coin Board

:::note ๊ฐ์

๋ฐ์ผํ๋ก ๋ ์ฝ์ธ์๋! ์ ๋ณด๊ฐ ๋๋ฌดํ๋ ์ฝ์ธ ์์ฅ์์ ๋น์ ์ ์ฑํฌ(์ฑ๊ณต์ ์ธ ํฌ์)๋ฅผ ์ํ ์ฝ์ธ ์ ๋ณด ๋์๋ณด๋์๋๋ค.

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

## ํ๋ก์ ํธ ์งํ ๊ณผ์ 

ํ๋ก์ ํธ ์ํคํ์ณ๋ Binance API,Producer,AWS Kinesis & Glue, Spark on AWS EMR & S3, Lamda, ElasticSearch & Kibana ์น์์ผ๋ก ์ด 6๊ฐ์ ์น์์ผ๋ก ๋๋์ด์ ธ ์์ต๋๋ค.

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666966226/conference/2021-1/Coin%20Board/coin_1_qqxze0.png)

์ ์ฒด์ ์ธ ๋ฐ์ดํฐ ํ๋ฆ์ ๋ค์๊ณผ ๊ฐ์ต๋๋ค.

* Binance API๊ฐ ์ ๊ณตํด์ฃผ๋ ์ฝ์ธ ๋ฐ์ดํฐ๋ฅผ Producer๊ฐ ๊ฐ์ ธ์จ ํ ์ด๋ฅผ Kinesis DataStream์ผ๋ก ์ ์กํด ์ค๋๋ค.

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666966226/conference/2021-1/Coin%20Board/coin_2_g06irs.png)

* Kinesis DataStream์ ์ ์ฅ๋์ด ์๋ ๋ฐ์ดํฐ ๋ ์ฝ๋๋ฅผ Kinesis Firehose๋ฅผ ์ด์ฉํด S3, ElasticSearch์ ๋ณด๋ด์ค๋๋ค.

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666966226/conference/2021-1/Coin%20Board/coin_3_it49k2.png)

* S3 ๊ฐ์ฒด๋ก ์ ์ฅ๋ ๋ฐ์ดํฐ๋ parquetํ์์ผ๋ก ์ ์ฅ๋๊ณ  ์ ์ฅ๋๋ ์ฆ์ AWS EMR์์์ ์๋ํ๋ Spark Streaming์ด ํด๋น S3 ๊ฐ์ฒด๋ฅผ ์คํธ๋ฆฌ๋ฐ ๊ฐ์ฒด๋ก ์ฝ์ด์ต๋๋ค. ์ดํ Spark SQL์ ์ด์ฉํด ๊ฐ์ข ์งํ๋ฅผ ๊ณ์ฐํด ๋๋๋ค.

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666966226/conference/2021-1/Coin%20Board/coin_4_zapvil.png)

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666966225/conference/2021-1/Coin%20Board/coin_5_jqsz1j.png)

* ์ด๋ ๊ฒ ๊ณ์ฐ๋ ์งํ๋ ๋ค์ S3์ Jsonํ์์ผ๋ก ์ ์ฅ๋๊ณ  ์ด๋ ๊ฒ ์ ์ฅ๋ Jsonํ์์ ํ์ผ์ AWS Lambda์ ์ํด ์ ์ฅ๋๋ ์ฆ์ ElasticSearch๋ก ์ ์ก๋ฉ๋๋ค.

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666966225/conference/2021-1/Coin%20Board/coin_6_v5ycwi.png)

* ElasticSearch์ ์ ์ฅ๋ ์ค์๊ฐ ์ฝ์ธ ๋ฐ์ดํฐ, ์งํ ๋ฐ์ดํฐ๋ Kibana๋ฅผ ํตํด ์๊ฐํ๋์ด ๋์๋ณด๋์ ๋ํ๋ฉ๋๋ค.

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666966226/conference/2021-1/Coin%20Board/coin_7_ciyxc8.png)

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666966225/conference/2021-1/Coin%20Board/coin_8_snigkl.png)

GitHub WIKI

[tldms0327/CoinDashboard](https://github.com/tldms0327/CoinDashboard/wiki#3)

## ํ๋ก์ ํธ ๊ฒฐ๊ณผ

<์ค์๊ฐ ์ฝ์ธ ๊ฐ๊ฒฉ ๊ทธ๋ํ์ ์ฝ์ธ๋ณ ๊ฑฐ๋๋ pie chart>

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666966225/conference/2021-1/Coin%20Board/coin_9_ygsref.png)

< ์ฝ์ธ๋ณ ์งํ ๊ทธ๋ํ>

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666966225/conference/2021-1/Coin%20Board/coin_10_fwtfts.png)

<์ฝ์ธ๋ณ ์งํ ์๊ฐํ>

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666966225/conference/2021-1/Coin%20Board/coin_11_qripng.png)