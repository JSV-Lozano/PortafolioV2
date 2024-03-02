import { Background } from "@Components/Background";
import { Home } from "@Containers/Home";
import { PortafolioProvider } from "@Context/PortafolioContext";

function App(): JSX.Element {
  return (
    <PortafolioProvider>
      <Background />
      <Home />
    </PortafolioProvider>
  );
}

export { App };
