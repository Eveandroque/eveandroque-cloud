"use client";
import React from "react";
import Block from "./_Builtin/Block";
import * as _utils from "./utils";
import _styles from "./TabLink.module.css";

export function TabLink({ as: _Component = Block, contentName = "Netflix" }) {
  return (
    <_Component className={_utils.cx(_styles, "home_tabbed-nav")} tag="div">
      <Block className={_utils.cx(_styles, "text-weight-semibold")} tag="div">
        {contentName}
      </Block>
      <Block
        className={_utils.cx(_styles, "spacer-small", "is-home-tab")}
        tag="div"
      />
      <Block
        className={_utils.cx(_styles, "home_tabbed-line-filler")}
        tag="div"
      >
        <Block className={_utils.cx(_styles, "home_tabbed-line")} tag="div" />
      </Block>
    </_Component>
  );
}
