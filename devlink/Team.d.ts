import * as React from "react";
import * as Types from "./types";

declare function Team(props: {
  as?: React.ElementType;
  componentTeamList?: React.ReactNode;
  displaySettingsPlaceholderVisibility?: Types.Visibility.VisibilityConditions;
  contentSubheading?: React.ReactNode;
  contentHeading?: React.ReactNode;
  contentDescription?: React.ReactNode;
}): React.JSX.Element;
