import styled from "@emotion/styled";

export const StyledPreviewWrapper = styled.div`
  background: ${({ theme }) => theme.background.secondary};

  width: 100%;
  height: 100%;

  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 10px;
`;

export const LabelWrapper = styled.div``;
