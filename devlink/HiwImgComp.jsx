"use client";
import React from "react";
import Block from "./_Builtin/Block";
import Image from "./_Builtin/Image";
import Paragraph from "./_Builtin/Paragraph";
import * as _utils from "./utils";
import _styles from "./HiwImgComp.module.css";

export function HiwImgComp({
  as: _Component = Block,
  imgFullImage = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/6791f15f838c1f0d474da066_sleek-beachfront-home-with-ocean-views-modern-design.webp",
  headingText = "Define your Vision",
  paragraphText = "Use our intuitive search to effortlessly filter properties by location, style, size, amenities, price range, availability, and much more for a tailored experience.",
  activeCardClass = "active-card",
  vFxValue,
  hiwCardId = "card-1",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "hiw-card", "g-25")}
      tag="div"
      card-num={vFxValue}
      id={hiwCardId}
    >
      <Block className={_utils.cx(_styles, "hiw-image--wrapper")} tag="div">
        <Image
          className={_utils.cx(_styles, "img-full")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={imgFullImage}
        />
      </Block>
      <Block
        className={_utils.cx(_styles, "v-fx", "g-8", "port-wrap")}
        tag="div"
      >
        <Block className={_utils.cx(_styles, "t-s-24", "_w-500")} tag="div">
          {headingText}
        </Block>
        <Paragraph className={_utils.cx(_styles, "t-s-14", "op-8")}>
          {paragraphText}
        </Paragraph>
      </Block>
    </_Component>
  );
}
