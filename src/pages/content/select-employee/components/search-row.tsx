import { Paragraph, Badge, Button, Icon } from '@ambush/ui';
import * as Styled from './search-row-styled';
import { SearchRowProps } from '../types';

export function SearchRow({ employee }: SearchRowProps) {
  return (
    <Styled.DisplayResultsSearch>
      <Styled.employeeInfo>
        <Icon icon="UserIcon" color="lowestContrast" />
        <Styled.ProfileBox data-testid="listTest">
          <Paragraph size="medium" fontWeight="semibold">
            {employee.name}
          </Paragraph>
          <Badge text={employee.team} />
        </Styled.ProfileBox>
      </Styled.employeeInfo>
      <Button type="button" variant="ghost" onClick={() => {}}>
        <Icon icon="ChevronRightIcon" color="red" size='1.5rem'/>
      </Button>
    </Styled.DisplayResultsSearch>
  );
}
