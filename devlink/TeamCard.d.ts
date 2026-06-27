import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function TeamCard(props: {
  contentDescription?: React.ReactNode;
  contentName?: React.ReactNode;
  contentPosition?: React.ReactNode;
  mediaImage?: Types.Asset.Image;
}): React.JSX.Element;
