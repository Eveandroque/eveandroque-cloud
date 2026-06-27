"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import Image from "./webflow_modules/Basic/components/Image";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";

export function LocationTab({
  bookedByBrand = "Netflix",
  image = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67919d71d4216d482f837e17_new-york.webp",
  location = "New York",
  story = "Where ambition meets atmosphere. Eve & Roque curates striking backdrops that not only support your story—but amplify it",
}) {
  return (
    <Block className={_utils.cx(_styles, "home_tabbed_component")} tag={"div"}>
      <Block
        className={_utils.cx(_styles, "home_tabbed_image-wrap")}
        tag={"div"}
      >
        <Image
          alt={""}
          className={_utils.cx(_styles, "home_tabbed_image")}
          height={"520"}
          loading={"lazy"}
          src={image}
          width={"1320"}
        />
      </Block>
      <Block className={_utils.cx(_styles, "spacer-small")} tag={"div"} />
      <Block className={_utils.cx(_styles, "spacer-xsmall")} tag={"div"} />
      <Block
        className={_utils.cx(_styles, "home_tabbed_info-list")}
        tag={"div"}
      >
        <Block
          className={_utils.cx(_styles, "home_tabbed_info-item")}
          tag={"div"}
        >
          <Block
            className={_utils.cx(_styles, "home_tabbed_heading")}
            tag={"div"}
          >
            {"Booked by"}
          </Block>
          <Block className={_utils.cx(_styles, "spacer-xxsmall")} tag={"div"} />
          <Heading
            className={_utils.cx(_styles, "home_tabbed_heading-text")}
            tag={"h3"}
          >
            {bookedByBrand}
          </Heading>
        </Block>
        <Block
          className={_utils.cx(_styles, "home_tabbed_info-item")}
          tag={"div"}
        >
          <Block
            className={_utils.cx(_styles, "home_tabbed_info-item")}
            tag={"div"}
          >
            <Block
              className={_utils.cx(_styles, "home_tabbed_heading")}
              tag={"div"}
            >
              {"Located In"}
            </Block>
            <Block
              className={_utils.cx(_styles, "spacer-xxsmall")}
              tag={"div"}
            />
            <Heading
              className={_utils.cx(_styles, "home_tabbed_heading-text")}
              tag={"h3"}
            >
              {location}
            </Heading>
          </Block>
        </Block>
        <Block
          className={_utils.cx(_styles, "home_tabbed_info-item")}
          tag={"div"}
        >
          <Block
            className={_utils.cx(_styles, "home_tabbed-info-description-wrap")}
            tag={"div"}
          >
            <Paragraph>{story}</Paragraph>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}
