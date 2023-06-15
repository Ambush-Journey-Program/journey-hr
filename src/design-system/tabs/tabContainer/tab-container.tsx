import { TabContainerProps } from './types';
import * as Styled from './tab-container.styled';

export function TabContainer({ value, children, onChange }: TabContainerProps) {
  const handleSelect = (index: number) => {
    onChange?.(index);
  };
  return (
    <Styled.Wrapper>
      {children.map((tab, index) => (
        <Styled.buttonTab
          isActive={value === index}
          key={index}
          onClick={() => {
            handleSelect(index);
          }}
        >
          {tab}
          {value === index && <Styled.Underline />}
        </Styled.buttonTab>
      ))}
    </Styled.Wrapper>
  );
}
