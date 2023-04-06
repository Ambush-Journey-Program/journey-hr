import { describe, expect } from 'vitest';

import { render, screen } from '@/tests/renderWithProviders';

import { Modal } from './modal';
import userEvent from '@testing-library/user-event';

describe('<Modal />', () => {
  it('renders the Modal component', async () => {
    const test = 'Hello';
    render(
      <Modal
        title="Are you sure?"
        onClose={vi.fn()}
        onConfirm={vi.fn()}
        isOpen={true}
        cancelButtonText="No, Edit Event"
        confirmButtonText="Yes, it`s done"
      >
        {test}
      </Modal>,
    );

    const modalEl = screen.getByTestId('modal');
    expect(modalEl).toBeInTheDocument();
  });

  it('call`s back the cancel button', async () => {
    const onCancelMock = vi.fn();
    const test = 'Hello';
    render(
      <Modal
        title="Are you sure?"
        onClose={onCancelMock}
        onConfirm={onCancelMock}
        isOpen={true}
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
    const onConfirmMock = vi.fn();
    const test = 'Hello';
    render(
      <Modal
        title="Are you sure?"
        onClose={onConfirmMock}
        onConfirm={onConfirmMock}
        isOpen={true}
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

  it('call`s back the Close button', async () => {
    const onCloseMock = vi.fn();
    const test = 'Hello';
    render(
      <Modal
        title="Are you sure?"
        onClose={onCloseMock}
        onConfirm={onCloseMock}
        isOpen={true}
        cancelButtonText="No, Edit Event"
        confirmButtonText="Yes, it`s done"
      >
        {test}
      </Modal>,
    );

    await userEvent.click(screen.getByTestId('CloseButton'));

    expect(onCloseMock).toHaveBeenCalled();
  });
});
