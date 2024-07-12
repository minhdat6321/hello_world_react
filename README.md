- chia tách ra `searchInput`: user type xong vào ô input và `setSearchCity(searchInput)`: khi user nhấn `Enter` thì nó mới update giá trị `searchCity` và dùng giá trị `searchCity` để tìm data

- Combo get data from API:
  "useEffect(() => {
  const fetchWeatherData = async () => { //Dùng async và gọi hàm thực hiện tại cuối
  if (!searchCity) return; //Để tránh trường hợp MOUNT đầu tiên khi không có `searchCity`
  setLoading(true);
  //Process
  try {
  const url = `${api.base}weather?q=${searchCity}&units=metric&APPID=${api.key}`;
  const res = await fetch(url);
  const data = await res.json();
  if (res.ok) {
  setWeatherInfo(
  `${data.name}, ${data.sys.country}, ${data.weather[0].description}, ${data.main.temp}`
  );
  setErrorMessage(``);
  } else {
  setErrorMessage(data.message);
  }
  } catch (error) {
  setErrorMessage(error.message);
  }
  setLoading(false);
  };
  fetchWeatherData();
  }, [searchCity]);"

- Kiểm soát quá trình truyền data `BẮT ĐẦU từ lúc nào CHO ĐẾN KẾT THÚC lúc nào` thông qua state `loading`

  - setLoading(true): bắt đầu load data, sẽ có vòng tròn loading hiển thị
  - setLoading(false): kết thúc quá trình load data

- Thêm style JSX: `style={{ color: "red" }`

\*\*\*`res.ok` mới work

- Flow để control App với API và load data:
  - Dùng `setLoading` để kiểm soát điểm đầu với điểm cuối của process, chờ đợi server
  - Dùng `errorMessage` để hứng các lỗi
  - Dùng `weatherInfo` để lấy data đầu ra của API
