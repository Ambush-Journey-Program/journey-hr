import userEvent from '@testing-library/user-event';
import { TextArea } from './text-area';
import { render, screen, act } from '@/tests/renderWithProviders';

describe('<TextArea />', () => {
  it('renders the Text Area', () => {
    render(
      <TextArea
        rows={3}
        minLength={3}
        spellCheck
        placeholder="placeholder"
        label={''}
      />,
    );
    const inputEl = screen.getByPlaceholderText('placeholder');
    expect(inputEl).toBeInTheDocument();
  });

  it('has a placeholder value', () => {
    render(
      <TextArea
        rows={3}
        minLength={3}
        spellCheck
        placeholder="placeholder"
        label={''}
      />,
    );

    const inputEl = screen.getByPlaceholderText('placeholder');
    expect(inputEl).toBeInTheDocument();
  });

  it('renders the error message', () => {
    render(
      <TextArea
        rows={3}
        minLength={3}
        touched
        spellCheck
        placeholder="placeholder"
        label={''}
      />,
    );
    const inputEl = screen.getByText('Description Required');
    expect(inputEl).toBeInTheDocument();
  });

  it.only('has a required message when the component is touched and no value is provided', async () => {
    render(
      <TextArea
        rows={3}
        required
        minLength={3}
        spellCheck
        placeholder="placeholder"
        label={''}
      />,
    );

    const inputEl = await screen.findByPlaceholderText('placeholder');
    expect(inputEl).toBeRequired();

    userEvent.type(inputEl, 'A');
    userEvent.type(inputEl, '{Backspace}');

    await new Promise((resolve) => { 
      window.setTimeout(resolve, 0)
    });
    expect(screen.getByText('Description Required')).toBeInTheDocument();
  });

  it('does not have a required label when the component is optional', () => {
    render(
      <TextArea
        rows={3}
        minLength={3}
        spellCheck
        placeholder="placeholder"
        label={''}
      />,
    );

    const inputEl = screen.getByPlaceholderText('placeholder');
    expect(inputEl).toBeInTheDocument();

    const msgError = screen.queryByText('Required');
    expect(msgError).toBeNull();
  });

  it('has a message declaring that the minimum length of characters are required', async () => {
    render(
      <TextArea
        rows={3}
        required
        minLength={3}
        label={''}
        spellCheck
        placeholder="placeholder"
      />,
    );

    const inputEl = screen.getByPlaceholderText('placeholder');
    expect(inputEl).toBeRequired();

    act(() => {
      userEvent.type(inputEl, 'AB');
      userEvent.type(inputEl, '{Backspace}');
    })

    const msgError = screen.getByText('Minimal length must be greater than 3');
    expect(msgError).toBeInTheDocument();
  });
});
