import * as React from "react";
import * as Types from "./types";

declare function StepsCard(props: {
  as?: React.ElementType;
  mediaImage?: Types.Asset.Image;
  contentHeading?: React.ReactNode;
  contentSimpleDescriptionVisibility?: Types.Visibility.VisibilityConditions;
  contentDescription?: React.ReactNode;
  contentRichTextDescriptionVisibility?: Types.Visibility.VisibilityConditions;
  contentRichTextDescription?: Types.Basic.RichTextChildren;
}): React.JSX.Element;
