import * as S from "./styles";
import { AiOutlineSearch } from "../../shared/icons";

export const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <S.HeaderText>
          <S.Logo>Codelândia</S.Logo>
          <S.Blog>blog</S.Blog>
        </S.HeaderText>
        <S.SearchBarWrapper>
          <AiOutlineSearch color="white" size={28} />
          <S.SearchBar placeholder="Pesquisar no blog" />
        </S.SearchBarWrapper>
      </S.Container>
    </S.Header>
  );
};
