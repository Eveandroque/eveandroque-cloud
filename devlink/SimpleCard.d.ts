import * as React from "react";
import * as Types from "./types";

declare function SimpleCard(props: {
  as?: React.ElementType;
  mediaImage?: Types.Asset.Image;
  contentHeading?: React.ReactNode;
  contentDescription?: React.ReactNode;
  settingsDesignViewConditionalDisplay?: Types.Builtin.Text;
}): React.JSX.Element;
