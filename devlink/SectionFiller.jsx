"use client";
import React from "react";
import Section from "./_Builtin/Section";
import Block from "./_Builtin/Block";
import Heading from "./_Builtin/Heading";
import Paragraph from "./_Builtin/Paragraph";
import * as _utils from "./utils";
import _styles from "./SectionFiller.module.css";

export function SectionFiller({
  as: _Component = Section,
  contentSectionName = "InstagramFeed",
  contentDescription = "Might be an app",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "component_filler_section")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <Block className={_utils.cx(_styles, "component_filler_block")} tag="div">
        <Block className={_utils.cx(_styles, "text-align-center")} tag="div">
          <Heading tag="h1">{contentSectionName}</Heading>
          <Block className={_utils.cx(_styles, "spacer-medium")} tag="div" />
          <Paragraph className={_utils.cx(_styles, "text-size-large")}>
            {contentDescription}
          </Paragraph>
        </Block>
      </Block>
    </_Component>
  );
}
