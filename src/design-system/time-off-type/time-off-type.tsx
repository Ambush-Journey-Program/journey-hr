import { RadioButton } from '../radio-button';
import { Paragraphs } from '../typography';
import * as Styled from './time-off-type.styled';

export function TimeOffType() {
  return (
    <Styled.Wrapper>
      <Styled.DivParagraph>
        <Paragraphs size={'medium'} fontWeight={'semibold'}>
          Aplly For
        </Paragraphs>
      </Styled.DivParagraph>
      <RadioButton
        defaultChecked
        value={'paid-time-off'}
        label={'Paid Time Off'}
        name={'time-off'}
      ></RadioButton>
      <RadioButton
        value={'personal-leave'}
        label={'Personal Leave'}
        name={'time-off'}
      ></RadioButton>
    </Styled.Wrapper>
  );
}
