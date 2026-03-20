import * as React from "react";
import * as Types from "./types";

declare function Header(props: {
  as?: React.ElementType;
  variant?: "Base" | "Inversed";
  mediaLogoDesktop?: Types.Asset.Image;
  mediaLogoMobile?: Types.Asset.Image;
}): React.JSX.Element;
