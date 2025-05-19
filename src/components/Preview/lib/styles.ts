import styled from "@emotion/styled";

export const PreviewTextWrapper = styled.div`
  width: 100%;
  height: calc(100% - 35px);

  color: ${({ theme }) => theme.text};

  font-size: 1em;

  padding: 10px 30px;

  border-radius: 0px 0px 10px 10px;

  user-select: none;

  word-wrap: break-word;
  white-space: pre-wrap;
`;
