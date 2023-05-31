import React , { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from 'axios';

export default function ReactPage() {
  // api call -> react page에 해당하는 목록을 불러옴 

  const [docs, setDocs] =  useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const result = await res.json(); // 상태값
      setDocs(result)
    }

    fetchData();
  },[])

  return (
    <>
      <div>
        {docs.map(doc =>(
          <Link key={doc.id} to={`${doc.id}`} style={{margin:10, display:"block"}}>{doc.title}</Link>
        ))}
      </div>
      {/* <Outlet /> */}
    </>
  );
}
