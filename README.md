- import useState `import React, { useState } from "react";`

- Sử dụng useState để dùng biến đổi data: `  const [like, setLike] = useState(initialState);`
- initialState: num, object, function
- Muốn chỉnh style trong JSX: style={{ color: like === 1 ? `red` : "blue" }} và khi muốn đổi bgc thì dùng backgroundColor

- Trick để toggle:     setLike(1 - like);
