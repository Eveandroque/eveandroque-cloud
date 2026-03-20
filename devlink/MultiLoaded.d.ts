import * as React from "react";
import * as Types from "./types";

declare function MultiLoaded(props: {
  as?: React.ElementType;
  contentHeading?: React.ReactNode;
  contentDescription?: React.ReactNode;
  buttonSettingsButtonText1?: React.ReactNode;
  buttonSettingsButtonText2?: React.ReactNode;
  buttonSettingsLink2?: Types.Basic.Link;
  buttonSettingsLink1?: Types.Basic.Link;
  mediaHeroImage?: Types.Asset.Image;
  componentPerksBlurbList?: React.ReactNode;
  placeholderPlaceholderVisibility?: Types.Visibility.VisibilityConditions;
  imageVisibility?: Types.Visibility.VisibilityConditions;
  visibility?: Types.Visibility.VisibilityConditions;
  bgPallete?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
