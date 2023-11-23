"use client";
import { debounce, url } from "@/constants";
import { useSession } from "next-auth/react";
import { useState } from "react";

const SearchBar = ({ setDocument }) => {
  const [option, setOption] = useState("");
  const session = useSession();
  const handleClick = debounce(async () => {
    console.log("option clicked", option);
    // send data to backend to get the data
    if (!session?.user?.phone) return;
    const data = await fetch(url + "/api/db/cids/getCid", {
      method: "POST",
      body: JSON.stringify({
        type: option,
        phone: session.user.phone,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
    setDocument(data);
  }, 300);
  return (
    <div className="flex h-fit gap-x-5">
      <select
        placeholder="Select document type"
        id="searchBar"
        className=""
        style={{
          flex: 5,
          textTransform: "capitalize",
        }}
        type="text"
        value={option}
        onChange={(e) => {
          console.log(e.target.value);
          setOption(e.target.value);
        }}
      >
        {selectOptions.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
      <button
        className="btnPrimary"
        style={{
          flex: 2,
          height: "auto",
        }}
        onClick={handleClick}
      >
        Find Doc
      </button>
    </div>
  );
};

const selectOptions = [
  "Select document type",
  "adhaar",
  "pan",
  "passport",
  "driving license",
  "voter id",
  "ration card",
  "birth certificate",
  "marriage certificate",
  "death certificate",
  "property tax receipt",
  "electricity bill",
  "water bill",
  "telephone bill",
  "gas bill",
  "bank statement",
  "bank passbook",
  "credit card statement",
  "insurance policy",
  "share certificate",
  "fixed deposit certificate",
  "passport",
  "visa",
  "birth certificate",
  "marriage certificate",
  "death certificate",
  "property tax receipt",
  "electricity bill",
  "water bill",
  "telephone bill",
  "gas bill",
  "bank statement",
  "bank passbook",
  "credit card statement",
  "insurance policy",
  "share certificate",
  "fixed deposit certificate",
  "passport",
  "visa",
  "birth certificate",
  "marriage certificate",
  "death certificate",
  "property tax receipt",
  "electricity bill",
  "water bill",
  "telephone bill",
  "gas bill",
  "bank statement",
  "bank passbook",
  "credit card statement",
  "insurance policy",
  "share certificate",
  "fixed deposit certificate",
  "passport",
  "visa",
  "birth certificate",
  "marriage certificate",
  "death certificate",
  "property tax receipt",
  "electricity bill",
  "water bill",
  "telephone bill",
  "gas bill",
  "bank statement",
  "bank passbook",
  "credit card statement",
  "insurance policy",
  "share certificate",
  "fixed deposit certificate",
  "passport",
  "visa",
  "birth certificate",
  "marriage certificate",
  "death certificate",
  "property tax receipt",
  "electricity bill",
  "water bill",
  "telephone bill",
  "gas bill",
  "bank statement",
  "bank passbook",
  "credit card statement",
  "insurance policy",
  "share certificate",
  "fixed deposit certificate",
  "passport",
  "visa",
  "birth certificate",
  "marriage certificate",
  "death certificate",
  "property tax receipt",
  "electricity bill",
  "water bill",
  "telephone bill",
  "gas bill",
  "bank statement",
  "bank passbook",
  "credit card statement",
  "insurance policy",
  "share certificate",
  "fixed deposit certificate",
];

export default SearchBar;
