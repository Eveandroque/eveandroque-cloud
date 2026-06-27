"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import Image from "./webflow_modules/Basic/components/Image";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import RichText from "./webflow_modules/Basic/components/RichText";

export function StepsCard({
  contentDescription = "Submit your property details for a seamless start",
  contentHeading = "Get Started",
  contentRichTextDescription = "",
  contentRichTextDescriptionVisibility = false,
  contentSimpleDescriptionVisibility = true,
  mediaImage = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67957d2c2fff9eb25450c60e_rocket.svg",
}) {
  return (
    <Block
      className={_utils.cx(_styles, "component_hero_step_card")}
      tag={"div"}
    >
      <Block
        className={_utils.cx(_styles, "component_hero_step_icon_wrap")}
        tag={"div"}
      >
        <Image
          alt={""}
          className={_utils.cx(_styles, "component_hero_step_icon")}
          height={"32"}
          loading={"lazy"}
          src={mediaImage}
          width={"32"}
        />
      </Block>
      <Block className={_utils.cx(_styles, "spacer-medium")} tag={"div"} />
      <Block
        className={_utils.cx(_styles, "component_hero_step_heading")}
        tag={"div"}
      >
        <Heading
          className={_utils.cx(
            _styles,
            "heading-style-h5",
            "text-weight-medium"
          )}
          tag={"h3"}
        >
          {contentHeading}
        </Heading>
      </Block>
      <Block className={_utils.cx(_styles, "spacer-xsmall")} tag={"div"} />
      <Block
        className={_utils.cx(_styles, "component_hero_step_description")}
        tag={"div"}
      >
        {contentSimpleDescriptionVisibility ? (
          <Paragraph className={_utils.cx(_styles, "text-size-small")}>
            {contentDescription}
          </Paragraph>
        ) : null}
        {contentRichTextDescriptionVisibility ? (
          <Block className={_utils.cx(_styles, "text-size-small")} tag={"div"}>
            <RichText
              className={_utils.cx(_styles, "text-rich-text")}
              tag={"div"}
            >
              {contentRichTextDescription}
            </RichText>
          </Block>
        ) : null}
      </Block>
    </Block>
  );
}
