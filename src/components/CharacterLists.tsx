import styled from "styled-components";
import { Link } from "react-router-dom";

interface CharacterIF {
  id: number;
  name: string;
  imageUrl: string;
}

const Lists = styled.ul`
  max-width: 955px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 40px;
  padding-bottom: 50px;
`;
const List = styled.li`
  width: 159px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;
const NoImg = styled.div`
  width: 159px;
  height: 159px;
  border-radius: 50%;
  background-color: #b5b5b5;
`;
const Img = styled.img`
  width: 159px;
  height: 159px;
  border-radius: 50%;
`;
const Name = styled.p`
  text-align: center;
  color: white;
  margin-top: 20px;
  line-height: 1.5;
`;

function CharacterLists({ characters }: { characters: CharacterIF[] }) {
  console.log(characters);

  return (
    <Lists>
      {characters.slice(0, 100).map((character) => {
        if (character === undefined) return null;
        return (
          <List key={character.id}>
            <StyledLink to={`/character/${character.id}`}>
              {character.imageUrl ? (
                <Img src={character.imageUrl} />
              ) : (
                <NoImg />
              )}
              <Name>{character.name}</Name>
            </StyledLink>
          </List>
        );
      })}
    </Lists>
  );
}

export default CharacterLists;
