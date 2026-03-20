import * as React from "react";
import * as Types from "./types";

declare function FilterComp(props: {
  as?: React.ElementType;
  variant?: "Base" | "hmpage-variant";
  dFlxVisibility?: Types.Visibility.VisibilityConditions;
  btnLinkVisibility?: Types.Visibility.VisibilityConditions;
  inputPriceVisibility?: Types.Visibility.VisibilityConditions;
  inputBedroomVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
