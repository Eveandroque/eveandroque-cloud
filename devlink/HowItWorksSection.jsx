"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import Section from "./webflow_modules/Layout/components/Section";
import Span from "./webflow_modules/Basic/components/Span";
import { SimpleCard } from "./SimpleCard";

export function HowItWorksSection({}) {
  return (
    <Section
      className={_utils.cx(_styles, "home_sticky_section")}
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
              className={_utils.cx(_styles, "home_sticky_list-track")}
              tag={"div"}
            >
              <Block
                className={_utils.cx(_styles, "home_sticky_list")}
                tag={"div"}
              >
                <Block
                  className={_utils.cx(_styles, "home_sticky_item")}
                  tag={"div"}
                >
                  <Block
                    className={_utils.cx(_styles, "home_sticky_content_wrap")}
                    tag={"div"}
                  >
                    <Block
                      className={_utils.cx(_styles, "home_sticky_content_item")}
                      tag={"div"}
                    >
                      <Heading tag={"h2"}>
                        {"How It "}
                        <Span
                          className={_utils.cx(
                            _styles,
                            "text-family-secondary"
                          )}
                        >
                          {"Works"}
                        </Span>
                      </Heading>
                      <Block
                        className={_utils.cx(_styles, "spacer-small")}
                        tag={"div"}
                      />
                      <Paragraph>
                        {
                          "Our service streamlines the process, making it easier for you to identify your perfect venue. With user-friendly features and dedicated support, we ensure a seamless experience from start to finish"
                        }
                      </Paragraph>
                      <Block
                        className={_utils.cx(_styles, "spacer-large")}
                        tag={"div"}
                      />
                      <Block
                        className={_utils.cx(_styles, "spacer-xsmall")}
                        tag={"div"}
                      />
                      <Block
                        className={_utils.cx(
                          _styles,
                          "home_sticky_list-text-wrapper"
                        )}
                        id={_utils.cx(_styles, "draggable-container")}
                        tag={"div"}
                      >
                        <Block
                          className={_utils.cx(
                            _styles,
                            "home_sticky_list-text"
                          )}
                          id={_utils.cx(_styles, "draggable-menu")}
                          tag={"div"}
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "home_sticky_list_text_item",
                              "is-1",
                              "is-darken"
                            )}
                            data-panel={".home_sticky_card-item.is-1"}
                            tag={"div"}
                          >
                            <Block tag={"div"}>{"01"}</Block>
                            <Block tag={"div"}>{"Define your vision"}</Block>
                          </Block>
                          <Block
                            className={_utils.cx(
                              _styles,
                              "home_sticky_list_text_item",
                              "is-2"
                            )}
                            data-panel={".home_sticky_card-item.is-2"}
                            tag={"div"}
                          >
                            <Block tag={"div"}>{"02"}</Block>
                            <Block tag={"div"}>{"Discover your space"}</Block>
                          </Block>
                          <Block
                            className={_utils.cx(
                              _styles,
                              "home_sticky_list_text_item",
                              "is-3"
                            )}
                            data-panel={".home_sticky_card-item.is-3"}
                            tag={"div"}
                          >
                            <Block tag={"div"}>{"03"}</Block>
                            <Block tag={"div"}>{"Connect with us"}</Block>
                          </Block>
                          <Block
                            className={_utils.cx(
                              _styles,
                              "home_sticky_list_text_item",
                              "is-4"
                            )}
                            data-panel={".home_sticky_card-item.is-4"}
                            tag={"div"}
                          >
                            <Block tag={"div"}>{"04"}</Block>
                            <Block tag={"div"}>
                              {"Create Unforgettable Moments"}
                            </Block>
                          </Block>
                        </Block>
                      </Block>
                    </Block>
                  </Block>
                </Block>
                <Block
                  className={_utils.cx(_styles, "home_sticky_item")}
                  tag={"div"}
                >
                  <Block
                    className={_utils.cx(_styles, "home_sticky_image-list")}
                    tag={"div"}
                  >
                    <Block
                      className={_utils.cx(
                        _styles,
                        "home_sticky_card-item",
                        "is-1"
                      )}
                      data-text={".home_sticky_list_text_item.is-1"}
                      tag={"div"}
                    >
                      <SimpleCard contentHeading={"Define your vision"} />
                    </Block>
                    <Block
                      className={_utils.cx(
                        _styles,
                        "home_sticky_card-item",
                        "is-2",
                        "hide-tablet"
                      )}
                      data-text={".home_sticky_list_text_item.is-2"}
                      tag={"div"}
                    >
                      <SimpleCard
                        settingsDesignViewConditionalDisplay={"true"}
                      />
                    </Block>
                    <Block
                      className={_utils.cx(
                        _styles,
                        "home_sticky_card-item",
                        "is-3",
                        "hide-tablet"
                      )}
                      data-text={".home_sticky_list_text_item.is-3"}
                      tag={"div"}
                    >
                      <SimpleCard
                        contentHeading={"Connect with us"}
                        settingsDesignViewConditionalDisplay={"true"}
                      />
                    </Block>
                    <Block
                      className={_utils.cx(
                        _styles,
                        "home_sticky_card-item",
                        "is-4",
                        "hide-tablet"
                      )}
                      data-text={".home_sticky_list_text_item.is-4"}
                      tag={"div"}
                    >
                      <SimpleCard
                        contentHeading={"Create Unforgettable Moments"}
                        settingsDesignViewConditionalDisplay={"true"}
                      />
                    </Block>
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
