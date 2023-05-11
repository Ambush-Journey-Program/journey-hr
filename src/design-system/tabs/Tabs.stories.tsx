import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TabContainer } from './tabContainer';
import { Tab } from './tab';
import { TabPanel } from './tabPanel';
import { Tabs } from './tabs';

export default {
  component: Tabs,
  title: 'UI/Tabs',
  parameters: {},
} as Meta;

const Template: Story = (args) => {
  const [value, setTabIndex] = React.useState(0);
  return (
    <>
      <TabContainer value={value} onChange={setTabIndex} aria-label="container">
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
      <TabPanel value={value} index={0}>
        Item one
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </>
  );
};

export const TabsStory = Template.bind({});
