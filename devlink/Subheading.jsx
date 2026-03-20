"use client";
import React from "react";
import Block from "./_Builtin/Block";
import Image from "./_Builtin/Image";
import * as _utils from "./utils";
import _styles from "./Subheading.module.css";

export function Subheading({
  as: _Component = Block,
  contentText = "Subheading",
  mediaIcon = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/6791b29053bce57b84125a46_marker.svg",
  visibilityIconDisplay = false,
  visibilityDateVisibility = false,
  variant = "Base",
  contentDate = "10th Jan",
}) {
  const _styleVariantMap = {
    Base: "",
    Dark: "w-variant-2eb44b9f-2cbc-e55a-3787-8eab485b597a",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "subheading_wrap", _activeStyleVariant)}
      tag="div"
    >
      <Block
        className={_utils.cx(_styles, "subheading", _activeStyleVariant)}
        tag="div"
      >
        {visibilityIconDisplay ? (
          <Image
            className={_utils.cx(
              _styles,
              "subheading-icon",
              _activeStyleVariant
            )}
            loading="lazy"
            width="16"
            height="16"
            alt=""
            src={mediaIcon}
          />
        ) : null}
        <Block tag="div">{contentText}</Block>
        {visibilityDateVisibility ? (
          <Block tag="div">{contentDate}</Block>
        ) : null}
      </Block>
    </_Component>
  );
}
