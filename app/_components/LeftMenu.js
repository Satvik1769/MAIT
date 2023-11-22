const LeftMenu = () => {
  return (
    <div
      className="md:min-w-[200px] leftMenuBg"
      style={{
        position: "fixed",
        top: 0,
        zIndex: -1,
        left: 0,
        maxWidth: "240px",
        width: "100%",
        height: "100vh",
        overflowY: "scroll",
        paddingInlineStart: "28px",
      }}
    ></div>
  );
};

export default LeftMenu;
