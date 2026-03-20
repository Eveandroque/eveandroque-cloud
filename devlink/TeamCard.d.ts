import * as React from "react";
import * as Types from "./types";

declare function TeamCard(props: {
  as?: React.ElementType;
  mediaImage?: Types.Asset.Image;
  contentPosition?: React.ReactNode;
  contentName?: React.ReactNode;
  contentDescription?: React.ReactNode;
}): React.JSX.Element;
