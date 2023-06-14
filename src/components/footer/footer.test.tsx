import * as React from 'react';
import { render, screen } from '@/tests/renderWithProviders';
import { Footer } from '.';

describe('<Footer/>', () => {
  describe('should render described buttons texts', () => {
    render(<Footer variant="request" />);

    it('should exist', () => {
      const textTest = screen.queryByTestId('footer');
      expect(textTest).toBeInTheDocument();
    });

    it('should renders the buttons according to the "request" variant ', () => {
      render(<Footer variant="request" />);
      const fowardButton = screen.queryByText('Request Manager');
      expect(fowardButton).toBeVisible();
      const cancelButton = screen.queryByText('Cancel');
      expect(cancelButton).toBeVisible();
      const confirmationButton = screen.queryByText('Confirm Dates');
      expect(confirmationButton).not.toBeInTheDocument();
    });

    it('should renders the buttons according to the "timeOff" variant ', () => {
      render(<Footer variant="timeOff" />);
      const fowardButton = screen.queryByText('Apply Time Off');
      expect(fowardButton).toBeVisible();
      const cancelButton = screen.queryByText('Cancel');
      expect(cancelButton).toBeVisible();
      const confirmationButton = screen.queryByText('Confirm Dates');
      expect(confirmationButton).not.toBeInTheDocument();
    });

    it('should renders the buttons according to the "confirm" variant ', () => {
      render(<Footer variant="confirm" />);
      const fowardButton = screen.queryByTestId('fowardButton');
      expect(fowardButton).not.toBeInTheDocument();
      const cancelButton = screen.queryByText('Cancel');
      expect(cancelButton).not.toBeInTheDocument();
      const confirmationButton = screen.queryByText('Confirm Dates');
      expect(confirmationButton).toBeVisible();
    });

    it('should renders the buttons according to the "allDone" variant ', () => {
      render(<Footer variant="allDone" />);
      const fowardButton = screen.queryByText('Go to Homepage');
      expect(fowardButton).toBeVisible();
      const cancelButton = screen.queryByText('Cancel');
      expect(cancelButton).not.toBeInTheDocument();
      const confirmationButton = screen.queryByText('Confirm Dates');
      expect(confirmationButton).not.toBeInTheDocument();
    });
  });

  describe('should check if disabled buttons are applied', () => {
    it('should Button Apply and Cancel be disabled', async () => {
      render(<Footer variant="timeOff" disabledLeftBtn={true} disabledRightBtn={true}/>);
      const allDoneBtn = screen.getByText('Apply Time Off')
      const cancelBtn = screen.getByText('Cancel')
      await userEvent.click(allDoneBtn);
      await userEvent.click(cancelBtn);

      expect(allDoneBtn).toBeDisabled();
      expect(cancelBtn).toBeDisabled();
    });
    it('should Button Apply and Cancel be enabled', async () => {
      render(<Footer variant="timeOff"/>);
      const allDoneBtn = screen.getByText('Apply Time Off')
      const cancelBtn = screen.getByText('Cancel')
      await userEvent.click(allDoneBtn);
      await userEvent.click(cancelBtn);

      expect(allDoneBtn).not.toBeDisabled();
      expect(cancelBtn).not.toBeDisabled();
    });

    it('should the Button Apply be disabled and button Cancel be enabled', async () => {
      render(<Footer variant="timeOff" disabledLeftBtn={false} disabledRightBtn={true} />);
      const allDoneBtn = screen.getByText('Apply Time Off')
      const cancelBtn = screen.getByText('Cancel')
      await userEvent.click(allDoneBtn);
      await userEvent.click(cancelBtn);

      expect(allDoneBtn).toBeDisabled();
      expect(cancelBtn).not.toBeDisabled();
    });
    it('should the Button Apply be enabled and button Cancel be disabled', async () => {
      render(<Footer variant="timeOff" disabledLeftBtn={true} disabledRightBtn={false}/>);
      const allDoneBtn = screen.getByText('Apply Time Off')
      const cancelBtn = screen.getByText('Cancel')
      await userEvent.click(allDoneBtn);
      await userEvent.click(cancelBtn);

      expect(allDoneBtn).not.toBeDisabled();
      expect(cancelBtn).toBeDisabled();
    });
  });

});
