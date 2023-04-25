import { Title, Subtitle, Button, Tooltip } from '@ambush/ui';
import { SummaryProps } from './types';
import * as Styled from './summary.styled';
import { ReactComponent as AlertIcon } from './Icons/signalIcon.svg';
import { ReactComponent as TrashIcon } from './Icons/trashIcon.svg';
import { ReactComponent as EditIcon } from './Icons/editIcon.svg';

export function Summary({ onDelete, onEdit }: SummaryProps) {
  return (
    <Styled.Wrapper data-testid="summary">
      <Title variant="h6">Request Summary</Title>
      <Styled.SummaryWrapper>
        <Styled.ListComponent>
          <Styled.DatesContainer>
            <Styled.PeriodContainer>
              <Subtitle variant="s6" fontWeight="medium">
                Nov 01 Wed - Nov 30 Thu, 2023
              </Subtitle>
              <Tooltip
                text={'You need to request your manager to approve this'}
              >
                <AlertIcon />
              </Tooltip>
            </Styled.PeriodContainer>

            <Subtitle variant="s6" fontWeight="hair">
              {'06 Recharge Days, 1 US Holidays, 1 Optional Holidays'}
            </Subtitle>
          </Styled.DatesContainer>
          <Styled.ButtonsContainer>
            <Button
              color="secondary"
              variant="ghost"
              sizeVariant="large"
              data-testid="Edit"
              onClick={onEdit}
              aria-label="Edit Button"
            >
              <EditIcon />
            </Button>

            <Button
              color="primary"
              variant="ghost"
              sizeVariant="large"
              data-testid="Delete"
              onClick={onDelete}
              aria-label="Delete Button"
            >
              <TrashIcon />
            </Button>
          </Styled.ButtonsContainer>
        </Styled.ListComponent>
      </Styled.SummaryWrapper>
    </Styled.Wrapper>
  );
}
