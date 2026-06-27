import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function CallToAction(props: {
  buttonSettingsLink?: Types.Basic.Link;
  buttonSettingsText?: React.ReactNode;
  contentDescription?: React.ReactNode;
  contentHeading?: React.ReactNode;
  mediaImage?: Types.Asset.Image;
}): React.JSX.Element;
