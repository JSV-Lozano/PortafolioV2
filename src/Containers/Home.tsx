import { Card } from "@Components/Card";
import { Menu } from "@Components/Menu";

function Home(): JSX.Element {
  return (
    <section className="absolute top-0 w-full h-full">
      <div className="w-full h-full flex flex-col xl:flex-row justify-center items-center xl:gap-9">
        <Card />
        <Menu />
      </div>
    </section>
  );
}

export { Home };
