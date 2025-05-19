import React from "react";
import {
  ActionButtons,
  AutosavingTitleWrapper,
  ToolbarWrapper,
} from "../lib/styles";
import { $main, changeTheme } from "../../../store/main.store";
import { Spin, Switch } from "antd";
import { useUnit } from "effector-react";
import Button from "../../../shared/Button";
import Paragraph from "../../Paragraph";
import { $editor, changeEditor } from "../../../store/edior.store";
import { downloadMarkdown } from "../../../lib/utils";

export const Tooldbar = () => {
  const { theme } = useUnit($main);
  const { editorText, isAutosaving } = useUnit($editor);

  const clear = () => {
    changeEditor({ editorText: "" });
    localStorage.setItem("markdown", "");
  };

  const download = () => {
    downloadMarkdown(editorText);
  };

  return (
    <ToolbarWrapper>
      <ActionButtons>
        <Button onClick={clear}>
          <Paragraph text="Очистить" />
        </Button>
        <Button onClick={download}>
          <Paragraph text="Скачать .md" />
        </Button>

        {isAutosaving && (
          <AutosavingTitleWrapper>
            <Paragraph text="Автосохранение" />
            <Spin />
          </AutosavingTitleWrapper>
        )}
      </ActionButtons>
      <Switch checked={theme === "light"} onChange={() => changeTheme()} />
    </ToolbarWrapper>
  );
};
