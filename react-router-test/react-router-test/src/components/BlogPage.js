import React from "react";
import { Link } from "react-router-dom";

export default function BlogPage() {
  return (
    <div>
      <h1>BlogPage</h1>
      <Link to="/">MainPage</Link> | <Link to="/tech">ReactPage</Link>
    </div>
  );
}
