import * as React from 'react';
import { render, screen } from '@/tests/renderWithProviders';
import { TabContainer } from '.';
import { Tab } from '../tab/tab';
import { TabPanel } from '../tabPanel';

describe('<TabContainer />', () => {
  describe('should have this render', () => {
    it('should have a Tab', () => {
      render(
        <TabContainer value={0}>
          <Tab label="Page 1" icon="AcademicCapIcon"></Tab>
          <Tab label="Page 2" icon="AcademicCapIcon"></Tab>
        </TabContainer>,
      );
      const container = screen.getByText('Page 1');
      expect(container).toBeInTheDocument();
    });
    it('should have a Children', () => {
      const tabIndex = 0;
      render(
        <>
          <TabContainer value={tabIndex}>
            <Tab label="Page 1" icon="AcademicCapIcon" />
            <Tab label="Page 2" icon="AcademicCapIcon" />
          </TabContainer>
          <TabPanel index={0} value={tabIndex}>
            Children 1
          </TabPanel>
          <TabPanel index={1} value={tabIndex}>
            Children 2
          </TabPanel>
        </>,
      );
      const container = screen.queryByText('Children 1');
      expect(container).toBeInTheDocument();
      const container2 = screen.queryByText('Children 2');
      expect(container2).not.toBeInTheDocument();
    });
    it('should have a Children', () => {
      const tabIndex = 1;
      render(
        <>
          <TabContainer value={tabIndex}>
            <Tab label="Page 1" icon="AcademicCapIcon" />
            <Tab label="Page 2" icon="AcademicCapIcon" />
          </TabContainer>
          <TabPanel index={0} value={tabIndex}>
            Children 1
          </TabPanel>
          <TabPanel index={1} value={tabIndex}>
            Children 2
          </TabPanel>
        </>,
      );
      const container = screen.queryByText('Children 1');
      expect(container).not.toBeInTheDocument();
      const container2 = screen.queryByText('Children 2');
      expect(container2).toBeInTheDocument();
    });
  });
});
