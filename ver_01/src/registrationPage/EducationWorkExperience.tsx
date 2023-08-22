import { Container } from "./News";
import { Content } from "./News";
import { useState } from "react";

// Hàm giả lập kết nối API
function fakeAPICall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() < 0.8; // 80% xác suất thành công, 20% xác suất lỗi giả lập
      if (success) {
        resolve("Dữ liệu từ API đã được lấy thành công.");
      } else {
        reject("Đã xảy ra lỗi khi lấy dữ liệu từ API.");
      }
    }, 1000); // Trả về phản hồi từ API sau 1 giây
  });
}

function EducationWork() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = () => {
    setIsLoading(true);
    setError(null);

    fakeAPICall()
      .then((response) => {
        if (typeof response === "string") {
            setData(response as any);
          } else {
            // Xử lý khi response không phải là chuỗi
          }
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <>
      <Container>
        <Content>
          <h1>EducationWork</h1>
          <div>
            <button onClick={fetchData}>Lấy Dữ liệu từ API</button>
            {isLoading && <p>Đang tải...</p>}
            {error && <p>Lỗi: {error}</p>}
            {data && <p>Dữ liệu từ API: {data}</p>}
          </div>
        </Content>
      </Container>
    </>
  );
}

export default EducationWork;
