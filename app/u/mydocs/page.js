import HeaderDash from "@/app/_components/HeaderDash";

const page = () => {
  return (
    <>
      <section className="w-full h-fit flex flex-col gap-y-7 pb-7 pt-16 pl-[270px]">
        <HeaderDash
          isRow={true}
          heading="My Issued Documents"
          src="/issuedDocs.png"
          alt="issuedDocs"
          height={99}
          width={133}
        />
      </section>
    </>
  );
};

export default page;
