"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";
import Image from "./webflow_modules/Basic/components/Image";

export function Subheading({
  contentDate = "10th Jan",
  contentText = "Subheading",
  mediaIcon = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/6791b29053bce57b84125a46_marker.svg",
  variant = "Base",
  visibilityDateVisibility = false,
  visibilityIconDisplay = false,
}) {
  const _styleVariantMap = {
    Base: "",
    Dark: "w-variant-2eb44b9f-2cbc-e55a-3787-8eab485b597a",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <Block
      className={_utils.cx(_styles, "subheading_wrap", _activeStyleVariant)}
      tag={"div"}
    >
      <Block
        className={_utils.cx(_styles, "subheading", _activeStyleVariant)}
        tag={"div"}
      >
        {visibilityIconDisplay ? (
          <Image
            alt={""}
            className={_utils.cx(
              _styles,
              "subheading-icon",
              _activeStyleVariant
            )}
            height={"16"}
            loading={"lazy"}
            src={mediaIcon}
            width={"16"}
          />
        ) : null}
        <Block tag={"div"}>{contentText}</Block>
        {visibilityDateVisibility ? (
          <Block tag={"div"}>{contentDate}</Block>
        ) : null}
      </Block>
    </Block>
  );
}
