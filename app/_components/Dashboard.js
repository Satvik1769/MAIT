import Image from "next/image";
import HeaderDash from "./HeaderDash";
import SearchBar from "./SearchBar";

const Dashboard = () => {
  return (
    <section className="w-full h-fit flex flex-col gap-y-7 pb-7 pt-16 pl-[270px]">
      <HeaderDash
        heading="Dashboard"
        src="/dashboard.png"
        alt="dashboard"
        height={60}
        width={133}
      />
      <SearchBar />
      <section className="full p-0 fccc ">
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
          no docs here
        </h3>
      </section>
    </section>
  );
};

export default Dashboard;
