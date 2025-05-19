import React from "react";
import { ActionButtons, ToolbarWrapper } from "../lib/styles";
import { $main, changeTheme } from "../../../store/main.store";
import { Switch } from "antd";
import { useUnit } from "effector-react";
import Button from "../../../shared/Button";
import Paragraph from "../../Paragraph";
import { changeEditor } from "../../../store/edior.store";

export const Tooldbar = () => {
  const { theme } = useUnit($main);
  return (
    <ToolbarWrapper>
      <ActionButtons>
        <Button>
          <Paragraph
            text="Очистить"
            onClick={() => changeEditor({ editorText: "" })}
          />
        </Button>
        <Button>
          <Paragraph text="Скачать .md" />
        </Button>
      </ActionButtons>
      <Switch checked={theme === "light"} onChange={() => changeTheme()} />
    </ToolbarWrapper>
  );
};
