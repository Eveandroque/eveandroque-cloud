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
import { StepsCard } from "./StepsCard";
import { Subheading } from "./Subheading";

export function Hero({
  buttonSettingsButton1Link = {
    href: "#",
  },

  buttonSettingsButton1Text = "Work With Us",

  buttonSettingsButton2Link = {
    href: "#",
  },

  buttonSettingsButton2Text = "Contact Us",
  ctaVisibility = true,
  descriptionSettingsDescription1Text = "Join us in showcasing your properties to a wider audience. We’ll do the heavy lifting",
  descriptionSettingsDescription1Visibility = true,
  descriptionSettingsDescription2Text = "Partner with us to elevate your property listings to the next level. Our platform ensures maximum visibility, connects you with the ideal audience, and drives unparalleled results in the competitive real estate market. Let’s work together to showcase your properties with excellence and achieve your goals.",
  descriptionSettingsDescription2Visibility = true,
  easyStepsConnnect = true,
  headingSettingsHeadingSpanClass = "text-family-secondary",
  headingSettingsHeadingTag = "h2",
  headingSettingsHeadingText = "Partner with Us for Perfect ",
  mediaImage = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67957fc16dd73c3cfa734452_partner-with-perfect-listing.webp",
  sectionSettingsLayout = "Default",
  sectionVisibility = true,
  stepCard1SettingsStep1Description = "Submit your property details for a seamless start",
  stepCard1SettingsStep1DescriptionVisibility = true,
  stepCard1SettingsStep1Heading = "Get Started",
  stepCard1SettingsStep1Icon = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67957d2c2fff9eb25450c60e_rocket.svg",
  stepCard1SettingsStep1RichTextDescription = "",
  stepCard1SettingsStep1RichTextDescriptionVisibility = false,
  stepCard2SettingsStep2Description = "Reach out for partnership opportunities and support.",
  stepCard2SettingsStep2DescriptionVisibility = true,
  stepCard2SettingsStep2Heading = "Stay Connected",
  stepCard2SettingsStep2Icon = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67957d2c31d6597a645cade6_link.svg",
  stepCard2SettingsStep2RichTextDescription = "",
  stepCard2SettingsStep2RichTextDescriptionVisibility = false,
  subheadingSettingsColourVariant = "Base",
  subheadingSettingsSubheadingText = "Real Estate Partner",
  subheadingSettingsSubheadingVisibility = false,
  text = "We make sourcing film locations effortless. ",
  textVisibility = true,
}) {
  const _styleVariantMap = {
    Default: "",
    Reversed: "w-variant-0e63dcb7-f785-52ec-d2db-4619b21372cc",
  };

  const _activeStyleVariant = _styleVariantMap[sectionSettingsLayout];

  return sectionVisibility ? (
    <Section
      className={_utils.cx(
        _styles,
        "component_hero_section",
        _activeStyleVariant
      )}
      grid={{
        type: "section",
      }}
      tag={"section"}
    >
      <Block
        className={_utils.cx(
          _styles,
          "padding-section-large",
          _activeStyleVariant
        )}
        tag={"div"}
      >
        <Block
          className={_utils.cx(_styles, "padding-global", _activeStyleVariant)}
          tag={"div"}
        >
          <Block
            className={_utils.cx(
              _styles,
              "container-large",
              _activeStyleVariant
            )}
            tag={"div"}
          >
            <Block
              className={_utils.cx(
                _styles,
                "component_hero_list",
                _activeStyleVariant
              )}
              tag={"div"}
            >
              <Block
                className={_utils.cx(
                  _styles,
                  "component_hero_list_item",
                  _activeStyleVariant
                )}
                tag={"div"}
              >
                <Block
                  className={_utils.cx(
                    _styles,
                    "component_hero_content",
                    _activeStyleVariant
                  )}
                  tag={"div"}
                >
                  <Block
                    className={_utils.cx(
                      _styles,
                      "button-group",
                      _activeStyleVariant
                    )}
                    tag={"div"}
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
                    tag={"div"}
                  />
                  <Block
                    className={_utils.cx(
                      _styles,
                      "component_hero_heading",
                      _activeStyleVariant
                    )}
                    tag={"div"}
                  >
                    <Heading
                      data-span_style={headingSettingsHeadingSpanClass}
                      tag={headingSettingsHeadingTag}
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
                      tag={"div"}
                    />
                  ) : null}
                  {descriptionSettingsDescription1Visibility ? (
                    <Block
                      className={_utils.cx(
                        _styles,
                        "component_hero_description",
                        _activeStyleVariant
                      )}
                      tag={"div"}
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
                    tag={"div"}
                  />
                  {easyStepsConnnect ? (
                    <Block tag={"div"}>
                      <Block
                        className={_utils.cx(
                          _styles,
                          "component_hero_connect_wrap",
                          _activeStyleVariant
                        )}
                        tag={"div"}
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
                        tag={"div"}
                      />
                      <Block
                        className={_utils.cx(
                          _styles,
                          "spacer-small",
                          _activeStyleVariant
                        )}
                        tag={"div"}
                      />
                      <Block
                        className={_utils.cx(
                          _styles,
                          "component_hero_step_list",
                          _activeStyleVariant
                        )}
                        tag={"div"}
                      >
                        <Block
                          className={_utils.cx(
                            _styles,
                            "component_hero_step_list-item",
                            _activeStyleVariant
                          )}
                          tag={"div"}
                        >
                          <StepsCard
                            contentDescription={
                              stepCard1SettingsStep1Description
                            }
                            contentHeading={stepCard1SettingsStep1Heading}
                            contentRichTextDescription={
                              stepCard1SettingsStep1RichTextDescription
                            }
                            contentRichTextDescriptionVisibility={
                              stepCard1SettingsStep1RichTextDescriptionVisibility
                            }
                            contentSimpleDescriptionVisibility={
                              stepCard1SettingsStep1DescriptionVisibility
                            }
                            mediaImage={stepCard1SettingsStep1Icon}
                          />
                        </Block>
                        <Block
                          className={_utils.cx(
                            _styles,
                            "component_hero_step_list-item",
                            "is-arrow",
                            _activeStyleVariant
                          )}
                          tag={"div"}
                        >
                          <Image
                            alt={""}
                            className={_utils.cx(
                              _styles,
                              "component_hero_step_arrow",
                              _activeStyleVariant
                            )}
                            height={"12"}
                            loading={"lazy"}
                            src={
                              "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67957df4caa1631e8c84388f_broken-arrow.svg"
                            }
                            width={"34"}
                          />
                        </Block>
                        <Block
                          className={_utils.cx(
                            _styles,
                            "component_hero_step_list-item",
                            _activeStyleVariant
                          )}
                          tag={"div"}
                        >
                          <StepsCard
                            contentDescription={
                              stepCard2SettingsStep2Description
                            }
                            contentHeading={stepCard2SettingsStep2Heading}
                            contentRichTextDescription={
                              stepCard2SettingsStep2RichTextDescription
                            }
                            contentRichTextDescriptionVisibility={
                              stepCard2SettingsStep2RichTextDescriptionVisibility
                            }
                            contentSimpleDescriptionVisibility={
                              stepCard2SettingsStep2DescriptionVisibility
                            }
                            mediaImage={stepCard2SettingsStep2Icon}
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
                    tag={"div"}
                  />
                  <Block
                    className={_utils.cx(
                      _styles,
                      "component_hero_description",
                      "flx",
                      _activeStyleVariant
                    )}
                    tag={"div"}
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
                      tag={"div"}
                    />
                  ) : null}
                  {descriptionSettingsDescription2Visibility ? (
                    <Block
                      className={_utils.cx(
                        _styles,
                        "spacer-xsmall",
                        _activeStyleVariant
                      )}
                      tag={"div"}
                    />
                  ) : null}
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
                        _activeStyleVariant
                      )}
                      options={buttonSettingsButton1Link}
                    >
                      <Block tag={"div"}>{buttonSettingsButton1Text}</Block>
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
                    {ctaVisibility ? (
                      <Link
                        block={"inline"}
                        button={false}
                        className={_utils.cx(
                          _styles,
                          "button",
                          "is-icon",
                          "is-secondary",
                          _activeStyleVariant
                        )}
                        options={buttonSettingsButton2Link}
                      >
                        <Block tag={"div"}>{buttonSettingsButton2Text}</Block>
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
                tag={"div"}
              >
                <Block
                  className={_utils.cx(
                    _styles,
                    "component_hero_image_wrap",
                    _activeStyleVariant
                  )}
                  tag={"div"}
                >
                  <Image
                    alt={""}
                    className={_utils.cx(
                      _styles,
                      "component_hero_image",
                      _activeStyleVariant
                    )}
                    height={"757"}
                    loading={"lazy"}
                    src={mediaImage}
                    width={"598"}
                  />
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Section>
  ) : null;
}
