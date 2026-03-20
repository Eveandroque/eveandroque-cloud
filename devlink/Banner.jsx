"use client";
import React from "react";
import Section from "./_Builtin/Section";
import Block from "./_Builtin/Block";
import Image from "./_Builtin/Image";
import Heading from "./_Builtin/Heading";
import Paragraph from "./_Builtin/Paragraph";
import Link from "./_Builtin/Link";
import HtmlEmbed from "./_Builtin/HtmlEmbed";
import { Subheading } from "./Subheading";
import * as _utils from "./utils";
import _styles from "./Banner.module.css";

export function Banner({
  as: _Component = Section,
  mediaImage = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/679335bb84a80558ae112039_work-banner.webp",
  displaySettingsOverlayVisibility = true,
  contentHeading = "Partner with Us to Build Your ",
  contentSubheading = "Subheading",
  contentDescription = "Unlock opportunities to showcase your properties to a wider audience while partnering with us to achieve mutual growth and long-term success in the ever-evolving real estate market.",

  buttonSettingsLink = {
    href: "#",
  },

  contentText = "Work With Us",
  variant = "Default Content Width",
}) {
  const _styleVariantMap = {
    "Default Content Width": "",
    "Small Content Width": "w-variant-a64af305-9cc9-a7d7-996c-3bb3e0cc79dc",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "component_banner_section",
        _activeStyleVariant
      )}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <Block
        className={_utils.cx(_styles, "padding-global", _activeStyleVariant)}
        tag="div"
      >
        <Block
          className={_utils.cx(_styles, "container-large", _activeStyleVariant)}
          tag="div"
        >
          <Block
            className={_utils.cx(
              _styles,
              "component_banner_wrap",
              _activeStyleVariant
            )}
            tag="div"
          >
            <Image
              className={_utils.cx(
                _styles,
                "component_banner_image",
                _activeStyleVariant
              )}
              loading="eager"
              width="1376"
              height="680"
              alt=""
              src={mediaImage}
            />
            {displaySettingsOverlayVisibility ? (
              <Block
                className={_utils.cx(
                  _styles,
                  "component_banner_overlay",
                  _activeStyleVariant
                )}
                tag="div"
              />
            ) : null}
            <Block
              className={_utils.cx(
                _styles,
                "component_banner_content-wrap",
                _activeStyleVariant
              )}
              tag="div"
            >
              <Block
                className={_utils.cx(
                  _styles,
                  "component_banner_content",
                  _activeStyleVariant
                )}
                tag="div"
              >
                <Block
                  className={_utils.cx(
                    _styles,
                    "button-group",
                    "is-subheading",
                    _activeStyleVariant
                  )}
                  tag="div"
                >
                  <Subheading contentText={contentSubheading} variant="Dark" />
                </Block>
                <Block
                  className={_utils.cx(
                    _styles,
                    "spacer-small",
                    _activeStyleVariant
                  )}
                  tag="div"
                />
                <Heading
                  className={_utils.cx(
                    _styles,
                    "heading-style-h2",
                    _activeStyleVariant
                  )}
                  tag="h1"
                >
                  {contentHeading}
                </Heading>
                <Block
                  className={_utils.cx(
                    _styles,
                    "spacer-small",
                    _activeStyleVariant
                  )}
                  tag="div"
                />
                <Paragraph>{contentDescription}</Paragraph>
                <Block
                  className={_utils.cx(
                    _styles,
                    "spacer-medium",
                    _activeStyleVariant
                  )}
                  tag="div"
                />
                <Block
                  className={_utils.cx(
                    _styles,
                    "button-group",
                    _activeStyleVariant
                  )}
                  tag="div"
                >
                  <Link
                    className={_utils.cx(
                      _styles,
                      "button",
                      "is-icon",
                      "is-inversed",
                      _activeStyleVariant
                    )}
                    button={false}
                    block="inline"
                    options={buttonSettingsLink}
                  >
                    <Block tag="div">{contentText}</Block>
                    <HtmlEmbed
                      className={_utils.cx(
                        _styles,
                        "icon-1x1-small",
                        _activeStyleVariant
                      )}
                      content=""
                      value="%3Csvg%20aria-hidden%3D%22true%22%20fill%3D%22currentColor%22%20role%3D%22img%22%20viewBox%3D%220%200%2020%2021%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EArrow%20Right%3C%2Ftitle%3E%3Cpolygon%20points%3D%2216.172%209%2010.101%202.929%2011.515%201.515%2020%2010%2019.293%2010.707%2011.515%2018.485%2010.101%2017.071%2016.172%2011%200%2011%200%209%22%2F%3E%3C%2Fsvg%3E"
                    />
                  </Link>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </_Component>
  );
}
