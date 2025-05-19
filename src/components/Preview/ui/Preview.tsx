import React from "react";
import { EditorWrapper, LabelWrapper } from "../../Editor/lib/styles";
import Paragraph from "../../Paragraph";

export const Preview = () => {
  return (
    <EditorWrapper>
      <LabelWrapper>
        <Paragraph text="Предпросмотр" />
      </LabelWrapper>
    </EditorWrapper>
  );
};
