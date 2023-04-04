import styled from "styled-components";
import "../index.css";

const StyledLabel = styled.label`
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 4px;
  display: block;

  color: ${(props) =>
    props.error ? "var(--light-red)" : "var(--smokey-grey)"};
`;

const StyledInput = styled.input`
  width: 160px;
  height: 72px;
  margin-top: 10px;
  border: 1px solid var(--light-grey);
  border-radius: 8px;
  padding-left: 24px;
  box-sizing: border-box;
  font-size: 32px;
  font-family: "Poppins";
  color: black;

  &:focus {
    border: 1px solid var(--purple);
    outline: none;
  }
`;

const Error = styled.p`
  color: var(--light-red);
  font-size: 12px;
  font-style: italic;
  line-height: 0px;
`;

function Input(props) {
  return (
    <div>
      <StyledLabel error={props.error} htmlFor={props.title}>
        {props.title}
      </StyledLabel>
      <StyledInput
        id={props.title}
        type="text"
        onBlur={(event) => props.giveData(event.target.value)}
        placeholder={props.placeholder}
      />
      {props.error && <Error>{props.error}</Error>}
    </div>
  );
}

export default Input;
