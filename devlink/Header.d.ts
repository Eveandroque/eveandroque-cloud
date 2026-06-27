import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function Header(props: {
  mediaLogoDesktop?: Types.Asset.Image;
  mediaLogoMobile?: Types.Asset.Image;
  variant?: "Base" | "Inversed";
}): React.JSX.Element;
