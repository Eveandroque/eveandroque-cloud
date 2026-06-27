"use client";
import React from "react";
import _styles from "./css/classes.module.css";
import * as _utils from "./webflow_modules/utils";
import Block from "./webflow_modules/Basic/components/Block";
import DOM from "./webflow_modules/Builtin/components/DOM";
import FormButton from "./webflow_modules/Form/components/FormButton";
import FormErrorMessage from "./webflow_modules/Form/components/FormErrorMessage";
import FormForm from "./webflow_modules/Form/components/FormForm";
import FormSuccessMessage from "./webflow_modules/Form/components/FormSuccessMessage";
import FormTextInput from "./webflow_modules/Form/components/FormTextInput";
import FormWrapper from "./webflow_modules/Form/components/FormWrapper";
import Heading from "./webflow_modules/Basic/components/Heading";
import HtmlEmbed from "./webflow_modules/Embed/components/HtmlEmbed";
import Image from "./webflow_modules/Basic/components/Image";
import Link from "./webflow_modules/Basic/components/Link";
import NotSupported from "./webflow_modules/Builtin/components/NotSupported";
import Paragraph from "./webflow_modules/Basic/components/Paragraph";

export function Footer({}) {
    return (
        <Block className={_utils.cx(_styles, "footer")} tag={"footer"}>
            <Block
                className={_utils.cx(_styles, "background-color-primary")}
                tag={"div"}
            >
                <Block className={_utils.cx(_styles, "footer_wrap")} tag={"div"}>
                    <Block className={_utils.cx(_styles, "footer_wrap-item")} tag={"div"}>
                        <Block className={_utils.cx(_styles, "padding-global")} tag={"div"}>
                            <Block
                                className={_utils.cx(_styles, "container-large")}
                                tag={"div"}
                            >
                                <Block className={_utils.cx(_styles, "footer_top")} tag={"div"}>
                                    <Block
                                        className={_utils.cx(_styles, "footer_top-item")}
                                        tag={"div"}
                                    >
                                        <Block
                                            className={_utils.cx(_styles, "footer_top-content")}
                                            tag={"div"}
                                        >
                                            <Heading tag={"h2"}>
                                                {"Let’s Bring Your Vision to Life"}
                                            </Heading>
                                            <Block
                                                className={_utils.cx(_styles, "spacer-small")}
                                                tag={"div"}
                                            />
                                            <Block
                                                className={_utils.cx(_styles, "hide-tablet")}
                                                tag={"div"}
                                            >
                                                <Block
                                                    className={_utils.cx(_styles, "spacer-xsmall")}
                                                    tag={"div"}
                                                />
                                                <Block
                                                    className={_utils.cx(_styles, "spacer-medium")}
                                                    tag={"div"}
                                                />
                                                <Block
                                                    className={_utils.cx(_styles, "button-group")}
                                                    tag={"div"}
                                                >
                                                    <Link
                                                        block={"inline"}
                                                        button={false}
                                                        className={_utils.cx(
                                                            _styles,
                                                            "button",
                                                            "is-icon",
                                                            "is-inversed"
                                                        )}
                                                        options={{
                                                            href: "#",
                                                        }}
                                                    >
                                                        <Block
                                                            tag={"div"}>{"Talk to Our Team"}</Block>
                                                        <HtmlEmbed
                                                            className={_utils.cx(_styles, "icon-1x1-small")}
                                                            content={
                                                                '<svg aria-hidden="true" fill="currentColor" role="img" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg"><title>Arrow Right</title><polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"/></svg>'
                                                            }
                                                        />
                                                    </Link>
                                                    <Paragraph
                                                        className={_utils.cx(
                                                            _styles,
                                                            "text-color-alternate"
                                                        )}
                                                    >
                                                        {
                                                            "Reach out to our concierge team to receive curated estate options and begin planning with confidence."
                                                        }
                                                    </Paragraph>
                                                </Block>
                                            </Block>
                                        </Block>
                                    </Block>
                                    <Block
                                        className={_utils.cx(_styles, "footer_top-item")}
                                        tag={"div"}
                                    >
                                        <Block
                                            className={_utils.cx(_styles, "footer_top_image-wrap")}
                                            tag={"div"}
                                        >
                                            <Image
                                                alt={""}
                                                className={_utils.cx(_styles, "footer_top_image")}
                                                height={"240"}
                                                loading={"lazy"}
                                                src={
                                                    "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/682cbd0bebb4b4d14d95bbb9_1%20(25).jpg"
                                                }
                                                width={"630"}
                                            />
                                            <Block
                                                className={_utils.cx(_styles, "show-tablet")}
                                                tag={"div"}
                                            >
                                                <Block
                                                    className={_utils.cx(_styles, "spacer-xsmall")}
                                                    tag={"div"}
                                                />
                                                <Block
                                                    className={_utils.cx(_styles, "spacer-medium")}
                                                    tag={"div"}
                                                />
                                                <Block
                                                    className={_utils.cx(
                                                        _styles,
                                                        "button-group",
                                                        "is-center"
                                                    )}
                                                    tag={"div"}
                                                >
                                                    <Link
                                                        block={"inline"}
                                                        button={false}
                                                        className={_utils.cx(
                                                            _styles,
                                                            "button",
                                                            "is-icon",
                                                            "is-inversed"
                                                        )}
                                                        options={{
                                                            href: "#",
                                                        }}
                                                    >
                                                        <Block tag={"div"}>{"Contact Us"}</Block>
                                                        <HtmlEmbed
                                                            className={_utils.cx(_styles, "icon-1x1-small")}
                                                            content={
                                                                '<svg aria-hidden="true" fill="currentColor" role="img" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg"><title>Arrow Right</title><polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"/></svg>'
                                                            }
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
                    <Block className={_utils.cx(_styles, "footer_wrap-item")} tag={"div"}>
                        <Block
                            className={_utils.cx(_styles, "footer_divider")}
                            tag={"div"}
                        />
                    </Block>
                    <Block className={_utils.cx(_styles, "footer_wrap-item")} tag={"div"}>
                        <Block className={_utils.cx(_styles, "padding-global")} tag={"div"}>
                            <Block
                                className={_utils.cx(_styles, "container-large")}
                                tag={"div"}
                            >
                                <Block
                                    className={_utils.cx(_styles, "footer_bottom_wrap")}
                                    tag={"div"}
                                >
                                    <Block
                                        className={_utils.cx(_styles, "footer_bottom")}
                                        tag={"div"}
                                    >
                                        <Block
                                            className={_utils.cx(_styles, "footer_bottom-item")}
                                            tag={"div"}
                                        >
                                            <Block
                                                className={_utils.cx(
                                                    _styles,
                                                    "footer_bottom-content-wrap"
                                                )}
                                                tag={"div"}
                                            >
                                                <Heading
                                                    className={_utils.cx(_styles, "heading-style-h4")}
                                                    tag={"h3"}
                                                >
                                                    {
                                                        "Let our team help you find a space that fits your needs."
                                                    }
                                                </Heading>
                                                <Block
                                                    className={_utils.cx(_styles, "spacer-large")}
                                                    tag={"div"}
                                                />
                                                <Block
                                                    className={_utils.cx(
                                                        _styles,
                                                        "footer_bottom_details-list-wrap"
                                                    )}
                                                    tag={"div"}
                                                >
                                                    <Block
                                                        className={_utils.cx(
                                                            _styles,
                                                            "footer_bottom_details-list"
                                                        )}
                                                        tag={"div"}
                                                    >
                                                        <Block
                                                            className={_utils.cx(
                                                                _styles,
                                                                "footer_bottom_details-item"
                                                            )}
                                                            tag={"div"}
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
                                                            tag={"div"}
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
                                                        tag={"div"}
                                                    >
                                                        <Block
                                                            className={_utils.cx(
                                                                _styles,
                                                                "footer_bottom_details-item"
                                                            )}
                                                            tag={"div"}
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
                                                            tag={"div"}
                                                        >
                                                            <Link
                                                                block={""}
                                                                button={false}
                                                                className={_utils.cx(_styles, "phonelink")}
                                                                options={{
                                                                    href: "tel:310-730-1528",
                                                                }}
                                                            >
                                                                {"(310)-730-1528"}
                                                            </Link>
                                                        </Block>
                                                    </Block>
                                                    <Block
                                                        className={_utils.cx(
                                                            _styles,
                                                            "footer_bottom_details-list"
                                                        )}
                                                        tag={"div"}
                                                    >
                                                        <Block
                                                            className={_utils.cx(
                                                                _styles,
                                                                "footer_bottom_details-item"
                                                            )}
                                                            tag={"div"}
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
                                                            tag={"div"}
                                                        >
                                                            <Paragraph>{"inquire@eveandroque.com"}</Paragraph>
                                                        </Block>
                                                    </Block>
                                                    <Block
                                                        className={_utils.cx(
                                                            _styles,
                                                            "footer_bottom_details-list"
                                                        )}
                                                        tag={"div"}
                                                    >
                                                        <Block
                                                            className={_utils.cx(
                                                                _styles,
                                                                "footer_bottom_details-item"
                                                            )}
                                                            tag={"div"}
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
                                                            tag={"div"}
                                                        >
                                                            <Block
                                                                className={_utils.cx(
                                                                    _styles,
                                                                    "footer_bottom_socials-list"
                                                                )}
                                                                tag={"div"}
                                                            >
                                                                <Link
                                                                    block={"inline"}
                                                                    button={false}
                                                                    className={_utils.cx(
                                                                        _styles,
                                                                        "footer_bottom_socials-link"
                                                                    )}
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
                                                                        content={
                                                                            '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 15.2422C15.6716 15.2422 15 15.9138 15 16.7422V31.7422C15 32.5706 15.6716 33.2422 16.5 33.2422H31.5C32.3284 33.2422 33 32.5706 33 31.7422V16.7422C33 15.9138 32.3284 15.2422 31.5 15.2422H16.5ZM20.5208 19.2449C20.5264 20.2012 19.8106 20.7904 18.9612 20.7862C18.1611 20.7819 17.4636 20.1449 17.4678 19.2463C17.472 18.4012 18.14 17.7219 19.0076 17.7416C19.8879 17.7613 20.5264 18.4068 20.5208 19.2449ZM24.2797 22.0039H21.7597H21.7583V30.5638H24.4217V30.3641C24.4217 29.9842 24.4214 29.6042 24.4211 29.2241C24.4203 28.2103 24.4194 27.1954 24.4246 26.1819C24.426 25.9358 24.4372 25.6799 24.5005 25.445C24.7381 24.5675 25.5271 24.0008 26.4074 24.1401C26.9727 24.2286 27.3467 24.5563 27.5042 25.0893C27.6013 25.4225 27.6449 25.7811 27.6491 26.1285C27.6605 27.1761 27.6589 28.2237 27.6573 29.2714C27.6567 29.6412 27.6561 30.0112 27.6561 30.381V30.5624H30.328V30.3571C30.328 29.9051 30.3278 29.4532 30.3275 29.0013C30.327 27.8718 30.3264 26.7423 30.3294 25.6124C30.3308 25.1019 30.276 24.5985 30.1508 24.1049C29.9638 23.3708 29.5771 22.7633 28.9485 22.3246C28.5027 22.0124 28.0133 21.8113 27.4663 21.7888C27.404 21.7862 27.3412 21.7828 27.2781 21.7794C26.9984 21.7643 26.7141 21.7489 26.4467 21.8028C25.6817 21.9561 25.0096 22.3063 24.5019 22.9236C24.4429 22.9944 24.3852 23.0663 24.2991 23.1736L24.2797 23.1979V22.0039ZM17.6816 30.5666H20.3324V22.0095H17.6816V30.5666Z" fill="currentColor"/>\n<circle cx="24" cy="24" r="23.5" stroke="currentColor"/>\n</svg>'
                                                                        }
                                                                    />
                                                                </Link>
                                                                <Link
                                                                    block={"inline"}
                                                                    button={false}
                                                                    className={_utils.cx(
                                                                        _styles,
                                                                        "footer_bottom_socials-link"
                                                                    )}
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
                                                                        content={
                                                                            '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n<circle cx="24" cy="24" r="23.5" stroke="currentColor"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M27.667 15.2422H19.667C16.9056 15.2422 14.667 17.4808 14.667 20.2422V28.2422C14.667 31.0036 16.9056 33.2422 19.667 33.2422H27.667C30.4284 33.2422 32.667 31.0036 32.667 28.2422V20.2422C32.667 17.4808 30.4284 15.2422 27.667 15.2422ZM30.917 28.2422C30.9115 30.0348 29.4596 31.4867 27.667 31.4922H19.667C17.8743 31.4867 16.4225 30.0348 16.417 28.2422V20.2422C16.4225 18.4495 17.8743 16.9977 19.667 16.9922H27.667C29.4596 16.9977 30.9115 18.4495 30.917 20.2422V28.2422ZM28.417 20.4922C28.9693 20.4922 29.417 20.0445 29.417 19.4922C29.417 18.9399 28.9693 18.4922 28.417 18.4922C27.8647 18.4922 27.417 18.9399 27.417 19.4922C27.417 20.0445 27.8647 20.4922 28.417 20.4922ZM23.667 19.7422C21.1817 19.7422 19.167 21.7569 19.167 24.2422C19.167 26.7275 21.1817 28.7422 23.667 28.7422C26.1523 28.7422 28.167 26.7275 28.167 24.2422C28.1697 23.0479 27.6964 21.9018 26.8519 21.0573C26.0074 20.2128 24.8613 19.7395 23.667 19.7422ZM20.917 24.2422C20.917 25.761 22.1482 26.9922 23.667 26.9922C25.1858 26.9922 26.417 25.761 26.417 24.2422C26.417 22.7234 25.1858 21.4922 23.667 21.4922C22.1482 21.4922 20.917 22.7234 20.917 24.2422Z" fill="currentColor"/>\n</svg>'
                                                                        }
                                                                    />
                                                                </Link>
                                                                <Link
                                                                    block={"inline"}
                                                                    button={false}
                                                                    className={_utils.cx(
                                                                        _styles,
                                                                        "footer_bottom_socials-link"
                                                                    )}
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
                                                                        content={
                                                                            '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n<circle cx="24" cy="24" r="23.5" stroke="currentColor"/>\n<path d="M33.668 24.3033C33.668 18.7467 29.1909 14.2422 23.668 14.2422C18.1451 14.2422 13.668 18.7467 13.668 24.3033C13.668 29.325 17.3248 33.4874 22.1055 34.2422V27.2116H19.5664V24.3033H22.1055V22.0867C22.1055 19.5651 23.5985 18.1723 25.8826 18.1723C26.9768 18.1723 28.1211 18.3688 28.1211 18.3688V20.8448H26.8602C25.618 20.8448 25.2305 21.6204 25.2305 22.4161V24.3033H28.0039L27.5606 27.2116H25.2305V34.2422C30.0112 33.4874 33.668 29.3252 33.668 24.3033Z" fill="currentColor"/>\n</svg>'
                                                                        }
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
                                            tag={"div"}
                                        >
                                            <Block
                                                className={_utils.cx(
                                                    _styles,
                                                    "footer_bottom-content-wrap",
                                                    "is-larger"
                                                )}
                                                tag={"div"}
                                            >
                                                <Block
                                                    className={_utils.cx(
                                                        _styles,
                                                        "footer_bottom_content"
                                                    )}
                                                    tag={"div"}
                                                >
                                                    <Link
                                                        block={"inline"}
                                                        button={false}
                                                        className={_utils.cx(_styles, "footer_logo-link")}
                                                        options={{
                                                            href: "#",
                                                        }}
                                                    >
                                                        <Image
                                                            alt={""}
                                                            className={_utils.cx(_styles, "footer_logo")}
                                                            height={"57"}
                                                            loading={"lazy"}
                                                            src={
                                                                "https://cdn.prod.website-files.com/678e68eef62edc01d0e5e1d7/67918d8401d08a1ae45eb2ac_eve-and-roque-inversed.webp"
                                                            }
                                                            width={"100"}
                                                        />
                                                    </Link>
                                                    <Block
                                                        className={_utils.cx(_styles, "spacer-medium")}
                                                        tag={"div"}
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
                                                        tag={"div"}
                                                    />
                                                    <Block
                                                        className={_utils.cx(_styles, "spacer-xsmall")}
                                                        tag={"div"}
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
                                                            data-name={"Email Form"}
                                                            data-webflow-hubspot-api-form-url={
                                                                "https://hubspotonwebflow.com/api/forms/8050381e-704e-40a5-8ccc-cc193bccfc45"
                                                            }
                                                            id={_utils.cx(_styles, "email-form")}
                                                            method={"get"}
                                                            name={"email-form"}
                                                        >
                                                            <Block
                                                                className={_utils.cx(
                                                                    _styles,
                                                                    "footer_newsletter_input-group"
                                                                )}
                                                                tag={"div"}
                                                            >
                                                                <FormTextInput
                                                                    autoFocus={false}
                                                                    className={_utils.cx(
                                                                        _styles,
                                                                        "form_newsletter_input"
                                                                    )}
                                                                    data-name={"Email 2"}
                                                                    data-wfhsfieldname={"FormTextInput-2"}
                                                                    disabled={false}
                                                                    id={_utils.cx(_styles, "email-2")}
                                                                    maxLength={256}
                                                                    name={"email-2"}
                                                                    placeholder={"Enter your email address"}
                                                                    required={true}
                                                                    type={"email"}
                                                                />
                                                                <Block
                                                                    className={_utils.cx(
                                                                        _styles,
                                                                        "form_newsletter_button-wrap"
                                                                    )}
                                                                    tag={"div"}
                                                                >
                                                                    <Block
                                                                        className={_utils.cx(
                                                                            _styles,
                                                                            "button",
                                                                            "is-icon",
                                                                            "is-newsletter-submit"
                                                                        )}
                                                                        tag={"div"}
                                                                    >
                                                                        <FormButton
                                                                            className={_utils.cx(
                                                                                _styles,
                                                                                "form_newsletter_submit"
                                                                            )}
                                                                            data-wait={"Please wait..."}
                                                                            type={"submit"}
                                                                            value={"Submit"}
                                                                        />
                                                                        <Block
                                                                            tag={"div"}>{"Subscribe"}</Block>
                                                                        <HtmlEmbed
                                                                            className={_utils.cx(
                                                                                _styles,
                                                                                "icon-1x1-small"
                                                                            )}
                                                                            content={
                                                                                '<svg aria-hidden="true" fill="currentColor" role="img" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg"><title>Arrow Right</title><polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"/></svg>'
                                                                            }
                                                                        />
                                                                    </Block>
                                                                </Block>
                                                            </Block>
                                                            <DOM
                                                                name={"hutk"}
                                                                tag={"input"}
                                                                type={"hidden"}
                                                                value={""}
                                                            />
                                                            <DOM
                                                                name={"ipAddress"}
                                                                tag={"input"}
                                                                type={"hidden"}
                                                                value={""}
                                                            />
                                                            <DOM
                                                                name={"pageUri"}
                                                                tag={"input"}
                                                                type={"hidden"}
                                                                value={""}
                                                            />
                                                            <DOM
                                                                name={"pageId"}
                                                                tag={"input"}
                                                                type={"hidden"}
                                                                value={""}
                                                            />
                                                            <DOM
                                                                name={"pageName"}
                                                                tag={"input"}
                                                                type={"hidden"}
                                                                value={""}
                                                            />
                                                        </FormForm>
                                                        <FormSuccessMessage>
                                                            <Block tag={"div"}>
                                                                {
                                                                    "Thank you! Your submission has been received!"
                                                                }
                                                            </Block>
                                                        </FormSuccessMessage>
                                                        <FormErrorMessage>
                                                            <Block tag={"div"}>
                                                                {
                                                                    "Oops! Something went wrong while submitting the form."
                                                                }
                                                            </Block>
                                                        </FormErrorMessage>
                                                    </FormWrapper>
                                                    <Block
                                                        className={_utils.cx(_styles, "spacer-small")}
                                                        tag={"div"}
                                                    />
                                                    <Paragraph
                                                        className={_utils.cx(_styles, "text-color-grey")}
                                                    >
                                                        {"By subscribing, you agree to our "}
                                                        <Link
                                                            block={""}
                                                            button={false}
                                                            className={_utils.cx(
                                                                _styles,
                                                                "footer_inline-link"
                                                            )}
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
                                                    tag={"div"}
                                                >
                                                    <Block
                                                        className={_utils.cx(
                                                            _styles,
                                                            "footer_bottom_nav-item"
                                                        )}
                                                        tag={"div"}
                                                    >
                                                        <Paragraph
                                                            className={_utils.cx(_styles, "text-size-medium")}
                                                        >
                                                            {"Sitemap"}
                                                        </Paragraph>
                                                        <Link
                                                            block={""}
                                                            button={false}
                                                            className={_utils.cx(
                                                                _styles,
                                                                "footer_bottom_nav-link"
                                                            )}
                                                            options={{
                                                                href: "/",
                                                            }}
                                                        >
                                                            {"Home"}
                                                        </Link>
                                                        <Link
                                                            block={""}
                                                            button={false}
                                                            className={_utils.cx(
                                                                _styles,
                                                                "footer_bottom_nav-link"
                                                            )}
                                                            options={{
                                                                href: "/about-us",
                                                            }}
                                                        >
                                                            {"About Us"}
                                                        </Link>
                                                        <Link
                                                            block={""}
                                                            button={false}
                                                            className={_utils.cx(
                                                                _styles,
                                                                "footer_bottom_nav-link"
                                                            )}
                                                            options={{
                                                                href: "/contact",
                                                            }}
                                                        >
                                                            {"Contact us"}
                                                        </Link>
                                                        <Link
                                                            block={""}
                                                            button={false}
                                                            className={_utils.cx(
                                                                _styles,
                                                                "footer_bottom_nav-link"
                                                            )}
                                                            options={{
                                                                href: "/working-with-us",
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
                                                        tag={"div"}
                                                    >
                                                        <Paragraph
                                                            className={_utils.cx(_styles, "text-size-medium")}
                                                        >
                                                            {"Legals"}
                                                        </Paragraph>
                                                        <Link
                                                            block={""}
                                                            button={false}
                                                            className={_utils.cx(
                                                                _styles,
                                                                "footer_bottom_nav-link"
                                                            )}
                                                            options={{
                                                                href: "/policy/terms",
                                                            }}
                                                        >
                                                            {"Terms And Conditions"}
                                                        </Link>
                                                        <Link
                                                            block={""}
                                                            button={false}
                                                            className={_utils.cx(
                                                                _styles,
                                                                "footer_bottom_nav-link"
                                                            )}
                                                            options={{
                                                                href: "/policy/privacy-policy",
                                                            }}
                                                        >
                                                            {"Privacy Policy"}
                                                        </Link>
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
                                        tag={"div"}
                                    />
                                </Block>
                            </Block>
                        </Block>
                    </Block>
                    <Block className={_utils.cx(_styles, "footer-wrap-item")} tag={"div"}>
                        <Block
                            className={_utils.cx(_styles, "footer_divider")}
                            tag={"div"}
                        />
                    </Block>
                    <Block className={_utils.cx(_styles, "footer_wrap-item")} tag={"div"}>
                        <Block className={_utils.cx(_styles, "padding-global")} tag={"div"}>
                            <Block
                                className={_utils.cx(_styles, "container-large")}
                                tag={"div"}
                            >
                                <Block
                                    className={_utils.cx(_styles, "footer_copyright")}
                                    tag={"div"}
                                >
                                    <Block
                                        className={_utils.cx(_styles, "text-align-center")}
                                        tag={"div"}
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
        </Block>
    );
}
