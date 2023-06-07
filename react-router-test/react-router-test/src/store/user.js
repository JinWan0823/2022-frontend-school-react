import React, { createContext, useState, useReducer } from "react";

export const UserContext = createContext();
const initialUser = {
  name: "jinwan",
  job: "FE-developer",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "changeJob":
      // state의 job에 해당하는 데이터를 action.text
      return { ...state, job: action.text };
    default:
  }
};

export default function UserStore(props) {
  // const [job, setJob] = useState("FE-developer");
  const [user, dispatch] = useReducer(userReducer, initialUser);
  console.log(user);

  return (
    <UserContext.Provider value={dispatch}>
      {props.children}
    </UserContext.Provider>
  );
}
