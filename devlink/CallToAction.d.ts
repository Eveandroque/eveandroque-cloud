import * as React from "react";
import * as Types from "./types";

declare function CallToAction(props: {
  as?: React.ElementType;
  contentHeading?: React.ReactNode;
  contentDescription?: React.ReactNode;
  buttonSettingsText?: React.ReactNode;
  buttonSettingsLink?: Types.Basic.Link;
  mediaImage?: Types.Asset.Image;
}): React.JSX.Element;
