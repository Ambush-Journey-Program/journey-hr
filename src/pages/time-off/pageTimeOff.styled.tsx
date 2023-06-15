import styled from 'styled-components';

export const TimeOffPageHeaderWrapper = styled.div`
  margin-bottom: 3rem;
`;

export const TimeOffPageTitle = styled.div``;

export const TimeOffPageDaysListsGrid = styled.div`
  display: grid;
  grid-template-areas:
    'Grid1 Grid2'
    'Grid3 Grid3';
  grid-gap: 6.875rem 3rem;
`;

export const GridContainer1 = styled.div`
  grid-area: Grid1;
`;

export const GridContainer2 = styled.div`
  grid-area: Grid2;
`;

export const GridContainer3 = styled.div`
  grid-area: Grid3;
`;
