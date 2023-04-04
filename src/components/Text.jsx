import styled from "styled-components";
import "../index.css";

const StyledNum = styled.span`
  color: var(--purple);
`;

const StyledText = styled.h1`
  font-size: 105px;
  font-style: italic;
  margin: 0;
  line-height: 116px;
`;

export default function Text(props) {
  return (
    <StyledText>
      <StyledNum> {props.num} </StyledNum> {props.text}
    </StyledText>
  );
}
