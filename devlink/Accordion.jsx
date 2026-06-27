"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";
import DropdownList from "./webflow_modules/Dropdown/components/DropdownList";
import DropdownToggle from "./webflow_modules/Dropdown/components/DropdownToggle";
import DropdownWrapper from "./webflow_modules/Dropdown/components/DropdownWrapper";
import Image from "./webflow_modules/Basic/components/Image";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import * as _interactions from "./webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-6":{"id":"e-6","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".component_faq_dropdown","originalId":"e51f3a61-7b49-7b96-afb1-3a5eab86cb17","appliesTo":"CLASS"},"targets":[{"selector":".component_faq_dropdown","originalId":"e51f3a61-7b49-7b96-afb1-3a5eab86cb17","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1737854519734},"e-7":{"id":"e-7","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".component_faq_dropdown","originalId":"e51f3a61-7b49-7b96-afb1-3a5eab86cb17","appliesTo":"CLASS"},"targets":[{"selector":".component_faq_dropdown","originalId":"e51f3a61-7b49-7b96-afb1-3a5eab86cb17","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1737854519734}},"actionLists":{"a-6":{"id":"a-6","title":"faq-open","actionItemGroups":[{"actionItems":[{"id":"a-6-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".component_faq_content_wrap","selectorGuids":["19efb98a-5f1c-8ce0-5a0f-73eeb48b0521"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-6-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".component_faq_content_wrap","selectorGuids":["19efb98a-5f1c-8ce0-5a0f-73eeb48b0521"]},"value":"none"}}]},{"actionItems":[{"id":"a-6-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".component_faq_content_wrap","selectorGuids":["19efb98a-5f1c-8ce0-5a0f-73eeb48b0521"]},"value":"block"}}]},{"actionItems":[{"id":"a-6-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".component_faq_content_wrap","selectorGuids":["19efb98a-5f1c-8ce0-5a0f-73eeb48b0521"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1737854523574},"a-7":{"id":"a-7","title":"faq-close","actionItemGroups":[{"actionItems":[{"id":"a-7-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".component_faq_content_wrap","selectorGuids":["19efb98a-5f1c-8ce0-5a0f-73eeb48b0521"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-7-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".component_faq_content_wrap","selectorGuids":["19efb98a-5f1c-8ce0-5a0f-73eeb48b0521"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1737854523574}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Accordion({
  contentAnswer = "Yes, we are always open to collaboration. If you have a proposal or partnership idea, please reach out to us. We value innovative ideas that can enhance our offerings.",
  contentQuestion = "How to post properties?",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <DropdownWrapper
      className={_utils.cx(_styles, "component_faq_dropdown")}
      delay={0}
      hover={false}
      tag={"div"}
    >
      <DropdownToggle
        className={_utils.cx(_styles, "component_faq_toggle")}
        tag={"div"}
      >
        <Block
          className={_utils.cx(
            _styles,
            "component_faq_text",
            "text-weight-medium"
          )}
          tag={"div"}
        >
          {contentQuestion}
        </Block>
        <Image
          alt={""}
          className={_utils.cx(_styles, "component_faq_icon")}
          height={"10"}
          loading={"lazy"}
          src={
            "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67958d2b9f4d5bf86848ba5e_chevron-down.svg"
          }
          width={"18"}
        />
      </DropdownToggle>
      <DropdownList
        className={_utils.cx(_styles, "component_faq_content_wrap")}
        tag={"nav"}
      >
        <Block
          className={_utils.cx(_styles, "component_faq_content")}
          tag={"div"}
        >
          <Paragraph>{contentAnswer}</Paragraph>
        </Block>
      </DropdownList>
    </DropdownWrapper>
  );
}
