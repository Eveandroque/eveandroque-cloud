import * as React from "react";
import * as Types from "./types";

declare function LocationTab(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  location?: React.ReactNode;
  bookedByBrand?: React.ReactNode;
  story?: React.ReactNode;
}): React.JSX.Element;
