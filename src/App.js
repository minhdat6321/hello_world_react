import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: `DiAyTiO6`,
    email: `diaytio6@gmail.com`,
    language: `EN`,
    isGoing: false,
  });
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    //Validat username
    const isUserNameValid =
      formData.username === formData.username.toLowerCase();
    setError(!isUserNameValid ? "Username must be lowercase" : ""); // dung tenary
  };

  const handleInput = (e) => {
    const field = e.target.name;
    const value =
      e.target.type === `checkbox` ? e.target.checked : e.target.value;

    if (field === `username`) {
      //update correct/ error when typing
      const isUserNameValid = value === value.toLowerCase();
      setError(!isUserNameValid ? "Username must be lowercase" : ""); // dung tenary
    }

    setFormData({ ...formData, [field]: value });
  };

  return (
    <div>
      <p>{error}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            value={formData.username}
            onChange={handleInput}
            type="text"
            id="username"
            name="username"
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            value={formData.email}
            onChange={handleInput}
            type="text"
            id="email"
            name="email"
            autoComplete="off"
          />
        </div>
        <div>
          <label>
            Language{``}
            <select
              name="language"
              value={formData.language}
              onChange={handleInput}
            >
              <option value="EN">EN</option>
              <option value="VN">VN</option>
              <option value="DE">DE</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            <input
              checked={formData.isGoing}
              onChange={handleInput}
              type="text"
              id="isGoing"
              name="isGoing"
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
