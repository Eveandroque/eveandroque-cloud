import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function HiwImgComp(props: {
  activeCardClass?: string;
  headingText?: React.ReactNode;
  hiwCardId?: string;
  imgFullImage?: Types.Asset.Image;
  paragraphText?: React.ReactNode;
  vFxValue?: string;
}): React.JSX.Element;
