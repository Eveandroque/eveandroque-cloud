"use client";
import React from "react";
import Block from "./_Builtin/Block";
import Image from "./_Builtin/Image";
import * as _utils from "./utils";
import _styles from "./Tags.module.css";

export function Tags({
  as: _Component = Block,
  count = "9",
  name = "Beds",
  icon = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/6791b38d454bb2ea9c991ccb_beds.svg",
  componentPropertyTagItemVisibility = true,
}) {
  return componentPropertyTagItemVisibility ? (
    <_Component
      className={_utils.cx(_styles, "component_property_tag-item")}
      tag="div"
    >
      <Image
        className={_utils.cx(_styles, "component_property_tag-icon")}
        loading="lazy"
        width="16"
        height="16"
        alt=""
        src={icon}
      />
      <Block
        className={_utils.cx(_styles, "component_property_text")}
        tag="div"
      >
        <Block
          className={_utils.cx(_styles, "component_property_tag-count")}
          tag="div"
        >
          {count}
        </Block>
        <Block tag="div">{name}</Block>
      </Block>
    </_Component>
  ) : null;
}
