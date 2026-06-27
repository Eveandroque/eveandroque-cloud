"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";
import FormButton from "./webflow_modules/Form/components/FormButton";
import FormErrorMessage from "./webflow_modules/Form/components/FormErrorMessage";
import FormForm from "./webflow_modules/Form/components/FormForm";
import FormSuccessMessage from "./webflow_modules/Form/components/FormSuccessMessage";
import FormTextInput from "./webflow_modules/Form/components/FormTextInput";
import FormWrapper from "./webflow_modules/Form/components/FormWrapper";
import Image from "./webflow_modules/Basic/components/Image";
import List from "./webflow_modules/Basic/components/List";

export function MainFilterComp({}) {
  return (
    <FormWrapper className={_utils.cx(_styles, "filter--block")}>
      <FormForm
        className={_utils.cx(_styles, "form")}
        data-name={"firstFilterForm"}
        fs-list-element={"filters"}
        fs-list-filteron={"submit"}
        id={_utils.cx(_styles, "wf-form-firstFilterForm")}
        method={"get"}
        name={"wf-form-firstFilterForm"}
      >
        <Block
          className={_utils.cx(_styles, "filter--form", "_4-col")}
          tag={"div"}
        >
          <Block
            className={_utils.cx(_styles, "event-type--wrap", "brd-right")}
            tag={"div"}
          >
            <Block className={_utils.cx(_styles, "from-flx")} tag={"div"}>
              <Block
                className={_utils.cx(_styles, "input-icon--wrap")}
                tag={"div"}
              >
                <Image
                  alt={""}
                  className={_utils.cx(_styles, "input--icon", "img-full")}
                  height={"auto"}
                  loading={"lazy"}
                  src={
                    "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/68065012c87b043021ec9c77_Vector%20(3).webp"
                  }
                  width={"13.5"}
                />
              </Block>
              <FormTextInput
                autoFocus={false}
                className={_utils.cx(_styles, "filter--input", "ev-ty")}
                data-name={"eventTyoe"}
                disabled={false}
                fs-list-field={"event-type"}
                id={_utils.cx(_styles, "eventType")}
                maxLength={256}
                name={"eventTyoe"}
                placeholder={"Event Type"}
                required={false}
                type={"text"}
              />
            </Block>
            <Block
              className={_utils.cx(_styles, "filter-list--wrapper")}
              filter-item--wrap={""}
              id={_utils.cx(_styles, "eventType_List_Wrap")}
              tag={"div"}
            >
              <List
                className={_utils.cx(_styles, "input-filter-list--wrap")}
                id={_utils.cx(_styles, "eventType_Input_Filter_List")}
                input-filter--list={""}
                tag={"ul"}
                unstyled={true}
              />
            </Block>
          </Block>
          <Block
            className={_utils.cx(_styles, "locationinput", "brd-right")}
            tag={"div"}
          >
            <Block className={_utils.cx(_styles, "from-flx")} tag={"div"}>
              <Block
                className={_utils.cx(_styles, "input-icon--wrap")}
                tag={"div"}
              >
                <Image
                  alt={"Globe"}
                  className={_utils.cx(_styles, "input--icon", "img-full")}
                  height={"auto"}
                  loading={"lazy"}
                  src={
                    "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67a39b939f1b69f5f0b72800_globe-hemisphere.webp"
                  }
                  width={"13.5"}
                />
              </Block>
              <FormTextInput
                autoFocus={false}
                className={_utils.cx(_styles, "filter--input", "ev-ty")}
                data-name={"location"}
                disabled={false}
                // @ts-ignore - User-defined custom attribute(s)
                field={"area-location"}
                fs-list-field={"where"}
                id={_utils.cx(_styles, "location")}
                maxLength={256}
                name={"location"}
                placeholder={"Location"}
                required={false}
                type={"text"}
              />
            </Block>
            <Block
              className={_utils.cx(_styles, "filter-list--wrapper")}
              id={_utils.cx(_styles, "location_List_Wrap")}
              // @ts-ignore - User-defined custom attribute(s)
              location_list_wrap={""}
              tag={"div"}
            >
              <List
                className={_utils.cx(_styles, "input-filter-list--wrap")}
                id={_utils.cx(_styles, "loc_Input_Filter_List")}
                input-filter--list={""}
                tag={"ul"}
                unstyled={true}
              />
            </Block>
          </Block>
          <Block
            className={_utils.cx(_styles, "input--wrapper", "lst")}
            filter--container={""}
            tag={"div"}
          >
            <Block
              className={_utils.cx(_styles, "d-flx", "no-gp")}
              drop-trigger={""}
              tag={"div"}
            >
              <Image
                alt={"Users group"}
                height={"auto"}
                loading={"lazy"}
                src={
                  "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67a39b93a147aa90dbf0dc90_users-group.webp"
                }
                width={"16"}
              />
              <FormTextInput
                autoFocus={false}
                className={_utils.cx(_styles, "filter--input", "from")}
                data-name={"Field 4"}
                disabled={false}
                fs-list-field={"group-num"}
                fs-list-fieldtype={"number"}
                fs-list-operator={"greater-equal"}
                id={_utils.cx(_styles, "field-4")}
                maxLength={256}
                name={"field-4"}
                placeholder={"Group Size"}
                required={false}
                type={"text"}
              />
              <FormTextInput
                autoFocus={false}
                className={_utils.cx(_styles, "filter--input", "hide-input")}
                data-name={"Field 4"}
                disabled={false}
                fs-list-field={"group-num"}
                fs-list-fieldtype={"number"}
                fs-list-operator={"less-equal"}
                id={_utils.cx(_styles, "field-4")}
                maxLength={256}
                name={"field-4"}
                placeholder={"How big is your group?"}
                required={false}
                type={"text"}
              />
            </Block>
          </Block>
          <FormButton
            className={_utils.cx(_styles, "filter-search")}
            data-wait={"Please wait..."}
            type={"submit"}
            value={"Search"}
          />
        </Block>
      </FormForm>
      <FormSuccessMessage>
        <Block tag={"div"}>
          {"Thank you! Your submission has been received!"}
        </Block>
      </FormSuccessMessage>
      <FormErrorMessage>
        <Block tag={"div"}>
          {"Oops! Something went wrong while submitting the form."}
        </Block>
      </FormErrorMessage>
    </FormWrapper>
  );
}
