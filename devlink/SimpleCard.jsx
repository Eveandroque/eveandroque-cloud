"use client";
import React from "react";
import Block from "./_Builtin/Block";
import Image from "./_Builtin/Image";
import Heading from "./_Builtin/Heading";
import Paragraph from "./_Builtin/Paragraph";
import * as _utils from "./utils";
import _styles from "./SimpleCard.module.css";

export function SimpleCard({
  as: _Component = Block,
  mediaImage = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/6791f15f838c1f0d474da066_sleek-beachfront-home-with-ocean-views-modern-design.webp",
  contentHeading = "Discover Your Space",
  contentDescription = "Use our intuitive search to effortlessly filter properties by location, style, size, amenities, price range, availability, and much more for a tailored experience.",
  settingsDesignViewConditionalDisplay = "false",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "home_sticky_card")}
      tag="div"
      design-hide={settingsDesignViewConditionalDisplay}
    >
      <Image
        className={_utils.cx(_styles, "home_sticky_image")}
        loading="lazy"
        width="718"
        height="432"
        data-text=".home_sticky_list_text_item.is-1"
        alt=""
        src={mediaImage}
      />
      <Block className={_utils.cx(_styles, "spacer-xsmall")} tag="div" />
      <Block className={_utils.cx(_styles, "spacer-small")} tag="div" />
      <Block
        className={_utils.cx(_styles, "home_sticky_content_item")}
        tag="div"
      >
        <Heading className={_utils.cx(_styles, "heading-style-h5")} tag="h3">
          {contentHeading}
        </Heading>
        <Block className={_utils.cx(_styles, "spacer-xsmall")} tag="div" />
        <Paragraph>{contentDescription}</Paragraph>
      </Block>
    </_Component>
  );
}
