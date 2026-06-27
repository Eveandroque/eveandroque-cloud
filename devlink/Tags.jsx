"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";
import Image from "./webflow_modules/Basic/components/Image";

export function Tags({
  componentPropertyTagItemVisibility = true,
  count = "9",
  icon = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/6791b38d454bb2ea9c991ccb_beds.svg",
  name = "Beds",
}) {
  return componentPropertyTagItemVisibility ? (
    <Block
      className={_utils.cx(_styles, "component_property_tag-item")}
      tag={"div"}
    >
      <Image
        alt={""}
        className={_utils.cx(_styles, "component_property_tag-icon")}
        height={"16"}
        loading={"lazy"}
        src={icon}
        width={"16"}
      />
      <Block
        className={_utils.cx(_styles, "component_property_text")}
        tag={"div"}
      >
        <Block
          className={_utils.cx(_styles, "component_property_tag-count")}
          tag={"div"}
        >
          {count}
        </Block>
        <Block tag={"div"}>{name}</Block>
      </Block>
    </Block>
  ) : null;
}
