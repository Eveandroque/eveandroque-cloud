"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import Image from "./webflow_modules/Basic/components/Image";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";

export function TeamCard({
  contentDescription = "Each venue is meticulously selected to ensure a stunning backdrop for your memorable experience.",
  contentName = "Christina Silveria",
  contentPosition = "Co-Founder",
  mediaImage = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/6795a4ca0cf895f2f0dcb7c8_christina-silveria.webp",
}) {
  return (
    <Block className={_utils.cx(_styles, "component_team_card")} tag={"div"}>
      <Block
        className={_utils.cx(_styles, "component_team_headshot-wrap")}
        tag={"div"}
      >
        <Image
          alt={""}
          className={_utils.cx(_styles, "component_team_headshot-image")}
          height={"312"}
          loading={"lazy"}
          src={mediaImage}
          width={"232"}
        />
        <Block
          className={_utils.cx(_styles, "component_team_headshot-item")}
          tag={"div"}
        >
          <Block
            className={_utils.cx(_styles, "component_team_headshot-details")}
            tag={"div"}
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
              tag={"h3"}
            >
              {contentName}
            </Heading>
          </Block>
        </Block>
      </Block>
      <Block
        className={_utils.cx(_styles, "component_team_description")}
        tag={"div"}
      >
        <Paragraph>{contentDescription}</Paragraph>
      </Block>
    </Block>
  );
}
