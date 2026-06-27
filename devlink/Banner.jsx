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
import { Subheading } from "./Subheading";

export function Banner({
  buttonSettingsLink = {
    href: "#",
  },

  contentDescription = "Unlock opportunities to showcase your properties to a wider audience while partnering with us to achieve mutual growth and long-term success in the ever-evolving real estate market.",
  contentHeading = "Partner with Us to Build Your ",
  contentSubheading = "Subheading",
  contentText = "Work With Us",
  displaySettingsOverlayVisibility = true,
  mediaImage = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/679335bb84a80558ae112039_work-banner.webp",
  variant = "Default Content Width",
}) {
  const _styleVariantMap = {
    "Default Content Width": "",
    "Small Content Width": "w-variant-a64af305-9cc9-a7d7-996c-3bb3e0cc79dc",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <Section
      className={_utils.cx(
        _styles,
        "component_banner_section",
        _activeStyleVariant
      )}
      grid={{
        type: "section",
      }}
      tag={"section"}
    >
      <Block
        className={_utils.cx(_styles, "padding-global", _activeStyleVariant)}
        tag={"div"}
      >
        <Block
          className={_utils.cx(_styles, "container-large", _activeStyleVariant)}
          tag={"div"}
        >
          <Block
            className={_utils.cx(
              _styles,
              "component_banner_wrap",
              _activeStyleVariant
            )}
            tag={"div"}
          >
            <Image
              alt={""}
              className={_utils.cx(
                _styles,
                "component_banner_image",
                _activeStyleVariant
              )}
              height={"680"}
              loading={"eager"}
              src={mediaImage}
              width={"1376"}
            />
            {displaySettingsOverlayVisibility ? (
              <Block
                className={_utils.cx(
                  _styles,
                  "component_banner_overlay",
                  _activeStyleVariant
                )}
                tag={"div"}
              />
            ) : null}
            <Block
              className={_utils.cx(
                _styles,
                "component_banner_content-wrap",
                _activeStyleVariant
              )}
              tag={"div"}
            >
              <Block
                className={_utils.cx(
                  _styles,
                  "component_banner_content",
                  _activeStyleVariant
                )}
                tag={"div"}
              >
                <Block
                  className={_utils.cx(
                    _styles,
                    "button-group",
                    "is-subheading",
                    _activeStyleVariant
                  )}
                  tag={"div"}
                >
                  <Subheading
                    contentText={contentSubheading}
                    variant={"Dark"}
                  />
                </Block>
                <Block
                  className={_utils.cx(
                    _styles,
                    "spacer-small",
                    _activeStyleVariant
                  )}
                  tag={"div"}
                />
                <Heading
                  className={_utils.cx(
                    _styles,
                    "heading-style-h2",
                    _activeStyleVariant
                  )}
                  tag={"h1"}
                >
                  {contentHeading}
                </Heading>
                <Block
                  className={_utils.cx(
                    _styles,
                    "spacer-small",
                    _activeStyleVariant
                  )}
                  tag={"div"}
                />
                <Paragraph>{contentDescription}</Paragraph>
                <Block
                  className={_utils.cx(
                    _styles,
                    "spacer-medium",
                    _activeStyleVariant
                  )}
                  tag={"div"}
                />
                <Block
                  className={_utils.cx(
                    _styles,
                    "button-group",
                    _activeStyleVariant
                  )}
                  tag={"div"}
                >
                  <Link
                    block={"inline"}
                    button={false}
                    className={_utils.cx(
                      _styles,
                      "button",
                      "is-icon",
                      "is-inversed",
                      _activeStyleVariant
                    )}
                    options={buttonSettingsLink}
                  >
                    <Block tag={"div"}>{contentText}</Block>
                    <HtmlEmbed
                      className={_utils.cx(
                        _styles,
                        "icon-1x1-small",
                        _activeStyleVariant
                      )}
                      content={
                        '<svg aria-hidden="true" fill="currentColor" role="img" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg"><title>Arrow Right</title><polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"/></svg>'
                      }
                    />
                  </Link>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Section>
  );
}
