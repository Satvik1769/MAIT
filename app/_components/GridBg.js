import Image from "next/image";

const GridBg = () => {
  return (
    <div className="relative full grid items-end">
      <section className="gridTest">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <h3
          className="pt-2"
          style={{
            height: 30,
            textDecoration: "underline",
            // textDecorationColor: "var(--border)",
          }}
        >
          soch wai, Approach नई
        </h3>
        <h1 className="w-full pt-10 pb-5 px-[21%] text-center">
          The Chain of Trust
          <br />
          Starts with this block
        </h1>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>
      <div className="absolute z-20 self-center justify-self-center bottom-16">
        <Image src={"/logo.png"} alt="logo" width={170} height={158} />
      </div>
    </div>
  );
};

export default GridBg;
