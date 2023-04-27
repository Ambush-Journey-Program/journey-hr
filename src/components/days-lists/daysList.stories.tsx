import { Meta, Story } from '@storybook/react';
import { teamCalendar, holidays, timeOff } from './mockLists';
import { DaysLists } from './daysLists';
import {
  DaysListsProps,
  TimeOffList,
  HolidaysList,
  TeamCalendarList,
} from './types';
import { TimeOffRow } from './daysListsRow/TimeOffRow';
import { HolidayRow } from './daysListsRow/HolidayRow';
import { TeamCalendarRow } from './daysListsRow/TeamCalendarRow';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  component: DaysLists,
  title: 'Components/DaysLists',
  parameters: {
    relatedLinks: {
      sections: [
        {
          title: 'Figma',
          links: [
            {
              text: 'DaysLists ',
              url: 'https://www.figma.com/file/yOF5DjTKrtqxLiP7A5DsOy/Ambush-Atoms?node-id=522%3A270&t=lXp9G2678yes8yDk-1',
              description: 'This is the Figma of Schedule Card',
            },
          ],
        },
      ],
    },
  },
  argTypes: {
    storyType: {
      options: ['holidays', 'timeOff', 'teamCalendar'],
      control: {
        type: `select`,
      },
    },
  },
} as Meta;

const Template: Story<DaysListsProps> = (args) => {
  const { storyType, ...rest } = args;

  if (storyType === 'holidays') {
    return (
      <DaysLists
        {...rest}
        list={holidays}
        renderRow={(details) => (
          <HolidayRow details={details as HolidaysList} />
        )}
      />
    );
  } else if (storyType === 'timeOff') {
    return (
      <DaysLists
        {...rest}
        list={timeOff}
        renderRow={(details) => <TimeOffRow details={details as TimeOffList} />}
      />
    );
  } else if (storyType === 'teamCalendar') {
    return (
      <DaysLists
        {...rest}
        list={teamCalendar}
        renderRow={(details) => (
          <TeamCalendarRow details={details as TeamCalendarList} />
        )}
      />
    );
  }
  return <DaysLists {...args} />;
};

export const DaysListsStory = Template.bind({});
DaysListsStory.args = {
  title: "My Team's Calendar",
  buttonTitle: "View My Team's Calendar",
  list: holidays,
  renderRow: (details) => <HolidayRow details={details as HolidaysList} />,
};
