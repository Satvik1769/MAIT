"use client";
require("dotenv").config();
import { url } from "@/constants";
import { useState } from "react";

export default function Page() {
  const [selectedFile, setSelectedFile] = useState(null);

  function handleFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setSelectedFile(i);
    }
  }

  async function upload(event) {
    try {
      const body = new FormData();
      body.append("file", selectedFile);
      const response = await fetch(url + "/api/upload", {
        method: "POST",
        headers: {
          // Add any required headers here, e.g., Content-Type
          "Content-Type": "multipart/form-data",
        },
        body,
      });
      console.log(response);
      if (response.ok) {
        console.log("Image uploaded successfully!");
      } else {
        console.error("Image upload failed.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }

  return (
    <>
      <input type="file" onChange={handleFileChange} />
      <button
        onClick={upload}
        style={{ justifyContent: "center", margin: 10, borderColor: "black" }}
      >
        Upload
      </button>
    </>
  );
}
