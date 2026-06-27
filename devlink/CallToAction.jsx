"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Image from "./webflow_modules/Basic/components/Image";
import Link from "./webflow_modules/Basic/components/Link";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import Section from "./webflow_modules/Layout/components/Section";

export function CallToAction({
  buttonSettingsLink = {
    href: "#",
  },

  buttonSettingsText = "Partner With Us",
  contentDescription = "Experience seamless property ownership with our comprehensive property management services. We handle every aspect of managing your property, from tenant screening and lease management to maintenance and financial reporting.",
  contentHeading = (
    <>
      {"Full Service Property "}
      {" With Us"}
    </>
  ),
  mediaImage = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67903da5f6345c6fd1770408_call-to-action.webp",
}) {
  return null;
}
