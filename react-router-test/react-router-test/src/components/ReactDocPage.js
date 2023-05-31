import React , {useEffect , useState} from "react";
import { useParams, useNavigate} from "react-router-dom";

export default function ReactDocPage() {
  // docId : 1,2,3....
  const params = useParams();
  const navigate = useNavigate();

  const [docs, setDocs] = useState([]);

  useEffect(() => {
    async function docData() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.docId}`);
      const result = await res.json();
      setDocs(result);
    }

    docData();

  },[])

  return (
    <>
      <h1 onClick={() => navigate("/")}>logo</h1>
      <div>
        <h1>{docs ? docs.title : "Loading..."}</h1>
        <p>{docs.body}</p>
      </div>

    </>
  );
}
