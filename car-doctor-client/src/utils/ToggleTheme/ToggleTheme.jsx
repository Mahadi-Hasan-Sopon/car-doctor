// DarkModeToggle.js

import { useState } from "react";

// eslint-disable-next-line react/prop-types
function ToggleTheme({ className }) {
  const [checked, setChecked] = useState(false);

  const toggleDarkMode = () => {
    setChecked(!checked);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={className}>
      <input
        onChange={toggleDarkMode}
        type="checkbox"
        className="toggle toggle-md"
        checked={checked}
      />
    </div>
  );
}

export default ToggleTheme;
