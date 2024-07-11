`  useEffect(() => {
    console.log(`renderLanguage`);
    window.localStorage.setItem("language", language);
  }, [language]);`

- useEffect cần có 1 function truyền vào, những đoạn code trong funct đó gọi là hook ~ sideEffect và `CHỈ RUN AFTER RENDERING`

- useEffect có thể có `Array of Dependecy` hoặc KHÔNG.

  - Nếu có như ví dụ đầu thì sẽ UPDATE khi state `language` thay đổi
  - Nếu `[] empty` thì chỉ rendering `1 LẦN ĐẦU TIÊN SAU KHI ĐÃ MOUNT`
  - Nếu `KHÔNG CÓ Array` thì sẽ `UPDATE MỌI LÚC KHI RE-RENDER ANYTHING`

- useEffect dùng cho:

  - Call API
  - Subscription to an observable
  - Updating the DOM element
  - Updating global variable from outside funct

- Local Storage:
  \*\*\* value là `STRING` muốn convert obj/array thì dùng `JSON.stringify`

  - set(`key`, `value`): để LƯU giá trị của 1 biến vào local `Number(window.localStorage.setItem("count", count)`
  - get(`key`): để lấy giá trị đó từ LOCAL `Number(window.localStorage.getItem("count")` : có trick nhỏ để convert từ string sang number là : `Number()`
