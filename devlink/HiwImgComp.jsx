"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";
import Image from "./webflow_modules/Basic/components/Image";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";

export function HiwImgComp({
  activeCardClass = "active-card",
  headingText = "Define your Vision",
  hiwCardId = "card-1",
  imgFullImage = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/6791f15f838c1f0d474da066_sleek-beachfront-home-with-ocean-views-modern-design.webp",
  paragraphText = "Use our intuitive search to effortlessly filter properties by location, style, size, amenities, price range, availability, and much more for a tailored experience.",
  vFxValue = "",
}) {
  return (
    <Block
      card-num={vFxValue}
      className={_utils.cx(_styles, "hiw-card", "g-25")}
      id={_utils.cx(_styles)}
      tag={"div"}
    >
      <Block className={_utils.cx(_styles, "hiw-image--wrapper")} tag={"div"}>
        <Image
          alt={""}
          className={_utils.cx(_styles, "img-full")}
          height={"auto"}
          loading={"lazy"}
          src={imgFullImage}
          width={"auto"}
        />
      </Block>
      <Block
        className={_utils.cx(_styles, "v-fx", "g-8", "port-wrap")}
        tag={"div"}
      >
        <Block className={_utils.cx(_styles, "t-s-24", "_w-500")} tag={"div"}>
          {headingText}
        </Block>
        <Paragraph className={_utils.cx(_styles, "t-s-14", "op-8")}>
          {paragraphText}
        </Paragraph>
      </Block>
    </Block>
  );
}
