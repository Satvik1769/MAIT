import Image from "next/image";

const HeaderDash = ({ src = "issuedDocs", alt = "issuedDocs" }) => {
  return (
    <div className="flex gap-x-30">
      <Image src={src} alt={alt} />
    </div>
  );
};

export default HeaderDash;
