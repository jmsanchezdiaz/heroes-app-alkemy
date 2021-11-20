import { AuthProvider } from "./authProvider/AuthProvider";
import { HeroesProvider } from "./heroesProvider/HeroesProvider";
import AppRouter from "./router/AppRouter";
import { positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

function App() {
  const options = {
    timeout: 5000,
    position: positions.TOP_CENTER,
  };

  return (
    <AuthProvider>
      <HeroesProvider>
        <AlertProvider template={AlertTemplate} {...options}>
          <AppRouter />
        </AlertProvider>
      </HeroesProvider>
    </AuthProvider>
  );
}

export default App;
