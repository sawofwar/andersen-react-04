import Input from "../Input/Input";
import Add from "../Button/Add/Add";

import "./InputWithButton.css";

const InputWithButton = () => {
  return (
    <div className="input-wrapper">
      <Input />
      <Add />
    </div>
  );
};

export default InputWithButton;
