import { StyledInput } from "./StyledInput";

function Input(props) {
  return (
    <div>
      <label htmlFor="">Day</label>
      <input type="number" placeholder="DD" />
    </div>
  );
}

export default Input;
