import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./styles";
import RoutesScreen from "./pages/RoutesScreen";
import GlobalSpinner from "./components/GlobalSpinner";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalSpinner />
        <RoutesScreen/>
      </ThemeProvider>
    </div>
  );
}

export default App;
