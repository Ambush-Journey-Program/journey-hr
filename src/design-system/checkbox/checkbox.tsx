import { CheckboxProps } from './types';
import * as Styled from './checkbox.styled';
import { Paragraphs, Subtitle } from '../typography';
import { generateSizeList } from './constants';

export function CheckBox({ onChange, isChecked, disabled }: CheckboxProps) {
  const sizeList = generateSizeList();

  return (
    <>
      {sizeList.map((list) => (
        <Styled.Wrapper>
          <Styled.CheckBox
            onChange={onChange}
            type="checkbox"
            checked={isChecked}
            disabled={disabled}
          />
          <Styled.Label>
            <Subtitle variant={'s6'}>{list.label}</Subtitle>

            <Paragraphs
              children={list.description}
              size={'small'}
              fontWeight={'hair'}
            />
          </Styled.Label>
        </Styled.Wrapper>
      ))}
    </>
  );
}
