import React from 'react';
import * as Styled from './segmented-control.styled';
import { Tab } from './tab';
import { SegmentedControlProps } from './types';

export function SegmentedControl({ label, href }: SegmentedControlProps) {
  // const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // setValue(newValue);
  };

  return (
    <Styled.Tabs
      // value={value}
      onChange={handleChange}
      aria-label="nav tabs example"
    >
      <Tab label={'Page 1'} href="/page1"></Tab>
      <Tab label={'Page 2'} href="/page2"></Tab>
      <Tab label={'Page 3'} href="/page3"></Tab>
    </Styled.Tabs>
  );
}
