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
import { Blurb } from "./Blurb";

export function MultiLoaded({
  bgPallete = true,
  buttonSettingsButtonText1 = "Search Property",
  buttonSettingsButtonText2 = "Contact Us",

  buttonSettingsLink1 = {
    href: "#",
  },

  buttonSettingsLink2 = {
    href: "#",
  },

  componentPerksBlurbList,
  contentDescription = "At Eve & Roque, we believe that every great story deserves an equally great setting. Our portfolio features a handpicked selection of high-end homes in iconic locations.",
  contentHeading = (
    <>
      {"Experience the Art of "}
      {" Locations"}
    </>
  ),
  imageVisibility = true,
  mediaHeroImage = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/6791aa2ada0145366077cecc_perks-hero.webp",
  placeholderPlaceholderVisibility = true,
  visibility = true,
}) {
  return (
    <Section
      className={_utils.cx(_styles, "component_perks_section")}
      grid={{
        type: "section",
      }}
      tag={"section"}
    >
      <Block
        className={_utils.cx(_styles, "background-color-pale")}
        tag={"div"}
      >
        <Block
          className={_utils.cx(_styles, "component_perks_headline")}
          tag={"div"}
        >
          <Block className={_utils.cx(_styles, "padding-global")} tag={"div"}>
            <Block
              className={_utils.cx(_styles, "container-large")}
              tag={"div"}
            >
              <Block
                className={_utils.cx(_styles, "component_perks_headline_wrap")}
                tag={"div"}
              >
                <Block
                  className={_utils.cx(
                    _styles,
                    "component_perks_headline-item"
                  )}
                  tag={"div"}
                >
                  <Block
                    className={_utils.cx(_styles, "component_perks_heading")}
                    tag={"div"}
                  >
                    <Heading tag={"h2"}>{contentHeading}</Heading>
                  </Block>
                </Block>
                <Block
                  className={_utils.cx(
                    _styles,
                    "component_perks_headline-item"
                  )}
                  tag={"div"}
                >
                  <Block
                    className={_utils.cx(_styles, "component_perks_content")}
                    tag={"div"}
                  >
                    <Paragraph>{contentDescription}</Paragraph>
                    <Block
                      className={_utils.cx(
                        _styles,
                        "spacer-xsmall",
                        "hide-tablet"
                      )}
                      tag={"div"}
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "spacer-small",
                        "hide-tablet"
                      )}
                      tag={"div"}
                    />
                    <Block
                      className={_utils.cx(
                        _styles,
                        "button-group",
                        "hide-tablet"
                      )}
                      tag={"div"}
                    >
                      <Link
                        block={"inline"}
                        button={false}
                        className={_utils.cx(_styles, "button", "is-icon")}
                        options={buttonSettingsLink1}
                      >
                        <Block tag={"div"}>{buttonSettingsButtonText1}</Block>
                        <HtmlEmbed
                          className={_utils.cx(_styles, "icon-1x1-small")}
                          content={
                            '<svg aria-hidden="true" fill="currentColor" role="img" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg"><title>Arrow Right</title><polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"/></svg>'
                          }
                        />
                      </Link>
                      <Link
                        block={"inline"}
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "button",
                          "is-icon",
                          "is-secondary"
                        )}
                        options={buttonSettingsLink2}
                      >
                        <Block tag={"div"}>{buttonSettingsButtonText2}</Block>
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
            </Block>
          </Block>
        </Block>
      </Block>
      {visibility ? (
        <Block
          className={_utils.cx(_styles, "background-color-muted")}
          tag={"div"}
        />
      ) : null}
      {bgPallete ? (
        <Block
          className={_utils.cx(_styles, "background-color-pale")}
          tag={"div"}
        >
          <Block
            className={_utils.cx(_styles, "component_perks_hero")}
            tag={"div"}
          >
            <Block className={_utils.cx(_styles, "padding-global")} tag={"div"}>
              <Block
                className={_utils.cx(_styles, "container-large")}
                tag={"div"}
              >
                <Block
                  className={_utils.cx(
                    _styles,
                    "component_perks_hero_image-wrap"
                  )}
                  tag={"div"}
                >
                  {imageVisibility ? (
                    <Image
                      alt={""}
                      className={_utils.cx(
                        _styles,
                        "component_perks_hero_image"
                      )}
                      height={"532"}
                      loading={"lazy"}
                      src={mediaHeroImage}
                      width={"1376"}
                    />
                  ) : null}
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      ) : null}
    </Section>
  );
}
