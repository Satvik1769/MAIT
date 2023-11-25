"use client";
import { debounce, url } from "@/constants";
import { useSession } from "next-auth/react";
import { useState } from "react";

const SearchBar = ({ setDocument }) => {
  const [option, setOption] = useState("");
  const session = useSession();
  console.log("session", session);
  const handleClick = debounce(async () => {
    console.log("option clicked", option);
    console.log("session", session);

    // send data to backend to get the data
    // if (!session.data?.user?.username) {
    //   // alert("Please login to continue");
    //   return;
    // }
    const data = await fetch(
      url +
        `/api/db/cids/getCid/${session.data.user.username || "user"}/${option}`
    )
      .then((res) => res.json())
      .catch((err) => console.log(err));
    console.log("items found", data);
    setDocument(data || false);
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
        {selectOptions.map((option, index) => (
          <option key={option + index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button
        className="btnPrimary"
        disabled={option == "Select document type"}
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
  "aadhar",
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

// https://637dc79f5cd1ff19c7303b7c8eddb2e8.ipfscdn.io/ipfs/bafybeiho33bms4ccq2i2ljsrxlf6hspasrvz73juxx6xluovusdiyybnci/0/
