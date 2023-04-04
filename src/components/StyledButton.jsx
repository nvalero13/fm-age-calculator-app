import styled from "styled-components";
import "../index.css";

const Button = styled.button`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background-color: var(--purple);
  border: none;
  position: absolute;
  right: 0;
  transform: translate(0, -50%);
  cursor: pointer;

  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: var(--off-black);
  }
`;

function StyledButton({ handleClick }) {
  return (
    <Button onClick={handleClick}>
      <img src="src/assets/images/icon-arrow.svg" />
    </Button>
  );
}

export default StyledButton;
