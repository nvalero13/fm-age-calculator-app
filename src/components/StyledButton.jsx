import styled from "styled-components";
import "../index.css";

import icon from "../assets/images/icon-arrow.svg";

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

  @media (max-width: 768px) {
    right: 50%;
    transform: translate(50%, -50%);
    width: 64px;
    height: 64px;
  }
`;

function StyledButton({ handleClick }) {
  return (
    <Button onClick={handleClick}>
      <img style={{ width: "50%" }} src={icon} />
    </Button>
  );
}

export default StyledButton;
