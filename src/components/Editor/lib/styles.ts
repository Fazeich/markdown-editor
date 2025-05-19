import styled from "@emotion/styled";

export const EditorWrapper = styled.div`
  background: ${({ theme }) => theme.background.secondary};

  width: 100%;
  height: 100%;

  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 10px;
`;

export const LabelWrapper = styled.div`
  height: 35px;

  display: flex;
  align-items: center;

  padding: 10px;

  border-bottom: 2px solid ${({ theme }) => theme.border};

  user-select: none;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: calc(100% - 35px);
`;
