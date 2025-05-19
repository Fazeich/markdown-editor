import styled from "@emotion/styled";

export const LayoutWrapper = styled.div`
  background: ${({ theme }) => theme.background.primary};

  max-width: 100vw;
  min-height: 100vh;

  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LayoutEditorWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: grid;

  grid-gap: 10px;
  grid-template-columns: 49.5% 50%;

  @media (max-width: 786px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
