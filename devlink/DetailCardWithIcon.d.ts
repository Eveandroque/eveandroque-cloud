import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function DetailCardWithIcon(props: {
  contentDescription?: React.ReactNode;
  contentHeading?: React.ReactNode;
  contentLink?: Types.Basic.Link;
  contentLinkText?: React.ReactNode;
  mediaImage?: Types.Asset.Image;
  visibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
