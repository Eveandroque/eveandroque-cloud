"use client";
import React from "react";
import NotSupported from "./_Builtin/NotSupported";
import Block from "./_Builtin/Block";
import { PropertyCard } from "./PropertyCard";
import { Tags } from "./Tags";
import { dynamoImageToImage } from "./values/DynamoGateway/dynamoImageToImage";
import { dynamoPlainTextToListOfElements } from "./values/DynamoGateway/dynamoPlainTextToListOfElements";
import { dynamoFullSlugToBasicLink } from "./values/DynamoGateway/dynamoFullSlugToBasicLink";
import { dynamoNumberToListOfElements } from "./values/DynamoGateway/dynamoNumberToListOfElements";
import * as _utils from "./utils";
import _styles from "./PropListingComp.module.css";

export function PropListingComp({ as: _Component = NotSupported }) {
  return (
    <_Component _atom="DynamoWrapper">
      <NotSupported _atom="DynamoList" />
      <NotSupported _atom="DynamoEmpty" />
    </_Component>
  );
}
