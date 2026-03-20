"use client";
import React from "react";
import Block from "./_Builtin/Block";
import Image from "./_Builtin/Image";
import Heading from "./_Builtin/Heading";
import Paragraph from "./_Builtin/Paragraph";
import Link from "./_Builtin/Link";
import * as _utils from "./utils";
import _styles from "./DetailCardWithIcon.module.css";

export function DetailCardWithIcon({
  as: _Component = Block,
  mediaImage = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67932fde2aacfee182b5f29a_email.svg",
  contentHeading = "Email",
  contentDescription = "Reach us anytime at",
  contentLinkText = "email@eveandroque.com",

  contentLink = {
    href: "#",
  },

  visibility = true,
}) {
  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "component_detail_card")}
      tag="div"
    >
      <Block
        className={_utils.cx(_styles, "component_detail_icon-wrap")}
        tag="div"
      >
        <Image
          className={_utils.cx(_styles, "component_detail_icon")}
          loading="lazy"
          width="32"
          height="32"
          alt=""
          src={mediaImage}
        />
      </Block>
      <Block className={_utils.cx(_styles, "spacer-medium")} tag="div" />
      <Heading
        className={_utils.cx(_styles, "heading-style-h4", "text-weight-medium")}
        tag="h2"
      >
        {contentHeading}
      </Heading>
      <Block className={_utils.cx(_styles, "spacer-xsmall")} tag="div" />
      <Block className={_utils.cx(_styles, "opacity-50")} tag="div">
        <Paragraph
          className={_utils.cx(_styles, "component_detail_description")}
        >
          {contentDescription}
        </Paragraph>
      </Block>
      <Block className={_utils.cx(_styles, "spacer-xsmall")} tag="div" />
      <Link
        className={_utils.cx(_styles, "component_detail_link")}
        button={false}
        block=""
        options={contentLink}
      >
        {contentLinkText}
      </Link>
    </_Component>
  ) : null;
}
