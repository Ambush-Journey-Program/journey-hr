import * as React from 'react'

import { render, screen } from '@testing-library/react'



import { Button } from '..'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../styles/theme'

describe('<Button />', () => {
  test('Renders correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>Label</Button>
      </ThemeProvider>
    );

    expect(screen.getByText(`Label`)).toBeInTheDocument()
  })
})
