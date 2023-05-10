import React, { Children } from 'react';
import * as Styled from './segmented-control.styled';
import { Tab } from './tab';
import { SegmentedControlProps } from './types';
import { TabContainer } from './tabContainer';

export function SegmentedControl({ selected }: SegmentedControlProps) {
  const [value, setValue] = React.useState(0);
  const handleChange = (index: number) => {
    console.log('handle change: ', index);
    setValue(index);
    selected = true;
  };

  return (
    <TabContainer
      value={value}
      onChange={handleChange}
      aria-label="nav tabs example"
    >
      <Tab
        selected={selected}
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
