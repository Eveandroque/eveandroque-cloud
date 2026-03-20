"use client";
import React from "react";
import NavbarWrapper from "./_Builtin/NavbarWrapper";
import Block from "./_Builtin/Block";
import NavbarBrand from "./_Builtin/NavbarBrand";
import Image from "./_Builtin/Image";
import NavbarMenu from "./_Builtin/NavbarMenu";
import NavbarLink from "./_Builtin/NavbarLink";
import NavbarButton from "./_Builtin/NavbarButton";
import Icon from "./_Builtin/Icon";
import * as _utils from "./utils";
import _styles from "./Navbar.module.css";

export function Navbar({ as: _Component = NavbarWrapper }) {
  return (
    <_Component
      className={_utils.cx(_styles, "nav_component")}
      tag="div"
      config={{
        animation: "default",
        collapse: "medium",
        docHeight: false,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <Block className={_utils.cx(_styles, "padding-global")} tag="div">
        <Block className={_utils.cx(_styles, "nav_container")} tag="div">
          <NavbarBrand
            className={_utils.cx(_styles, "nav_brand")}
            options={{
              href: "#",
            }}
          >
            <Image
              className={_utils.cx(_styles, "nav_logo")}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/678e68eef62edc01d0e5e270_client-first-logo-white.svg"
            />
          </NavbarBrand>
          <NavbarMenu
            className={_utils.cx(_styles, "nav_menu")}
            tag="nav"
            role="navigation"
          >
            <NavbarLink
              className={_utils.cx(_styles, "nav_menu_link")}
              options={{
                href: "https://finsweet.com/client-first/docs",
              }}
            >
              {"Read the docs"}
            </NavbarLink>
            <NavbarLink
              className={_utils.cx(_styles, "nav_menu_link")}
              options={{
                href: "https://finsweet.com",
              }}
            >
              {"About Finsweet"}
            </NavbarLink>
          </NavbarMenu>
          <NavbarButton className={_utils.cx(_styles, "nav_button")} tag="div">
            <Icon
              widget={{
                type: "icon",
                icon: "nav-menu",
              }}
            />
          </NavbarButton>
        </Block>
      </Block>
    </_Component>
  );
}
