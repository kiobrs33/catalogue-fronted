import { AppProvider } from "./context/AppProvider";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};

export default App;
