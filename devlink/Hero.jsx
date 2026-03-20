"use client";
import React from "react";
import Section from "./_Builtin/Section";
import Block from "./_Builtin/Block";
import Heading from "./_Builtin/Heading";
import Paragraph from "./_Builtin/Paragraph";
import Image from "./_Builtin/Image";
import Link from "./_Builtin/Link";
import HtmlEmbed from "./_Builtin/HtmlEmbed";
import { Subheading } from "./Subheading";
import { StepsCard } from "./StepsCard";
import * as _utils from "./utils";
import _styles from "./Hero.module.css";

export function Hero({
  as: _Component = Section,
  sectionSettingsLayout = "Default",
  mediaImage = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67957fc16dd73c3cfa734452_partner-with-perfect-listing.webp",
  subheadingSettingsSubheadingText = "Real Estate Partner",
  subheadingSettingsColourVariant = "Default",
  subheadingSettingsSubheadingVisibility = false,
  headingSettingsHeadingText = "Partner with Us for Perfect ",
  headingSettingsHeadingTag = "h2",
  headingSettingsHeadingSpanClass = "text-family-secondary",
  stepCard1SettingsStep1Icon = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67957d2c2fff9eb25450c60e_rocket.svg",
  stepCard1SettingsStep1Heading = "Get Started",
  stepCard1SettingsStep1DescriptionVisibility = true,
  stepCard1SettingsStep1Description = "Submit your property details for a seamless start",
  stepCard2SettingsStep2Icon = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67957d2c31d6597a645cade6_link.svg",
  stepCard2SettingsStep2Heading = "Stay Connected",
  stepCard2SettingsStep2DescriptionVisibility = true,
  stepCard2SettingsStep2Description = "Reach out for partnership opportunities and support.",
  descriptionSettingsDescription1Visibility = true,
  descriptionSettingsDescription1Text = "Join us in showcasing your properties to a wider audience. We’ll do the heavy lifting",
  descriptionSettingsDescription2Text = "Partner with us to elevate your property listings to the next level. Our platform ensures maximum visibility, connects you with the ideal audience, and drives unparalleled results in the competitive real estate market. Let’s work together to showcase your properties with excellence and achieve your goals.",
  descriptionSettingsDescription2Visibility = true,

  buttonSettingsButton1Link = {
    href: "#",
  },

  buttonSettingsButton1Text = "Work With Us",

  buttonSettingsButton2Link = {
    href: "#",
  },

  buttonSettingsButton2Text = "Contact Us",
  sectionVisibility = true,
  easyStepsConnnect = true,
  ctaVisibility = true,
  textVisibility = true,
  text = "We make sourcing film locations effortless. ",
  stepCard2SettingsStep2RichTextDescriptionVisibility = false,
  stepCard2SettingsStep2RichTextDescription = "",
  stepCard1SettingsStep1RichTextDescriptionVisibility = false,
  stepCard1SettingsStep1RichTextDescription = "",
}) {
  const _styleVariantMap = {
    Default: "",
    Reversed: "w-variant-0e63dcb7-f785-52ec-d2db-4619b21372cc",
  };

  const _activeStyleVariant = _styleVariantMap[sectionSettingsLayout];

  return sectionVisibility ? (
    <_Component
      className={_utils.cx(
        _styles,
        "component_hero_section",
        _activeStyleVariant
      )}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <Block
        className={_utils.cx(
          _styles,
          "padding-section-large",
          _activeStyleVariant
        )}
        tag="div"
      >
        <Block
          className={_utils.cx(_styles, "padding-global", _activeStyleVariant)}
          tag="div"
        >
          <Block
            className={_utils.cx(
              _styles,
              "container-large",
              _activeStyleVariant
            )}
            tag="div"
          >
            <Block
              className={_utils.cx(
                _styles,
                "component_hero_list",
                _activeStyleVariant
              )}
              tag="div"
            >
              <Block
                className={_utils.cx(
                  _styles,
                  "component_hero_list_item",
                  _activeStyleVariant
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-_36ccb6dd-9e28-d430-f101-5f4f058d4a36-058d4a31"
                )}
                tag="div"
              >
                <Block
                  className={_utils.cx(
                    _styles,
                    "component_hero_content",
                    _activeStyleVariant
                  )}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(
                      _styles,
                      "button-group",
                      _activeStyleVariant
                    )}
                    tag="div"
                  >
                    <Subheading
                      contentText={subheadingSettingsSubheadingText}
                      variant={subheadingSettingsColourVariant}
                    />
                  </Block>
                  <Block
                    className={_utils.cx(
                      _styles,
                      "spacer-small",
                      _activeStyleVariant
                    )}
                    tag="div"
                  />
                  <Block
                    className={_utils.cx(
                      _styles,
                      "component_hero_heading",
                      _activeStyleVariant
                    )}
                    tag="div"
                  >
                    <Heading
                      tag={headingSettingsHeadingTag}
                      data-span_style={headingSettingsHeadingSpanClass}
                    >
                      {headingSettingsHeadingText}
                    </Heading>
                  </Block>
                  {descriptionSettingsDescription1Visibility ? (
                    <Block
                      className={_utils.cx(
                        _styles,
                        "spacer-small",
                        _activeStyleVariant
                      )}
                      tag="div"
                    />
                  ) : null}
                  {descriptionSettingsDescription1Visibility ? (
                    <Block
                      className={_utils.cx(
                        _styles,
                        "component_hero_description",
                        _activeStyleVariant
                      )}
                      tag="div"
                    >
                      <Paragraph>
                        {descriptionSettingsDescription1Text}
                      </Paragraph>
                    </Block>
                  ) : null}
                  <Block
                    className={_utils.cx(
                      _styles,
                      "spacer-xlarge",
                      _activeStyleVariant
                    )}
                    tag="div"
                  />
                  {easyStepsConnnect ? (
                    <Block tag="div">
                      <Block
                        className={_utils.cx(
                          _styles,
                          "component_hero_connect_wrap",
                          _activeStyleVariant
                        )}
                        tag="div"
                      >
                        <Paragraph
                          className={_utils.cx(
                            _styles,
                            "text-size-medium",
                            "text-weight-medium",
                            _activeStyleVariant
                          )}
                        >
                          {"Easy steps to connect"}
                        </Paragraph>
                      </Block>
                      <Block
                        className={_utils.cx(
                          _styles,
                          "spacer-xsmall",
                          _activeStyleVariant
                        )}
                        tag="div"
                      />
                      <Block
                        className={_utils.cx(
                          _styles,
                          "spacer-small",
                          _activeStyleVariant
                        )}
                        tag="div"
                      />
                      <Block
                        className={_utils.cx(
                          _styles,
                          "component_hero_step_list",
                          _activeStyleVariant
                        )}
                        tag="div"
                      >
                        <Block
                          className={_utils.cx(
                            _styles,
                            "component_hero_step_list-item",
                            _activeStyleVariant
                          )}
                          tag="div"
                        >
                          <StepsCard
                            mediaImage={stepCard1SettingsStep1Icon}
                            contentHeading={stepCard1SettingsStep1Heading}
                            contentDescription={
                              stepCard1SettingsStep1Description
                            }
                            contentSimpleDescriptionVisibility={
                              stepCard1SettingsStep1DescriptionVisibility
                            }
                            contentRichTextDescriptionVisibility={
                              stepCard1SettingsStep1RichTextDescriptionVisibility
                            }
                            contentRichTextDescription={
                              stepCard1SettingsStep1RichTextDescription
                            }
                          />
                        </Block>
                        <Block
                          className={_utils.cx(
                            _styles,
                            "component_hero_step_list-item",
                            "is-arrow",
                            _activeStyleVariant
                          )}
                          tag="div"
                        >
                          <Image
                            className={_utils.cx(
                              _styles,
                              "component_hero_step_arrow",
                              _activeStyleVariant
                            )}
                            loading="lazy"
                            width="34"
                            height="12"
                            alt=""
                            src="https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67957df4caa1631e8c84388f_broken-arrow.svg"
                          />
                        </Block>
                        <Block
                          className={_utils.cx(
                            _styles,
                            "component_hero_step_list-item",
                            _activeStyleVariant
                          )}
                          tag="div"
                        >
                          <StepsCard
                            mediaImage={stepCard2SettingsStep2Icon}
                            contentHeading={stepCard2SettingsStep2Heading}
                            contentDescription={
                              stepCard2SettingsStep2Description
                            }
                            contentSimpleDescriptionVisibility={
                              stepCard2SettingsStep2DescriptionVisibility
                            }
                            contentRichTextDescription={
                              stepCard2SettingsStep2RichTextDescription
                            }
                            contentRichTextDescriptionVisibility={
                              stepCard2SettingsStep2RichTextDescriptionVisibility
                            }
                          />
                        </Block>
                      </Block>
                    </Block>
                  ) : null}
                  <Block
                    className={_utils.cx(
                      _styles,
                      "spacer-huge",
                      _activeStyleVariant
                    )}
                    tag="div"
                  />
                  <Block
                    className={_utils.cx(
                      _styles,
                      "component_hero_description",
                      "flx",
                      _activeStyleVariant
                    )}
                    tag="div"
                  >
                    {textVisibility ? (
                      <Paragraph
                        className={_utils.cx(
                          _styles,
                          "paragraph",
                          _activeStyleVariant
                        )}
                      >
                        {text}
                      </Paragraph>
                    ) : null}
                    <Paragraph>{descriptionSettingsDescription2Text}</Paragraph>
                  </Block>
                  {descriptionSettingsDescription2Visibility ? (
                    <Block
                      className={_utils.cx(
                        _styles,
                        "spacer-small",
                        _activeStyleVariant
                      )}
                      tag="div"
                    />
                  ) : null}
                  {descriptionSettingsDescription2Visibility ? (
                    <Block
                      className={_utils.cx(
                        _styles,
                        "spacer-xsmall",
                        _activeStyleVariant
                      )}
                      tag="div"
                    />
                  ) : null}
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
                        _activeStyleVariant
                      )}
                      button={false}
                      block="inline"
                      options={buttonSettingsButton1Link}
                    >
                      <Block tag="div">{buttonSettingsButton1Text}</Block>
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
                    {ctaVisibility ? (
                      <Link
                        className={_utils.cx(
                          _styles,
                          "button",
                          "is-icon",
                          "is-secondary",
                          _activeStyleVariant
                        )}
                        button={false}
                        block="inline"
                        options={buttonSettingsButton2Link}
                      >
                        <Block tag="div">{buttonSettingsButton2Text}</Block>
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
                    ) : null}
                  </Block>
                </Block>
              </Block>
              <Block
                className={_utils.cx(
                  _styles,
                  "component_hero_list_item",
                  _activeStyleVariant
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-_36ccb6dd-9e28-d430-f101-5f4f058d4a63-058d4a31"
                )}
                tag="div"
              >
                <Block
                  className={_utils.cx(
                    _styles,
                    "component_hero_image_wrap",
                    _activeStyleVariant
                  )}
                  tag="div"
                >
                  <Image
                    className={_utils.cx(
                      _styles,
                      "component_hero_image",
                      _activeStyleVariant
                    )}
                    loading="lazy"
                    width="598"
                    height="757"
                    alt=""
                    src={mediaImage}
                  />
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </_Component>
  ) : null;
}
