import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function FilterComp(props: {
  btnLinkVisibility?: Types.Visibility.VisibilityConditions;
  dFlxVisibility?: Types.Visibility.VisibilityConditions;
  inputBedroomVisibility?: Types.Visibility.VisibilityConditions;
  inputPriceVisibility?: Types.Visibility.VisibilityConditions;
  variant?: "Base" | "hmpage-variant";
}): React.JSX.Element;
