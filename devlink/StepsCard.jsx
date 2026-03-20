"use client";
import React from "react";
import Block from "./_Builtin/Block";
import Image from "./_Builtin/Image";
import Heading from "./_Builtin/Heading";
import Paragraph from "./_Builtin/Paragraph";
import RichText from "./_Builtin/RichText";
import * as _utils from "./utils";
import _styles from "./StepsCard.module.css";

export function StepsCard({
  as: _Component = Block,
  mediaImage = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67957d2c2fff9eb25450c60e_rocket.svg",
  contentHeading = "Get Started",
  contentSimpleDescriptionVisibility = true,
  contentDescription = "Submit your property details for a seamless start",
  contentRichTextDescriptionVisibility = false,
  contentRichTextDescription = "",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "component_hero_step_card")}
      tag="div"
    >
      <Block
        className={_utils.cx(_styles, "component_hero_step_icon_wrap")}
        tag="div"
      >
        <Image
          className={_utils.cx(_styles, "component_hero_step_icon")}
          loading="lazy"
          width="32"
          height="32"
          alt=""
          src={mediaImage}
        />
      </Block>
      <Block className={_utils.cx(_styles, "spacer-medium")} tag="div" />
      <Block
        className={_utils.cx(_styles, "component_hero_step_heading")}
        tag="div"
      >
        <Heading
          className={_utils.cx(
            _styles,
            "heading-style-h5",
            "text-weight-medium"
          )}
          tag="h3"
        >
          {contentHeading}
        </Heading>
      </Block>
      <Block className={_utils.cx(_styles, "spacer-xsmall")} tag="div" />
      <Block
        className={_utils.cx(_styles, "component_hero_step_description")}
        tag="div"
      >
        {contentSimpleDescriptionVisibility ? (
          <Paragraph className={_utils.cx(_styles, "text-size-small")}>
            {contentDescription}
          </Paragraph>
        ) : null}
        {contentRichTextDescriptionVisibility ? (
          <Block className={_utils.cx(_styles, "text-size-small")} tag="div">
            <RichText
              className={_utils.cx(_styles, "text-rich-text")}
              tag="div"
              slot=""
            >
              {contentRichTextDescription}
            </RichText>
          </Block>
        ) : null}
      </Block>
    </_Component>
  );
}
