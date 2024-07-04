import React, { useState } from "react";

function App() {
  const [like, setLike] = useState(1);
  const [blog, setBlog] = useState({
    content: `React is so freaking awesome`,
    count: 0,
  });

  const handleClick = () => {
    setLike(1 - like);
    setBlog({ ...blog, count: blog.count + 1 });
  };

  return (
    <div>
      <p>{blog.content}</p>
      <h1 onClick={handleClick}>
        {like === 1 ? `👍` : `👎`} {blog.count}
      </h1>
      ;
      <h1 onClick={handleClick} style={{ color: like === 1 ? `red` : "blue" }}>
        ♥{" "}
      </h1>
    </div>
  );
}

export default App;
