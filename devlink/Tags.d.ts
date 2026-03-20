import * as React from "react";
import * as Types from "./types";

declare function Tags(props: {
  as?: React.ElementType;
  count?: React.ReactNode;
  name?: React.ReactNode;
  icon?: Types.Asset.Image;
  componentPropertyTagItemVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
