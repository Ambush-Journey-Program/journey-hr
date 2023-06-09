import { render, screen } from '@/tests/renderWithProviders';
import { Label } from './label';

describe('<label />', () => {
  it('Render the Label',() =>  {
    const text = 'Hi';
    render(<Label label={text}/>);

    const labelEL = screen.getByText(text);
    expect(labelEL).toBeInTheDocument();
  });
  it('Render the Required',() => {
    render(<Label required label={'hello world'}/>);

    const labelEL = screen.getByText('Required');
    expect(labelEL).toBeInTheDocument();
  });
});
