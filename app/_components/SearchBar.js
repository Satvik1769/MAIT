"use client";

import { debounce } from "@/constants";
import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <input
      placeholder="Search using document name"
      id="searchBar"
      className=""
      type="text"
      onChange={(e) => {
        const handleSearch = () => {
          setSearch(e.target.value);
        };
        debounce(handleSearch, 1000)();
      }}
    ></input>
  );
};

export default SearchBar;
