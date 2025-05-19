import styled from "@emotion/styled";

export const StyledParagraph = styled.p<{ fontSize: number }>`
  margin: 0;
  padding: 0;

  color: ${({ theme }) => theme.text};

  size: ${({ fontSize }) => `${fontSize}px`};
`;
