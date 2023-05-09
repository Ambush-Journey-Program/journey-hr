import { Paragraphs, Badge, Button } from '@/design-system';
import * as Styled from './search-row-styled';

export function SearchRow({ employee }: any) {
  return (
    <Styled.DisplayResultsSearch>
      <Styled.employeeInfo>
        <Styled.SingleUserIcon />
        <Styled.ProfileBox data-testid="listTest">
          <Paragraphs size="medium" fontWeight="semibold">
            {employee.name}
          </Paragraphs>
          <Badge text={employee.team} />
        </Styled.ProfileBox>
      </Styled.employeeInfo>
      <Button variant="ghost" color="primary" icon="ChevronRightIcon" />
    </Styled.DisplayResultsSearch>
  );
}
