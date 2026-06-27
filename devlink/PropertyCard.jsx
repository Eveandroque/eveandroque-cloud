"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";
import Heading from "./webflow_modules/Basic/components/Heading";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Image from "./webflow_modules/Basic/components/Image";
import Link from "./webflow_modules/Basic/components/Link";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";
import { Subheading } from "./Subheading";
import { Tags } from "./Tags";

export function PropertyCard({
  componentPropertyTagList,
  contentAvailabilityText = "Available from: 10th Jan",
  contentDateText = "10th Jan",
  contentDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  contentLocationText = "Austin, Texas",
  contentPropertyNameText = "The Glass Horizon Villa",
  detailsParagraphVisibility = true,
  image = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/6791aff08783b3a42005ff08_property-placeholder.webp",
  image2 = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/6791aff08783b3a42005ff08_property-placeholder.webp",

  link = {
    href: "#",
  },

  mediaImage = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/6791aff08783b3a42005ff08_property-placeholder.webp",
  mediaSettingsAltText = "__wf_reserved_inherit",
  settingsDateVisibility = true,
  textSizeSmallVisibility = true,
  variant = "Base",
  visibilityDate = true,
  visibilityStarRating = true,
}) {
  const _styleVariantMap = {
    Base: "",
    "listing-card": "w-variant-ac30261b-9808-ded3-0d0e-abd1d3212470",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <Link
      block={"inline"}
      button={false}
      className={_utils.cx(
        _styles,
        "component_property_card",
        _activeStyleVariant
      )}
      options={link}
    >
      <Block
        className={_utils.cx(
          _styles,
          "component_property_image-wrap",
          _activeStyleVariant
        )}
        tag={"div"}
      >
        <Block
          className={_utils.cx(
            _styles,
            "component_property_overlay",
            _activeStyleVariant
          )}
          tag={"div"}
        >
          {visibilityDate ? (
            <Block
              className={_utils.cx(
                _styles,
                "component_property_overlay-item",
                _activeStyleVariant
              )}
              tag={"div"}
            >
              <Subheading
                contentDate={contentDateText}
                contentText={contentAvailabilityText}
                visibilityDateVisibility={settingsDateVisibility}
              />
            </Block>
          ) : null}
          {visibilityStarRating ? (
            <Block
              className={_utils.cx(
                _styles,
                "component_property_overlay-item",
                _activeStyleVariant
              )}
              tag={"div"}
            >
              <Block
                className={_utils.cx(
                  _styles,
                  "subheading_wrap",
                  _activeStyleVariant
                )}
                tag={"div"}
              >
                <Block
                  className={_utils.cx(
                    _styles,
                    "subheading",
                    _activeStyleVariant
                  )}
                  favourite-icon={""}
                  tag={"div"}
                >
                  <HtmlEmbed
                    className={_utils.cx(
                      _styles,
                      "property_star_embed",
                      _activeStyleVariant
                    )}
                    content={
                      '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 18" fill="currentColor"><path d="M9.99958 0.666992L12.5862 6.27366L18.7179 7.00116L14.1846 11.1928L15.3879 17.2495L9.99958 14.2337L4.61125 17.2503L5.81458 11.1937L1.28125 7.00033L7.41375 6.27283L9.99958 0.666992Z" stroke="#000" stroke-linejoin="round"/></svg>'
                    }
                  />
                </Block>
              </Block>
            </Block>
          ) : null}
        </Block>
        <Image
          className={_utils.cx(
            _styles,
            "component_property_image",
            _activeStyleVariant
          )}
          height={"340"}
          loading={"lazy"}
          src={image2}
          width={"400"}
        />
      </Block>
      <Block
        className={_utils.cx(_styles, "spacer-small", _activeStyleVariant)}
        tag={"div"}
      />
      <Block
        className={_utils.cx(_styles, "button-group", _activeStyleVariant)}
        tag={"div"}
      >
        <Subheading
          contentText={contentLocationText}
          visibilityIconDisplay={true}
        />
      </Block>
      <Block
        className={_utils.cx(_styles, "spacer-small", _activeStyleVariant)}
        tag={"div"}
      />
      <Block
        className={_utils.cx(
          _styles,
          "component_property_name-wrap",
          _activeStyleVariant
        )}
        tag={"div"}
      >
        <Heading
          className={_utils.cx(
            _styles,
            "heading-style-h4",
            _activeStyleVariant
          )}
          tag={"h3"}
        >
          {contentPropertyNameText}
        </Heading>
      </Block>
      <Block
        className={_utils.cx(_styles, "spacer-xsmall", _activeStyleVariant)}
        tag={"div"}
      />
      {detailsParagraphVisibility ? (
        <Block
          className={_utils.cx(
            _styles,
            "component_property_description-wrap",
            _activeStyleVariant
          )}
          tag={"div"}
        >
          {textSizeSmallVisibility ? (
            <Paragraph
              className={_utils.cx(
                _styles,
                "text-size-small",
                _activeStyleVariant
              )}
            >
              {contentDescription}
            </Paragraph>
          ) : null}
        </Block>
      ) : null}
      <Block
        className={_utils.cx(_styles, "spacer-small", _activeStyleVariant)}
        tag={"div"}
      />
      {componentPropertyTagList}
      <Block
        className={_utils.cx(
          _styles,
          "component_property_tag-list",
          "hide",
          _activeStyleVariant
        )}
        tag={"div"}
      >
        <Tags />
        <Tags count={"5"} name={"Baths"} />
        <Tags
          count={"10"}
          icon={
            "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/6791b38db1c9175a4df925b0_shower.svg"
          }
          name={"Guests"}
        />
      </Block>
    </Link>
  );
}
