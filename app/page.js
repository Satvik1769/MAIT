import ButtonHome from "./_components/ButtonHome";
import GridBg from "./_components/GridBg";
import Header from "./_components/Header";

export default function Home() {
  return (
    <div className="max-w-[1300px] fcc homeWhiteBg mb-20" style={{}}>
      <Header bottomBorder={false} />
      <GridBg />
      <section className="flex full">
        <p className="flex-1 py-12 px-10 text-left">
          Bringing the same trusted approach to secure, government-authenticated
          documents, but now with a new twist—blockchain technology. Our mission
          is to uphold the familiar reliability you've come to expect, infused
          with the power and innovation of blockchain.
        </p>
        <div
          className="w-full flex-1 fccc px-10"
          style={{
            borderLeft: "1px solid var(--border)",
          }}
        >
          <ButtonHome />
        </div>
      </section>
    </div>
  );
}
