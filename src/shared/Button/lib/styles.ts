import styled from "@emotion/styled";
import { Button } from "antd";

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.background.primary};

  border-color: ${({ theme }) => theme.border};

  :hover {
    background-color: ${({ theme }) => theme.background.secondary} !important;
  }
`;
