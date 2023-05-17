import React , { useRef , useState} from "react";
import Cat from "./Cat";

// Cat 안에 있는 image 사이즈를 알아내기
export default function CatParent() {
  const catRef = useRef();
  
  console.log("부모 컴포넌트 CatParent");
  console.log(catRef)

  const ageRef = useRef(1)
  const [state, setState] = useState(1);

  console.log(ageRef)
  console.log(ageRef.current)

  const catSize = () =>{
    alert(catRef.current.height);
  }

  return (
    <div>
      <h4> 고양이가 세상을 구한다 ️</h4>
      <div>
        <Cat ref={catRef}/>
        <h3>나이 : {ageRef.current}</h3>
        <h4>상태값 : {state}</h4>
        <button onClick={catSize}>이미지 사이즈</button>
        <button onClick={() => ageRef.current = ageRef.current + 1}>새해</button>
        <button onClick={() => setState(state+1)}>테스트</button>
      </div>
    </div>
  );
}
