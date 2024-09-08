import { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";

interface CheckboxProps {
  label: string;
  onCheckboxClicked: (typeQuery: string, checkboxState: boolean) => void;
}

const CheckboxUI = ({ label, onCheckboxClicked }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  const checkboxHandler = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    onCheckboxClicked(label, checked);
  }, [checked]);

  return (
    <div className="checkbox-wrapper">
      <label>
        <Checkbox onChange={checkboxHandler} checked={checked} />

        <span>{label}</span>
      </label>
    </div>
  );
};

export default CheckboxUI;
