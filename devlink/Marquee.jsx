"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import Image from "./webflow_modules/Basic/components/Image";
import Section from "./webflow_modules/Layout/components/Section";

export function Marquee({}) {
  return (
    <Section
      className={_utils.cx(_styles, "component_marquee_section")}
      grid={{
        type: "section",
      }}
      tag={"section"}
    >
      <Block className={_utils.cx(_styles, "padding-small")} tag={"div"}>
        <Block className={_utils.cx(_styles, "padding-global")} tag={"div"}>
          <Block className={_utils.cx(_styles, "container-large")} tag={"div"}>
            <Block
              className={_utils.cx(_styles, "component_marquee_wrap-box")}
              tag={"div"}
            >
              <Block
                className={_utils.cx(
                  _styles,
                  "component_marquee_wrap-item",
                  "is-heading"
                )}
                tag={"div"}
              >
                <Block
                  className={_utils.cx(
                    _styles,
                    "component_marquee_heading_wrap"
                  )}
                  tag={"div"}
                >
                  <Heading
                    className={_utils.cx(_styles, "heading-style-h5")}
                    tag={"h2"}
                  >
                    {"Trusted by the world's top companies"}
                  </Heading>
                </Block>
              </Block>
              <Block
                className={_utils.cx(_styles, "component_marquee_wrap-item")}
                tag={"div"}
              >
                <Block
                  className={_utils.cx(_styles, "component_marquee_track")}
                  tag={"div"}
                >
                  <Block
                    className={_utils.cx(_styles, "marquee-fadeblock", "left")}
                    tag={"div"}
                  />
                  <Block
                    className={_utils.cx(_styles, "component_marquee_list")}
                    tag={"div"}
                  >
                    <Image
                      alt={""}
                      className={_utils.cx(_styles, "component_marquee_logo")}
                      height={"93"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/682ca9be0e14e43be2dcd146_ysl.webp"
                      }
                      width={"143"}
                    />
                    <Image
                      alt={""}
                      className={_utils.cx(_styles, "component_marquee_logo")}
                      height={"45"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/682ca9bd6efca33222e80fd5_Daco_6124842%201.png"
                      }
                      width={"75"}
                    />
                    <Image
                      alt={""}
                      className={_utils.cx(_styles, "component_marquee_logo")}
                      height={"66"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/682ca9bd45ae44308550a52c_image%2036.webp"
                      }
                      width={"144"}
                    />
                    <Image
                      alt={""}
                      className={_utils.cx(_styles, "component_marquee_logo")}
                      height={"69"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/682ca9bd5f0a26b92e37de7e_AD.webp"
                      }
                      width={"98"}
                    />
                    <Image
                      alt={""}
                      className={_utils.cx(_styles, "component_marquee_logo")}
                      height={"54"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/682ca9bde78d5434841e0a43_appleTV.webp"
                      }
                      width={"114"}
                    />
                    <Image
                      alt={""}
                      className={_utils.cx(_styles, "component_marquee_logo")}
                      height={"54"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/682ca9bde78d5434841e0a57_Mask%20group-1.png"
                      }
                      width={"114"}
                    />
                  </Block>
                  <Block
                    className={_utils.cx(_styles, "component_marquee_list")}
                    tag={"div"}
                  >
                    <Image
                      alt={""}
                      className={_utils.cx(_styles, "component_marquee_logo")}
                      height={"93"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/682ca9be0e14e43be2dcd146_ysl.webp"
                      }
                      width={"143"}
                    />
                    <Image
                      alt={""}
                      className={_utils.cx(_styles, "component_marquee_logo")}
                      height={"45"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/682ca9bd6efca33222e80fd5_Daco_6124842%201.png"
                      }
                      width={"75"}
                    />
                    <Image
                      alt={""}
                      className={_utils.cx(_styles, "component_marquee_logo")}
                      height={"66"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/682ca9bd45ae44308550a52c_image%2036.webp"
                      }
                      width={"144"}
                    />
                    <Image
                      alt={""}
                      className={_utils.cx(_styles, "component_marquee_logo")}
                      height={"69"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/682ca9bd5f0a26b92e37de7e_AD.webp"
                      }
                      width={"98"}
                    />
                    <Image
                      alt={""}
                      className={_utils.cx(_styles, "component_marquee_logo")}
                      height={"54"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/682ca9bde78d5434841e0a43_appleTV.webp"
                      }
                      width={"114"}
                    />
                    <Image
                      alt={""}
                      className={_utils.cx(_styles, "component_marquee_logo")}
                      height={"54"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/682ca9bde78d5434841e0a57_Mask%20group-1.png"
                      }
                      width={"114"}
                    />
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Section>
  );
}
