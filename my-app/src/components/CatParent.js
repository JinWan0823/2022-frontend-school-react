import React , { useRef , useState} from "react";
import Cat from "./Cat";

// Cat 안에 있는 image 사이즈를 알아내기
export default function CatParent() {
  const ageRef = useRef(1);
  const [height, setHeight] = useState(0);

  const catCallbackRef = (node) => {
    if(node !== null) {
      setHeight(node.getBoundingClientRect().height)
    }
  }

 
  return (
    <div>
      <h4> 고양이가 세상을 구한다 ️</h4>
      <div>
        <Cat ref={catCallbackRef}/>
        <h3>나이 : {ageRef.current}</h3>
        <h4>키 : {height}</h4>
        {/* <button onClick={() =>{alert(catRef.current.height)}}>이미지 사이즈</button> */}
        <button onClick={() => ageRef.current = ageRef.current + 1}>새해</button>
        {/* <button onClick={() => setState(state+1)}>테스트</button> */}
      </div>
    </div>
  );
}
