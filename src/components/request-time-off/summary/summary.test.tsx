import { vi } from 'vitest';
import { render, screen } from '@/tests/renderWithProviders';
import { Summary } from '../summary';
import * as mockObject from './mock-response';

describe('<Summary  />', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });
  render(<Summary variant="employee" />);
  it('renders the summary', () => {
    const textTest = screen.getByTestId('summary');
    expect(textTest).toHaveTextContent('Request Summary');
  });

  it('should have a edit button', () => {
    vi.spyOn(mockObject, 'requestTimeOffmock', 'get').mockReturnValue([
      {
        id: `1`,
        period: 'Nov 01 Wed - Nov 15 Wed , 2023',
        summary: '06 Recharge Days, 1 US Holidays, 1 Optional Holidays',
      },
    ]);
    render(<Summary variant="employee" />);
    const summaryButton = screen.getByTestId('Edit');
    expect(summaryButton).toBeInTheDocument();
  });

  it(' should have a delete button', () => {
    vi.spyOn(mockObject, 'requestTimeOffmock', 'get').mockReturnValue([
      {
        id: `1`,
        period: 'Nov 01 Wed - Nov 15 Wed , 2023',
        summary: '06 Recharge Days, 1 US Holidays, 1 Optional Holidays',
      },
    ]);
    render(<Summary variant="employee" />);
    const summaryButton = screen.getByTestId('Delete');
    expect(summaryButton).toBeInTheDocument();
  });

  it('should render a list with two itens', () => {
    vi.spyOn(mockObject, 'requestTimeOffmock', 'get').mockReturnValue([
      {
        id: `1`,
        period: 'Nov 01 Wed - Nov 15 Wed , 2023',
        summary: '06 Recharge Days, 1 US Holidays, 1 Optional Holidays',
      },
      {
        id: `2`,
        period: 'Nov 01 Wed - Nov 15 Wed , 2023',
        summary: '06 Recharge Days, 1 US Holidays, 1 Optional Holidays',
      },
    ]);
    render(<Summary variant="employee" />);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(2);
  });
});
