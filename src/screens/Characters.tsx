import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../api";
import Loading from "../components/Loading";
import CharacterLists from "../components/CharacterLists";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 32px;
  color: white;
  text-align: center;
  padding: 50px 0;
`;

function Charcters() {
  const { isLoading, data: json } = useQuery({
    queryKey: ["allCharacters"],
    queryFn: fetchCharacters,
  });

  console.log(json);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Heading>Aladin</Heading>
          <CharacterLists characters={json?.data} />
        </>
      )}
    </>
  );
}

export default Charcters;
