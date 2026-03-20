"use client";
import React from "react";
import Block from "./_Builtin/Block";
import HtmlEmbed from "./_Builtin/HtmlEmbed";
import NotSupported from "./_Builtin/NotSupported";
import FormCheckboxWrapper from "./_Builtin/FormCheckboxWrapper";
import FormCheckboxInput from "./_Builtin/FormCheckboxInput";
import FormInlineLabel from "./_Builtin/FormInlineLabel";
import DOM from "./_Builtin/DOM";
import Span from "./_Builtin/Span";
import { dynamoPlainTextToText } from "./values/DynamoGateway/dynamoPlainTextToText";
import { dynamoPlainTextToListOfElements } from "./values/DynamoGateway/dynamoPlainTextToListOfElements";
import * as _utils from "./utils";
import _styles from "./PopupComp.module.css";

export function PopupComp({ as: _Component = Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "pop-filter")}
      tag="div"
      id="pop_element"
    >
      <Block
        className={_utils.cx(_styles, "div-block")}
        tag="div"
        filters--wrapper=""
      >
        <HtmlEmbed
          className={_utils.cx(_styles, "icon-em", "close-btn")}
          content=""
          close-popup=""
          value="%3Csvg%20width%3D%221.5rem%22%20height%3D%221.5rem%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M6.4%2019L5%2017.6L10.6%2012L5%206.4L6.4%205L12%2010.6L17.6%205L19%206.4L13.4%2012L19%2017.6L17.6%2019L12%2013.4L6.4%2019Z%22%20fill%3D%22%23CCCCCC%22%2F%3E%0A%3C%2Fsvg%3E"
        />
        <Block
          className={_utils.cx(_styles, "pop-filter--container")}
          tag="div"
        >
          <Block className={_utils.cx(_styles, "filter-tx")} tag="div">
            <Block className={_utils.cx(_styles, "_w-600")} tag="div">
              {"Filters"}
            </Block>
          </Block>
          <Block
            className={_utils.cx(_styles, "v-fx", "g-24", "brder-btm")}
            tag="div"
            filter-container=""
          >
            <Block className={_utils.cx(_styles, "t-s-20", "_w-500")} tag="div">
              {"General Filters"}
            </Block>
            <Block
              className={_utils.cx(_styles, "filter-height--container")}
              tag="div"
              filter--container=""
            >
              <Block
                className={_utils.cx(_styles, "filter-item-container")}
                tag="div"
              >
                <NotSupported _atom="DynamoWrapper" />
              </Block>
              <DOM
                className={_utils.cx(_styles, "show-more--btn")}
                tag="a"
                slot=""
                btn="show-all"
              >
                <Block
                  className={_utils.cx(_styles, "show-all-tx", "g-4ch")}
                  tag="div"
                >
                  <Block tag="div">{"Show all"}</Block>
                </Block>
                <HtmlEmbed
                  className={_utils.cx(_styles, "icon-em")}
                  content=""
                  value="%3Csvg%20width%3D%220.875rem%22%20height%3D%220.875rem%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.00018%208.93106L10.3724%205.55969L9.75381%204.94019L7.00018%207.69381L4.24743%204.94019L3.62793%205.55969L7.00018%208.93106Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <Block
                  className={_utils.cx(_styles, "hide-filter-tx")}
                  tag="div"
                >
                  {"Hide"}
                </Block>
              </DOM>
            </Block>
          </Block>
          <Block
            className={_utils.cx(_styles, "v-fx", "g-24", "brder-btm")}
            tag="div"
            filter-container=""
          >
            <Block className={_utils.cx(_styles, "t-s-20", "_w-500")} tag="div">
              {"Style"}
            </Block>
            <Block
              className={_utils.cx(_styles, "filter-height--container")}
              tag="div"
              filter--container=""
            >
              <Block
                className={_utils.cx(_styles, "filter-item-container")}
                tag="div"
                filter-height="container"
              >
                <NotSupported _atom="DynamoWrapper" />
              </Block>
              <DOM
                className={_utils.cx(_styles, "show-more--btn")}
                tag="a"
                slot=""
                btn="show-all"
              >
                <Block
                  className={_utils.cx(_styles, "show-all-tx", "g-4ch")}
                  tag="div"
                >
                  <Block tag="div">{"Show all"}</Block>
                </Block>
                <HtmlEmbed
                  className={_utils.cx(_styles, "icon-em")}
                  content=""
                  value="%3Csvg%20width%3D%220.875rem%22%20height%3D%220.875rem%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.00018%208.93106L10.3724%205.55969L9.75381%204.94019L7.00018%207.69381L4.24743%204.94019L3.62793%205.55969L7.00018%208.93106Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <Block
                  className={_utils.cx(_styles, "hide-filter-tx")}
                  tag="div"
                >
                  {"Hide"}
                </Block>
              </DOM>
            </Block>
          </Block>
          <Block
            className={_utils.cx(_styles, "v-fx", "g-24", "brder-btm")}
            tag="div"
            filter-container=""
          >
            <Block className={_utils.cx(_styles, "t-s-20", "_w-500")} tag="div">
              {"Search Area"}
            </Block>
            <Block
              className={_utils.cx(_styles, "filter-height--container")}
              tag="div"
              filter--container=""
            >
              <Block
                className={_utils.cx(_styles, "filter-item-container")}
                tag="div"
              >
                <NotSupported _atom="DynamoWrapper" />
              </Block>
              <DOM
                className={_utils.cx(_styles, "show-more--btn")}
                tag="a"
                slot=""
                btn="show-all"
              >
                <Block
                  className={_utils.cx(_styles, "show-all-tx", "g-4ch")}
                  tag="div"
                >
                  <Block tag="div">{"Show all"}</Block>
                </Block>
                <HtmlEmbed
                  className={_utils.cx(_styles, "icon-em")}
                  content=""
                  value="%3Csvg%20width%3D%220.875rem%22%20height%3D%220.875rem%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.00018%208.93106L10.3724%205.55969L9.75381%204.94019L7.00018%207.69381L4.24743%204.94019L3.62793%205.55969L7.00018%208.93106Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <Block
                  className={_utils.cx(_styles, "hide-filter-tx")}
                  tag="div"
                >
                  {"Hide"}
                </Block>
              </DOM>
            </Block>
          </Block>
          <Block
            className={_utils.cx(_styles, "v-fx", "g-24", "brder-btm")}
            tag="div"
            filter-container=""
          >
            <Block className={_utils.cx(_styles, "t-s-20", "_w-500")} tag="div">
              {"Scenic Views"}
            </Block>
            <NotSupported _atom="DynamoWrapper" />
          </Block>
          <Block
            className={_utils.cx(_styles, "v-fx", "g-24", "brder-btm")}
            tag="div"
            filter-container=""
          >
            <Block className={_utils.cx(_styles, "t-s-20", "_w-500")} tag="div">
              {"Parking"}
            </Block>
            <NotSupported _atom="DynamoWrapper" />
          </Block>
          <Block
            className={_utils.cx(_styles, "v-fx", "g-24", "brder-btm")}
            tag="div"
            filter-container=""
          >
            <Block className={_utils.cx(_styles, "t-s-20", "_w-500")} tag="div">
              {"Outdoor Features & Entertainment"}
            </Block>
            <Block
              className={_utils.cx(_styles, "filter-height--container")}
              tag="div"
              filter--container=""
            >
              <Block
                className={_utils.cx(_styles, "filter-item-container")}
                tag="div"
              >
                <NotSupported _atom="DynamoWrapper" />
              </Block>
              <DOM
                className={_utils.cx(_styles, "show-more--btn")}
                tag="a"
                slot=""
                btn="show-all"
              >
                <Block
                  className={_utils.cx(_styles, "show-all-tx", "g-4ch")}
                  tag="div"
                >
                  <Block tag="div">{"Show all"}</Block>
                </Block>
                <Block
                  className={_utils.cx(_styles, "hide-filter-tx")}
                  tag="div"
                >
                  {"Hide"}
                </Block>
                <HtmlEmbed
                  className={_utils.cx(_styles, "icon-em")}
                  content=""
                  value="%3Csvg%20width%3D%220.875rem%22%20height%3D%220.875rem%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.00018%208.93106L10.3724%205.55969L9.75381%204.94019L7.00018%207.69381L4.24743%204.94019L3.62793%205.55969L7.00018%208.93106Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </DOM>
            </Block>
          </Block>
          <Block
            className={_utils.cx(_styles, "v-fx", "g-24", "brder-btm")}
            tag="div"
            filter-container=""
          >
            <Block className={_utils.cx(_styles, "t-s-20", "_w-500")} tag="div">
              {"Indoor Features & Entertainment"}
            </Block>
            <Block
              className={_utils.cx(_styles, "filter-height--container")}
              tag="div"
              filter--container=""
            >
              <Block
                className={_utils.cx(_styles, "filter-item-container")}
                tag="div"
              >
                <NotSupported _atom="DynamoWrapper" />
              </Block>
              <DOM
                className={_utils.cx(_styles, "show-more--btn")}
                tag="a"
                slot=""
                btn="show-all"
              >
                <Block
                  className={_utils.cx(_styles, "show-all-tx", "g-4ch")}
                  tag="div"
                >
                  <Block tag="div">{"Show all"}</Block>
                </Block>
                <HtmlEmbed
                  className={_utils.cx(_styles, "icon-em")}
                  content=""
                  value="%3Csvg%20width%3D%220.875rem%22%20height%3D%220.875rem%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.00018%208.93106L10.3724%205.55969L9.75381%204.94019L7.00018%207.69381L4.24743%204.94019L3.62793%205.55969L7.00018%208.93106Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <Block
                  className={_utils.cx(_styles, "hide-filter-tx")}
                  tag="div"
                >
                  {"Hide"}
                </Block>
              </DOM>
            </Block>
          </Block>
          <Block
            className={_utils.cx(_styles, "v-fx", "g-24", "brder-btm")}
            tag="div"
            filter-container=""
          >
            <Block className={_utils.cx(_styles, "t-s-20", "_w-500")} tag="div">
              {"Pool & Spa"}
            </Block>
            <Block
              className={_utils.cx(_styles, "filter-height--container")}
              tag="div"
              filter--container=""
            >
              <Block
                className={_utils.cx(_styles, "filter-item-container")}
                tag="div"
              >
                <NotSupported _atom="DynamoWrapper" />
              </Block>
              <DOM
                className={_utils.cx(_styles, "show-more--btn")}
                tag="a"
                slot=""
                btn="show-all"
              >
                <Block
                  className={_utils.cx(_styles, "show-all-tx", "g-4ch")}
                  tag="div"
                >
                  <Block tag="div">{"Show all"}</Block>
                </Block>
                <HtmlEmbed
                  className={_utils.cx(_styles, "icon-em")}
                  content=""
                  value="%3Csvg%20width%3D%220.875rem%22%20height%3D%220.875rem%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.00018%208.93106L10.3724%205.55969L9.75381%204.94019L7.00018%207.69381L4.24743%204.94019L3.62793%205.55969L7.00018%208.93106Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <Block
                  className={_utils.cx(_styles, "hide-filter-tx")}
                  tag="div"
                >
                  {"Hide"}
                </Block>
              </DOM>
            </Block>
          </Block>
          <Block
            className={_utils.cx(_styles, "v-fx", "g-24", "brder-btm")}
            tag="div"
            filter-container=""
          >
            <Block className={_utils.cx(_styles, "t-s-20", "_w-500")} tag="div">
              {"Rules/Allows"}
            </Block>
            <Block
              className={_utils.cx(_styles, "filter-height--container")}
              tag="div"
              filter--container=""
            >
              <Block
                className={_utils.cx(
                  _styles,
                  "filter-item-container",
                  "short-list"
                )}
                tag="div"
              >
                <NotSupported _atom="DynamoWrapper" />
              </Block>
              <DOM
                className={_utils.cx(_styles, "show-more--btn", "hidebtn")}
                tag="a"
                slot=""
                btn="show-all"
              >
                <Block
                  className={_utils.cx(_styles, "h-fx", "g-4ch")}
                  tag="div"
                >
                  <Block tag="div">{"Show all"}</Block>
                  <Block tag="div">{"(5+)"}</Block>
                </Block>
                <HtmlEmbed
                  className={_utils.cx(_styles, "icon-em")}
                  content=""
                  value="%3Csvg%20width%3D%220.875rem%22%20height%3D%220.875rem%22%20viewBox%3D%220%200%2014%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.00018%208.93106L10.3724%205.55969L9.75381%204.94019L7.00018%207.69381L4.24743%204.94019L3.62793%205.55969L7.00018%208.93106Z%22%20fill%3D%22black%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </DOM>
            </Block>
          </Block>
        </Block>
        <Block className={_utils.cx(_styles, "filter-btn--wrapper")} tag="div">
          <DOM
            className={_utils.cx(_styles, "clear--btn")}
            tag="a"
            slot=""
            fs-list-element="clear"
          >
            <Block tag="div">{"Clear all"}</Block>
          </DOM>
          <DOM
            className={_utils.cx(_styles, "show--list")}
            tag="a"
            slot=""
            close-filer="btn"
            close-popup=""
          >
            <Block tag="div">
              <Span>{"Show "}</Span>
              <Span
                className={_utils.cx(_styles, "filter-items--number")}
                item-num=""
                fs-list-element="results-count"
              >
                {"4"}
              </Span>
              <Span>{" lisitngs"}</Span>
            </Block>
            <HtmlEmbed
              className={_utils.cx(_styles, "icon-em")}
              content=""
              value="%3Csvg%20width%3D%221.5rem%22%20height%3D%221.5rem%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3%2012.013L20.789%2012M14.012%2019L21%2012L14.012%205%22%20stroke%3D%22white%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
            />
          </DOM>
        </Block>
      </Block>
      <Block
        className={_utils.cx(_styles, "close--area")}
        tag="div"
        close-popup=""
      />
    </_Component>
  );
}
