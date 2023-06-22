import { Paragraph, Badge, Button } from '@ambush/ui';
import * as Styled from './search-row-styled';
import { SearchRowProps } from '../types';
import { Icon } from '@/design-system/icon/icon';

export function SearchRow({ employee }: SearchRowProps) {
  return (
    <Styled.DisplayResultsSearch>
      <Styled.employeeInfo>
        <Styled.IconUser icon="UserIcon" size="18px" color="lowestContrast" />
        <Styled.ProfileBox data-testid="listTest">
          <Paragraph size="medium" fontWeight="semibold">
            {employee.name}
          </Paragraph>
          <Badge text={employee.team} />
        </Styled.ProfileBox>
      </Styled.employeeInfo>
      <Button type="button" variant="ghost" onClick={() => {}}>
        <Icon icon="ChevronRightIcon" size="16px" color="red" />
      </Button>
    </Styled.DisplayResultsSearch>
  );
}
