import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";

export default function ReactPage() {
  // api call -> react page에 해당하는 목록을 불러옴

  async function fetcher() {
    const result = await axios("https://jsonplaceholder.typicode.com/posts");

    console.log(result.data);
    return result.data;
  }

  const { data: docs, error } = useSWR("posts", fetcher);

  if (!docs) return <div>Loading...</div>;
  if (error) return <div>No File</div>;

  return (
    <>
      <div>
        {docs.map((doc) => (
          <Link
            key={doc.id}
            to={`${doc.id}`}
            style={{ margin: 10, display: "block" }}
          >
            {doc.title}
          </Link>
        ))}
      </div>
      {/* <Outlet /> */}
    </>
  );
}
