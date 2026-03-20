"use client";
import React from "react";
import Block from "./_Builtin/Block";
import Image from "./_Builtin/Image";
import Paragraph from "./_Builtin/Paragraph";
import Heading from "./_Builtin/Heading";
import * as _utils from "./utils";
import _styles from "./TeamCard.module.css";

export function TeamCard({
  as: _Component = Block,
  mediaImage = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/6795a4ca0cf895f2f0dcb7c8_christina-silveria.webp",
  contentPosition = "Co-Founder",
  contentName = "Christina Silveria",
  contentDescription = "Each venue is meticulously selected to ensure a stunning backdrop for your memorable experience.",
}) {
  return (
    <_Component className={_utils.cx(_styles, "component_team_card")} tag="div">
      <Block
        className={_utils.cx(_styles, "component_team_headshot-wrap")}
        tag="div"
      >
        <Image
          className={_utils.cx(_styles, "component_team_headshot-image")}
          loading="lazy"
          width="232"
          height="312"
          alt=""
          src={mediaImage}
        />
        <Block
          className={_utils.cx(_styles, "component_team_headshot-item")}
          tag="div"
        >
          <Block
            className={_utils.cx(_styles, "component_team_headshot-details")}
            tag="div"
          >
            <Paragraph
              className={_utils.cx(
                _styles,
                "text-size-small",
                "text-weight-semibold"
              )}
            >
              {contentPosition}
            </Paragraph>
            <Heading
              className={_utils.cx(
                _styles,
                "heading-style-h4",
                "text-weight-medium"
              )}
              tag="h3"
            >
              {contentName}
            </Heading>
          </Block>
        </Block>
      </Block>
      <Block
        className={_utils.cx(_styles, "component_team_description")}
        tag="div"
      >
        <Paragraph>{contentDescription}</Paragraph>
      </Block>
    </_Component>
  );
}
