import { FC } from "react";
import { ButtonProps } from "antd";
import { StyledButton } from "../lib/styles";

export const Button: FC<ButtonProps> = (props) => {
  return <StyledButton {...props} />;
};
