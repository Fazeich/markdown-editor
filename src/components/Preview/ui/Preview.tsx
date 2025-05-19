import React from "react";
import { EditorWrapper, LabelWrapper } from "../../Editor/lib/styles";
import Paragraph from "../../Paragraph";
import { useUnit } from "effector-react";
import { $editor } from "../../../store/edior.store";
import { PreviewTextWrapper } from "../lib/styles";
import Markdown from "react-markdown";

export const Preview = () => {
  const { editorText } = useUnit($editor);

  return (
    <EditorWrapper>
      <LabelWrapper>
        <Paragraph text="Предпросмотр" />
      </LabelWrapper>
      <PreviewTextWrapper>
        <Markdown>{editorText}</Markdown>
      </PreviewTextWrapper>
    </EditorWrapper>
  );
};
