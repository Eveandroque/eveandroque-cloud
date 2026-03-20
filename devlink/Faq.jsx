"use client";
import React from "react";
import Section from "./_Builtin/Section";
import Block from "./_Builtin/Block";
import Heading from "./_Builtin/Heading";
import Span from "./_Builtin/Span";
import Paragraph from "./_Builtin/Paragraph";
import Link from "./_Builtin/Link";
import HtmlEmbed from "./_Builtin/HtmlEmbed";
import * as _utils from "./utils";
import _styles from "./Faq.module.css";

export function Faq({ as: _Component = Section, componentFaqList }) {
  return (
    <_Component
      className={_utils.cx(_styles, "component_faq_section")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <Block className={_utils.cx(_styles, "padding-section-large")} tag="div">
        <Block className={_utils.cx(_styles, "padding-global")} tag="div">
          <Block className={_utils.cx(_styles, "container-large")} tag="div">
            <Block
              className={_utils.cx(_styles, "component_faq_headline_wrap")}
              tag="div"
            >
              <Heading tag="h2">
                {"Frequently Asked "}
                <Span className={_utils.cx(_styles, "text-family-secondary")}>
                  {"Questions"}
                </Span>
              </Heading>
              <Block className={_utils.cx(_styles, "spacer-small")} tag="div" />
              <Paragraph>
                {
                  "Join us in showcasing your properties to a wider audience. We’ll do the heavy lifting"
                }
              </Paragraph>
            </Block>
            <Block className={_utils.cx(_styles, "spacer-xlarge")} tag="div" />
            <Block
              className={_utils.cx(_styles, "component_faq_list_wrap")}
              tag="div"
            >
              {componentFaqList}
            </Block>
            <Block className={_utils.cx(_styles, "spacer-large")} tag="div" />
            <Block className={_utils.cx(_styles, "spacer-medium")} tag="div" />
            <Block
              className={_utils.cx(_styles, "button-group", "is-center")}
              tag="div"
            >
              <Link
                className={_utils.cx(_styles, "button", "is-icon")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <Block tag="div">{"Partner With Us"}</Block>
                <HtmlEmbed
                  className={_utils.cx(_styles, "icon-1x1-small")}
                  content=""
                  value="%3Csvg%20aria-hidden%3D%22true%22%20fill%3D%22currentColor%22%20role%3D%22img%22%20viewBox%3D%220%200%2020%2021%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EArrow%20Right%3C%2Ftitle%3E%3Cpolygon%20points%3D%2216.172%209%2010.101%202.929%2011.515%201.515%2020%2010%2019.293%2010.707%2011.515%2018.485%2010.101%2017.071%2016.172%2011%200%2011%200%209%22%2F%3E%3C%2Fsvg%3E"
                />
              </Link>
            </Block>
          </Block>
        </Block>
      </Block>
    </_Component>
  );
}
