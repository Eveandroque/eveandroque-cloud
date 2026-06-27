"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";
import Image from "./webflow_modules/Basic/components/Image";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";

export function AmenitiesCard({
  contentName = "Parking Available",
  mediaIcon = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/6799d973cdb564e2762c9765_parking.svg",
}) {
  return (
    <Block
      className={_utils.cx(_styles, "article_content_amenities_card")}
      id={_utils.cx(
        _styles,
        "w-node-d5689ea2-598f-3d36-2580-39403558bea8-3558bea8"
      )}
      tag={"div"}
    >
      <Image
        alt={""}
        className={_utils.cx(_styles, "article_content_amenities_icon")}
        height={"48"}
        loading={"lazy"}
        src={mediaIcon}
        width={"48"}
      />
      <Block className={_utils.cx(_styles, "spacer-xxsmall")} tag={"div"} />
      <Block className={_utils.cx(_styles, "spacer-small")} tag={"div"} />
      <Paragraph className={_utils.cx(_styles, "text-weight-medium")}>
        {contentName}
      </Paragraph>
    </Block>
  );
}
