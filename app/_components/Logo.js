import Image from "next/image";
import Link from "next/link";

const Logo = ({ width = 24, fontSize = 24, gap }) => {
  const height = (width / 170) * 158;
  return (
    <Link
      href="/"
      className="flex items-center gap-x-5 hover"
      style={{
        gap: gap,
      }}
    >
      <Image src={"/logoEmpty.png"} alt="logo" width={width} height={height} />
      <h5
        style={{
          fontSize: fontSize,
        }}
        id="logo"
      >
        block
      </h5>
    </Link>
  );
};

export default Logo;
