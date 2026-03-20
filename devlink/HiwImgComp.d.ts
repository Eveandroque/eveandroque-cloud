import * as React from "react";
import * as Types from "./types";

declare function HiwImgComp(props: {
  as?: React.ElementType;
  imgFullImage?: Types.Asset.Image;
  headingText?: React.ReactNode;
  paragraphText?: React.ReactNode;
  activeCardClass?: Types.Builtin.Text;
  vFxValue?: Types.Builtin.Text;
  hiwCardId?: Types.Basic.IdTextInput;
}): React.JSX.Element;
