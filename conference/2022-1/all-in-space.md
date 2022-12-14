---
title: All in space
sidebar_label: "\U0001F5E3 All-in-Space"
---

# π£ μν΅ νμ±ν νμν΄, All-in-Space

```mdx-code-block
import ReactPlayer from "react-player";

<ReactPlayer
  url="https://youtu.be/j0wQGtmTV7o"
  width="100%"
  style={{
    aspectRatio: "4/3",
    maxWidth: "640px",
  }}
/>
```

## π£οΈ νλ‘μ νΈ νμ΄νλΌμΈ λ° μ§ν κ³Όμ 

### μ΄κΈ° λΈλ μΈμ€ν λ°

- μ΄κΈ° λͺ©ν : AI λ₯Ό κ²°ν©ν κΈ°μ λ‘ (μ‘°λ³κ³Όμ μ κ°μ) νμ μ λΆλΈμ μ λ§μ μ€μΌ μ μλ ν΄κ²°μ±μ νλμ νλ μμν¬λ‘ μ μνμ!
- μμ΄λμ΄ κ΅¬μ²΄νμ νμμ± : νμ μ βμν΅βμ΄λΌλ κ°μΉλ₯Ό ν€μλλ‘ μ‘μ νμμ λμΈ μ μλ μμ€νμ λν΄ λΈλ μΈμ€ν λ°
- All-in: νμμ μ°Έμ¬νλ λͺ¨λ  κ΅¬μ±μμ΄ ν¨μ¨μ μΌλ‘ νμμ κ³νν  μ μλ κΈ°μ μ μ κ³΅νμ!

### μλΉμ€μ λ΄μ ν΅μ¬ κΈ°μ  νλ¦½ + Figma Design

- μλΉμ€μ λ΄μ ν΅μ¬ κΈ°μ  2κ° νμ : **To-Do Clustering + Positive Feedback Loop Framework**
- **To-Do Clustering**
  - νμ νμ μν κ°μΈλ€μ΄ κ°μ μκ°νλ μ΄ νμμ κ³΅λμΌλ‘ λ¬μ±ν΄μΌ νλ λͺ©ν, λΆμμ΄ νμν μλ¬΄(TODO)λ₯Ό μλ ₯νλλ‘ νλ€
  - μλ ₯μ νλμ κ±°λν λ¦¬μ€νΈλ‘ λͺ¨μ Textual Clustering μ§ν
  - Cluster κ²°κ³Όλ₯Ό νμλ€μκ² κ³΅μ ν΄ νμμ λ¬μ±ν΄μΌ νλ€κ³  μκ°νλ λͺ©νμ λν Insight, νμλ€μ΄ λ¬΄μμ κ³΅ν΅μΌλ‘ μΆκ΅¬νκ³ μ νλμ§μ λν μμ½ μ λ³΄λ₯Ό μ κ³΅ β **μν΅μ μμμ νμ±νν  μ μλ μ λ³΄ μ κ³΅**

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666834413/conference/2022-1/all-in-space/1_npqzkv.png)

- **Positive Feedback Loop Framework**
  - νκ°μ§μ κ³΅λ to-do taskκ° μλ£λλ©΄, κ·Έ taskμ λν΄ νΌλλ°± μμ²­μ΄ κ°λ₯
  - νμ λλ¨Έμ§ νμλ€μ΄ taskλ₯Ό μνν νμμ λν νΌλλ°±μ κΈ°μ - μ λ¬
  - μ λ¬ κ³Όμ  μ¬μ΄μμ κ³΅κ²©μ μΈ λ°μΈμ νμ§νλ λͺ¨λΈ μ¬μ©
  - κ³΅κ²©μ  λ°μΈ νμ§ β κΈμ μ  νΌλλ°± ν¨κ³Όλ₯Ό λ°©ν΄νλ μμλ₯Ό νν°λ§νμ¬ νΌλλ°± λμμκ² μ λ¬ / κ³΅κ²©μ  λ°μΈμ κΈ°μν νμμκ² νμ§ κ²°κ³Ό μ λ¬ λ° νν μ§μ μμ²­
  - β κ³΅κ²©μ  λ°μΈμ΄ μ΅μνλλ νΌλλ°±μ μ£Όκ³ λ°μ μ μλλ‘ νμ κ³Όμ μμ λ°λμ§ν λ°©ν₯μ μν΅ λλ €

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666834413/conference/2022-1/all-in-space/2_jzsegy.png)

- κΈ°μ  νλ¦½ μ΄ν, κΈ°μ μ κ²°κ³Όλ¬Όμ λ΄μ νμμ λμμ΄ λλ λ°©ν₯μΌλ‘ μ κ³΅ν  μ μλλ‘ figma λμμΈ ν΄μ μ΄μ©ν΄ νμ΄μ§ λμμΈ μ μ

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666834413/conference/2022-1/all-in-space/3_lusfla.png)

