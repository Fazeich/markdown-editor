import { TextAreaProps } from "antd/es/input";
import React, { FC } from "react";
import { StyledTextArea } from "../lib/styles";

export const TextArea: FC<TextAreaProps> = (props) => {
  return <StyledTextArea {...props} />;
};
