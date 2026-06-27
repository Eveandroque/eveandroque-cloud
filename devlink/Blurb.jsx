"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import Image from "./webflow_modules/Basic/components/Image";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";

export function Blurb({
  contentDescription = "Unlock the doors to some of the most breathtaking and exclusive homes, offering",
  contentHeading = "Unmatched Luxury",
  mediaIcon = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/6791a94528ed58d7dde84e51_diamond.svg",
}) {
  return (
    <Block className={_utils.cx(_styles, "component_blurb_card")} tag={"div"}>
      <Image
        alt={""}
        className={_utils.cx(_styles, "component_blurb-icon")}
        height={"40"}
        loading={"lazy"}
        src={mediaIcon}
        width={"40"}
      />
      <Block className={_utils.cx(_styles, "spacer-large")} tag={"div"} />
      <Heading
        className={_utils.cx(_styles, "heading-style-h5", "text-weight-medium")}
        tag={"h3"}
      >
        {contentHeading}
      </Heading>
      <Block className={_utils.cx(_styles, "spacer-xsmall")} tag={"div"} />
      <Paragraph className={_utils.cx(_styles, "text-size-small")}>
        {contentDescription}
      </Paragraph>
    </Block>
  );
}
