import React from "react";
import { useParams, useNavigate} from "react-router-dom";

export default function ReactDocPage() {
  // docId : 1,2,3....
  const params = useParams();
  console.log(params);
  const navigate = useNavigate();
  return (
    <>
      <h1 onClick={() => navigate("/")}>logo</h1>
      <div>
        <h1>ReactDocPage ##{params.docId}</h1>
      </div>

    </>
  );
}
