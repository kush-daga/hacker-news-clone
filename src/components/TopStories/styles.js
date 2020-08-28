import styled from "styled-components";
export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h3`
  color: ${({ theme }) => theme.text};
`;
