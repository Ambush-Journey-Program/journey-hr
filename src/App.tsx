import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import { GlobalStyles } from "./styles/global"
import { Input } from "./design-system/input/input"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Input label="Title" />
    </ThemeProvider>
  )
}

export default App
