"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Link from "./webflow_modules/Basic/components/Link";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import Section from "./webflow_modules/Layout/components/Section";
import Span from "./webflow_modules/Basic/components/Span";

export function Faq({ componentFaqList }) {
  return (
    <Section
      className={_utils.cx(_styles, "component_faq_section")}
      grid={{
        type: "section",
      }}
      tag={"section"}
    >
      <Block
        className={_utils.cx(_styles, "padding-section-large")}
        tag={"div"}
      >
        <Block className={_utils.cx(_styles, "padding-global")} tag={"div"}>
          <Block className={_utils.cx(_styles, "container-large")} tag={"div"}>
            <Block
              className={_utils.cx(_styles, "component_faq_headline_wrap")}
              tag={"div"}
            >
              <Heading tag={"h2"}>
                {"Frequently Asked "}
                <Span className={_utils.cx(_styles, "text-family-secondary")}>
                  {"Questions"}
                </Span>
              </Heading>
              <Block
                className={_utils.cx(_styles, "spacer-small")}
                tag={"div"}
              />
              <Paragraph>
                {
                  "Join us in showcasing your properties to a wider audience. We’ll do the heavy lifting"
                }
              </Paragraph>
            </Block>
            <Block
              className={_utils.cx(_styles, "spacer-xlarge")}
              tag={"div"}
            />
            <Block
              className={_utils.cx(_styles, "component_faq_list_wrap")}
              tag={"div"}
            >
              {componentFaqList}
            </Block>
            <Block className={_utils.cx(_styles, "spacer-large")} tag={"div"} />
            <Block
              className={_utils.cx(_styles, "spacer-medium")}
              tag={"div"}
            />
            <Block
              className={_utils.cx(_styles, "button-group", "is-center")}
              tag={"div"}
            >
              <Link
                block={"inline"}
                button={false}
                className={_utils.cx(_styles, "button", "is-icon")}
                options={{
                  href: "#",
                }}
              >
                <Block tag={"div"}>{"Partner With Us"}</Block>
                <HtmlEmbed
                  className={_utils.cx(_styles, "icon-1x1-small")}
                  content={
                    '<svg aria-hidden="true" fill="currentColor" role="img" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg"><title>Arrow Right</title><polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"/></svg>'
                  }
                />
              </Link>
            </Block>
          </Block>
        </Block>
      </Block>
    </Section>
  );
}
