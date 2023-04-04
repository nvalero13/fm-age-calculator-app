import { Container } from "./components/Container";
import StyledInput from "./components/StyledInput";

function App() {
  return (
    <Container>
      <div style={{ display: "flex", gap: "32px" }}>
        <StyledInput title="Day" placeholder="DD" />
        <StyledInput title="Month" placeholder="MM" />
        <StyledInput title="Year" placeholder="YYYY" />
      </div>
    </Container>
  );
}

export default App;
