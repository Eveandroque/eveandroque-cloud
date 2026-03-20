"use client";
import React from "react";
import Section from "./_Builtin/Section";
import Block from "./_Builtin/Block";
import Heading from "./_Builtin/Heading";
import Span from "./_Builtin/Span";
import Image from "./_Builtin/Image";
import NotSupported from "./_Builtin/NotSupported";
import Link from "./_Builtin/Link";
import * as _utils from "./utils";
import _styles from "./Instafeed.module.css";

export function Instafeed({ as: _Component = Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "component_instagram_section")}
      grid={{
        type: "section",
      }}
      tag="section"
    />
  );
}
