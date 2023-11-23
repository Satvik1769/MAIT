import Logo from "./Logo";
import ButtonAuth from "./buttons/ButtonLogin";

const Header = ({ bottomBorder = true, bg = false }) => {
  return (
    <div
      className={`flex justify-between items-center w-full py-5 px-7 z-10 ${
        bg ? "headerWhiteBg" : ""
      }`}
      style={{
        borderBottom: bottomBorder ? "1px solid var(--border)" : "none",
      }}
    >
      <Logo gap={5} />
      <ButtonAuth />
    </div>
  );
};

export default Header;
