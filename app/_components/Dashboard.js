"use client";
import Image from "next/image";
import HeaderDash from "./HeaderDash";
import SearchBar from "./SearchBar";
import { useState } from "react";
import Document from "./Document";

const Dashboard = () => {
  const [document, setDocument] = useState(null);
  return (
    <section className="w-full h-fit flex flex-col gap-y-7 pb-7 pt-16 pl-[270px]">
      <HeaderDash
        heading="Dashboard"
        src="/dashboard.png"
        alt="dashboard"
        height={60}
        width={133}
      />
      <SearchBar setDocument={setDocument} />
      <section className="full p-0 fccc ">
        {document != null ? (
          <div className="self-start">
            <Document document={document} />
          </div>
        ) : (
          <>
            <Image
              priority={true}
              src={"/noSearch.png"}
              alt="noSearch"
              width={216}
              height={150}
            />
            <h3
              className="mt-5"
              style={{
                color: "#a593ab",
                fontWeight: 500,
              }}
            >
              Docs Found Here
            </h3>
          </>
        )}
      </section>
    </section>
  );
};

export default Dashboard;
