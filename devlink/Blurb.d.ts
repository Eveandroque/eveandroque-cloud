import * as React from "react";
import * as Types from "./types";

declare function Blurb(props: {
  as?: React.ElementType;
  contentHeading?: React.ReactNode;
  contentDescription?: React.ReactNode;
  mediaIcon?: Types.Asset.Image;
}): React.JSX.Element;
