import styled from "@emotion/styled";

export const PreviewTextWrapper = styled.div`
  width: 100%;
  height: calc(100% - 35px);

  background-color: ${({ theme }) => theme.background.primary};

  color: ${({ theme }) => theme.text};

  font-size: 1em;

  padding: 10px;

  border-radius: 0px 0px 10px 10px;

  user-select: none;
`;
