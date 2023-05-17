import React , { useRef } from "react";
import Cat from "./Cat";

// Cat 안에 있는 image 사이즈를 알아내기
export default function CatParent() {
  const catRef = useRef();
  
  console.log("부모 컴포넌트 CatParent");
  console.log(catRef)

  const catSize = () =>{
    alert(catRef.current.height);
    console.log(catRef)
  }

  return (
    <div>
      <h4> 고양이가 세상을 구한다 ️</h4>
      <div>
        <Cat ref={catRef}/>
        <button onClick={catSize}>이미지 사이즈</button>
      </div>
    </div>
  );
}
