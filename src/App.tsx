import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/global";
import { Button } from "./design-system/button";
import { ContainerInput } from "./design-system/container-input";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ContainerInput></ContainerInput>
    </ThemeProvider>
  );
}

export default App;
