"use client";
import React from "react";
import Block from "./_Builtin/Block";
import Image from "./_Builtin/Image";
import * as _utils from "./utils";
import _styles from "./AmenitiesComp.module.css";

export function AmenitiesComp({ as: _Component = Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "amenities")}
      id={_utils.cx(
        _styles,
        "w-node-_6ec61c63-0207-bb18-e0c5-ad5cb28a9076-b28a9076"
      )}
      tag="div"
    >
      <Block className={_utils.cx(_styles, "amenities-img")} tag="div">
        <Image
          className={_utils.cx(_styles, "img-full", "cnt")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/6799d973cdb564e2762c9765_parking.svg"
        />
      </Block>
      <Block tag="div">{"Parking Available"}</Block>
    </_Component>
  );
}
