"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";
import Image from "./webflow_modules/Basic/components/Image";

export function AmenitiesComp({}) {
  return (
    <Block
      className={_utils.cx(_styles, "amenities")}
      id={_utils.cx(
        _styles,
        "w-node-_6ec61c63-0207-bb18-e0c5-ad5cb28a9076-b28a9076"
      )}
      tag={"div"}
    >
      <Block className={_utils.cx(_styles, "amenities-img")} tag={"div"}>
        <Image
          alt={""}
          className={_utils.cx(_styles, "img-full", "cnt")}
          height={"auto"}
          loading={"lazy"}
          src={
            "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/6799d973cdb564e2762c9765_parking.svg"
          }
          width={"auto"}
        />
      </Block>
      <Block tag={"div"}>{"Parking Available"}</Block>
    </Block>
  );
}
