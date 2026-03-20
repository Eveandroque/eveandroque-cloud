"use client";
import React from "react";
import Block from "./_Builtin/Block";
import Image from "./_Builtin/Image";
import Heading from "./_Builtin/Heading";
import Paragraph from "./_Builtin/Paragraph";
import * as _utils from "./utils";
import _styles from "./Blurb.module.css";

export function Blurb({
  as: _Component = Block,
  contentHeading = "Unmatched Luxury",
  contentDescription = "Unlock the doors to some of the most breathtaking and exclusive homes, offering",
  mediaIcon = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/6791a94528ed58d7dde84e51_diamond.svg",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "component_blurb_card")}
      tag="div"
    >
      <Image
        className={_utils.cx(_styles, "component_blurb-icon")}
        loading="lazy"
        width="40"
        height="40"
        alt=""
        src={mediaIcon}
      />
      <Block className={_utils.cx(_styles, "spacer-large")} tag="div" />
      <Heading
        className={_utils.cx(_styles, "heading-style-h5", "text-weight-medium")}
        tag="h3"
      >
        {contentHeading}
      </Heading>
      <Block className={_utils.cx(_styles, "spacer-xsmall")} tag="div" />
      <Paragraph className={_utils.cx(_styles, "text-size-small")}>
        {contentDescription}
      </Paragraph>
    </_Component>
  );
}
