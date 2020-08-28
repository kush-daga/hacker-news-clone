import styled from "styled-components";
export const Item = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 10px 20px;
  border-radius: 5px;
  list-style: none;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  &:last-child {
    border-bottom: none;
  }
`;
export const Title = styled.h3`
  color: ${({ theme }) => theme.text};
  margin-top: 0;
  margin-bottom: 6px;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.4px;
`;

export const LinkTitle = styled.a`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 12px;
`;

export const LinkStory = styled.a`
  color: ${({ theme }) => theme.text};
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
`;
export const Time = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;
export const Desc = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSecondary};
  display: flex;
  justify-content: space-between;
`;

export const CommentLink = styled.a`
  color: ${({ theme }) => theme.textSecondary};
  &:visited {
    color: ${({ theme }) => theme.textSecondary};
  }
`;
