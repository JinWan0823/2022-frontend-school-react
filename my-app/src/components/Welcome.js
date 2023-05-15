import React from "react";
import monet from '../images/monet.jpg';

// 구조분해할당
export default function Welcome({withImg,firstName,lastName}) {
  //image + Hello, firstName, lastName
  // return (
  //   <>
  //     {props.withImg && <img src={monet} alt="welcomemonet" width="200px"/>}
  //     <div>Hello!</div>
  //     <div>
  //       <span>{props.firstName}</span>
  //       {props.lastName}
  //     </div>
  //   </>
  // );
  return (
    <>
      {withImg && <img src={monet} alt="welcomemonet" width="200px"/>}
      <div>Hello!</div>
      <div>
        <span>{firstName}</span>
        {lastName}
      </div>
    </>
  );
}