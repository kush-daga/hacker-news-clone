import styled, { keyframes } from "styled-components";
export const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;
export const DotWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const Dot = styled.div`
  background-color: ${({ theme }) => theme.textSecondary};
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`;
