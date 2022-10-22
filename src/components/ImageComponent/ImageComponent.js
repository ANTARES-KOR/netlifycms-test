import React from "react";
import Image from "@theme/IdealImage";

export const ImageComponent = ({ src, maxWidth = "640px", styles = {} }) => {
  return (
    <div style={{ maxWidth: "640px", ...styles }}>
      <Image img={require(src)} />
    </div>
  );
};
