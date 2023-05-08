import React, { Children } from 'react';
import * as Styled from './segmented-control.styled';
import { Tab } from './tab';
import { SegmentedControlProps } from './types';

const TabContainer = ({
  value,
  children,
  onChange,
}: {
  value: number;
  children: React.ReactNode[];
  onChange: (index: number) => void;
}) => {
  const handleSelect = (index: number) => {
    onChange(index);
  };

  // 1. Implement logic to validate style through index === value
  // 2. Separate TabContainer in another folder

  return (
    <>
      {Children.map(children, (tab, index) => (
        <Styled.Container
          key={index}
          onClick={() => {
            handleSelect(index);
          }}
        >
          {tab}
        </Styled.Container>
      ))}
    </>

    // {children.map((tab, index) => <div
    //   onClick={() => {
    //     handleSelect(index);
    //   }}
    // >
    //   {tab}
    // </div>)}
  );
};

export function SegmentedControl({ label, href }: SegmentedControlProps) {
  const [value, setValue] = React.useState(0);
  const handleChange = (index: number) => {
    console.log('handle change: ', index);
    setValue(index);
  };

  return (
    <TabContainer
      value={value}
      onChange={handleChange}
      aria-label="nav tabs example"
    >
      <Tab
        label={'Page 1'}
        icon={'AcademicCapIcon'}
        fontWeight="light"
        labelSize="default"
      />
      <Tab
        label={'Page 2'}
        icon={'AcademicCapIcon'}
        fontWeight="semibold"
        labelSize="small"
      />
      <Tab
        label={'Page 3'}
        icon={'AcademicCapIcon'}
        fontWeight="light"
        labelSize="small"
      />
    </TabContainer>
  );
}
