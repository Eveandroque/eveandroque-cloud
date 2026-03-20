"use client";
import React from "react";
import Section from "./_Builtin/Section";
import Block from "./_Builtin/Block";
import Heading from "./_Builtin/Heading";
import Span from "./_Builtin/Span";
import Paragraph from "./_Builtin/Paragraph";
import { SimpleCard } from "./SimpleCard";
import * as _utils from "./utils";
import _styles from "./HowItWorksSection.module.css";

export function HowItWorksSection({ as: _Component = Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "home_sticky_section")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <Block className={_utils.cx(_styles, "padding-section-large")} tag="div">
        <Block className={_utils.cx(_styles, "padding-global")} tag="div">
          <Block className={_utils.cx(_styles, "container-large")} tag="div">
            <Block
              className={_utils.cx(_styles, "home_sticky_list-track")}
              tag="div"
            >
              <Block
                className={_utils.cx(_styles, "home_sticky_list")}
                tag="div"
              >
                <Block
                  className={_utils.cx(_styles, "home_sticky_item")}
                  id={_utils.cx(
                    _styles,
                    "w-node-e47c355e-382a-a383-a11d-009a352502fa-352502f4"
                  )}
                  tag="div"
                >
                  <Block
                    className={_utils.cx(_styles, "home_sticky_content_wrap")}
                    tag="div"
                  >
                    <Block
                      className={_utils.cx(_styles, "home_sticky_content_item")}
                      tag="div"
                    >
                      <Heading tag="h2">
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
                        tag="div"
                      />
                      <Paragraph>
                        {
                          "Our service streamlines the process, making it easier for you to identify your perfect venue. With user-friendly features and dedicated support, we ensure a seamless experience from start to finish"
                        }
                      </Paragraph>
                      <Block
                        className={_utils.cx(_styles, "spacer-large")}
                        tag="div"
                      />
                      <Block
                        className={_utils.cx(_styles, "spacer-xsmall")}
                        tag="div"
                      />
                      <Block
                        className={_utils.cx(
                          _styles,
                          "home_sticky_list-text-wrapper"
                        )}
                        tag="div"
                        id="draggable-container"
                      >
                        <Block
                          className={_utils.cx(
                            _styles,
                            "home_sticky_list-text"
                          )}
                          tag="div"
                          id="draggable-menu"
                        >
                          <Block
                            className={_utils.cx(
                              _styles,
                              "home_sticky_list_text_item",
                              "is-1",
                              "is-darken"
                            )}
                            tag="div"
                            data-panel=".home_sticky_card-item.is-1"
                          >
                            <Block tag="div">{"01"}</Block>
                            <Block tag="div">{"Define your vision"}</Block>
                          </Block>
                          <Block
                            className={_utils.cx(
                              _styles,
                              "home_sticky_list_text_item",
                              "is-2"
                            )}
                            tag="div"
                            data-panel=".home_sticky_card-item.is-2"
                          >
                            <Block tag="div">{"02"}</Block>
                            <Block tag="div">{"Discover your space"}</Block>
                          </Block>
                          <Block
                            className={_utils.cx(
                              _styles,
                              "home_sticky_list_text_item",
                              "is-3"
                            )}
                            tag="div"
                            data-panel=".home_sticky_card-item.is-3"
                          >
                            <Block tag="div">{"03"}</Block>
                            <Block tag="div">{"Connect with us"}</Block>
                          </Block>
                          <Block
                            className={_utils.cx(
                              _styles,
                              "home_sticky_list_text_item",
                              "is-4"
                            )}
                            tag="div"
                            data-panel=".home_sticky_card-item.is-4"
                          >
                            <Block tag="div">{"04"}</Block>
                            <Block tag="div">
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
                  tag="div"
                >
                  <Block
                    className={_utils.cx(_styles, "home_sticky_image-list")}
                    tag="div"
                  >
                    <Block
                      className={_utils.cx(
                        _styles,
                        "home_sticky_card-item",
                        "is-1"
                      )}
                      tag="div"
                      data-text=".home_sticky_list_text_item.is-1"
                    >
                      <SimpleCard contentHeading="Define your vision" />
                    </Block>
                    <Block
                      className={_utils.cx(
                        _styles,
                        "home_sticky_card-item",
                        "is-2",
                        "hide-tablet"
                      )}
                      tag="div"
                      data-text=".home_sticky_list_text_item.is-2"
                    >
                      <SimpleCard settingsDesignViewConditionalDisplay="true" />
                    </Block>
                    <Block
                      className={_utils.cx(
                        _styles,
                        "home_sticky_card-item",
                        "is-3",
                        "hide-tablet"
                      )}
                      tag="div"
                      data-text=".home_sticky_list_text_item.is-3"
                    >
                      <SimpleCard
                        settingsDesignViewConditionalDisplay="true"
                        contentHeading="Connect with us"
                      />
                    </Block>
                    <Block
                      className={_utils.cx(
                        _styles,
                        "home_sticky_card-item",
                        "is-4",
                        "hide-tablet"
                      )}
                      tag="div"
                      data-text=".home_sticky_list_text_item.is-4"
                    >
                      <SimpleCard
                        contentHeading="Create Unforgettable Moments"
                        settingsDesignViewConditionalDisplay="true"
                      />
                    </Block>
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
