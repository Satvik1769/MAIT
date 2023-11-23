import Image from "next/image";

const dummyData = [
  {
    issuer: "Aadhar, unique identification authority of india",
    type: "Adhaar Card",
    logo: "/adhaar.png",
    id: "xxxx xxxx 1234",
    color: "rgba(213, 39, 54, 0.15)",
  },
  {
    issuer: "Income tax department",
    type: "Pan Card",
    logo: "/pan.png",
    id: "xxxx244hca",
    color: "rgba(0, 144, 56, 0.06)",
  },
];
const Document = ({ document }) => {
  //   const data = dummyData[0];
  console.log(document, "here");
  const tp = document?.type?.split(" ")[0].toLowerCase();
  console.log(tp, "here");
  let data;
  if (document && (tp == "aadhar" || tp == "pan")) {
    if (tp == "pan") {
      data = dummyData[1];
    } else {
      data = dummyData[0];
    }
  }
  if (!data) {
    return <h3>Not Found</h3>;
  }
  return (
    <a
      href={`${document.cid}`}
      className="flex items-center justify-center outerCard"
      style={{
        background: `linear-gradient(
          175deg,
          ${data.color} -22.84%,
          ${data.color} -22.83%,
          rgba(255, 255, 255, 0.5) 71.88%`,
      }}
    >
      <div
        className="innerCard"
        style={{
          background: `linear-gradient(
            175deg,
            ${data.color} -2.01%,
            ${data.color} -2%,
            rgba(255, 255, 255, 0.5) 100.79%`,
        }}
      >
        <div className="fcc h-full justify-between">
          <div className="flex justify-between w-full">
            <div className="flex  flex-col items-start gap-y-2">
              <h3 className="">{data.type}</h3>
              <p className=" uppercase text-[12px] ">{data.id}</p>
            </div>
            <Image
              className=""
              style={{ maxHeight: "30px" }}
              src={data.logo}
              alt={data.type}
              width={45}
              height={30}
            />
          </div>
          <div className="flex w-full flex-col items-start gap-y-2">
            <h5 className="w-fit">Issued By</h5>
            <p className=" text-left text-[12px] ">{data.issuer}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Document;
