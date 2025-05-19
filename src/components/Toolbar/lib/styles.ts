import styled from "@emotion/styled";
import { TOOLBAR_HEIGHT } from "../../../lib/constants";

export const ToolbarWrapper = styled.div`
  padding: 10px;

  background-color: inherit;
  border: 2px solid ${({ theme }) => theme.border};

  height: ${`${TOOLBAR_HEIGHT}px`};

  display: flex;
  justify-content: space-between;

  border-radius: 10px;
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
`;

export const AutosavingTitleWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
`;
