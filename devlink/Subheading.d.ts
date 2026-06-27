import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function Subheading(props: {
  contentDate?: React.ReactNode;
  contentText?: React.ReactNode;
  mediaIcon?: Types.Asset.Image;
  variant?: "Base" | "Dark";
  visibilityDateVisibility?: Types.Visibility.VisibilityConditions;
  visibilityIconDisplay?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
