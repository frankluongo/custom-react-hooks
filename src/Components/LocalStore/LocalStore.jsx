import React from "react";
import { useLocalStorage } from "../../Hooks";

const LocalStore = () => {
  const { value, setValue } = useLocalStorage("test", "initials");
  return (
    <div>
      <h1>Test Storage: {value}</h1>
      <input type="text" onChange={handleChange} placeholder={value} />
    </div>
  );

  function handleChange(e) {
    setValue(e.target.value);
  }
};

export default LocalStore;
