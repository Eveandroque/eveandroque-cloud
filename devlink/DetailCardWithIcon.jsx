"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import Image from "./webflow_modules/Basic/components/Image";
import Link from "./webflow_modules/Basic/components/Link";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";

export function DetailCardWithIcon({
  contentDescription = "Reach us anytime at",
  contentHeading = "Email",

  contentLink = {
    href: "#",
  },

  contentLinkText = "email@eveandroque.com",
  mediaImage = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67932fde2aacfee182b5f29a_email.svg",
  visibility = true,
}) {
  return visibility ? (
    <Block className={_utils.cx(_styles, "component_detail_card")} tag={"div"}>
      <Block
        className={_utils.cx(_styles, "component_detail_icon-wrap")}
        tag={"div"}
      >
        <Image
          alt={""}
          className={_utils.cx(_styles, "component_detail_icon")}
          height={"32"}
          loading={"lazy"}
          src={mediaImage}
          width={"32"}
        />
      </Block>
      <Block className={_utils.cx(_styles, "spacer-medium")} tag={"div"} />
      <Heading
        className={_utils.cx(_styles, "heading-style-h4", "text-weight-medium")}
        tag={"h2"}
      >
        {contentHeading}
      </Heading>
      <Block className={_utils.cx(_styles, "spacer-xsmall")} tag={"div"} />
      <Block className={_utils.cx(_styles, "opacity-50")} tag={"div"}>
        <Paragraph
          className={_utils.cx(_styles, "component_detail_description")}
        >
          {contentDescription}
        </Paragraph>
      </Block>
      <Block className={_utils.cx(_styles, "spacer-xsmall")} tag={"div"} />
      <Link
        block={""}
        button={false}
        className={_utils.cx(_styles, "component_detail_link")}
        options={contentLink}
      >
        {contentLinkText}
      </Link>
    </Block>
  ) : null;
}
