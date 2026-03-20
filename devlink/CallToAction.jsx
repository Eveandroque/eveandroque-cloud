"use client";
import React from "react";
import Section from "./_Builtin/Section";
import Block from "./_Builtin/Block";
import Heading from "./_Builtin/Heading";
import Paragraph from "./_Builtin/Paragraph";
import Link from "./_Builtin/Link";
import HtmlEmbed from "./_Builtin/HtmlEmbed";
import Image from "./_Builtin/Image";
import * as _utils from "./utils";
import _styles from "./CallToAction.module.css";

export function CallToAction({
  as: _Component = Section,
  contentHeading = (
    <>
      {"Full Service Property "}
      {" With Us"}
    </>
  ),
  contentDescription = "Experience seamless property ownership with our comprehensive property management services. We handle every aspect of managing your property, from tenant screening and lease management to maintenance and financial reporting.",
  buttonSettingsText = "Partner With Us",

  buttonSettingsLink = {
    href: "#",
  },

  mediaImage = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67903da5f6345c6fd1770408_call-to-action.webp",
}) {
  return;
}
