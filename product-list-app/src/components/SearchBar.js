import React from "react";

export default function SearchBar(props) {
  const {text,inStockOnly} = props.filter;
  
  function handleText(e) {
    props.updateFilter(e.target.name, e.target.value)
  }

  function handleInStockOnly(e) {
    props.updateFilter(e.target.name, e.target.checked)
  }

  return (
    <>
      <input placeholder="Search..." name="text" value={text} onChange={handleText}/>
      <div>
        <input id="stock" name="inStockOnly" type="checkbox" checked={inStockOnly} onChange={handleInStockOnly}/>
        <label htmlFor="inStockOnly">Only show products in stock</label>
      </div>
    </>
  );
} 