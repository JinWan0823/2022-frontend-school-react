import React , { useState } from "react";

export default function SimpleForm() {

  // const [nickname, setNickName] = useState("");
  // const [password, setPassWord] = useState("");

  const [userInputs, setUserInputs] = useState({
    nickname : "",
    password : "",
  })


  const handleChange = (e) => {
    setUserInputs({...userInputs, [e.target.name] : e.target.value})
    // if(e.target.name ==="nickname") return setNickName(e.target.value);
    // return setPassWord(e.target.value)
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    //서버 요청+a
    const {nickname, password} = userInputs
    alert(`nickname : ${nickname} password : ${password}`)
  }

  return (
    <form onSubmit={handelSubmit}>
      <label htmlFor="nickname">닉네임 : </label>
      <input type="text" name="nickname" onChange={handleChange} value={userInputs.nickname} />
      <br/>
      <label htmlFor="password">패스워드 : </label>
      <input type="text" name="password" onChange={handleChange} value={userInputs.password} />
      <br/>
      <input type="submit" value="제출" />
    </form>
  );

}