### Modeling + κ° Backend, Frontend, Model μ°κ²° (νμ΄νλΌμΈ μ€λͺ ν¬ν¨)

- Modeling μΈλΆμ¬ν­
  - **Clustering**
  - embedding : KoSBERT-KLUE-BERT-base λͺ¨λΈ μ¬μ©
  - Kmeans + K μ€μ νκΈ° μν΄ Silhouette Score, early stopping κ°λ μμ©
  - **Feedback Framework**
  - KcElectra λͺ¨λΈμ μ΄μ©: μ΅λͺ νΌλλ°±μ μ΄λ£¨λ λ¬Έμ₯ λΉ κ³΅κ²©μ  λ°μΈμΈμ§μ λν Binary Text Classification μν
  - KcBert λͺ¨λΈμ μ΄μ©: μμμ κ³΅κ²©μ  λ°μΈμΌλ‘ νμ§λ λ¬Έμ₯μ λνμ¬ μ΄λ ν μ νμ κ³΅κ²©μ  λ°μΈμΈμ§ Multi-Label Classification μν
  - νΌλλ°± μμ±ν νμμκ² κΈμ μ  νΌλλ°± μ λ¬μ μν κ΅μ  μ¬ν­ μ λ¬ + νΌλλ°± λμμΈ νμμκ² κ³΅κ²© λ°μΈμ μ μΈν νΌλλ°± λͺ¨μ μ λ¬
  - BEEP!, Apeach, Unsmile Dataset λ± μ¬λ¬ μΈν°λ· μ νμ€ λ°μΈ, Hate-Speechμ λν λΌλ²¨λ§μ μ§νν νκ΅­μ΄ λ°μ΄ν°μμ μ΄μ©νμ¬ μ λ λͺ¨λΈμ Fine-Tuning μ§ν
- μ μ²΄μ  μν€νμ³
  - μν¬μ€νμ΄μ€κ° λ³΄μ¬μ§λ λͺ¨λ  λΆλΆλ€μ Reactλ₯Ό ν΅ν΄ κ΅¬μ±
  - μλ²μμ μ λ³΄λ₯Ό μ μ₯ λ° μ²λ¦¬ν΄μ£Όλ λΆλΆλ€μ λͺ¨λ SpringμΌλ‘ κ΅¬ν
  - axiosλ₯Ό νμ©νμ¬ http ν΅μ μ μ§ν, DB: MySQL νμ©
  - Pytorchλ₯Ό νμ©ν NLP model: λ³λμ flask μλ²μ μ¬λ € ν¨κ» inference λ κ²°κ³Όκ°μ λ°±μλμμ ν΅μ μ ν΅ν΄ κ°μ Έμ¬ μ μλλ‘ μ€κ³

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666834413/conference/2022-1/all-in-space/4_sx0egd.png)

- React νλ μμν¬λ₯Ό μ΄μ©ν΄ κ΅¬μΆλ μΉμ¬μ΄νΈλ₯Ό μ΄μ©νμ¬ **ν΄λ¬μ€ν°λ§ ν  Todo,** μμ±ν **νΌλλ°± λ΄μ© λ±μ input**μ μ μ‘
- Spring κΈ°λ°μ λ°±μλ μλ²κ° DBμ λ°λ‘ μ μ₯μ ν ν, λͺ¨λΈ μλ²(Flask)λ‘ λ°μ΄ν°λ₯Ό μ μ‘
- νμ΅λ λͺ¨λΈ μλ²μμμ inferenceλ₯Ό ν΅ν΄ **ν΄λ¬μ€ν°λ§ λ todoλͺ©λ‘, λλ** **νν°λ§/νμ§λ νΌλλ°± κ²°κ³Ό**λ₯Ό λ€μ λ²‘μλ μλ²μ μ μ‘ : νμ΄μ§λ₯Ό ν΅ν΄ userμκ² μ λ¬

## π£οΈ νλ‘μ νΈ κ²°κ³Ό

- **To-Do Clustering**

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666834413/conference/2022-1/all-in-space/5_rdvnpu.png)

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666834413/conference/2022-1/all-in-space/6_gi2lwm.png)

- **Positive Feedback Loop Framework**
  - μ±μ°¨λ³, μμ€, μ§μ­μ  λ°μΈ λ±μ λ€μν μ νμ κ³΅κ²©μ  λ°μΈ νμ§ κ°λ₯

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666834414/conference/2022-1/all-in-space/7_np4laz.png)

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666834413/conference/2022-1/all-in-space/8_n7ldzd.png)

- νμ΄μ§ κ΅¬ν λ° λͺ¨λΈ μΉκΈ°
  - Login

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666834414/conference/2022-1/all-in-space/9_qeqwua.png)

- Clustering

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666834414/conference/2022-1/all-in-space/10_tcpvgm.png)

- To-Do Tree

![](https://res.cloudinary.com/dr6b9c9ko/image/upload/v1666834414/conference/2022-1/all-in-space/11_ltwg15.png)
