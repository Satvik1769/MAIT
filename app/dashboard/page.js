import Dashboard from "../_components/Dashboard";
import LeftMenu from "../_components/LeftMenu";

const page = () => {
  return (
    <>
      <div className="flex">
        <LeftMenu />
        <Dashboard />
      </div>
    </>
  );
};

export default page;
