import { describe, expect } from 'vitest';

import { render, screen } from '@/tests/renderWithProviders';

import { Modal } from './modal';
import userEvent from '@testing-library/user-event';

describe('<ScheduleCard />', () => {
  it('renders the InterviewTimes', async () => {
    const onClickMock = vi.fn();
    const test = 'Hello';
    render(
      <>
        <Modal
          title="Are you sure?"
          onClose={onClickMock}
          onConfirm={onClickMock}
          isOpen={true}
          cancelButtonText="No, Edit Event"
          confirmButtonText="Yes, it`s done"
        >
          {test}
        </Modal>
      </>,
    );

    const modalEl = screen.getByTestId('modal');
    expect(modalEl).toBeInTheDocument();
  });

  it('renders the InterviewTimes', async () => {
    const onClickMock = vi.fn();
    const test = 'Hello';
    render(
      <>
        <Modal
          title="Are you sure?"
          onClose={onClickMock}
          onConfirm={onClickMock}
          isOpen={true}
          cancelButtonText="No, Edit Event"
          confirmButtonText="Yes, it`s done"
        >
          {test}
        </Modal>
      </>,
    );

    await userEvent.click(screen.getByTestId('CancelButton'));

    expect(onClickMock).toHaveBeenCalled();
  });

  it('renders the InterviewTimes', async () => {
    const onClickMock = vi.fn();
    const test = 'Hello';
    render(
      <>
        <Modal
          title="Are you sure?"
          onClose={onClickMock}
          onConfirm={onClickMock}
          isOpen={true}
          cancelButtonText="No, Edit Event"
          confirmButtonText="Yes, it`s done"
        >
          {test}
        </Modal>
      </>,
    );

    await userEvent.click(screen.getByTestId('ConfirmButton'));

    expect(onClickMock).toHaveBeenCalled();
  });

  it('renders the InterviewTimes', async () => {
    const onClickMock = vi.fn();
    const test = 'Hello';
    render(
      <>
        <Modal
          title="Are you sure?"
          onClose={onClickMock}
          onConfirm={onClickMock}
          isOpen={true}
          cancelButtonText="No, Edit Event"
          confirmButtonText="Yes, it`s done"
        >
          {test}
        </Modal>
      </>,
    );

    await userEvent.click(screen.getByTestId('CloseButton'));

    expect(onClickMock).toHaveBeenCalled();
  });
});
