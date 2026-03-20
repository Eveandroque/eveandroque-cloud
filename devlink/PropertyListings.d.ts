import * as React from "react";
import * as Types from "./types";

declare function PropertyListings(props: {
  as?: React.ElementType;
  locationsApiUrl?: Types.Builtin.Text;
  listingsApiUrl?: Types.Builtin.Text;
  ctaButtonLabel?: Types.Builtin.Text;
  ctaLink?: Types.Builtin.Text;
}): React.JSX.Element;
