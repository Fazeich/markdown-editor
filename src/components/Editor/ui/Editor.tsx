import React from "react";
import { LabelWrapper, EditorWrapper, InputWrapper } from "../lib/styles";
import Paragraph from "../../Paragraph";
import TextArea from "../../../shared/TextArea";
import { useUnit } from "effector-react";
import { $editor, changeEditor } from "../../../store/edior.store";

export const Editor = () => {
  const { editorText } = useUnit($editor);

  return (
    <EditorWrapper>
      <LabelWrapper>
        <Paragraph text="Редактор" />
      </LabelWrapper>
      <InputWrapper>
        <TextArea
          value={editorText}
          onChange={({ target: { value } }) => {
            changeEditor({ editorText: value });
          }}
        />
      </InputWrapper>
    </EditorWrapper>
  );
};
