import styled from "@emotion/styled";
import TextArea from "antd/es/input/TextArea";

export const StyledTextArea = styled(TextArea)`
  background-color: ${({ theme }) => theme.background.primary} !important;
  border: none !important;
  outline: none !important;
  box-shadow: none !important;

  color: ${({ theme }) => theme.text} !important;

  resize: none !important;

  border-radius: 0px 0px 10px 10px;

  min-height: 250px !important;
  height: 100% !important;

  padding: 10px;

  font-size: 1em;
`;
