import React, { useState }from "react";
// Hook

export default function Counter() {
  //값 , 값을 변경할 때 쓰는 함수
  const [count, setCount] = useState(0)
  // const [state, setState] = useState()
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <br />
      Counter : {count}
    </div>
  );
}