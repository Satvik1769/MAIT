import Header from "../_components/Header";
import LeftMenu from "../_components/LeftMenu";

const layout = ({ children }) => {
  return (
    <>
      <Header bg={true} />
      <div className="flex justify-between full">
        <LeftMenu />
        {children}
      </div>
    </>
  );
};

export default layout;
