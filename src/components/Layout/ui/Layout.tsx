import React from "react";
import { LayoutFlexWrapper, LayoutWrapper } from "../lib/styles";
import Editor from "../../Editor";
import Preview from "../../Preview";
import Tooldbar from "../../Toolbar";

export const Layout = () => {
  return (
    <LayoutWrapper>
      <Tooldbar />
      <LayoutFlexWrapper>
        <Editor />
        <Preview />
      </LayoutFlexWrapper>
    </LayoutWrapper>
  );
};
