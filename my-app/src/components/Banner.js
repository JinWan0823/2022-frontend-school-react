import React, {useState} from "react";

const Banner = () => {

  const [state, setState] = useState(true)

  const getCoupon = () => {
    alert("10% 쿠폰을 받으셨습니다.")
  }

  const closeBanner = (e) => {
    e.stopPropagation(); // 이벤트 전파 막기
    setState(false); // 비동기
  }

  return state ? (
    <div 
      onClick={getCoupon}
      style={{
        backgroundColor: "orange",
        fontWeight: "bold",
        height: "50px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      이 곳을 클릭해서 쿠폰을 받아가세요.
      <button onClick={closeBanner}>닫기</button>
    </div>
  ) : null;
};

export default Banner;
