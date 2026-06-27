"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";
import NotSupported from "./webflow_modules/Builtin/components/NotSupported";
import { PropertyCard } from "./PropertyCard";
import { Tags } from "./Tags";

export function PropListingComp({}) {
  return (
    <NotSupported _atom={"Collection List"}>
      <NotSupported _atom={"Collection List Items"} />
      <NotSupported _atom={"Empty State"} />
    </NotSupported>
  );
}
