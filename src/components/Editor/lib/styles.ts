import styled from "@emotion/styled";
import { EDITOR_TITLE_HEIGHT } from "../../../lib/constants";

export const EditorWrapper = styled.div`
  background: ${({ theme }) => theme.background.primary};

  width: 100%;
  height: 100%;

  max-height: 100vh;

  overflow-y: auto;

  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 10px;
`;

export const LabelWrapper = styled.div`
  background: ${({ theme }) => theme.background.secondary};
  height: ${`${EDITOR_TITLE_HEIGHT}px`};

  display: flex;
  align-items: center;

  padding: 10px;

  border-bottom: 2px solid ${({ theme }) => theme.border};

  user-select: none;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: ${`calc(100% - ${EDITOR_TITLE_HEIGHT}px)`};
`;
