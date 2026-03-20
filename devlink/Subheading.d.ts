import * as React from "react";
import * as Types from "./types";

declare function Subheading(props: {
  as?: React.ElementType;
  contentText?: React.ReactNode;
  mediaIcon?: Types.Asset.Image;
  visibilityIconDisplay?: Types.Visibility.VisibilityConditions;
  visibilityDateVisibility?: Types.Visibility.VisibilityConditions;
  variant?: "Base" | "Dark";
  contentDate?: React.ReactNode;
}): React.JSX.Element;
