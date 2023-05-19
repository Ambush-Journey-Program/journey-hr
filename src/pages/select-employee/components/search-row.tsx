import { Paragraph, Badge, Button } from '@/design-system';
import * as Styled from './search-row-styled';

export function SearchRow({ employee }: any) {
  return (
    <Styled.DisplayResultsSearch>
      <Styled.employeeInfo>
        <Styled.SingleUserIcon />
        <Styled.ProfileBox data-testid="listTest">
          <Paragraph size="medium" fontWeight="semibold">
            {employee.name}
          </Paragraph>
          <Badge text={employee.team} />
        </Styled.ProfileBox>
      </Styled.employeeInfo>
      <Button
        variant="ghost"
        color="primary"
        icon="ChevronRightIcon"
        aria-label="Select Employee Button"
      />
    </Styled.DisplayResultsSearch>
  );
}
