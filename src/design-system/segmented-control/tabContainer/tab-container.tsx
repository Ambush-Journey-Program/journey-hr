import { Children } from 'react';
import { TabContainerProps } from './types';
import * as Styled from './tab-container.styled';

export function TabContainer({ value, children, onChange }: TabContainerProps) {
  const handleSelect = (index: number) => {
    onChange(index);
  };
  return (
    <Styled.Wrapper>
      {Children.map(children, (tab, index) => (
        <div
          key={index}
          onClick={() => {
            handleSelect(index);
          }}
        >
          {tab}
          {value === index && <Styled.Underline />}
        </div>
      ))}
    </Styled.Wrapper>
  );
}
