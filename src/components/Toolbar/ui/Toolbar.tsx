import React from "react";
import { ActionButtons, ToolbarWrapper } from "../lib/styles";
import Paragraph from "../../Paragraph";
import { changeTheme } from "../../../store/main.store";

export const Tooldbar = () => {
  return (
    <ToolbarWrapper>
      <ActionButtons>
        <Paragraph text="Очистить" />
        <Paragraph text="Скачать .md" />
      </ActionButtons>
      <Paragraph text="Сменить тему" onClick={() => changeTheme()} />
    </ToolbarWrapper>
  );
};
