import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function StepsCard(props: {
  contentDescription?: React.ReactNode;
  contentHeading?: React.ReactNode;
  contentRichTextDescription?: Types.Basic.RichTextChildren;
  contentRichTextDescriptionVisibility?: Types.Visibility.VisibilityConditions;
  contentSimpleDescriptionVisibility?: Types.Visibility.VisibilityConditions;
  mediaImage?: Types.Asset.Image;
}): React.JSX.Element;
