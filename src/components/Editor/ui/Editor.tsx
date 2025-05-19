import React from "react";
import { LabelWrapper, EditorWrapper } from "../lib/styles";
import Paragraph from "../../Paragraph";

export const Editor = () => {
  return (
    <EditorWrapper>
      <LabelWrapper>
        <Paragraph text="Редактор" />
      </LabelWrapper>
    </EditorWrapper>
  );
};
