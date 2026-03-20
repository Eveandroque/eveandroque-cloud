import * as React from "react";
import * as Types from "./types";

declare function PropertyCard(props: {
  as?: React.ElementType;
  contentAvailabilityText?: React.ReactNode;
  contentLocationText?: React.ReactNode;
  contentPropertyNameText?: React.ReactNode;
  contentDescription?: React.ReactNode;
  mediaImage?: Types.Asset.Image;
  mediaSettingsAltText?: Types.Basic.AltText;
  componentPropertyTagList?: React.ReactNode;
  contentDateText?: React.ReactNode;
  settingsDateVisibility?: Types.Visibility.VisibilityConditions;
  link?: Types.Basic.Link;
  variant?: "Base" | "listing-card";
  textSizeSmallVisibility?: Types.Visibility.VisibilityConditions;
  visibilityDate?: Types.Visibility.VisibilityConditions;
  visibilityStarRating?: Types.Visibility.VisibilityConditions;
  image?: Types.Asset.Image;
  image2?: Types.Asset.Image;
  detailsParagraphVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
