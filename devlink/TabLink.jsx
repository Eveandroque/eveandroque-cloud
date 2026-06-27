"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";

export function TabLink({ contentName = "Netflix" }) {
  return (
    <Block className={_utils.cx(_styles, "home_tabbed-nav")} tag={"div"}>
      <Block className={_utils.cx(_styles, "text-weight-semibold")} tag={"div"}>
        {contentName}
      </Block>
      <Block
        className={_utils.cx(_styles, "spacer-small", "is-home-tab")}
        tag={"div"}
      />
      <Block
        className={_utils.cx(_styles, "home_tabbed-line-filler")}
        tag={"div"}
      >
        <Block className={_utils.cx(_styles, "home_tabbed-line")} tag={"div"} />
      </Block>
    </Block>
  );
}
