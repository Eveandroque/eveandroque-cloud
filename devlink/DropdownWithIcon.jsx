"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";
import DropdownList from "./webflow_modules/Dropdown/components/DropdownList";
import DropdownToggle from "./webflow_modules/Dropdown/components/DropdownToggle";
import DropdownWrapper from "./webflow_modules/Dropdown/components/DropdownWrapper";
import Image from "./webflow_modules/Basic/components/Image";
import RichText from "./webflow_modules/Basic/components/RichText";
import * as _interactions from "./webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-8":{"id":"e-8","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-9"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".article_content_accordion","originalId":"d9e1e386-3339-4b60-fa1c-e09f189af44f","appliesTo":"CLASS"},"targets":[{"selector":".article_content_accordion","originalId":"d9e1e386-3339-4b60-fa1c-e09f189af44f","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1738226217467},"e-9":{"id":"e-9","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-8"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".article_content_accordion","originalId":"d9e1e386-3339-4b60-fa1c-e09f189af44f","appliesTo":"CLASS"},"targets":[{"selector":".article_content_accordion","originalId":"d9e1e386-3339-4b60-fa1c-e09f189af44f","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1738226217468}},"actionLists":{"a-8":{"id":"a-8","title":"dropdown-open","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".article_content_accordion_toggle_wrap","selectorGuids":["02d45fcd-b57a-7466-2192-0ef023a21b33"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-8-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".article_content_accordion_toggle_wrap","selectorGuids":["02d45fcd-b57a-7466-2192-0ef023a21b33"]},"value":"none"}}]},{"actionItems":[{"id":"a-8-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".article_content_accordion_toggle_wrap","selectorGuids":["02d45fcd-b57a-7466-2192-0ef023a21b33"]},"value":"block"}}]},{"actionItems":[{"id":"a-8-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".article_content_accordion_toggle_wrap","selectorGuids":["02d45fcd-b57a-7466-2192-0ef023a21b33"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-8-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".article_content_accordion_toggle-plus","selectorGuids":["f0492fce-15f2-8c86-a7bb-11c8324b7533"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1738226219817},"a-9":{"id":"a-9","title":"dropdown-close","actionItemGroups":[{"actionItems":[{"id":"a-9-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".article_content_accordion_toggle_wrap","selectorGuids":["02d45fcd-b57a-7466-2192-0ef023a21b33"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-9-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".article_content_accordion_toggle-plus","selectorGuids":["f0492fce-15f2-8c86-a7bb-11c8324b7533"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-9-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".article_content_accordion_toggle_wrap","selectorGuids":["02d45fcd-b57a-7466-2192-0ef023a21b33"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1738226219817}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function DropdownWithIcon({
  contentDescription = "",
  contentTitle = "Smart Home",
  mediaIcon = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/679b38c9b6436bf2001a4163_solar_smart-home-outline.svg",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <DropdownWrapper
      className={_utils.cx(_styles, "article_content_accordion")}
      delay={0}
      hover={false}
      tag={"div"}
    >
      <DropdownToggle
        className={_utils.cx(_styles, "article_content_accordion_toggle")}
        tag={"div"}
      >
        <Block
          className={_utils.cx(
            _styles,
            "article_content_accordion_toggle-text-wrap"
          )}
          tag={"div"}
        >
          <Image
            alt={""}
            height={"24"}
            loading={"lazy"}
            src={mediaIcon}
            width={"24"}
          />
          <Block className={_utils.cx(_styles, "heading-style-h6")} tag={"div"}>
            {contentTitle}
          </Block>
        </Block>
        <Block
          className={_utils.cx(
            _styles,
            "article_content_accordion_toggle-item"
          )}
          tag={"div"}
        >
          <Block
            className={_utils.cx(
              _styles,
              "article_content_accordion_toggle-plus"
            )}
            tag={"div"}
          >
            <Block
              className={_utils.cx(
                _styles,
                "article_content_accordion_toggle_line"
              )}
              tag={"div"}
            />
            <Block
              className={_utils.cx(
                _styles,
                "article_content_accordion_toggle_line",
                "is-vertical"
              )}
              tag={"div"}
            />
          </Block>
        </Block>
      </DropdownToggle>
      <DropdownList
        className={_utils.cx(_styles, "article_content_accordion_toggle_wrap")}
        tag={"nav"}
      >
        <Block
          className={_utils.cx(
            _styles,
            "article_content_accordion_toggle_inner"
          )}
          tag={"div"}
        >
          <RichText
            className={_utils.cx(_styles, "article_content_accordion_rte")}
            tag={"div"}
          >
            {contentDescription}
          </RichText>
        </Block>
      </DropdownList>
    </DropdownWrapper>
  );
}
