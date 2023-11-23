import Link from "next/link";

const dummyData = [
  {
    icon: <></>,
    title: "Dashboard",
    href: "/u/dashboard",
  },
  {
    icon: <></>,
    title: "My Issued Documents",
    href: "/u/mydocs",
  },
];
const LeftMenu = () => {
  return (
    <div
      className="md:w-[240px] pt-[107px] pr-3 leftMenuBg"
      style={{
        position: "fixed",
        top: 0,
        zIndex: 0,
        left: 0,
        height: "100vh",
        overflowY: "scroll",
        paddingInlineStart: "28px",
      }}
    >
      {dummyData.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className="flex w-full px-2 items-center gap-x-3 py-3 cursor-pointer hover:bg-[#f2f2f220] rounded-md"
        >
          {item.icon}
          <h3
            className="font-semibold"
            color="var(--text)"
            style={{
              fontSize: "14px",
              lineHeight: "17px",
            }}
          >
            {item.title}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default LeftMenu;
