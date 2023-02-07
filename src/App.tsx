import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import { GlobalStyles } from "./styles/global"
import { Input } from "./design-system/input/index"
import { useState } from "react"
import { Form } from "./design-system/input/input.styled"

// const [inputUser, setInputUser] = useState("")

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Form>
        <Input
          label="Title"
          placeholder="Label"
          type="text"
          onChange={() => console.log("AQUI")}
        />
        <Input
          variant="old"
          label="Title"
          placeholder="Label"
          type="text"
          onChange={() => console.log("AQUI")}
        />
      </Form>
    </ThemeProvider>
  )
}

export default App
