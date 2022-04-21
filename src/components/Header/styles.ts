import styled from "styled-components";

export const Header = styled.header`
  background: ${({ theme }) => theme.colors.gradient};
  display: flex;
  justify-content: center;
  height: 20rem;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  width: 60%;
`;

export const HeaderText = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  font-size: 2.4rem;
  font-weight: 400;
`;

export const Blog = styled.p`
  font-size: 2.4rem;
`;

export const SearchBarWrapper = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  display: flex;
  gap: 20px;
  height: 4rem;
  padding: 1rem;
`;

export const SearchBar = styled.input`
  background: none;
  color: ${({ theme }) => theme.colors.white_200};
  flex: 1;

  &::placeholder {
    color: ${({ theme }) => theme.colors.white_200};
  }
`;
