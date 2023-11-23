"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const page = ({ params }) => {
  const para = useSearchParams();
  const url = para.get("cid");
  const { id } = params;
  if (!url) {
    return (
      <>
        <h3>missing url</h3>
      </>
    );
  }
  return (
    <div className="fccc">
      <h1>{id}</h1>
      <img src={url} height={100} width={100} />
      <iframe src={url} height={1000} width={1000} />
      {/* <Image src={url} alt="logo" width={100} height={100} /> */}
    </div>
  );
};

export default page;
