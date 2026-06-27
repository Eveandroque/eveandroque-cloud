import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function PropertyListings(props: {
  ctaButtonLabel?: string;
  ctaLink?: string;
  listingsApiUrl?: string;
  locationsApiUrl?: string;
  numberOfCards?: number;
}): React.JSX.Element;
