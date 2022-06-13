import { useState, ChangeEvent } from "react";

function useInput(initialValue: string | number | boolean | null | any) {
  const [value, setValue] = useState(initialValue);
  const reset = () => {
    setValue(initialValue);
  };
  const bind = {
    value,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(e.target.value);
    },
  };
  return [value, bind, reset];
}

export default useInput;
