import { render, screen } from '@/tests/renderWithProviders';
import { Modal } from '@ambush/ui';
import userEvent from '@testing-library/user-event';

describe('<Modal />', () => {
  it('renders the Modal component', async () => {
    const test = 'Hello';
    render(
      <Modal
        onConfirm={jest.fn()}
        onClose={jest.fn()}
        title="teste"
        cancelButtonText="teste3"
        confirmButtonText="teste4"
      >
        {test}
      </Modal>,
    );

    const modalEl = screen.getByRole('dialog');
    expect(modalEl).toBeInTheDocument();
  });

  it('call`s back the cancel button', async () => {
    const onCancelMock = jest.fn();
    const test = 'Hello';
    render(
      <Modal
        title="Are you sure?"
        onClose={onCancelMock}
        onConfirm={onCancelMock}
        cancelButtonText="No, Edit Event"
        confirmButtonText="Yes, it`s done"
      >
        {test}
      </Modal>,
    );

    await userEvent.click(
      screen.getByRole('button', { name: 'No, Edit Event' }),
    );
    expect(onCancelMock).toHaveBeenCalled();
  });

  it('call`s back the confirm button', async () => {
    const onConfirmMock = jest.fn();
    const test = 'Hello';
    render(
      <Modal
        title="Are you sure?"
        onClose={onConfirmMock}
        onConfirm={onConfirmMock}
        cancelButtonText="No, Edit Event"
        confirmButtonText="Yes, it`s done"
      >
        {test}
      </Modal>,
    );

    await userEvent.click(
      screen.getByRole('button', { name: 'Yes, it`s done' }),
    );
    expect(onConfirmMock).toHaveBeenCalled();
  });

  it('call`s back the Close Button', async () => {
    const onConfirmMock = jest.fn();
    const test = 'Hello';
    render(
      <Modal
        title="Are you sure?"
        onClose={onConfirmMock}
        onConfirm={onConfirmMock}
        cancelButtonText="No, Edit Event"
        confirmButtonText="Yes, it`s done"
      >
        {test}
      </Modal>,
    );

    await userEvent.click(screen.getByRole('button', { name: 'Close Button' }));
    expect(onConfirmMock).toHaveBeenCalled();
  });
});
