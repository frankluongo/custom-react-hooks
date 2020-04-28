import React from "react";

import { useScript } from "../../Hooks";

const Scripty = () => {
  const [isLoaded, isError] = useScript(
    "https://www.google.com/recaptcha/api.js"
  );

  console.log("loaded, error", isLoaded, isError);

  if (!isLoaded) return <div>Loading...</div>;

  return <div>Recaptcha Ready</div>;
};

export default Scripty;
