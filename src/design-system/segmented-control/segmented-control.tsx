import React from 'react';
import { Tab } from './tab';
import { TabContainer } from './tabContainer';

export function SegmentedControl() {
  const [value, setValue] = React.useState(0);
  const handleChange = (index: number) => {
    setValue(index);
  };

  return (
    <TabContainer value={value} onChange={handleChange} aria-label="container">
      <Tab
        label="Page 1"
        icon="AcademicCapIcon"
        fontWeight="light"
        labelSize="default"
      />
      <Tab
        label="Page 2"
        icon="AcademicCapIcon"
        fontWeight="light"
        labelSize="default"
      />
      <Tab
        label="Page 3"
        icon="AcademicCapIcon"
        fontWeight="light"
        labelSize="default"
      />
    </TabContainer>
  );
}
