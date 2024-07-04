import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: white;
`;

function Loading() {
  return <Wrapper>"Loading..."</Wrapper>;
}

export default Loading;
