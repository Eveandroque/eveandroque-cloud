import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function Team(props: {
  componentTeamList?: React.ReactNode;
  contentDescription?: React.ReactNode;
  contentHeading?: React.ReactNode;
  contentSubheading?: React.ReactNode;
  displaySettingsPlaceholderVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
