import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { ScheduleCard } from './design-system/schedule-card';
import { Interviews } from './design-system/schedule-card/types';

const interviews: Interviews[] = [
  {
    interviewList: [
      {
        title: `UX Interview`,
        interviewerName: `Robson Lopes`,
        interviewTime: '10:15 - 10:45',
      },
      {
        title: `UI Interview`,
        interviewerName: `Henrique Bittencourt`,
        interviewTime: '10:45 - 11:30',
      },
    ],
  },
  {
    interviewList: [
      {
        title: `UX Interview`,
        interviewerName: `Robson Lopes`,
        interviewTime: '10:15 - 10:45',
      },
      {
        title: `UI Interview`,
        interviewerName: `Henrique Bittencourt`,
        interviewTime: '10:45 - 11:30',
      },
    ],
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ScheduleCard interviews={interviews} />
    </ThemeProvider>
  );
}
export default App;
