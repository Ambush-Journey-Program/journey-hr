import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import { GlobalStyles } from "./styles/global"
import { Button } from "./design-system/button"
import { Input } from "./design-system/input/input"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button
        onClick={() => {
          console.log("teste")
        }}
        disabled
      >
        Label
      </Button>
      <Input label={"Title"}></Input>
    </ThemeProvider>
  )
}

export default App
