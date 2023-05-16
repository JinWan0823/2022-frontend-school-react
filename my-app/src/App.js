import React from "react";

export default function App() {
  const numbers = [1,2,3,4,5];
  const listItems = numbers.map((numbers) => 
    <li>{numbers}</li>
  );

  console.log(listItems);

  return (
    <ul>
      {listItems}
    </ul>
  );


}