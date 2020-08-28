import styled from "styled-components";
export const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;
export const Nav = styled.nav`
  display: flex;
  width: 80%;
  margin: auto;
  margin-bottom: 20px;
  padding: 10px 0px;
  justify-content: space-between;
  button {
    outline: none;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2em;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.text};
  }
`;

export const Text = styled.h1`
  color: ${({ theme }) => theme.text};
`;
