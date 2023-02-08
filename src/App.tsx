import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import { GlobalStyles } from "./styles/global"
import { Input } from "./design-system/input/index"
import { useState } from "react"
import { Form } from "./design-system/input/input.styled"
import { ContainerInput } from "./design-system/container-input"

// const [inputUser, setInputUser] = useState("")

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ContainerInput></ContainerInput>
    </ThemeProvider>
  )
}

export default App
