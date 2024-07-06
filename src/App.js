import React, { useState } from "react";
const allItems = [
  { id: `beaming`, value: `U+1F601`, isSmile: true },
  { id: `grinning`, value: `U+1F603`, isSmile: true },
  { id: `squinting`, value: `U+1F606`, isSmile: true },
  { id: `winking`, value: `U+1F609`, isSmile: true },
  { id: `sad`, value: `U+1F972`, isSmile: false },
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [items, setItems] = useState(allItems);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const removeItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };
  return (
    <div>
      <h1>Smileys</h1>
      <div className="loginControl">
        {!isLoggedIn ? (
          <button onClick={handleLogin}>Login</button>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </div>
      {isLoggedIn && (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <label htmlFor={`${item.id}-input`}>
                {item.value} {item.id}
              </label>
              <input
                defaultValue={item.id}
                type="text"
                id={`${item.id}-input`}
              />
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
