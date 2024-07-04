import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchCharacter } from "../api";
import Loading from "../components/Loading";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 955px;
  padding: 100px 0;
  margin: 0 auto;
  text-align: center;
`;
const Img = styled.img`
  width: 159px;
  height: 159px;
  border-radius: 50%;
`;
const Name = styled.p`
  font-size: 24px;
  color: white;
  margin-top: 20px;
`;
const Lists = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 40px;
`;
const List = styled.li`
  background-color: white;
  color: black;
  padding: 10px;
  border-radius: 10px;
`;

function Character() {
  const { id } = useParams();
  const { isLoading, data: json } = useQuery({
    queryKey: ["Character", id],
    queryFn: () => fetchCharacter(id),
  });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Wrapper>
          <Img src={json?.data.imageUrl} />
          <Name>{json?.data.name}</Name>
          <Lists>
            {json?.data.films.map((film: string, index: number) => (
              <List key={index}>{film}</List>
            ))}
          </Lists>
        </Wrapper>
      )}
    </>
  );
}

export default Character;
