import * as React from 'react';
import { render, screen } from '@/tests/renderWithProviders';
import userEvent from '@testing-library/user-event';
import { Button } from './button';

describe('<Button />', () => {
  it('renders the simple Button component', () => {
    const label = 'My Button';

    render(<Button disabled>{label}</Button>);

    const buttonEl = screen.getByText(label);
    expect(buttonEl).toBeInTheDocument();
  });

  it('is disabled, when disabled is true', () => {
    render(<Button disabled>My Button</Button>);

    const buttonEl = screen.getByText('My Button');
    expect(buttonEl).toBeDisabled();
    expect(buttonEl).not.toBeEnabled();
  });

  it('calls onClick function when clicked', async () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>My Button</Button>);

    await userEvent.click(screen.getByText('My Button'));

    expect(onClickMock).toHaveBeenCalled();
  });

  it('renders icons', async () => {
    render(<Button icon={'PlusIcon'}>Label</Button>);
    const iconEl = screen.getByTestId('button-icon');
    expect(iconEl).toBeInTheDocument();
  });

  it('Not renders icons', async () => {
    render(<Button>Label</Button>);
    const iconEl = screen.queryByTestId('button-icon');
    expect(iconEl).toBeNull();
  });
});
