"use client";
import React from "react";
import FormWrapper from "./_Builtin/FormWrapper";
import FormForm from "./_Builtin/FormForm";
import Block from "./_Builtin/Block";
import Image from "./_Builtin/Image";
import NotSupported from "./_Builtin/NotSupported";
import FormRadioWrapper from "./_Builtin/FormRadioWrapper";
import FormRadioInput from "./_Builtin/FormRadioInput";
import FormInlineLabel from "./_Builtin/FormInlineLabel";
import DOM from "./_Builtin/DOM";
import FormTextInput from "./_Builtin/FormTextInput";
import Link from "./_Builtin/Link";
import HtmlEmbed from "./_Builtin/HtmlEmbed";
import FormSuccessMessage from "./_Builtin/FormSuccessMessage";
import FormErrorMessage from "./_Builtin/FormErrorMessage";
import { dynamoPlainTextToListOfElements } from "./values/DynamoGateway/dynamoPlainTextToListOfElements";
import * as _utils from "./utils";
import _styles from "./FilterComp.module.css";

export function FilterComp({
  as: _Component = FormWrapper,
  variant = "Base",
  dFlxVisibility = true,
  btnLinkVisibility = true,
  inputPriceVisibility = true,
  inputBedroomVisibility = true,
}) {
  const _styleVariantMap = {
    Base: "",
    "hmpage-variant": "w-variant-8afef5de-3ced-befb-d6ef-2fe1d0c6c942",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "filter--block", _activeStyleVariant)}
    >
      <FormForm
        className={_utils.cx(_styles, "form", _activeStyleVariant)}
        name="email-form-2"
        data-name="Email Form 2"
        method="get"
        fs-cmsfilter-element="filters"
        id="email-form-2"
      >
        <Block
          className={_utils.cx(_styles, "filter--form", _activeStyleVariant)}
          id={_utils.cx(
            _styles,
            "w-node-be9b0d29-0555-bc0e-43f3-0135ba5eb1f2-ba5eb1f0"
          )}
          tag="div"
        >
          <Block
            className={_utils.cx(
              _styles,
              "input--wrapper",
              _activeStyleVariant
            )}
            id={_utils.cx(
              _styles,
              "w-node-be9b0d29-0555-bc0e-43f3-0135ba5eb1f3-ba5eb1f0"
            )}
            tag="div"
            filter--container=""
          >
            <Block
              className={_utils.cx(_styles, "d-flx", _activeStyleVariant)}
              tag="div"
              drop-trigger=""
            >
              <Image
                loading="lazy"
                width="16"
                height="auto"
                alt="Globe"
                src="https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67a39b939f1b69f5f0b72800_globe-hemisphere.webp"
              />
              <Block
                className={_utils.cx(_styles, "drop-text", _activeStyleVariant)}
                tag="div"
              >
                {"Where to go?"}
              </Block>
            </Block>
            <Block
              className={_utils.cx(
                _styles,
                "input-droplist--wrapper",
                _activeStyleVariant
              )}
              tag="div"
              drop-wrapper=""
            >
              <NotSupported _atom="DynamoWrapper" />
            </Block>
          </Block>
          <Block
            className={_utils.cx(
              _styles,
              "input--wrapper",
              "guest",
              _activeStyleVariant
            )}
            id={_utils.cx(
              _styles,
              "w-node-be9b0d29-0555-bc0e-43f3-0135ba5eb202-ba5eb1f0"
            )}
            tag="div"
          >
            <DOM
              className={_utils.cx(_styles, "sub-btn", _activeStyleVariant)}
              tag="button"
              slot=""
            >
              <Block
                className={_utils.cx(
                  _styles,
                  "text-block-2",
                  _activeStyleVariant
                )}
                tag="div"
              >
                {"-"}
              </Block>
            </DOM>
            <Block
              className={_utils.cx(
                _styles,
                "d-flx",
                "guest",
                _activeStyleVariant
              )}
              tag="div"
            >
              <Image
                loading="lazy"
                width="16"
                height="auto"
                alt="Users group"
                src="https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67a39b93a147aa90dbf0dc90_users-group.webp"
              />
              <FormTextInput
                className={_utils.cx(
                  _styles,
                  "numguest-input",
                  _activeStyleVariant
                )}
                autoFocus={false}
                maxLength={256}
                name="field-2"
                data-name="Field 2"
                placeholder="How big is your group?"
                type="text"
                disabled={false}
                required={true}
                id="field-2"
              />
            </Block>
            <DOM
              className={_utils.cx(_styles, "add-btn", _activeStyleVariant)}
              tag="button"
              slot=""
            >
              <Block
                className={_utils.cx(
                  _styles,
                  "text-block",
                  _activeStyleVariant
                )}
                tag="div"
              >
                {"+"}
              </Block>
            </DOM>
          </Block>
          <Block
            className={_utils.cx(
              _styles,
              "input--wrapper",
              "lst",
              _activeStyleVariant
            )}
            id={_utils.cx(
              _styles,
              "w-node-be9b0d29-0555-bc0e-43f3-0135ba5eb20c-ba5eb1f0"
            )}
            tag="div"
            filter--container=""
          >
            <Block
              className={_utils.cx(_styles, "d-flx", _activeStyleVariant)}
              tag="div"
              drop-trigger=""
            >
              <Image
                loading="lazy"
                width="16"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67b3576e516402875e3eecf1_mynaui_grid.webp"
              />
              <Block
                className={_utils.cx(_styles, "drop-text", _activeStyleVariant)}
                tag="div"
              >
                {"Select staying category"}
              </Block>
            </Block>
            <Block
              className={_utils.cx(
                _styles,
                "input-droplist--wrapper",
                _activeStyleVariant
              )}
              tag="div"
              drop-wrapper=""
            >
              <NotSupported _atom="DynamoWrapper" />
            </Block>
          </Block>
          {inputBedroomVisibility ? (
            <Block
              className={_utils.cx(
                _styles,
                "input--wrapper",
                "bedrooms",
                _activeStyleVariant
              )}
              id={_utils.cx(
                _styles,
                "w-node-_52dd0ca6-a27d-0876-9824-1b351a8a6345-ba5eb1f0"
              )}
              tag="div"
            >
              <DOM
                className={_utils.cx(_styles, "sub-btn", _activeStyleVariant)}
                tag="button"
                slot=""
              >
                <Block
                  className={_utils.cx(
                    _styles,
                    "text-block-2",
                    _activeStyleVariant
                  )}
                  tag="div"
                >
                  {"-"}
                </Block>
              </DOM>
              <Block
                className={_utils.cx(
                  _styles,
                  "d-flx",
                  "guest",
                  _activeStyleVariant
                )}
                tag="div"
              >
                <Image
                  loading="lazy"
                  width="16"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67b3576ecc5be3934af0e91a_material-symbols-light_bed-outline-rounded.webp"
                />
                <FormTextInput
                  className={_utils.cx(
                    _styles,
                    "numguest-input",
                    _activeStyleVariant
                  )}
                  autoFocus={false}
                  maxLength={256}
                  name="field-2"
                  data-name="Field 2"
                  placeholder="Bedrooms"
                  type="text"
                  disabled={false}
                  required={true}
                  id="field-2"
                />
              </Block>
              <DOM
                className={_utils.cx(_styles, "add-btn", _activeStyleVariant)}
                tag="button"
                slot=""
              >
                <Block
                  className={_utils.cx(
                    _styles,
                    "text-block",
                    _activeStyleVariant
                  )}
                  tag="div"
                >
                  {"+"}
                </Block>
              </DOM>
            </Block>
          ) : null}
          {inputPriceVisibility ? (
            <Block
              className={_utils.cx(
                _styles,
                "input--wrapper",
                "lst",
                _activeStyleVariant
              )}
              id={_utils.cx(
                _styles,
                "w-node-_58ff71ed-1482-25ac-a68f-8598d02a0388-ba5eb1f0"
              )}
              tag="div"
            >
              <Block
                className={_utils.cx(_styles, "d-flx", _activeStyleVariant)}
                tag="div"
                drop-trigger=""
              >
                <Image
                  loading="lazy"
                  width="16"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67b3576eccafbbb17b95e35b_mage_dollar.webp"
                />
                <Block
                  className={_utils.cx(
                    _styles,
                    "drop-text",
                    _activeStyleVariant
                  )}
                  tag="div"
                >
                  {"Price"}
                </Block>
              </Block>
              <Block
                className={_utils.cx(
                  _styles,
                  "input-droplist--wrapper",
                  _activeStyleVariant
                )}
                tag="div"
                drop-wrapper=""
              >
                <NotSupported _atom="DynamoWrapper" />
              </Block>
            </Block>
          ) : null}
          {btnLinkVisibility ? (
            <Link
              className={_utils.cx(_styles, "btn--link", _activeStyleVariant)}
              id={_utils.cx(
                _styles,
                "w-node-f0f03f99-267a-647f-19ba-c366cd606ffd-ba5eb1f0"
              )}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <Block tag="div">{"Search"}</Block>
              <HtmlEmbed
                className={_utils.cx(_styles, "icon-em", _activeStyleVariant)}
                content=""
                value="%3Csvg%20width%3D%221.5rem%22%20height%3D%221.5rem%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M3%2012.013L20.789%2012M14.012%2019L21%2012L14.012%205%22%20stroke%3D%22white%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </Link>
          ) : null}
        </Block>
        {dFlxVisibility ? (
          <Block
            className={_utils.cx(
              _styles,
              "d-flx",
              "center",
              _activeStyleVariant
            )}
            tag="div"
          >
            <NotSupported _atom="DynamoWrapper" />
            <Link
              className={_utils.cx(
                _styles,
                "link-block",
                "filter--link",
                _activeStyleVariant
              )}
              button={false}
              fs-cmsfilter-element="clear"
              block="inline"
              options={{
                href: "#",
              }}
            >
              <HtmlEmbed
                className={_utils.cx(
                  _styles,
                  "filter-icon",
                  _activeStyleVariant
                )}
                content=""
                value="%3Csvg%20width%3D%221rem%22%20height%3D%221rem%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M14.1673%208.00009H5.93065M3.02332%208.00009H1.83398M3.02332%208.00009C3.02332%207.61464%203.17644%207.24498%203.44899%206.97243C3.72154%206.69988%204.0912%206.54676%204.47665%206.54676C4.8621%206.54676%205.23176%206.69988%205.50431%206.97243C5.77687%207.24498%205.92998%207.61464%205.92998%208.00009C5.92998%208.38554%205.77687%208.7552%205.50431%209.02775C5.23176%209.3003%204.8621%209.45342%204.47665%209.45342C4.0912%209.45342%203.72154%209.3003%203.44899%209.02775C3.17644%208.7552%203.02332%208.38554%203.02332%208.00009ZM14.1673%2012.4048H10.3353M10.3353%2012.4048C10.3353%2012.7903%2010.1818%2013.1604%209.90921%2013.433C9.6366%2013.7056%209.26685%2013.8588%208.88132%2013.8588C8.49587%2013.8588%208.12621%2013.705%207.85366%2013.4324C7.5811%2013.1599%207.42798%2012.7902%207.42798%2012.4048M10.3353%2012.4048C10.3353%2012.0192%2010.1818%2011.6498%209.90921%2011.3772C9.6366%2011.1046%209.26685%2010.9514%208.88132%2010.9514C8.49587%2010.9514%208.12621%2011.1045%207.85366%2011.3771C7.5811%2011.6496%207.42798%2012.0193%207.42798%2012.4048M7.42798%2012.4048H1.83398M14.1673%203.59542H12.0973M9.18998%203.59542H1.83398M9.18998%203.59542C9.18998%203.20998%209.3431%202.84031%209.61566%202.56776C9.88821%202.29521%2010.2579%202.14209%2010.6433%202.14209C10.8342%202.14209%2011.0232%202.17968%2011.1995%202.25272C11.3758%202.32576%2011.536%202.43281%2011.671%202.56776C11.8059%202.70272%2011.913%202.86293%2011.986%203.03926C12.0591%203.21558%2012.0966%203.40457%2012.0966%203.59542C12.0966%203.78628%2012.0591%203.97526%2011.986%204.15159C11.913%204.32792%2011.8059%204.48813%2011.671%204.62308C11.536%204.75804%2011.3758%204.86509%2011.1995%204.93813C11.0232%205.01117%2010.8342%205.04876%2010.6433%205.04876C10.2579%205.04876%209.88821%204.89564%209.61566%204.62308C9.3431%204.35053%209.18998%203.98087%209.18998%203.59542Z%22%20stroke%3D%22%23808080%22%20stroke-width%3D%221.2%22%20stroke-miterlimit%3D%2210%22%20stroke-linecap%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <Block tag="div">{"Clear all filter"}</Block>
              <Block
                className={_utils.cx(
                  _styles,
                  "filter-num",
                  _activeStyleVariant
                )}
                tag="div"
              >
                {"2"}
              </Block>
            </Link>
          </Block>
        ) : null}
        <Block
          className={_utils.cx(_styles, "pop-up--filter", _activeStyleVariant)}
          tag="div"
        />
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
