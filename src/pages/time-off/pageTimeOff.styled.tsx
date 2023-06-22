import styled from 'styled-components';

export const TimeOffPageHeaderWrapper = styled.div`
  margin-bottom: ${(props) => props.theme.spacings.spacing07};
`;

export const TimeOffPageDaysListsGrid = styled.div`
  display: grid;
  grid-template-areas:
    'Grid1 Grid2'
    'Grid3 Grid3';
  grid-column-gap: ${(props) => props.theme.spacings.spacing07};
  grid-row-gap: 6.875rem;
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
