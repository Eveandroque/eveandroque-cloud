"use client";
import React from "react";
import Link from "./_Builtin/Link";
import Block from "./_Builtin/Block";
import HtmlEmbed from "./_Builtin/HtmlEmbed";
import Image from "./_Builtin/Image";
import Heading from "./_Builtin/Heading";
import Paragraph from "./_Builtin/Paragraph";
import { Subheading } from "./Subheading";
import { Tags } from "./Tags";
import * as _utils from "./utils";
import _styles from "./PropertyCard.module.css";

export function PropertyCard({
  as: _Component = Link,
  contentAvailabilityText = "Available from: 10th Jan",
  contentLocationText = "Austin, Texas",
  contentPropertyNameText = "The Glass Horizon Villa",
  contentDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  mediaImage = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/6791aff08783b3a42005ff08_property-placeholder.webp",
  mediaSettingsAltText = "__wf_reserved_inherit",
  componentPropertyTagList,
  contentDateText = "10th Jan",
  settingsDateVisibility = true,

  link = {
    href: "#",
  },

  variant = "Base",
  textSizeSmallVisibility = true,
  visibilityDate = true,
  visibilityStarRating = true,
  image = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/6791aff08783b3a42005ff08_property-placeholder.webp",
  image2 = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/6791aff08783b3a42005ff08_property-placeholder.webp",
  detailsParagraphVisibility = true,
}) {
  const _styleVariantMap = {
    Base: "",
    "listing-card": "w-variant-ac30261b-9808-ded3-0d0e-abd1d3212470",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "component_property_card",
        _activeStyleVariant
      )}
      button={false}
      block="inline"
      options={link}
    >
      <Block
        className={_utils.cx(
          _styles,
          "component_property_image-wrap",
          _activeStyleVariant
        )}
        tag="div"
      >
        <Block
          className={_utils.cx(
            _styles,
            "component_property_overlay",
            _activeStyleVariant
          )}
          tag="div"
        >
          {visibilityDate ? (
            <Block
              className={_utils.cx(
                _styles,
                "component_property_overlay-item",
                _activeStyleVariant
              )}
              tag="div"
            >
              <Subheading
                contentText={contentAvailabilityText}
                contentDate={contentDateText}
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
              tag="div"
            >
              <Block
                className={_utils.cx(
                  _styles,
                  "subheading_wrap",
                  _activeStyleVariant
                )}
                tag="div"
              >
                <Block
                  className={_utils.cx(
                    _styles,
                    "subheading",
                    _activeStyleVariant
                  )}
                  tag="div"
                  favourite-icon=""
                >
                  <HtmlEmbed
                    className={_utils.cx(
                      _styles,
                      "property_star_embed",
                      _activeStyleVariant
                    )}
                    content=""
                    value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2020%2018%22%20fill%3D%22currentColor%22%3E%3Cpath%20d%3D%22M9.99958%200.666992L12.5862%206.27366L18.7179%207.00116L14.1846%2011.1928L15.3879%2017.2495L9.99958%2014.2337L4.61125%2017.2503L5.81458%2011.1937L1.28125%207.00033L7.41375%206.27283L9.99958%200.666992Z%22%20stroke%3D%22%23000%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E"
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
          loading="lazy"
          width="400"
          height="340"
          src={image2}
        />
      </Block>
      <Block
        className={_utils.cx(_styles, "spacer-small", _activeStyleVariant)}
        tag="div"
      />
      <Block
        className={_utils.cx(_styles, "button-group", _activeStyleVariant)}
        tag="div"
      >
        <Subheading
          contentText={contentLocationText}
          visibilityIconDisplay={true}
        />
      </Block>
      <Block
        className={_utils.cx(_styles, "spacer-small", _activeStyleVariant)}
        tag="div"
      />
      <Block
        className={_utils.cx(
          _styles,
          "component_property_name-wrap",
          _activeStyleVariant
        )}
        tag="div"
      >
        <Heading
          className={_utils.cx(
            _styles,
            "heading-style-h4",
            _activeStyleVariant
          )}
          tag="h3"
        >
          {contentPropertyNameText}
        </Heading>
      </Block>
      <Block
        className={_utils.cx(_styles, "spacer-xsmall", _activeStyleVariant)}
        tag="div"
      />
      {detailsParagraphVisibility ? (
        <Block
          className={_utils.cx(
            _styles,
            "component_property_description-wrap",
            _activeStyleVariant
          )}
          tag="div"
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
        tag="div"
      />
      {componentPropertyTagList}
      <Block
        className={_utils.cx(
          _styles,
          "component_property_tag-list",
          "hide",
          _activeStyleVariant
        )}
        tag="div"
      >
        <Tags />
        <Tags count="5" name="Baths" />
        <Tags
          icon="https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/6791b38db1c9175a4df925b0_shower.svg"
          name="Guests"
          count="10"
        />
      </Block>
    </_Component>
  );
}
