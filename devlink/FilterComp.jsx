"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";
import DOM from "./webflow_modules/Builtin/components/DOM";
import FormErrorMessage from "./webflow_modules/Form/components/FormErrorMessage";
import FormForm from "./webflow_modules/Form/components/FormForm";
import FormInlineLabel from "./webflow_modules/Form/components/FormInlineLabel";
import FormRadioInput from "./webflow_modules/Form/components/FormRadioInput";
import FormRadioWrapper from "./webflow_modules/Form/components/FormRadioWrapper";
import FormSuccessMessage from "./webflow_modules/Form/components/FormSuccessMessage";
import FormTextInput from "./webflow_modules/Form/components/FormTextInput";
import FormWrapper from "./webflow_modules/Form/components/FormWrapper";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Image from "./webflow_modules/Basic/components/Image";
import Link from "./webflow_modules/Basic/components/Link";
import NotSupported from "./webflow_modules/Builtin/components/NotSupported";

export function FilterComp({
  btnLinkVisibility = true,
  dFlxVisibility = true,
  inputBedroomVisibility = true,
  inputPriceVisibility = true,
  variant = "Base",
}) {
  const _styleVariantMap = {
    Base: "",
    "hmpage-variant": "w-variant-8afef5de-3ced-befb-d6ef-2fe1d0c6c942",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <FormWrapper
      className={_utils.cx(_styles, "filter--block", _activeStyleVariant)}
    >
      <FormForm
        className={_utils.cx(_styles, "form", _activeStyleVariant)}
        data-name={"Email Form 2"}
        fs-cmsfilter-element={"filters"}
        id={_utils.cx(_styles, "email-form-2")}
        method={"get"}
        name={"email-form-2"}
      >
        <Block
          className={_utils.cx(_styles, "filter--form", _activeStyleVariant)}
          tag={"div"}
        >
          <Block
            className={_utils.cx(
              _styles,
              "input--wrapper",
              _activeStyleVariant
            )}
            filter--container={""}
            tag={"div"}
          >
            <Block
              className={_utils.cx(_styles, "d-flx", _activeStyleVariant)}
              drop-trigger={""}
              tag={"div"}
            >
              <Image
                alt={"Globe"}
                height={"auto"}
                loading={"lazy"}
                src={
                  "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67a39b939f1b69f5f0b72800_globe-hemisphere.webp"
                }
                width={"16"}
              />
              <Block
                className={_utils.cx(_styles, "drop-text", _activeStyleVariant)}
                tag={"div"}
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
              drop-wrapper={""}
              tag={"div"}
            >
              <NotSupported _atom={"Collection List"} />
            </Block>
          </Block>
          <Block
            className={_utils.cx(
              _styles,
              "input--wrapper",
              "guest",
              _activeStyleVariant
            )}
            tag={"div"}
          >
            <DOM
              className={_utils.cx(_styles, "sub-btn", _activeStyleVariant)}
              tag={"button"}
            >
              <Block
                className={_utils.cx(
                  _styles,
                  "text-block-2",
                  _activeStyleVariant
                )}
                tag={"div"}
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
                className={_utils.cx(
                  _styles,
                  "numguest-input",
                  _activeStyleVariant
                )}
                data-name={"Field 2"}
                disabled={false}
                id={_utils.cx(_styles, "field-2")}
                maxLength={256}
                name={"field-2"}
                placeholder={"How big is your group?"}
                required={true}
                type={"text"}
              />
            </Block>
            <DOM
              className={_utils.cx(_styles, "add-btn", _activeStyleVariant)}
              tag={"button"}
            >
              <Block
                className={_utils.cx(
                  _styles,
                  "text-block",
                  _activeStyleVariant
                )}
                tag={"div"}
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
            filter--container={""}
            tag={"div"}
          >
            <Block
              className={_utils.cx(_styles, "d-flx", _activeStyleVariant)}
              drop-trigger={""}
              tag={"div"}
            >
              <Image
                alt={""}
                height={"auto"}
                loading={"lazy"}
                src={
                  "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67b3576e516402875e3eecf1_mynaui_grid.webp"
                }
                width={"16"}
              />
              <Block
                className={_utils.cx(_styles, "drop-text", _activeStyleVariant)}
                tag={"div"}
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
              drop-wrapper={""}
              tag={"div"}
            >
              <NotSupported _atom={"Collection List"} />
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
              tag={"div"}
            >
              <DOM
                className={_utils.cx(_styles, "sub-btn", _activeStyleVariant)}
                tag={"button"}
              >
                <Block
                  className={_utils.cx(
                    _styles,
                    "text-block-2",
                    _activeStyleVariant
                  )}
                  tag={"div"}
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
                tag={"div"}
              >
                <Image
                  alt={""}
                  height={"auto"}
                  loading={"lazy"}
                  src={
                    "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67b3576ecc5be3934af0e91a_material-symbols-light_bed-outline-rounded.webp"
                  }
                  width={"16"}
                />
                <FormTextInput
                  autoFocus={false}
                  className={_utils.cx(
                    _styles,
                    "numguest-input",
                    _activeStyleVariant
                  )}
                  data-name={"Field 2"}
                  disabled={false}
                  id={_utils.cx(_styles, "field-2")}
                  maxLength={256}
                  name={"field-2"}
                  placeholder={"Bedrooms"}
                  required={true}
                  type={"text"}
                />
              </Block>
              <DOM
                className={_utils.cx(_styles, "add-btn", _activeStyleVariant)}
                tag={"button"}
              >
                <Block
                  className={_utils.cx(
                    _styles,
                    "text-block",
                    _activeStyleVariant
                  )}
                  tag={"div"}
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
              tag={"div"}
            >
              <Block
                className={_utils.cx(_styles, "d-flx", _activeStyleVariant)}
                drop-trigger={""}
                tag={"div"}
              >
                <Image
                  alt={""}
                  height={"auto"}
                  loading={"lazy"}
                  src={
                    "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67b3576eccafbbb17b95e35b_mage_dollar.webp"
                  }
                  width={"16"}
                />
                <Block
                  className={_utils.cx(
                    _styles,
                    "drop-text",
                    _activeStyleVariant
                  )}
                  tag={"div"}
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
                drop-wrapper={""}
                tag={"div"}
              >
                <NotSupported _atom={"Collection List"} />
              </Block>
            </Block>
          ) : null}
          {btnLinkVisibility ? (
            <Link
              block={"inline"}
              button={false}
              className={_utils.cx(_styles, "btn--link", _activeStyleVariant)}
              options={{
                href: "#",
              }}
            >
              <Block tag={"div"}>{"Search"}</Block>
              <HtmlEmbed
                className={_utils.cx(_styles, "icon-em", _activeStyleVariant)}
                content={
                  '<svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M3 12.013L20.789 12M14.012 19L21 12L14.012 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n</svg>'
                }
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
            tag={"div"}
          >
            <NotSupported _atom={"Collection List"} />
            <Link
              block={"inline"}
              button={false}
              className={_utils.cx(
                _styles,
                "link-block",
                "filter--link",
                _activeStyleVariant
              )}
              fs-cmsfilter-element={"clear"}
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
                content={
                  '<svg width="1rem" height="1rem" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M14.1673 8.00009H5.93065M3.02332 8.00009H1.83398M3.02332 8.00009C3.02332 7.61464 3.17644 7.24498 3.44899 6.97243C3.72154 6.69988 4.0912 6.54676 4.47665 6.54676C4.8621 6.54676 5.23176 6.69988 5.50431 6.97243C5.77687 7.24498 5.92998 7.61464 5.92998 8.00009C5.92998 8.38554 5.77687 8.7552 5.50431 9.02775C5.23176 9.3003 4.8621 9.45342 4.47665 9.45342C4.0912 9.45342 3.72154 9.3003 3.44899 9.02775C3.17644 8.7552 3.02332 8.38554 3.02332 8.00009ZM14.1673 12.4048H10.3353M10.3353 12.4048C10.3353 12.7903 10.1818 13.1604 9.90921 13.433C9.6366 13.7056 9.26685 13.8588 8.88132 13.8588C8.49587 13.8588 8.12621 13.705 7.85366 13.4324C7.5811 13.1599 7.42798 12.7902 7.42798 12.4048M10.3353 12.4048C10.3353 12.0192 10.1818 11.6498 9.90921 11.3772C9.6366 11.1046 9.26685 10.9514 8.88132 10.9514C8.49587 10.9514 8.12621 11.1045 7.85366 11.3771C7.5811 11.6496 7.42798 12.0193 7.42798 12.4048M7.42798 12.4048H1.83398M14.1673 3.59542H12.0973M9.18998 3.59542H1.83398M9.18998 3.59542C9.18998 3.20998 9.3431 2.84031 9.61566 2.56776C9.88821 2.29521 10.2579 2.14209 10.6433 2.14209C10.8342 2.14209 11.0232 2.17968 11.1995 2.25272C11.3758 2.32576 11.536 2.43281 11.671 2.56776C11.8059 2.70272 11.913 2.86293 11.986 3.03926C12.0591 3.21558 12.0966 3.40457 12.0966 3.59542C12.0966 3.78628 12.0591 3.97526 11.986 4.15159C11.913 4.32792 11.8059 4.48813 11.671 4.62308C11.536 4.75804 11.3758 4.86509 11.1995 4.93813C11.0232 5.01117 10.8342 5.04876 10.6433 5.04876C10.2579 5.04876 9.88821 4.89564 9.61566 4.62308C9.3431 4.35053 9.18998 3.98087 9.18998 3.59542Z" stroke="#808080" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"/>\n</svg>'
                }
              />
              <Block tag={"div"}>{"Clear all filter"}</Block>
              <Block
                className={_utils.cx(
                  _styles,
                  "filter-num",
                  _activeStyleVariant
                )}
                tag={"div"}
              >
                {"2"}
              </Block>
            </Link>
          </Block>
        ) : null}
        <Block
          className={_utils.cx(_styles, "pop-up--filter", _activeStyleVariant)}
          tag={"div"}
        />
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
