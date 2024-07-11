import React, { useEffect, useState } from "react";

function App() {
  console.log(`renderApp`);
  const [language, setLanguage] = useState(
    () => window.localStorage.getItem(`language`) || ""
  );
  const [count, setCount] = useState(
    Number(window.localStorage.getItem("count")) || 0
  );
  useEffect(() => {
    console.log(`renderLanguage`);
    window.localStorage.setItem("language", language);
  }, [language]);
  useEffect(() => {
    console.log(`renderCount`);
    window.localStorage.setItem("count", count);
  });

  return (
    <div>
      <label htmlFor="language">
        <span>Favorite language</span>
        <input
          type="text"
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
      </label>
      <span>Your favorite language is: {language} </span>
      <br />
      <button id="count" onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </div>
  );
}

export default App;
