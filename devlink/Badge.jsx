"use client";
import React from "react";
import NotSupported from "./_Builtin/NotSupported";

export function Badge({ as: _Component = NotSupported }) {
  const _styleVariantMap = {
    Light: "w-variant-Light",
    Dark: "w-variant-Dark",
  };

  const _activeStyleVariant = _styleVariantMap[variant];
  return <_Component _atom="CodeIsland" />;
}
