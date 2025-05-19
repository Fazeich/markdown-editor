import { SwitchProps } from "antd";
import React, { FC } from "react";
import { StyledSwitch } from "../lib/styles";

export const Switch: FC<SwitchProps> = (props) => {
  return <StyledSwitch {...props} />;
};
