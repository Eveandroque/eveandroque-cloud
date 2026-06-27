"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";
import DOM from "./webflow_modules/Builtin/components/DOM";
import FormCheckboxInput from "./webflow_modules/Form/components/FormCheckboxInput";
import FormCheckboxWrapper from "./webflow_modules/Form/components/FormCheckboxWrapper";
import FormInlineLabel from "./webflow_modules/Form/components/FormInlineLabel";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import NotSupported from "./webflow_modules/Builtin/components/NotSupported";
import Span from "./webflow_modules/Basic/components/Span";

export function PopupComp({}) {
  return (
    <Block
      className={_utils.cx(_styles, "pop-filter")}
      id={_utils.cx(_styles, "pop_element")}
      tag={"div"}
    >
      <Block
        className={_utils.cx(_styles, "div-block")}
        filters--wrapper={""}
        tag={"div"}
      >
        <HtmlEmbed
          className={_utils.cx(_styles, "icon-em", "close-btn")}
          close-popup={""}
          content={
            '<svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="#CCCCCC"/>\n</svg>'
          }
        />
        <Block
          className={_utils.cx(_styles, "pop-filter--container")}
          tag={"div"}
        >
          <Block className={_utils.cx(_styles, "filter-tx")} tag={"div"}>
            <Block className={_utils.cx(_styles, "_w-600")} tag={"div"}>
              {"Filters"}
            </Block>
          </Block>
          <Block
            className={_utils.cx(_styles, "v-fx", "g-24", "brder-btm")}
            filter-container={""}
            tag={"div"}
          >
            <Block
              className={_utils.cx(_styles, "t-s-20", "_w-500")}
              tag={"div"}
            >
              {"General Filters"}
            </Block>
            <Block
              className={_utils.cx(_styles, "filter-height--container")}
              filter--container={""}
              tag={"div"}
            >
              <Block
                className={_utils.cx(_styles, "filter-item-container")}
                tag={"div"}
              >
                <NotSupported _atom={"Collection List"} />
              </Block>
              <DOM
                btn={"show-all"}
                className={_utils.cx(_styles, "show-more--btn")}
                tag={"a"}
              >
                <Block
                  className={_utils.cx(_styles, "show-all-tx", "g-4ch")}
                  tag={"div"}
                >
                  <Block tag={"div"}>{"Show all"}</Block>
                </Block>
                <HtmlEmbed
                  className={_utils.cx(_styles, "icon-em")}
                  content={
                    '<svg width="0.875rem" height="0.875rem" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M7.00018 8.93106L10.3724 5.55969L9.75381 4.94019L7.00018 7.69381L4.24743 4.94019L3.62793 5.55969L7.00018 8.93106Z" fill="black"/>\n</svg>'
                  }
                />
                <Block
                  className={_utils.cx(_styles, "hide-filter-tx")}
                  tag={"div"}
                >
                  {"Hide"}
                </Block>
              </DOM>
            </Block>
          </Block>
          <Block
            className={_utils.cx(_styles, "v-fx", "g-24", "brder-btm")}
            filter-container={""}
            tag={"div"}
          >
            <Block
              className={_utils.cx(_styles, "t-s-20", "_w-500")}
              tag={"div"}
            >
              {"Style"}
            </Block>
            <Block
              className={_utils.cx(_styles, "filter-height--container")}
              filter--container={""}
              tag={"div"}
            >
              <Block
                className={_utils.cx(_styles, "filter-item-container")}
                filter-height={"container"}
                tag={"div"}
              >
                <NotSupported _atom={"Collection List"} />
              </Block>
              <DOM
                btn={"show-all"}
                className={_utils.cx(_styles, "show-more--btn")}
                tag={"a"}
              >
                <Block
                  className={_utils.cx(_styles, "show-all-tx", "g-4ch")}
                  tag={"div"}
                >
                  <Block tag={"div"}>{"Show all"}</Block>
                </Block>
                <HtmlEmbed
                  className={_utils.cx(_styles, "icon-em")}
                  content={
                    '<svg width="0.875rem" height="0.875rem" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M7.00018 8.93106L10.3724 5.55969L9.75381 4.94019L7.00018 7.69381L4.24743 4.94019L3.62793 5.55969L7.00018 8.93106Z" fill="black"/>\n</svg>'
                  }
                />
                <Block
                  className={_utils.cx(_styles, "hide-filter-tx")}
                  tag={"div"}
                >
                  {"Hide"}
                </Block>
              </DOM>
            </Block>
          </Block>
          <Block
            className={_utils.cx(_styles, "v-fx", "g-24", "brder-btm")}
            filter-container={""}
            tag={"div"}
          >
            <Block
              className={_utils.cx(_styles, "t-s-20", "_w-500")}
              tag={"div"}
            >
              {"Search Area"}
            </Block>
            <Block
              className={_utils.cx(_styles, "filter-height--container")}
              filter--container={""}
              tag={"div"}
            >
              <Block
                className={_utils.cx(_styles, "filter-item-container")}
                tag={"div"}
              >
                <NotSupported _atom={"Collection List"} />
              </Block>
              <DOM
                btn={"show-all"}
                className={_utils.cx(_styles, "show-more--btn")}
                tag={"a"}
              >
                <Block
                  className={_utils.cx(_styles, "show-all-tx", "g-4ch")}
                  tag={"div"}
                >
                  <Block tag={"div"}>{"Show all"}</Block>
                </Block>
                <HtmlEmbed
                  className={_utils.cx(_styles, "icon-em")}
                  content={
                    '<svg width="0.875rem" height="0.875rem" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M7.00018 8.93106L10.3724 5.55969L9.75381 4.94019L7.00018 7.69381L4.24743 4.94019L3.62793 5.55969L7.00018 8.93106Z" fill="black"/>\n</svg>'
                  }
                />
                <Block
                  className={_utils.cx(_styles, "hide-filter-tx")}
                  tag={"div"}
                >
                  {"Hide"}
                </Block>
              </DOM>
            </Block>
          </Block>
          <Block
            className={_utils.cx(_styles, "v-fx", "g-24", "brder-btm")}
            filter-container={""}
            tag={"div"}
          >
            <Block
              className={_utils.cx(_styles, "t-s-20", "_w-500")}
              tag={"div"}
            >
              {"Scenic Views"}
            </Block>
            <NotSupported _atom={"Collection List"} />
          </Block>
          <Block
            className={_utils.cx(_styles, "v-fx", "g-24", "brder-btm")}
            filter-container={""}
            tag={"div"}
          >
            <Block
              className={_utils.cx(_styles, "t-s-20", "_w-500")}
              tag={"div"}
            >
              {"Parking"}
            </Block>
            <NotSupported _atom={"Collection List"} />
          </Block>
          <Block
            className={_utils.cx(_styles, "v-fx", "g-24", "brder-btm")}
            filter-container={""}
            tag={"div"}
          >
            <Block
              className={_utils.cx(_styles, "t-s-20", "_w-500")}
              tag={"div"}
            >
              {"Outdoor Features & Entertainment"}
            </Block>
            <Block
              className={_utils.cx(_styles, "filter-height--container")}
              filter--container={""}
              tag={"div"}
            >
              <Block
                className={_utils.cx(_styles, "filter-item-container")}
                tag={"div"}
              >
                <NotSupported _atom={"Collection List"} />
              </Block>
              <DOM
                btn={"show-all"}
                className={_utils.cx(_styles, "show-more--btn")}
                tag={"a"}
              >
                <Block
                  className={_utils.cx(_styles, "show-all-tx", "g-4ch")}
                  tag={"div"}
                >
                  <Block tag={"div"}>{"Show all"}</Block>
                </Block>
                <Block
                  className={_utils.cx(_styles, "hide-filter-tx")}
                  tag={"div"}
                >
                  {"Hide"}
                </Block>
                <HtmlEmbed
                  className={_utils.cx(_styles, "icon-em")}
                  content={
                    '<svg width="0.875rem" height="0.875rem" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M7.00018 8.93106L10.3724 5.55969L9.75381 4.94019L7.00018 7.69381L4.24743 4.94019L3.62793 5.55969L7.00018 8.93106Z" fill="black"/>\n</svg>'
                  }
                />
              </DOM>
            </Block>
          </Block>
          <Block
            className={_utils.cx(_styles, "v-fx", "g-24", "brder-btm")}
            filter-container={""}
            tag={"div"}
          >
            <Block
              className={_utils.cx(_styles, "t-s-20", "_w-500")}
              tag={"div"}
            >
              {"Indoor Features & Entertainment"}
            </Block>
            <Block
              className={_utils.cx(_styles, "filter-height--container")}
              filter--container={""}
              tag={"div"}
            >
              <Block
                className={_utils.cx(_styles, "filter-item-container")}
                tag={"div"}
              >
                <NotSupported _atom={"Collection List"} />
              </Block>
              <DOM
                btn={"show-all"}
                className={_utils.cx(_styles, "show-more--btn")}
                tag={"a"}
              >
                <Block
                  className={_utils.cx(_styles, "show-all-tx", "g-4ch")}
                  tag={"div"}
                >
                  <Block tag={"div"}>{"Show all"}</Block>
                </Block>
                <HtmlEmbed
                  className={_utils.cx(_styles, "icon-em")}
                  content={
                    '<svg width="0.875rem" height="0.875rem" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M7.00018 8.93106L10.3724 5.55969L9.75381 4.94019L7.00018 7.69381L4.24743 4.94019L3.62793 5.55969L7.00018 8.93106Z" fill="black"/>\n</svg>'
                  }
                />
                <Block
                  className={_utils.cx(_styles, "hide-filter-tx")}
                  tag={"div"}
                >
                  {"Hide"}
                </Block>
              </DOM>
            </Block>
          </Block>
          <Block
            className={_utils.cx(_styles, "v-fx", "g-24", "brder-btm")}
            filter-container={""}
            tag={"div"}
          >
            <Block
              className={_utils.cx(_styles, "t-s-20", "_w-500")}
              tag={"div"}
            >
              {"Pool & Spa"}
            </Block>
            <Block
              className={_utils.cx(_styles, "filter-height--container")}
              filter--container={""}
              tag={"div"}
            >
              <Block
                className={_utils.cx(_styles, "filter-item-container")}
                tag={"div"}
              >
                <NotSupported _atom={"Collection List"} />
              </Block>
              <DOM
                btn={"show-all"}
                className={_utils.cx(_styles, "show-more--btn")}
                tag={"a"}
              >
                <Block
                  className={_utils.cx(_styles, "show-all-tx", "g-4ch")}
                  tag={"div"}
                >
                  <Block tag={"div"}>{"Show all"}</Block>
                </Block>
                <HtmlEmbed
                  className={_utils.cx(_styles, "icon-em")}
                  content={
                    '<svg width="0.875rem" height="0.875rem" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M7.00018 8.93106L10.3724 5.55969L9.75381 4.94019L7.00018 7.69381L4.24743 4.94019L3.62793 5.55969L7.00018 8.93106Z" fill="black"/>\n</svg>'
                  }
                />
                <Block
                  className={_utils.cx(_styles, "hide-filter-tx")}
                  tag={"div"}
                >
                  {"Hide"}
                </Block>
              </DOM>
            </Block>
          </Block>
          <Block
            className={_utils.cx(_styles, "v-fx", "g-24", "brder-btm")}
            filter-container={""}
            tag={"div"}
          >
            <Block
              className={_utils.cx(_styles, "t-s-20", "_w-500")}
              tag={"div"}
            >
              {"Rules/Allows"}
            </Block>
            <Block
              className={_utils.cx(_styles, "filter-height--container")}
              filter--container={""}
              tag={"div"}
            >
              <Block
                className={_utils.cx(
                  _styles,
                  "filter-item-container",
                  "short-list"
                )}
                tag={"div"}
              >
                <NotSupported _atom={"Collection List"} />
              </Block>
              <DOM
                btn={"show-all"}
                className={_utils.cx(_styles, "show-more--btn", "hidebtn")}
                tag={"a"}
              >
                <Block
                  className={_utils.cx(_styles, "h-fx", "g-4ch")}
                  tag={"div"}
                >
                  <Block tag={"div"}>{"Show all"}</Block>
                  <Block tag={"div"}>{"(5+)"}</Block>
                </Block>
                <HtmlEmbed
                  className={_utils.cx(_styles, "icon-em")}
                  content={
                    '<svg width="0.875rem" height="0.875rem" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M7.00018 8.93106L10.3724 5.55969L9.75381 4.94019L7.00018 7.69381L4.24743 4.94019L3.62793 5.55969L7.00018 8.93106Z" fill="black"/>\n</svg>'
                  }
                />
              </DOM>
            </Block>
          </Block>
        </Block>
        <Block
          className={_utils.cx(_styles, "filter-btn--wrapper")}
          tag={"div"}
        >
          <DOM
            className={_utils.cx(_styles, "clear--btn")}
            fs-list-element={"clear"}
            tag={"a"}
          >
            <Block tag={"div"}>{"Clear all"}</Block>
          </DOM>
          <DOM
            className={_utils.cx(_styles, "show--list")}
            close-filer={"btn"}
            close-popup={""}
            tag={"a"}
          >
            <Block tag={"div"}>
              <Span>{"Show "}</Span>
              <Span
                className={_utils.cx(_styles, "filter-items--number")}
                fs-list-element={"results-count"}
                item-num={""}
              >
                {"4"}
              </Span>
              <Span>{" lisitngs"}</Span>
            </Block>
            <HtmlEmbed
              className={_utils.cx(_styles, "icon-em")}
              content={
                '<svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M3 12.013L20.789 12M14.012 19L21 12L14.012 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>'
              }
            />
          </DOM>
        </Block>
      </Block>
      <Block
        className={_utils.cx(_styles, "close--area")}
        close-popup={""}
        tag={"div"}
      />
    </Block>
  );
}
