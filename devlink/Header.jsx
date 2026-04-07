"use client";
import React from "react";
import Block from "./_Builtin/Block";
import Link from "./_Builtin/Link";
import Image from "./_Builtin/Image";
import HtmlEmbed from "./_Builtin/HtmlEmbed";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Header.module.css";

const _interactionsData = JSON.parse(
    '{"events":{"e":{"id":"e","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"234969eb-a074-c551-fa4c-5cca51def673","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"234969eb-a074-c551-fa4c-5cca51def673","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1737504098620},"e-2":{"id":"e-2","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"234969eb-a074-c551-fa4c-5cca51def673","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"234969eb-a074-c551-fa4c-5cca51def673","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1737504098620},"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"234969eb-a074-c551-fa4c-5cca51def673","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"234969eb-a074-c551-fa4c-5cca51def673","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1737504331191},"e-4":{"id":"e-4","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"234969eb-a074-c551-fa4c-5cca51def673","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"234969eb-a074-c551-fa4c-5cca51def673","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1737504331191}},"actionLists":{"a":{"id":"a","title":"burger-animate-in","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".burger_line.is-1","selectorGuids":["1e2d57fd-c99b-ebf1-21e4-4f4c36bd79b1","3e3b0bbe-1bff-7f16-1c20-0bb9390a766d"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".burger_line.is-1","selectorGuids":["1e2d57fd-c99b-ebf1-21e4-4f4c36bd79b1","3e3b0bbe-1bff-7f16-1c20-0bb9390a766d"]},"yValue":-5,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".burger_line.is-2","selectorGuids":["1e2d57fd-c99b-ebf1-21e4-4f4c36bd79b1","90555516-f126-736b-e512-af15a413aef1"]},"value":1,"unit":""}},{"id":"a-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".burger_line.is-3","selectorGuids":["1e2d57fd-c99b-ebf1-21e4-4f4c36bd79b1","b9f2049f-44b0-774d-907f-06fc3a216f4c"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".burger_line.is-3","selectorGuids":["1e2d57fd-c99b-ebf1-21e4-4f4c36bd79b1","b9f2049f-44b0-774d-907f-06fc3a216f4c"]},"yValue":5,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".burger_line.is-1","selectorGuids":["1e2d57fd-c99b-ebf1-21e4-4f4c36bd79b1","3e3b0bbe-1bff-7f16-1c20-0bb9390a766d"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".burger_line.is-3","selectorGuids":["1e2d57fd-c99b-ebf1-21e4-4f4c36bd79b1","b9f2049f-44b0-774d-907f-06fc3a216f4c"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".burger_line.is-2","selectorGuids":["1e2d57fd-c99b-ebf1-21e4-4f4c36bd79b1","90555516-f126-736b-e512-af15a413aef1"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-n-8","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".burger_line.is-1","selectorGuids":["1e2d57fd-c99b-ebf1-21e4-4f4c36bd79b1","3e3b0bbe-1bff-7f16-1c20-0bb9390a766d"]},"zValue":45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-n-9","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".burger_line.is-3","selectorGuids":["1e2d57fd-c99b-ebf1-21e4-4f4c36bd79b1","b9f2049f-44b0-774d-907f-06fc3a216f4c"]},"zValue":-45,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1737504101794},"a-2":{"id":"a-2","title":"burger-animate-out","actionItemGroups":[{"actionItems":[{"id":"a-2-n-9","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".burger_line.is-1","selectorGuids":["1e2d57fd-c99b-ebf1-21e4-4f4c36bd79b1","3e3b0bbe-1bff-7f16-1c20-0bb9390a766d"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-2-n-10","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".burger_line.is-3","selectorGuids":["1e2d57fd-c99b-ebf1-21e4-4f4c36bd79b1","b9f2049f-44b0-774d-907f-06fc3a216f4c"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-2-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".burger_line.is-1","selectorGuids":["1e2d57fd-c99b-ebf1-21e4-4f4c36bd79b1","3e3b0bbe-1bff-7f16-1c20-0bb9390a766d"]},"yValue":-5,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".burger_line.is-3","selectorGuids":["1e2d57fd-c99b-ebf1-21e4-4f4c36bd79b1","b9f2049f-44b0-774d-907f-06fc3a216f4c"]},"yValue":5,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".burger_line.is-2","selectorGuids":["1e2d57fd-c99b-ebf1-21e4-4f4c36bd79b1","90555516-f126-736b-e512-af15a413aef1"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1737504101794},"a-3":{"id":"a-3","title":"offcanvas-show","actionItemGroups":[{"actionItems":[{"id":"a-3-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".header_nav_offcanvas","selectorGuids":["2463d040-6f12-2909-136c-0a7ae9d18e67"]},"value":"none"}},{"id":"a-3-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".header_nav_offcanvas","selectorGuids":["2463d040-6f12-2909-136c-0a7ae9d18e67"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-3-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".header_nav_offcanvas","selectorGuids":["2463d040-6f12-2909-136c-0a7ae9d18e67"]},"value":"block"}}]},{"actionItems":[{"id":"a-3-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".header_nav_offcanvas","selectorGuids":["2463d040-6f12-2909-136c-0a7ae9d18e67"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1737504333780},"a-4":{"id":"a-4","title":"offcanvas-hide","actionItemGroups":[{"actionItems":[{"id":"a-4-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":300,"target":{"selector":".header_nav_offcanvas","selectorGuids":["2463d040-6f12-2909-136c-0a7ae9d18e67"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-4-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".header_nav_offcanvas","selectorGuids":["2463d040-6f12-2909-136c-0a7ae9d18e67"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1737504333780}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Header({
                           as: _Component = Block,
                           variant = "Base",
                           mediaLogoDesktop = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/679033bac44cbdf1a21203f1_eve-and-roque.webp",
                           mediaLogoMobile = "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67918d8401d08a1ae45eb2ac_eve-and-roque-inversed.webp",
                       }) {
    _interactions.useInteractions(_interactionsData, _styles);

    const _styleVariantMap = {
        Base: "",
        Inversed: "w-variant-424802d7-ea39-8a8e-440e-4831a9ccc947",
    };

    const _activeStyleVariant = _styleVariantMap[variant];

    return (
        <_Component
            className={_utils.cx(_styles, "header", _activeStyleVariant)}
            tag="header"
            id="navBar"
        >
            <Block
                className={_utils.cx(_styles, "padding-global", _activeStyleVariant)}
                tag="div"
            >
                <Block
                    className={_utils.cx(_styles, "container-large", _activeStyleVariant)}
                    tag="div"
                >
                    <Block
                        className={_utils.cx(_styles, "header_wrap", _activeStyleVariant)}
                        tag="div"
                    >
                        <Block
                            className={_utils.cx(
                                _styles,
                                "header_wrap-item",
                                _activeStyleVariant
                            )}
                            tag="div"
                        >
                            <Link
                                className={_utils.cx(
                                    _styles,
                                    "header_logo-link",
                                    _activeStyleVariant
                                )}
                                button={false}
                                block="inline"
                                options={{
                                    href: "/",
                                }}
                            >
                                <Image
                                    className={_utils.cx(
                                        _styles,
                                        "header_logo",
                                        "is-desktop",
                                        _activeStyleVariant
                                    )}
                                    loading="lazy"
                                    width="84"
                                    height="47"
                                    alt=""
                                    src={mediaLogoDesktop}
                                />
                                <Image
                                    className={_utils.cx(
                                        _styles,
                                        "header_logo",
                                        "is-mobile",
                                        _activeStyleVariant
                                    )}
                                    loading="lazy"
                                    width="84"
                                    height="47"
                                    alt=""
                                    src={mediaLogoMobile}
                                />
                            </Link>
                        </Block>
                        <Block
                            className={_utils.cx(
                                _styles,
                                "nav-links-wrap",
                                _activeStyleVariant
                            )}
                            tag="div"
                        >
                            <Block
                                className={_utils.cx(
                                    _styles,
                                    "header_wrap-item",
                                    _activeStyleVariant
                                )}
                                tag="div"
                            >
                                <Block
                                    className={_utils.cx(
                                        _styles,
                                        "header_nav_offcanvas",
                                        _activeStyleVariant
                                    )}
                                    tag="div"
                                >
                                    <Block
                                        className={_utils.cx(
                                            _styles,
                                            "header_nav_list",
                                            _activeStyleVariant
                                        )}
                                        tag="div"
                                    >
                                        <Link
                                            className={_utils.cx(
                                                _styles,
                                                "header_nav_link",
                                                _activeStyleVariant
                                            )}
                                            button={false}
                                            block=""
                                            options={{
                                                href: "/",
                                            }}
                                        >
                                            {"Home"}
                                        </Link>
                                        <Link
                                            className={_utils.cx(
                                                _styles,
                                                "header_nav_link",
                                                _activeStyleVariant
                                            )}
                                            button={false}
                                            block=""
                                            options={{
                                                href: "/working-with-us",
                                            }}
                                        >
                                            {"Work with us"}
                                        </Link>
                                        <Link
                                            className={_utils.cx(
                                                _styles,
                                                "header_nav_link",
                                                _activeStyleVariant
                                            )}
                                            button={false}
                                            block=""
                                            options={{
                                                href: "/about-us",
                                            }}
                                        >
                                            {"About us"}
                                        </Link>
                                        <Link
                                            className={_utils.cx(
                                                _styles,
                                                "header_nav_link",
                                                _activeStyleVariant
                                            )}
                                            button={false}
                                            block=""
                                            options={{
                                                href: "/contact",
                                            }}
                                        >
                                            {"Contact us"}
                                        </Link>
                                    </Block>
                                </Block>
                            </Block>
                            <Block
                                className={_utils.cx(
                                    _styles,
                                    "nav-elements_dividor",
                                    _activeStyleVariant
                                )}
                                tag="div"
                            />
                            <Block
                                className={_utils.cx(
                                    _styles,
                                    "header_wrap-item",
                                    _activeStyleVariant
                                )}
                                tag="div"
                            >
                                <Block
                                    className={_utils.cx(
                                        _styles,
                                        "header_wrap_widget",
                                        _activeStyleVariant
                                    )}
                                    tag="div"
                                >
                                    <Link
                                        className={_utils.cx(
                                            _styles,
                                            "button",
                                            "is-icon",
                                            _activeStyleVariant
                                        )}
                                        button={false}
                                        block="inline"
                                        options={{
                                            href: "#",
                                        }}
                                    >
                                        <Block tag="div">{"Find ALocation"}</Block>
                                        <HtmlEmbed
                                            className={_utils.cx(
                                                _styles,
                                                "icon-1x1-small",
                                                _activeStyleVariant
                                            )}
                                            content=""
                                            value="%3Csvg%20aria-hidden%3D%22true%22%20fill%3D%22currentColor%22%20role%3D%22img%22%20viewBox%3D%220%200%2020%2021%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EArrow%20Right%3C%2Ftitle%3E%3Cpolygon%20points%3D%2216.172%209%2010.101%202.929%2011.515%201.515%2020%2010%2019.293%2010.707%2011.515%2018.485%2010.101%2017.071%2016.172%2011%200%2011%200%209%22%2F%3E%3C%2Fsvg%3E"
                                        />
                                    </Link>
                                </Block>
                                <Block
                                    className={_utils.cx(
                                        _styles,
                                        "header_burger",
                                        _activeStyleVariant
                                    )}
                                    data-w-id="234969eb-a074-c551-fa4c-5cca51def673"
                                    tag="div"
                                >
                                    <Block
                                        className={_utils.cx(
                                            _styles,
                                            "burger_line",
                                            "is-1",
                                            _activeStyleVariant
                                        )}
                                        tag="div"
                                    />
                                    <Block
                                        className={_utils.cx(
                                            _styles,
                                            "burger_line",
                                            "is-2",
                                            _activeStyleVariant
                                        )}
                                        tag="div"
                                    />
                                    <Block
                                        className={_utils.cx(
                                            _styles,
                                            "burger_line",
                                            "is-3",
                                            _activeStyleVariant
                                        )}
                                        tag="div"
                                    />
                                </Block>
                            </Block>
                        </Block>
                    </Block>
                </Block>
            </Block>
        </_Component>
    );
}
