import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function PropertyCard(props: {
  componentPropertyTagList?: React.ReactNode;
  contentAvailabilityText?: React.ReactNode;
  contentDateText?: React.ReactNode;
  contentDescription?: React.ReactNode;
  contentLocationText?: React.ReactNode;
  contentPropertyNameText?: React.ReactNode;
  detailsParagraphVisibility?: Types.Visibility.VisibilityConditions;
  image?: Types.Asset.Image;
  image2?: Types.Asset.Image;
  link?: Types.Basic.Link;
  mediaImage?: Types.Asset.Image;
  mediaSettingsAltText?: Types.Basic.AltText;
  settingsDateVisibility?: Types.Visibility.VisibilityConditions;
  textSizeSmallVisibility?: Types.Visibility.VisibilityConditions;
  variant?: "Base" | "listing-card";
  visibilityDate?: Types.Visibility.VisibilityConditions;
  visibilityStarRating?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
