import styled from "@emotion/styled";

export const LayoutWrapper = styled.div`
  background: ${({ theme }) => theme.background.primary};

  width: 100%;
  height: 100vh;

  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LayoutFlexWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;

  @media (max-width: 786px) {
    flex-direction: column;
  }
`;
