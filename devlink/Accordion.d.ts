import * as React from "react";
import * as Types from "./types";

declare function Accordion(props: {
  as?: React.ElementType;
  contentQuestion?: React.ReactNode;
  contentAnswer?: React.ReactNode;
}): React.JSX.Element;
