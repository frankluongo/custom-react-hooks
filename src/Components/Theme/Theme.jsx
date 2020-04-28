import React from "react";
import { useTheme } from "../../Hooks";

const Theme = () => {
  const [theme, setTheme] = useTheme();

  return (
    <div>
      <label htmlFor="theme">Select Theme: </label>
      <select
        name="theme"
        id="theme"
        defaultValue={theme}
        onChange={handleChange}
      >
        <option value="light">Light</option>
        <option value="dark">dark</option>
      </select>
    </div>
  );

  function handleChange(e) {
    setTheme(e.target.value);
  }
};

export default Theme;
