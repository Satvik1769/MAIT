import Image from "next/image";

const HeaderDash = ({
  src = "issuedDocs",
  alt = "issuedDocs",
  heading,
  width,
  isRow = false,
  height,
}) => {
  return (
    <div
      className={`flex gap-7 ${
        isRow ? "flex-row items-center" : "flex-col items-start"
      } `}
    >
      <Image src={src} alt={alt} width={width} height={height} />
      <h2>{heading}</h2>
    </div>
  );
};

export default HeaderDash;
