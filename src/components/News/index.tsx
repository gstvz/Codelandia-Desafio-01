import * as S from "./styles";
import { IoHeartOutline } from "@icons";
import { useTheme } from "styled-components";

export const News = () => {
  const theme = useTheme();

  return (
    <S.NewsList>
      <S.NewsCard>
        <S.NewsHeader>
          <S.NewsDate>02 de jul. 2021</S.NewsDate>
          <IoHeartOutline size={25} color={theme.colors.purple} />
        </S.NewsHeader>
        <S.NewsTitle>Agora é oficial: o Windows 11 está vindo</S.NewsTitle>
        <S.NewsContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus
          vel diam fringilla, eu ullamcorper ex iaculis.
        </S.NewsContent>
      </S.NewsCard>
      <S.NewsCard>
        <S.NewsHeader>
          <S.NewsDate>02 de jul. 2021</S.NewsDate>
          <IoHeartOutline size={25} color={theme.colors.purple} />
        </S.NewsHeader>
        <S.NewsTitle>
          Tim Berners-Lee vai leiloar código-fonte da web
        </S.NewsTitle>
        <S.NewsContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus
          vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor
          justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar
          tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum
          ullamcorper libero.
        </S.NewsContent>
      </S.NewsCard>
      <S.NewsCard>
        <S.NewsHeader>
          <S.NewsDate>02 de jul. 2021</S.NewsDate>
          <IoHeartOutline size={25} color={theme.colors.purple} />
        </S.NewsHeader>
        <S.NewsTitle>
          Tem Firefox novo no pedaço e você vai querer migrar
        </S.NewsTitle>
        <S.NewsContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vestibulum auctor est.
        </S.NewsContent>
      </S.NewsCard>
      <S.NewsCard>
        <S.NewsHeader>
          <S.NewsDate>02 de jul. 2021</S.NewsDate>
          <IoHeartOutline size={25} color={theme.colors.purple} />
        </S.NewsHeader>
        <S.NewsTitle>
          John McAfee, criador do antivírus McAfee, morre
        </S.NewsTitle>
        <S.NewsContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus
          vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor
          justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar
          tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum
          ullamcorper libero.
        </S.NewsContent>
      </S.NewsCard>
    </S.NewsList>
  );
};
