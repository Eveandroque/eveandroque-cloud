"use client";
import React from "react";
import Block from "./_Builtin/Block";
import Heading from "./_Builtin/Heading";
import Paragraph from "./_Builtin/Paragraph";
import Link from "./_Builtin/Link";
import HtmlEmbed from "./_Builtin/HtmlEmbed";
import Image from "./_Builtin/Image";
import FormWrapper from "./_Builtin/FormWrapper";
import FormForm from "./_Builtin/FormForm";
import FormTextInput from "./_Builtin/FormTextInput";
import FormButton from "./_Builtin/FormButton";
import DOM from "./_Builtin/DOM";
import FormSuccessMessage from "./_Builtin/FormSuccessMessage";
import FormErrorMessage from "./_Builtin/FormErrorMessage";
import NotSupported from "./_Builtin/NotSupported";
// import { dynamoPlainTextToListOfElements } from
// "./values/DynamoGateway/dynamoPlainTextToListOfElements";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

export function Footer({as: _Component = Block}) {
    return (
        <_Component className={_utils.cx(_styles, "footer")} tag="footer">
            <Block
                className={_utils.cx(_styles, "background-color-primary")}
                tag="div"
            >
                <Block className={_utils.cx(_styles, "footer_wrap")} tag="div">
                    <Block className={_utils.cx(_styles, "footer_wrap-item")} tag="div">
                        <Block className={_utils.cx(_styles, "padding-global")} tag="div">
                            <Block
                                className={_utils.cx(_styles, "container-large")}
                                tag="div"
                            >
                                <Block className={_utils.cx(_styles, "footer_top")} tag="div">
                                    <Block
                                        className={_utils.cx(_styles, "footer_top-item")}
                                        tag="div"
                                    >
                                        <Block
                                            className={_utils.cx(_styles, "footer_top-content")}
                                            tag="div"
                                        >
                                            <Heading tag="h2">
                                                {"Let’s Bring Your Vision to Life"}
                                            </Heading>
                                            <Block
                                                className={_utils.cx(_styles, "spacer-small")}
                                                tag="div"
                                            />
                                            <Paragraph
                                                className={_utils.cx(_styles, "text-color-alternate")}
                                            >
                                                {
                                                    "Reach out to our concierge team to receive curated estate options and begin planning with confidence."
                                                }
                                            </Paragraph>
                                            <Block
                                                className={_utils.cx(_styles, "hide-tablet")}
                                                tag="div"
                                            >
                                                <Block
                                                    className={_utils.cx(_styles, "spacer-xsmall")}
                                                    tag="div"
                                                />
                                                <Block
                                                    className={_utils.cx(_styles, "spacer-medium")}
                                                    tag="div"
                                                />
                                                <Block
                                                    className={_utils.cx(_styles, "button-group")}
                                                    tag="div"
                                                >
                                                    <Link
                                                        className={_utils.cx(
                                                            _styles,
                                                            "button",
                                                            "is-icon",
                                                            "is-inversed"
                                                        )}
                                                        button={false}
                                                        block="inline"
                                                        options={{
                                                            href: "#",
                                                        }}
                                                    >
                                                        <Block
                                                            tag="div">{"Talk to Our Team"}</Block>
                                                        <HtmlEmbed
                                                            className={_utils.cx(_styles, "icon-1x1-small")}
                                                            content=""
                                                            value="%3Csvg%20aria-hidden%3D%22true%22%20fill%3D%22currentColor%22%20role%3D%22img%22%20viewBox%3D%220%200%2020%2021%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EArrow%20Right%3C%2Ftitle%3E%3Cpolygon%20points%3D%2216.172%209%2010.101%202.929%2011.515%201.515%2020%2010%2019.293%2010.707%2011.515%2018.485%2010.101%2017.071%2016.172%2011%200%2011%200%209%22%2F%3E%3C%2Fsvg%3E"
                                                        />
                                                    </Link>
                                                </Block>
                                            </Block>
                                        </Block>
                                    </Block>
                                    <Block
                                        className={_utils.cx(_styles, "footer_top-item")}
                                        tag="div"
                                    >
                                        <Block
                                            className={_utils.cx(_styles, "footer_top_image-wrap")}
                                            tag="div"
                                        >
                                            <Image
                                                className={_utils.cx(_styles, "footer_top_image")}
                                                loading="lazy"
                                                width="630"
                                                height="240"
                                                alt=""
                                                src="https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/682cbd0bebb4b4d14d95bbb9_1%20(25).jpg"
                                            />
                                            <Block
                                                className={_utils.cx(_styles, "show-tablet")}
                                                tag="div"
                                            >
                                                <Block
                                                    className={_utils.cx(_styles, "spacer-xsmall")}
                                                    tag="div"
                                                />
                                                <Block
                                                    className={_utils.cx(_styles, "spacer-medium")}
                                                    tag="div"
                                                />
                                                <Block
                                                    className={_utils.cx(
                                                        _styles,
                                                        "button-group",
                                                        "is-center"
                                                    )}
                                                    tag="div"
                                                >
                                                    <Link
                                                        className={_utils.cx(
                                                            _styles,
                                                            "button",
                                                            "is-icon",
                                                            "is-inversed"
                                                        )}
                                                        button={false}
                                                        block="inline"
                                                        options={{
                                                            href: "#",
                                                        }}
                                                    >
                                                        <Block tag="div">{"Contact Us"}</Block>
                                                        <HtmlEmbed
                                                            className={_utils.cx(_styles, "icon-1x1-small")}
                                                            content=""
                                                            value="%3Csvg%20aria-hidden%3D%22true%22%20fill%3D%22currentColor%22%20role%3D%22img%22%20viewBox%3D%220%200%2020%2021%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EArrow%20Right%3C%2Ftitle%3E%3Cpolygon%20points%3D%2216.172%209%2010.101%202.929%2011.515%201.515%2020%2010%2019.293%2010.707%2011.515%2018.485%2010.101%2017.071%2016.172%2011%200%2011%200%209%22%2F%3E%3C%2Fsvg%3E"
                                                        />
                                                    </Link>
                                                </Block>
                                            </Block>
                                        </Block>
                                    </Block>
                                </Block>
                            </Block>
                        </Block>
                    </Block>
                    <Block className={_utils.cx(_styles, "footer_wrap-item")} tag="div">
                        <Block className={_utils.cx(_styles, "footer_divider")} tag="div"/>
                    </Block>
                    <Block className={_utils.cx(_styles, "footer_wrap-item")} tag="div">
                        <Block className={_utils.cx(_styles, "padding-global")} tag="div">
                            <Block
                                className={_utils.cx(_styles, "container-large")}
                                tag="div"
                            >
                                <Block
                                    className={_utils.cx(_styles, "footer_bottom_wrap")}
                                    tag="div"
                                >
                                    <Block
                                        className={_utils.cx(_styles, "footer_bottom")}
                                        tag="div"
                                    >
                                        <Block
                                            className={_utils.cx(_styles, "footer_bottom-item")}
                                            id={_utils.cx(
                                                _styles,
                                                "w-node-ea2f34fb-79fd-7250-82f6-9ad3b0bdeb8a-b0bdeb60"
                                            )}
                                            tag="div"
                                        >
                                            <Block
                                                className={_utils.cx(
                                                    _styles,
                                                    "footer_bottom-content-wrap"
                                                )}
                                                tag="div"
                                            >
                                                <Heading
                                                    className={_utils.cx(_styles, "heading-style-h4")}
                                                    tag="h3"
                                                >
                                                    {
                                                        "Let our team help you find a space that fits your needs."
                                                    }
                                                </Heading>
                                                <Block
                                                    className={_utils.cx(_styles, "spacer-large")}
                                                    tag="div"
                                                />
                                                <Block
                                                    className={_utils.cx(
                                                        _styles,
                                                        "footer_bottom_details-list-wrap"
                                                    )}
                                                    tag="div"
                                                >
                                                    <Block
                                                        className={_utils.cx(
                                                            _styles,
                                                            "footer_bottom_details-list"
                                                        )}
                                                        tag="div"
                                                    >
                                                        <Block
                                                            className={_utils.cx(
                                                                _styles,
                                                                "footer_bottom_details-item"
                                                            )}
                                                            tag="div"
                                                        >
                                                            <Paragraph
                                                                className={_utils.cx(
                                                                    _styles,
                                                                    "text-color-grey"
                                                                )}
                                                            >
                                                                {"Address"}
                                                            </Paragraph>
                                                        </Block>
                                                        <Block
                                                            className={_utils.cx(
                                                                _styles,
                                                                "footer_bottom_details-item"
                                                            )}
                                                            tag="div"
                                                        >
                                                            <Paragraph>
                                                                {"750 N San Vicente Blvd Suite 800W"}
                                                                <br/>
                                                                {"West Hollywood, CA 90069"}
                                                            </Paragraph>
                                                        </Block>
                                                    </Block>
                                                    <Block
                                                        className={_utils.cx(
                                                            _styles,
                                                            "footer_bottom_details-list"
                                                        )}
                                                        tag="div"
                                                    >
                                                        <Block
                                                            className={_utils.cx(
                                                                _styles,
                                                                "footer_bottom_details-item"
                                                            )}
                                                            tag="div"
                                                        >
                                                            <Paragraph
                                                                className={_utils.cx(
                                                                    _styles,
                                                                    "text-color-grey"
                                                                )}
                                                            >
                                                                {"Phone"}
                                                            </Paragraph>
                                                        </Block>
                                                        <Block
                                                            className={_utils.cx(
                                                                _styles,
                                                                "footer_bottom_details-item"
                                                            )}
                                                            tag="div"
                                                        >
                                                            <Link
                                                                className={_utils.cx(_styles, "phonelink")}
                                                                button={false}
                                                                block=""
                                                                options={{
                                                                    href: "#",
                                                                }}
                                                            >
                                                                {"(877) 767-8301"}
                                                            </Link>
                                                        </Block>
                                                    </Block>
                                                    <Block
                                                        className={_utils.cx(
                                                            _styles,
                                                            "footer_bottom_details-list"
                                                        )}
                                                        id={_utils.cx(
                                                            _styles,
                                                            "w-node-ea2f34fb-79fd-7250-82f6-9ad3b0bdeba4-b0bdeb60"
                                                        )}
                                                        tag="div"
                                                    >
                                                        <Block
                                                            className={_utils.cx(
                                                                _styles,
                                                                "footer_bottom_details-item"
                                                            )}
                                                            tag="div"
                                                        >
                                                            <Paragraph
                                                                className={_utils.cx(
                                                                    _styles,
                                                                    "text-color-grey"
                                                                )}
                                                            >
                                                                {"Email"}
                                                            </Paragraph>
                                                        </Block>
                                                        <Block
                                                            className={_utils.cx(
                                                                _styles,
                                                                "footer_bottom_details-item"
                                                            )}
                                                            tag="div"
                                                        >
                                                            <Paragraph>{"inquire@eveandroque.com"}</Paragraph>
                                                        </Block>
                                                    </Block>
                                                    <Block
                                                        className={_utils.cx(
                                                            _styles,
                                                            "footer_bottom_details-list"
                                                        )}
                                                        tag="div"
                                                    >
                                                        <Block
                                                            className={_utils.cx(
                                                                _styles,
                                                                "footer_bottom_details-item"
                                                            )}
                                                            tag="div"
                                                        >
                                                            <Paragraph
                                                                className={_utils.cx(
                                                                    _styles,
                                                                    "text-color-grey"
                                                                )}
                                                            >
                                                                {"Social"}
                                                            </Paragraph>
                                                        </Block>
                                                        <Block
                                                            className={_utils.cx(
                                                                _styles,
                                                                "footer_bottom_details-item"
                                                            )}
                                                            id={_utils.cx(
                                                                _styles,
                                                                "w-node-ea2f34fb-79fd-7250-82f6-9ad3b0bdebaf-b0bdeb60"
                                                            )}
                                                            tag="div"
                                                        >
                                                            <Block
                                                                className={_utils.cx(
                                                                    _styles,
                                                                    "footer_bottom_socials-list"
                                                                )}
                                                                tag="div"
                                                            >
                                                                <Link
                                                                    className={_utils.cx(
                                                                        _styles,
                                                                        "footer_bottom_socials-link"
                                                                    )}
                                                                    button={false}
                                                                    block="inline"
                                                                    options={{
                                                                        href: "https://www.linkedin.com/company/eve-roque",
                                                                        target: "_blank",
                                                                    }}
                                                                >
                                                                    <HtmlEmbed
                                                                        className={_utils.cx(
                                                                            _styles,
                                                                            "footer_bottom_socials-icon"
                                                                        )}
                                                                        content=""
                                                                        value="%3Csvg%20width%3D%2248%22%20height%3D%2248%22%20viewBox%3D%220%200%2048%2048%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M16.5%2015.2422C15.6716%2015.2422%2015%2015.9138%2015%2016.7422V31.7422C15%2032.5706%2015.6716%2033.2422%2016.5%2033.2422H31.5C32.3284%2033.2422%2033%2032.5706%2033%2031.7422V16.7422C33%2015.9138%2032.3284%2015.2422%2031.5%2015.2422H16.5ZM20.5208%2019.2449C20.5264%2020.2012%2019.8106%2020.7904%2018.9612%2020.7862C18.1611%2020.7819%2017.4636%2020.1449%2017.4678%2019.2463C17.472%2018.4012%2018.14%2017.7219%2019.0076%2017.7416C19.8879%2017.7613%2020.5264%2018.4068%2020.5208%2019.2449ZM24.2797%2022.0039H21.7597H21.7583V30.5638H24.4217V30.3641C24.4217%2029.9842%2024.4214%2029.6042%2024.4211%2029.2241C24.4203%2028.2103%2024.4194%2027.1954%2024.4246%2026.1819C24.426%2025.9358%2024.4372%2025.6799%2024.5005%2025.445C24.7381%2024.5675%2025.5271%2024.0008%2026.4074%2024.1401C26.9727%2024.2286%2027.3467%2024.5563%2027.5042%2025.0893C27.6013%2025.4225%2027.6449%2025.7811%2027.6491%2026.1285C27.6605%2027.1761%2027.6589%2028.2237%2027.6573%2029.2714C27.6567%2029.6412%2027.6561%2030.0112%2027.6561%2030.381V30.5624H30.328V30.3571C30.328%2029.9051%2030.3278%2029.4532%2030.3275%2029.0013C30.327%2027.8718%2030.3264%2026.7423%2030.3294%2025.6124C30.3308%2025.1019%2030.276%2024.5985%2030.1508%2024.1049C29.9638%2023.3708%2029.5771%2022.7633%2028.9485%2022.3246C28.5027%2022.0124%2028.0133%2021.8113%2027.4663%2021.7888C27.404%2021.7862%2027.3412%2021.7828%2027.2781%2021.7794C26.9984%2021.7643%2026.7141%2021.7489%2026.4467%2021.8028C25.6817%2021.9561%2025.0096%2022.3063%2024.5019%2022.9236C24.4429%2022.9944%2024.3852%2023.0663%2024.2991%2023.1736L24.2797%2023.1979V22.0039ZM17.6816%2030.5666H20.3324V22.0095H17.6816V30.5666Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Ccircle%20cx%3D%2224%22%20cy%3D%2224%22%20r%3D%2223.5%22%20stroke%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                                                    />
                                                                </Link>
                                                                <Link
                                                                    className={_utils.cx(
                                                                        _styles,
                                                                        "footer_bottom_socials-link"
                                                                    )}
                                                                    button={false}
                                                                    block="inline"
                                                                    options={{
                                                                        href: "https://instagram.com/eveandroque",
                                                                        target: "_blank",
                                                                    }}
                                                                >
                                                                    <HtmlEmbed
                                                                        className={_utils.cx(
                                                                            _styles,
                                                                            "footer_bottom_socials-icon"
                                                                        )}
                                                                        content=""
                                                                        value="%3Csvg%20width%3D%2248%22%20height%3D%2248%22%20viewBox%3D%220%200%2048%2048%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%2224%22%20cy%3D%2224%22%20r%3D%2223.5%22%20stroke%3D%22currentColor%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M27.667%2015.2422H19.667C16.9056%2015.2422%2014.667%2017.4808%2014.667%2020.2422V28.2422C14.667%2031.0036%2016.9056%2033.2422%2019.667%2033.2422H27.667C30.4284%2033.2422%2032.667%2031.0036%2032.667%2028.2422V20.2422C32.667%2017.4808%2030.4284%2015.2422%2027.667%2015.2422ZM30.917%2028.2422C30.9115%2030.0348%2029.4596%2031.4867%2027.667%2031.4922H19.667C17.8743%2031.4867%2016.4225%2030.0348%2016.417%2028.2422V20.2422C16.4225%2018.4495%2017.8743%2016.9977%2019.667%2016.9922H27.667C29.4596%2016.9977%2030.9115%2018.4495%2030.917%2020.2422V28.2422ZM28.417%2020.4922C28.9693%2020.4922%2029.417%2020.0445%2029.417%2019.4922C29.417%2018.9399%2028.9693%2018.4922%2028.417%2018.4922C27.8647%2018.4922%2027.417%2018.9399%2027.417%2019.4922C27.417%2020.0445%2027.8647%2020.4922%2028.417%2020.4922ZM23.667%2019.7422C21.1817%2019.7422%2019.167%2021.7569%2019.167%2024.2422C19.167%2026.7275%2021.1817%2028.7422%2023.667%2028.7422C26.1523%2028.7422%2028.167%2026.7275%2028.167%2024.2422C28.1697%2023.0479%2027.6964%2021.9018%2026.8519%2021.0573C26.0074%2020.2128%2024.8613%2019.7395%2023.667%2019.7422ZM20.917%2024.2422C20.917%2025.761%2022.1482%2026.9922%2023.667%2026.9922C25.1858%2026.9922%2026.417%2025.761%2026.417%2024.2422C26.417%2022.7234%2025.1858%2021.4922%2023.667%2021.4922C22.1482%2021.4922%2020.917%2022.7234%2020.917%2024.2422Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                                                    />
                                                                </Link>
                                                                <Link
                                                                    className={_utils.cx(
                                                                        _styles,
                                                                        "footer_bottom_socials-link"
                                                                    )}
                                                                    button={false}
                                                                    block="inline"
                                                                    options={{
                                                                        href: "https://www.facebook.com/people/Eve-Roque/61573570730978/",
                                                                        target: "_blank",
                                                                    }}
                                                                >
                                                                    <HtmlEmbed
                                                                        className={_utils.cx(
                                                                            _styles,
                                                                            "footer_bottom_socials-icon"
                                                                        )}
                                                                        content=""
                                                                        value="%3Csvg%20width%3D%2248%22%20height%3D%2248%22%20viewBox%3D%220%200%2048%2048%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20cx%3D%2224%22%20cy%3D%2224%22%20r%3D%2223.5%22%20stroke%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M33.668%2024.3033C33.668%2018.7467%2029.1909%2014.2422%2023.668%2014.2422C18.1451%2014.2422%2013.668%2018.7467%2013.668%2024.3033C13.668%2029.325%2017.3248%2033.4874%2022.1055%2034.2422V27.2116H19.5664V24.3033H22.1055V22.0867C22.1055%2019.5651%2023.5985%2018.1723%2025.8826%2018.1723C26.9768%2018.1723%2028.1211%2018.3688%2028.1211%2018.3688V20.8448H26.8602C25.618%2020.8448%2025.2305%2021.6204%2025.2305%2022.4161V24.3033H28.0039L27.5606%2027.2116H25.2305V34.2422C30.0112%2033.4874%2033.668%2029.3252%2033.668%2024.3033Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                                                                    />
                                                                </Link>
                                                            </Block>
                                                        </Block>
                                                    </Block>
                                                </Block>
                                            </Block>
                                        </Block>
                                        <Block
                                            className={_utils.cx(_styles, "footer_bottom-item")}
                                            id={_utils.cx(
                                                _styles,
                                                "w-node-ea2f34fb-79fd-7250-82f6-9ad3b0bdebb9-b0bdeb60"
                                            )}
                                            tag="div"
                                        >
                                            <Block
                                                className={_utils.cx(
                                                    _styles,
                                                    "footer_bottom-content-wrap",
                                                    "is-larger"
                                                )}
                                                tag="div"
                                            >
                                                <Block
                                                    className={_utils.cx(
                                                        _styles,
                                                        "footer_bottom_content"
                                                    )}
                                                    tag="div"
                                                >
                                                    <Link
                                                        className={_utils.cx(_styles, "footer_logo-link")}
                                                        button={false}
                                                        block="inline"
                                                        options={{
                                                            href: "#",
                                                        }}
                                                    >
                                                        <Image
                                                            className={_utils.cx(_styles, "footer_logo")}
                                                            loading="lazy"
                                                            width="100"
                                                            height="57"
                                                            alt=""
                                                            src="https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67918d8401d08a1ae45eb2ac_eve-and-roque-inversed.webp"
                                                        />
                                                    </Link>
                                                    <Block
                                                        className={_utils.cx(_styles, "spacer-medium")}
                                                        tag="div"
                                                    />
                                                    <Paragraph>
                                                        {
                                                            "Get curated property highlights, creative inspiration, and industry"
                                                        }
                                                        <br/>
                                                        {"insights—straight to your inbox."}
                                                    </Paragraph>
                                                    <Block
                                                        className={_utils.cx(_styles, "spacer-small")}
                                                        tag="div"
                                                    />
                                                    <Block
                                                        className={_utils.cx(_styles, "spacer-xsmall")}
                                                        tag="div"
                                                    />
                                                    <FormWrapper
                                                        className={_utils.cx(
                                                            _styles,
                                                            "footer_newsletter_block"
                                                        )}
                                                    >
                                                        <FormForm
                                                            className={_utils.cx(
                                                                _styles,
                                                                "footer_newsletter_form"
                                                            )}
                                                            name="email-form"
                                                            data-name="Email Form"
                                                            method="get"
                                                            data-webflow-hubspot-api-form-url="https://hubspotonwebflow.com/api/forms/8050381e-704e-40a5-8ccc-cc193bccfc45"
                                                            id="email-form"
                                                        >
                                                            <Block
                                                                className={_utils.cx(
                                                                    _styles,
                                                                    "footer_newsletter_input-group"
                                                                )}
                                                                tag="div"
                                                            >
                                                                <FormTextInput
                                                                    className={_utils.cx(
                                                                        _styles,
                                                                        "form_newsletter_input"
                                                                    )}
                                                                    autoFocus={false}
                                                                    maxLength={256}
                                                                    name="email-2"
                                                                    data-name="Email 2"
                                                                    placeholder="Enter your email address"
                                                                    type="email"
                                                                    disabled={false}
                                                                    required={true}
                                                                    data-wfhsfieldname="FormTextInput-2"
                                                                    id="email-2"
                                                                />
                                                                <Block
                                                                    className={_utils.cx(
                                                                        _styles,
                                                                        "form_newsletter_button-wrap"
                                                                    )}
                                                                    tag="div"
                                                                >
                                                                    <Block
                                                                        className={_utils.cx(
                                                                            _styles,
                                                                            "button",
                                                                            "is-icon",
                                                                            "is-newsletter-submit"
                                                                        )}
                                                                        tag="div"
                                                                    >
                                                                        <FormButton
                                                                            className={_utils.cx(
                                                                                _styles,
                                                                                "form_newsletter_submit"
                                                                            )}
                                                                            type="submit"
                                                                            value="Submit"
                                                                            data-wait="Please wait..."
                                                                        />
                                                                        <Block
                                                                            tag="div">{"Subscribe"}</Block>
                                                                        <HtmlEmbed
                                                                            className={_utils.cx(
                                                                                _styles,
                                                                                "icon-1x1-small"
                                                                            )}
                                                                            content=""
                                                                            value="%3Csvg%20aria-hidden%3D%22true%22%20fill%3D%22currentColor%22%20role%3D%22img%22%20viewBox%3D%220%200%2020%2021%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EArrow%20Right%3C%2Ftitle%3E%3Cpolygon%20points%3D%2216.172%209%2010.101%202.929%2011.515%201.515%2020%2010%2019.293%2010.707%2011.515%2018.485%2010.101%2017.071%2016.172%2011%200%2011%200%209%22%2F%3E%3C%2Fsvg%3E"
                                                                        />
                                                                    </Block>
                                                                </Block>
                                                            </Block>
                                                            <DOM
                                                                tag="input"
                                                                slot=""
                                                                type="hidden"
                                                                name="hutk"
                                                                value=""
                                                            />
                                                            <DOM
                                                                tag="input"
                                                                slot=""
                                                                type="hidden"
                                                                name="ipAddress"
                                                                value=""
                                                            />
                                                            <DOM
                                                                tag="input"
                                                                slot=""
                                                                type="hidden"
                                                                name="pageUri"
                                                                value=""
                                                            />
                                                            <DOM
                                                                tag="input"
                                                                slot=""
                                                                type="hidden"
                                                                name="pageId"
                                                                value=""
                                                            />
                                                            <DOM
                                                                tag="input"
                                                                slot=""
                                                                type="hidden"
                                                                name="pageName"
                                                                value=""
                                                            />
                                                        </FormForm>
                                                        <FormSuccessMessage>
                                                            <Block tag="div">
                                                                {
                                                                    "Thank you! Your submission has been received!"
                                                                }
                                                            </Block>
                                                        </FormSuccessMessage>
                                                        <FormErrorMessage>
                                                            <Block tag="div">
                                                                {
                                                                    "Oops! Something went wrong while submitting the form."
                                                                }
                                                            </Block>
                                                        </FormErrorMessage>
                                                    </FormWrapper>
                                                    <Block
                                                        className={_utils.cx(_styles, "spacer-small")}
                                                        tag="div"
                                                    />
                                                    <Paragraph
                                                        className={_utils.cx(_styles, "text-color-grey")}
                                                    >
                                                        {"By subscribing, you agree to our "}
                                                        <Link
                                                            className={_utils.cx(
                                                                _styles,
                                                                "footer_inline-link"
                                                            )}
                                                            button={false}
                                                            block=""
                                                            options={{
                                                                href: "#",
                                                            }}
                                                        >
                                                            {"Privacy Policy"}
                                                        </Link>
                                                        {" and consent to receive updates."}
                                                    </Paragraph>
                                                </Block>
                                                <Block
                                                    className={_utils.cx(_styles, "footer_bottom_nav")}
                                                    tag="div"
                                                >
                                                    <Block
                                                        className={_utils.cx(
                                                            _styles,
                                                            "footer_bottom_nav-item"
                                                        )}
                                                        id={_utils.cx(
                                                            _styles,
                                                            "w-node-ea2f34fb-79fd-7250-82f6-9ad3b0bdebda-b0bdeb60"
                                                        )}
                                                        tag="div"
                                                    >
                                                        <Paragraph
                                                            className={_utils.cx(_styles, "text-size-medium")}
                                                        >
                                                            {"Sitemap"}
                                                        </Paragraph>
                                                        <Link
                                                            className={_utils.cx(
                                                                _styles,
                                                                "footer_bottom_nav-link"
                                                            )}
                                                            button={false}
                                                            block=""
                                                            options={{
                                                                href: "#",
                                                            }}
                                                        >
                                                            {"Home"}
                                                        </Link>
                                                        <Link
                                                            className={_utils.cx(
                                                                _styles,
                                                                "footer_bottom_nav-link"
                                                            )}
                                                            button={false}
                                                            block=""
                                                            options={{
                                                                href: "#",
                                                            }}
                                                        >
                                                            {"About Us"}
                                                        </Link>
                                                        <Link
                                                            className={_utils.cx(
                                                                _styles,
                                                                "footer_bottom_nav-link"
                                                            )}
                                                            button={false}
                                                            block=""
                                                            options={{
                                                                href: "#",
                                                            }}
                                                        >
                                                            {"Contact us"}
                                                        </Link>
                                                        <Link
                                                            className={_utils.cx(
                                                                _styles,
                                                                "footer_bottom_nav-link"
                                                            )}
                                                            button={false}
                                                            block=""
                                                            options={{
                                                                href: "#",
                                                            }}
                                                        >
                                                            {"Work with us"}
                                                        </Link>
                                                    </Block>
                                                    <Block
                                                        className={_utils.cx(
                                                            _styles,
                                                            "footer_bottom_nav-item"
                                                        )}
                                                        id={_utils.cx(
                                                            _styles,
                                                            "w-node-ea2f34fb-79fd-7250-82f6-9ad3b0bdebe5-b0bdeb60"
                                                        )}
                                                        tag="div"
                                                    >
                                                        <Paragraph
                                                            className={_utils.cx(_styles, "text-size-medium")}
                                                        >
                                                            {"Legals"}
                                                        </Paragraph>
                                                        <NotSupported _atom="DynamoWrapper"/>
                                                    </Block>
                                                </Block>
                                            </Block>
                                        </Block>
                                    </Block>
                                    <Block
                                        className={_utils.cx(
                                            _styles,
                                            "footer_divider",
                                            "is-vertical",
                                            "hide-tablet"
                                        )}
                                        tag="div"
                                    />
                                </Block>
                            </Block>
                        </Block>
                    </Block>
                    <Block className={_utils.cx(_styles, "footer-wrap-item")} tag="div">
                        <Block className={_utils.cx(_styles, "footer_divider")} tag="div"/>
                    </Block>
                    <Block className={_utils.cx(_styles, "footer_wrap-item")} tag="div">
                        <Block className={_utils.cx(_styles, "padding-global")} tag="div">
                            <Block
                                className={_utils.cx(_styles, "container-large")}
                                tag="div"
                            >
                                <Block
                                    className={_utils.cx(_styles, "footer_copyright")}
                                    tag="div"
                                >
                                    <Block
                                        className={_utils.cx(_styles, "text-align-center")}
                                        tag="div"
                                    >
                                        <Paragraph>
                                            {"© 2025 Eve & Roque. All rights reserved."}
                                        </Paragraph>
                                    </Block>
                                </Block>
                            </Block>
                        </Block>
                    </Block>
                </Block>
            </Block>
        </_Component>
    );
}
