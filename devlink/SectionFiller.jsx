"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import Section from "./webflow_modules/Layout/components/Section";

export function SectionFiller({
  contentDescription = "Might be an app",
  contentSectionName = "InstagramFeed",
}) {
  return (
    <Section
      className={_utils.cx(_styles, "component_filler_section")}
      grid={{
        type: "section",
      }}
      tag={"section"}
    >
      <Block
        className={_utils.cx(_styles, "component_filler_block")}
        tag={"div"}
      >
        <Block className={_utils.cx(_styles, "text-align-center")} tag={"div"}>
          <Heading tag={"h1"}>{contentSectionName}</Heading>
          <Block className={_utils.cx(_styles, "spacer-medium")} tag={"div"} />
          <Paragraph className={_utils.cx(_styles, "text-size-large")}>
            {contentDescription}
          </Paragraph>
        </Block>
      </Block>
    </Section>
  );
}
