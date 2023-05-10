import { Children } from 'react';
import * as Styled from './tabContainer';

export function TabContainer({ value, children, onChange }: TabContainerProps) {
  const handleSelect = (index: number) => {
    onChange(index);
  };
  return (
    <div>
      {Children.map(children, (tab, index) => (
        <Styled.container
          key={index}
          onClick={() => {
            handleSelect(index);
          }}
        >
          {tab}
        </Styled.container>
      ))}
    </div>
  );
}
// {children.map((tab, index) => <div
//   onClick={() => {
//     handleSelect(index);
//   }}
// >
//   {tab}
// </div>)}
// 1. Implement logic to validate style through index === value
// 2. Separate TabContainer in another folder
