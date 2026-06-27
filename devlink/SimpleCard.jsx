"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import Image from "./webflow_modules/Basic/components/Image";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";

export function SimpleCard({
  contentDescription = "Use our intuitive search to effortlessly filter properties by location, style, size, amenities, price range, availability, and much more for a tailored experience.",
  contentHeading = "Discover Your Space",
  mediaImage = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/6791f15f838c1f0d474da066_sleek-beachfront-home-with-ocean-views-modern-design.webp",
  settingsDesignViewConditionalDisplay = "false",
}) {
  return (
    <Block
      className={_utils.cx(_styles, "home_sticky_card")}
      design-hide={settingsDesignViewConditionalDisplay}
      tag={"div"}
    >
      <Image
        alt={""}
        className={_utils.cx(_styles, "home_sticky_image")}
        data-text={".home_sticky_list_text_item.is-1"}
        height={"432"}
        loading={"lazy"}
        src={mediaImage}
        width={"718"}
      />
      <Block className={_utils.cx(_styles, "spacer-xsmall")} tag={"div"} />
      <Block className={_utils.cx(_styles, "spacer-small")} tag={"div"} />
      <Block
        className={_utils.cx(_styles, "home_sticky_content_item")}
        tag={"div"}
      >
        <Heading className={_utils.cx(_styles, "heading-style-h5")} tag={"h3"}>
          {contentHeading}
        </Heading>
        <Block className={_utils.cx(_styles, "spacer-xsmall")} tag={"div"} />
        <Paragraph>{contentDescription}</Paragraph>
      </Block>
    </Block>
  );
}
