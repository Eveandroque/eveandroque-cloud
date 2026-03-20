"use client";
import React from "react";
import Block from "./_Builtin/Block";
import Image from "./_Builtin/Image";
import Paragraph from "./_Builtin/Paragraph";
import * as _utils from "./utils";
import _styles from "./AmenitiesCard.module.css";

export function AmenitiesCard({
  as: _Component = Block,
  mediaIcon = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/6799d973cdb564e2762c9765_parking.svg",
  contentName = "Parking Available",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "article_content_amenities_card")}
      id={_utils.cx(
        _styles,
        "w-node-d5689ea2-598f-3d36-2580-39403558bea8-3558bea8"
      )}
      tag="div"
    >
      <Image
        className={_utils.cx(_styles, "article_content_amenities_icon")}
        loading="lazy"
        width="48"
        height="48"
        alt=""
        src={mediaIcon}
      />
      <Block className={_utils.cx(_styles, "spacer-xxsmall")} tag="div" />
      <Block className={_utils.cx(_styles, "spacer-small")} tag="div" />
      <Paragraph className={_utils.cx(_styles, "text-weight-medium")}>
        {contentName}
      </Paragraph>
    </_Component>
  );
}
