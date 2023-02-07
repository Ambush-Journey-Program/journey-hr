import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import { GlobalStyles } from "./styles/global"
import { Input } from "./design-system/input/index"
import { useState } from "react"

// const [inputUser, setInputUser] = useState("")

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Input
        label="Input 1"
        placeholder="Label 2"
        type="text"
        onChange={() => console.log("AQUI")}
      />
      <Input
        variant="old"
        label="Input 2"
        placeholder="Label 3"
        type="text"
        onChange={() => console.log("AQUI")}
      />
    </ThemeProvider>
  )
}

export default App
