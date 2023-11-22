import Logo from "./Logo";
import ButtonLogin from "./buttons/ButtonLogin";

const Header = ({ bottomBorder = true, bg = false }) => {
  return (
    <div
      className={`flex justify-between items-center w-full py-5 px-7 ${
        bg ? "headerWhiteBg" : ""
      }`}
      style={{
        borderBottom: bottomBorder ? "1px solid var(--border)" : "none",
      }}
    >
      <Logo gap={5} />
      <ButtonLogin />
    </div>
  );
};

export default Header;
