import styled from "@emotion/styled";

export const ToolbarWrapper = styled.div`
  padding: 10px;

  background-color: inherit;
  border: 2px solid ${({ theme }) => theme.border};

  height: 45px;

  display: flex;
  justify-content: space-between;

  border-radius: 10px;
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
`;
