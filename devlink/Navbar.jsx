"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";
import Icon from "./webflow_modules/Icon/components/Icon";
import Image from "./webflow_modules/Basic/components/Image";
import NavbarBrand from "./webflow_modules/Navbar/components/NavbarBrand";
import NavbarButton from "./webflow_modules/Navbar/components/NavbarButton";
import NavbarLink from "./webflow_modules/Navbar/components/NavbarLink";
import NavbarMenu from "./webflow_modules/Navbar/components/NavbarMenu";
import NavbarWrapper from "./webflow_modules/Navbar/components/NavbarWrapper";

export function Navbar({}) {
  return (
    <NavbarWrapper
      className={_utils.cx(_styles, "nav_component")}
      config={{
        animation: "default",
        collapse: "medium",
        docHeight: false,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
      tag={"div"}
    >
      <Block className={_utils.cx(_styles, "padding-global")} tag={"div"}>
        <Block className={_utils.cx(_styles, "nav_container")} tag={"div"}>
          <NavbarBrand
            className={_utils.cx(_styles, "nav_brand")}
            options={{
              href: "#",
            }}
          >
            <Image
              alt={""}
              className={_utils.cx(_styles, "nav_logo")}
              height={"auto"}
              loading={"lazy"}
              src={
                "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/678e68eef62edc01d0e5e270_client-first-logo-white.svg"
              }
              width={"auto"}
            />
          </NavbarBrand>
          <NavbarMenu
            className={_utils.cx(_styles, "nav_menu")}
            role={"navigation"}
            tag={"nav"}
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
          <NavbarButton
            className={_utils.cx(_styles, "nav_button")}
            tag={"div"}
          >
            <Icon
              widget={{
                type: "icon",
                icon: "nav-menu",
              }}
            />
          </NavbarButton>
        </Block>
      </Block>
    </NavbarWrapper>
  );
}
