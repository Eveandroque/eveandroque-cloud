"use client";
import React from "react";
import Section from "./_Builtin/Section";
import Block from "./_Builtin/Block";
import Heading from "./_Builtin/Heading";
import Image from "./_Builtin/Image";
import * as _utils from "./utils";
import _styles from "./Marquee.module.css";

export function Marquee({ as: _Component = Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "component_marquee_section")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <Block className={_utils.cx(_styles, "padding-small")} tag="div">
        <Block className={_utils.cx(_styles, "padding-global")} tag="div">
          <Block className={_utils.cx(_styles, "container-large")} tag="div">
            <Block
              className={_utils.cx(_styles, "component_marquee_wrap-box")}
              tag="div"
            >
              <Block
                className={_utils.cx(
                  _styles,
                  "component_marquee_wrap-item",
                  "is-heading"
                )}
                tag="div"
              >
                <Block
                  className={_utils.cx(
                    _styles,
                    "component_marquee_heading_wrap"
                  )}
                  tag="div"
                >
                  <Heading
                    className={_utils.cx(_styles, "heading-style-h5")}
                    tag="h2"
                  >
                    {"Trusted by the world's top companies"}
                  </Heading>
                </Block>
              </Block>
              <Block
                className={_utils.cx(_styles, "component_marquee_wrap-item")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "component_marquee_track")}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(_styles, "marquee-fadeblock", "left")}
                    tag="div"
                  />
                  <Block
                    className={_utils.cx(_styles, "component_marquee_list")}
                    tag="div"
                  >
                    <Image
                      className={_utils.cx(_styles, "component_marquee_logo")}
                      loading="lazy"
                      width="143"
                      height="93"
                      alt=""
                      src="https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/682ca9be0e14e43be2dcd146_ysl.webp"
                    />
                    <Image
                      className={_utils.cx(_styles, "component_marquee_logo")}
                      loading="lazy"
                      width="75"
                      height="45"
                      alt=""
                      src="https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/682ca9bd6efca33222e80fd5_Daco_6124842%201.png"
                    />
                    <Image
                      className={_utils.cx(_styles, "component_marquee_logo")}
                      loading="lazy"
                      width="144"
                      height="66"
                      alt=""
                      src="https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/682ca9bd45ae44308550a52c_image%2036.webp"
                    />
                    <Image
                      className={_utils.cx(_styles, "component_marquee_logo")}
                      loading="lazy"
                      width="98"
                      height="69"
                      alt=""
                      src="https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/682ca9bd5f0a26b92e37de7e_AD.webp"
                    />
                    <Image
                      className={_utils.cx(_styles, "component_marquee_logo")}
                      loading="lazy"
                      width="114"
                      height="54"
                      alt=""
                      src="https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/682ca9bde78d5434841e0a43_appleTV.webp"
                    />
                    <Image
                      className={_utils.cx(_styles, "component_marquee_logo")}
                      loading="lazy"
                      width="114"
                      height="54"
                      alt=""
                      src="https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/682ca9bde78d5434841e0a57_Mask%20group-1.png"
                    />
                  </Block>
                  <Block
                    className={_utils.cx(_styles, "component_marquee_list")}
                    tag="div"
                  >
                    <Image
                      className={_utils.cx(_styles, "component_marquee_logo")}
                      loading="lazy"
                      width="143"
                      height="93"
                      alt=""
                      src="https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/682ca9be0e14e43be2dcd146_ysl.webp"
                    />
                    <Image
                      className={_utils.cx(_styles, "component_marquee_logo")}
                      loading="lazy"
                      width="75"
                      height="45"
                      alt=""
                      src="https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/682ca9bd6efca33222e80fd5_Daco_6124842%201.png"
                    />
                    <Image
                      className={_utils.cx(_styles, "component_marquee_logo")}
                      loading="lazy"
                      width="144"
                      height="66"
                      alt=""
                      src="https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/682ca9bd45ae44308550a52c_image%2036.webp"
                    />
                    <Image
                      className={_utils.cx(_styles, "component_marquee_logo")}
                      loading="lazy"
                      width="98"
                      height="69"
                      alt=""
                      src="https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/682ca9bd5f0a26b92e37de7e_AD.webp"
                    />
                    <Image
                      className={_utils.cx(_styles, "component_marquee_logo")}
                      loading="lazy"
                      width="114"
                      height="54"
                      alt=""
                      src="https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/682ca9bde78d5434841e0a43_appleTV.webp"
                    />
                    <Image
                      className={_utils.cx(_styles, "component_marquee_logo")}
                      loading="lazy"
                      width="114"
                      height="54"
                      alt=""
                      src="https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/682ca9bde78d5434841e0a57_Mask%20group-1.png"
                    />
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </_Component>
  );
}
