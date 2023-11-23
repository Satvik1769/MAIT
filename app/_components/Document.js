"use client";
import Image from "next/image";

const dummyData = [
  {
    issuer: "Aadhar, unique identification authority of india",
    type: "Adhaar Card",
    logo: "/adhaar.png",
    id: "XXXX XXXX 1234",
  },
  {
    issuer: "Aadhar, unique identification authority of india",
    type: "Pan Card",
    logo: "/pan.png",
    id: "",
  },
];
const Document = ({ document }) => {
  const data = dummyData[0];
  //   const tp = document?.type?.toLowerCase();
  //   let data;
  //   if (document && tp == "aadhar" && tp == "pan") {
  //     data = dummyData.filter((d) => d.type.split(0).toLowerCase() == tp);
  //     data = data.length > 0 && data[0];
  //   }
  //   if (!data) {
  //     return <h3>Not Found</h3>;
  //   }
  return (
    <div className="flex items-center justify-center outerCard">
      <div className="innerCard">
        <div className="mt-4">
          <div className="flex justify-between w-full">
            <div className="flex flex-col items-start gap-y-2">
              <h5 className="text-xl font-bold text-gray-900 dark:text-black">
                {data.type}
              </h5>
              <p className="">{data.id}</p>
            </div>
            <Image src={data.logo} alt={data.type} width={45} height={30} />
          </div>

          <p className="text-gray-700 dark:text-gray-400 mt-4">Issued By</p>

          <p className="text-gray-700 dark:text-black-400">{data.issuer}</p>
        </div>
      </div>
    </div>
  );
};

export default Document;
