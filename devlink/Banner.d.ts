import * as React from "react";
import * as Types from "./types";

declare function Banner(props: {
  as?: React.ElementType;
  mediaImage?: Types.Asset.Image;
  displaySettingsOverlayVisibility?: Types.Visibility.VisibilityConditions;
  contentHeading?: React.ReactNode;
  contentSubheading?: React.ReactNode;
  contentDescription?: React.ReactNode;
  buttonSettingsLink?: Types.Basic.Link;
  contentText?: React.ReactNode;
  variant?: "Default Content Width" | "Small Content Width";
}): React.JSX.Element;
