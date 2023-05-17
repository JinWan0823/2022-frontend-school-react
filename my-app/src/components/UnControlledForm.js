import React, { useRef } from "react";

// ref를 활용 -> 비제어 컴포넌트 방식으로  form 다루기
export default function UnControlledForm() {
  const inputRef = useRef()
  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // }

  const handelSubmit = (e) => {
    e.preventDefault();
    alert(inputRef.current.value);
    inputRef.current.focus();
  }

  return (
    <form onSubmit={handelSubmit}>
      <label>닉네임 : </label>
      <input type="text" name="nickname" ref={inputRef}/>
      <input type="submit" value="제출" />
    </form>
  );

}
