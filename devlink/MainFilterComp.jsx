"use client";
import React from "react";
import FormWrapper from "./_Builtin/FormWrapper";
import FormForm from "./_Builtin/FormForm";
import Block from "./_Builtin/Block";
import Image from "./_Builtin/Image";
import FormTextInput from "./_Builtin/FormTextInput";
import List from "./_Builtin/List";
import FormButton from "./_Builtin/FormButton";
import FormSuccessMessage from "./_Builtin/FormSuccessMessage";
import FormErrorMessage from "./_Builtin/FormErrorMessage";
import * as _utils from "./utils";
import _styles from "./MainFilterComp.module.css";

export function MainFilterComp({ as: _Component = FormWrapper }) {
  return (
    <_Component className={_utils.cx(_styles, "filter--block")}>
      <FormForm
        className={_utils.cx(_styles, "form")}
        name="wf-form-firstFilterForm"
        data-name="firstFilterForm"
        method="get"
        fs-list-element="filters"
        fs-list-filteron="submit"
        id="wf-form-firstFilterForm"
      >
        <Block
          className={_utils.cx(_styles, "filter--form", "_4-col")}
          id={_utils.cx(
            _styles,
            "w-node-a9eabda6-505b-dcd9-139b-b095c79c99ae-c79c99ac"
          )}
          tag="div"
        >
          <Block
            className={_utils.cx(_styles, "event-type--wrap", "brd-right")}
            id={_utils.cx(
              _styles,
              "w-node-_4e8a5b77-29d6-4c0c-fb96-3f11a0bb5bdc-c79c99ac"
            )}
            tag="div"
          >
            <Block className={_utils.cx(_styles, "from-flx")} tag="div">
              <Block
                className={_utils.cx(_styles, "input-icon--wrap")}
                tag="div"
              >
                <Image
                  className={_utils.cx(_styles, "input--icon", "img-full")}
                  width="13.5"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/68065012c87b043021ec9c77_Vector%20(3).webp"
                />
              </Block>
              <FormTextInput
                className={_utils.cx(_styles, "filter--input", "ev-ty")}
                name="eventTyoe"
                maxLength={256}
                data-name="eventTyoe"
                placeholder="Event Type"
                disabled={false}
                type="text"
                required={false}
                autoFocus={false}
                fs-list-field="event-type"
                id="eventType"
              />
            </Block>
            <Block
              className={_utils.cx(_styles, "filter-list--wrapper")}
              tag="div"
              filter-item--wrap=""
              id="eventType_List_Wrap"
            >
              <List
                className={_utils.cx(_styles, "input-filter-list--wrap")}
                tag="ul"
                input-filter--list=""
                id="eventType_Input_Filter_List"
                unstyled={true}
              />
            </Block>
          </Block>
          <Block
            className={_utils.cx(_styles, "locationinput", "brd-right")}
            id={_utils.cx(
              _styles,
              "w-node-ac4aa1ec-60ca-5aa3-9542-9b2ec9596e0c-c79c99ac"
            )}
            tag="div"
          >
            <Block className={_utils.cx(_styles, "from-flx")} tag="div">
              <Block
                className={_utils.cx(_styles, "input-icon--wrap")}
                tag="div"
              >
                <Image
                  className={_utils.cx(_styles, "input--icon", "img-full")}
                  width="13.5"
                  height="auto"
                  loading="lazy"
                  alt="Globe"
                  src="https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67a39b939f1b69f5f0b72800_globe-hemisphere.webp"
                />
              </Block>
              <FormTextInput
                className={_utils.cx(_styles, "filter--input", "ev-ty")}
                name="location"
                maxLength={256}
                data-name="location"
                placeholder="Location"
                disabled={false}
                type="text"
                required={false}
                autoFocus={false}
                fs-list-field="where"
                field="area-location"
                id="location"
              />
            </Block>
            <Block
              className={_utils.cx(_styles, "filter-list--wrapper")}
              tag="div"
              location_list_wrap=""
              id="location_List_Wrap"
            >
              <List
                className={_utils.cx(_styles, "input-filter-list--wrap")}
                tag="ul"
                input-filter--list=""
                id="loc_Input_Filter_List"
                unstyled={true}
              />
            </Block>
          </Block>
          <Block
            className={_utils.cx(_styles, "input--wrapper", "lst")}
            id={_utils.cx(
              _styles,
              "w-node-a9eabda6-505b-dcd9-139b-b095c79c99c9-c79c99ac"
            )}
            tag="div"
            filter--container=""
          >
            <Block
              className={_utils.cx(_styles, "d-flx", "no-gp")}
              tag="div"
              drop-trigger=""
            >
              <Image
                width="16"
                height="auto"
                loading="lazy"
                alt="Users group"
                src="https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67a39b93a147aa90dbf0dc90_users-group.webp"
              />
              <FormTextInput
                className={_utils.cx(_styles, "filter--input", "from")}
                name="field-4"
                maxLength={256}
                data-name="Field 4"
                placeholder="Group Size"
                disabled={false}
                type="text"
                required={false}
                autoFocus={false}
                fs-list-field="group-num"
                fs-list-operator="greater-equal"
                fs-list-fieldtype="number"
                id="field-4"
              />
              <FormTextInput
                className={_utils.cx(_styles, "filter--input", "hide-input")}
                name="field-4"
                maxLength={256}
                data-name="Field 4"
                placeholder="How big is your group?"
                disabled={false}
                type="text"
                required={false}
                autoFocus={false}
                fs-list-field="group-num"
                fs-list-operator="less-equal"
                fs-list-fieldtype="number"
                id="field-4"
              />
            </Block>
          </Block>
          <FormButton
            className={_utils.cx(_styles, "filter-search")}
            id={_utils.cx(
              _styles,
              "w-node-c011051d-47df-19a9-4fb4-892882bfbecf-c79c99ac"
            )}
            type="submit"
            value="Search"
            data-wait="Please wait..."
          />
        </Block>
      </FormForm>
      <FormSuccessMessage>
        <Block tag="div">
          {"Thank you! Your submission has been received!"}
        </Block>
      </FormSuccessMessage>
      <FormErrorMessage>
        <Block tag="div">
          {"Oops! Something went wrong while submitting the form."}
        </Block>
      </FormErrorMessage>
    </_Component>
  );
}
