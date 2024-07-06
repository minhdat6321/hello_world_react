- Conditional rendering:

  - if x TRUE ... else FALSE ... `{!isLoggedIn ? (
      <button onClick={handleLogin}>Login</button>
    ) : (
      <button onClick={handleLogout}>Logout</button>
    )}`
  - render abc if x TRUE, Không thì thôi `{ x && abc}` Ex:`{isLoggedIn && JSON.stringify(items)}`

- Rendering Arrays
  \*\*\* Phải có attribute `key={id}`
  - Muốn dùng function có parameter thì phải có `()=>` phía trước Ex:`<button onClick={() => removeItem(item.id)}>Remove</button>`
  - attribute `defaultValue` trong `input`: React chỉ render 1 lần và KHÔNG kiểm soát => PHẢI CÓ `key={id}`
  - Tự nghiệm: React so sánh 2 version thì nếu trùng index, hay các thứ khác thì sẽ KHÔNG TRACK kĩ
    => lộn xộn data => cần `key={id}` để covere hết 1 elements để khi render thì React biết có id mới và TRACK lại
