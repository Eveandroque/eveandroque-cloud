import * as React from "react";
import * as Types from "./types";

declare function DropdownWithIcon(props: {
  as?: React.ElementType;
  contentTitle?: React.ReactNode;
  mediaIcon?: Types.Asset.Image;
  contentDescription?: Types.Basic.RichTextChildren;
}): React.JSX.Element;
