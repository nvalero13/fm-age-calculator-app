import { useState, useContext } from "react";

import { Container } from "./components/Container";
import StyledButton from "./components/StyledButton";
import StyledInput from "./components/StyledInput";
import Text from "./components/Text";

import useError from "./assets/hooks/useError";
import { substractDate } from "./assets/utils/substractDate";

import styled from "styled-components";

const StyledDiv = styled.div`
  margin-top: 36px;
  margin-bottom: 36px;
  border-top: 1px solid var(--off-white);
  position: relative;

  @media (max-width: 764px) {
    margin-top: 56px;
    margin-bottom: 56px;
  }
`;

function App() {
  const [resultDate, setResultDate] = useState({
    years: "--",
    months: "--",
    days: "--",
  });

  const [inputYear, setinputYear] = useState(0);
  const [inputMonth, setinputMonth] = useState(0);
  const [inputDay, setinputDay] = useState(0);

  const [dayError, monthError, yearError] = useError(
    inputDay,
    inputMonth,
    inputYear
  );

  const handleClick = () => {
    if (!dayError && !monthError && !yearError) {
      setResultDate(substractDate(inputDay, inputMonth, inputYear));
    } else
      setResultDate({
        years: "--",
        months: "--",
        days: "--",
      });
  };

  return (
    <Container>
      <div style={{ display: "flex" }}>
        <StyledInput
          title="Day"
          placeholder="DD"
          giveData={(day) => setinputDay(day)}
          error={dayError}
        />
        <StyledInput
          title="Month"
          placeholder="MM"
          giveData={(day) => setinputMonth(day)}
          error={monthError}
        />
        <StyledInput
          title="Year"
          placeholder="YYYY"
          giveData={(day) => setinputYear(day)}
          error={yearError}
        />
      </div>

      <StyledDiv>
        <StyledButton handleClick={handleClick} />
      </StyledDiv>

      <Text num={resultDate.years} text="years" />
      <Text num={resultDate.months} text="months" />
      <Text num={resultDate.days} text="days" />
    </Container>
  );
}

export default App;
