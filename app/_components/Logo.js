import Image from "next/image";
import Link from "next/link";

const Logo = ({ width = 24, fontSize = 24, gap }) => {
  const height = (width / 170) * 158;
  return (
    <Link
      href="/"
      id="logo"
      className="flex items-center gap-x-5 hover"
      style={{
        gap: gap,
      }}
    >
      <Image
        src={"/logoEmpty.png"}
        alt="logo"
        priority={true}
        width={width}
        height={height}
      />
      <h6
        style={{
          fontSize: fontSize,
        }}
      >
        block
      </h6>
    </Link>
  );
};

export default Logo;
