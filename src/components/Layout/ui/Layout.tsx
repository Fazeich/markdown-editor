import { useEffect } from "react";
import { LayoutEditorWrapper, LayoutWrapper } from "../lib/styles";
import Editor from "../../Editor";
import Preview from "../../Preview";
import Tooldbar from "../../Toolbar";
import { useUnit } from "effector-react";
import { $editor, changeEditor } from "../../../store/edior.store";
import { AUTOSAVE_DELAY, AUTOSAVE_TIME } from "../../../lib/constants";

export const Layout = () => {
  const { editorText } = useUnit($editor);

  useEffect(() => {
    const id = setInterval(() => {
      if (editorText) {
        localStorage.setItem("markdown", editorText);
        changeEditor({ isAutosaving: true });

        setTimeout(() => {
          changeEditor({ isAutosaving: false });
        }, AUTOSAVE_TIME);
      }
    }, AUTOSAVE_DELAY);

    return () => {
      clearInterval(id);
    };
  }, [editorText]);

  return (
    <LayoutWrapper>
      <Tooldbar />
      <LayoutEditorWrapper>
        <Editor />
        <Preview />
      </LayoutEditorWrapper>
    </LayoutWrapper>
  );
};
