import React , { useState } from "react";

export default function SimpleForm() {

  const [nickname, setNickName] = useState("zero");


  const handleChange = (e) => {
    setNickName(e.target.value)
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    //서버 요청+a
    alert(nickname)
  }

  return (
    <form onSubmit={handelSubmit}>
      <label htmlFor="nickname">닉네임 : </label>
      <input type="text" name="nickname" onChange={handleChange} value={nickname} />
      <input type="submit" value="제출" />
    </form>
  );

}