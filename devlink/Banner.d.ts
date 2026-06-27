import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function Banner(props: {
  buttonSettingsLink?: Types.Basic.Link;
  contentDescription?: React.ReactNode;
  contentHeading?: React.ReactNode;
  contentSubheading?: React.ReactNode;
  contentText?: React.ReactNode;
  displaySettingsOverlayVisibility?: Types.Visibility.VisibilityConditions;
  mediaImage?: Types.Asset.Image;
  variant?: "Default Content Width" | "Small Content Width";
}): React.JSX.Element;
