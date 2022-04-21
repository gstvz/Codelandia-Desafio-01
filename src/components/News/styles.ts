import styled from "styled-components";

export const NewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 10rem 0;
`;

export const NewsCard = styled.li`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 2rem;
`;

export const NewsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const NewsDate = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1.6rem;
`;

export const NewsTitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray_dark};
  font-size: 2.6rem;
  margin-bottom: 2rem;
`;

export const NewsContent = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1.8rem;
`;
