"use client";
import React from "react";
import Block from "./_Builtin/Block";
import Image from "./_Builtin/Image";
import Heading from "./_Builtin/Heading";
import Paragraph from "./_Builtin/Paragraph";
import * as _utils from "./utils";
import _styles from "./LocationTab.module.css";

export function LocationTab({
  as: _Component = Block,
  image = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67919d71d4216d482f837e17_new-york.webp",
  location = "New York",
  bookedByBrand = "Netflix",
  story = "Where ambition meets atmosphere. Eve & Roque curates striking backdrops that not only support your story—but amplify it",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "home_tabbed_component")}
      tag="div"
    >
      <Block className={_utils.cx(_styles, "home_tabbed_image-wrap")} tag="div">
        <Image
          className={_utils.cx(_styles, "home_tabbed_image")}
          loading="lazy"
          width="1320"
          height="520"
          alt=""
          src={image}
        />
      </Block>
      <Block className={_utils.cx(_styles, "spacer-small")} tag="div" />
      <Block className={_utils.cx(_styles, "spacer-xsmall")} tag="div" />
      <Block className={_utils.cx(_styles, "home_tabbed_info-list")} tag="div">
        <Block
          className={_utils.cx(_styles, "home_tabbed_info-item")}
          tag="div"
        >
          <Block
            className={_utils.cx(_styles, "home_tabbed_heading")}
            tag="div"
          >
            {"Booked by"}
          </Block>
          <Block className={_utils.cx(_styles, "spacer-xxsmall")} tag="div" />
          <Heading
            className={_utils.cx(_styles, "home_tabbed_heading-text")}
            tag="h3"
          >
            {bookedByBrand}
          </Heading>
        </Block>
        <Block
          className={_utils.cx(_styles, "home_tabbed_info-item")}
          tag="div"
        >
          <Block
            className={_utils.cx(_styles, "home_tabbed_info-item")}
            tag="div"
          >
            <Block
              className={_utils.cx(_styles, "home_tabbed_heading")}
              tag="div"
            >
              {"Located In"}
            </Block>
            <Block className={_utils.cx(_styles, "spacer-xxsmall")} tag="div" />
            <Heading
              className={_utils.cx(_styles, "home_tabbed_heading-text")}
              tag="h3"
            >
              {location}
            </Heading>
          </Block>
        </Block>
        <Block
          className={_utils.cx(_styles, "home_tabbed_info-item")}
          id={_utils.cx(
            _styles,
            "w-node-_803efe47-8c85-3a9c-9be1-0dd56fd0e8b4-6fd0e8a1"
          )}
          tag="div"
        >
          <Block
            className={_utils.cx(_styles, "home_tabbed-info-description-wrap")}
            tag="div"
          >
            <Paragraph>{story}</Paragraph>
          </Block>
        </Block>
      </Block>
    </_Component>
  );
}
