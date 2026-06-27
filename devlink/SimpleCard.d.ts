import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function SimpleCard(props: {
  contentDescription?: React.ReactNode;
  contentHeading?: React.ReactNode;
  mediaImage?: Types.Asset.Image;
  settingsDesignViewConditionalDisplay?: string;
}): React.JSX.Element;
