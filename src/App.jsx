import styled from "styled-components";
import "./index.css";

const Container = styled.div`
  width: 840px;
  height: 650px;
  background-color: var(--white);
  border-radius: 24px 24px 200px 24px;
`;

function App() {
  return <Container className="App"></Container>;
}

export default App;
