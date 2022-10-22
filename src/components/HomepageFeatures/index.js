import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "멋져요",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        와빅에 오면 당신도 이상규처럼 멋짐과 쿨함을 갖춘 사람이 될 수 있습니다.
      </>
    ),
  },
  {
    title: "짜릿해요",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        와빅 최고 아웃풋 김소정처럼 당신도 매일 새로운 도전을 하고, 새로운
        경험을 할 수 있습니다.
      </>
    ),
  },
  {
    title: "즐겁다!",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        와빅 대표 요정 이시영과 함께하는 뒤풀이는 당신의 삶을 더욱 즐겁게 만들어
        줄 것입니다.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
