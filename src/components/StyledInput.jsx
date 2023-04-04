import styled from "styled-components";
import "../index.css";

const StyledLabel = styled.label`
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 4px;
  display: block;
`;

const StyledInput = styled.input`
  width: 160px;
  height: 70px;
  margin-top: 14px;
  border: 2px solid var(--light-grey);
  border-radius: 12px;
  padding-left: 26px;
  font-size: 32px;
  font-family: "Poppins";
  color: black;
`;

function Input(props) {
  return (
    <div>
      <StyledLabel htmlFor={props.title}>{props.title}</StyledLabel>
      <StyledInput
        id={props.title}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Input;
