import { Title, Subtitle, Tooltip, Button } from '@ambush/ui';
import { SummaryProps } from './types';
import * as Styled from './summary.styled';

// import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import * as Icons from '@heroicons/react/24/outline';

const requestTimeOffmock = [
  {
    id: `1`,
    period: 'Nov 01 Wed - Nov 15 Wed , 2023',
    summary: '06 Recharge Days, 1 US Holidays, 1 Optional Holidays',
  },
  {
    id: `2`,
    period: 'Jan 01 Mon - Jan 15 Mon, 2024',
    summary: '06 Recharge Days, 6 US Holidays, 4 Optional Holidays',
  },
];

export function Summary({ onDelete, onEdit, variant }: SummaryProps) {
  return (
    <Styled.SummaryWrapper data-testid="summary">
      <Title variant="h6">Request Summary</Title>
      <Styled.UlWrapper>
        {requestTimeOffmock.map((requestTimeOff) => (
          <Styled.LiWrapper key={requestTimeOff.id}>
            <Styled.DatesContainer>
              <Styled.PeriodContainer variant={variant}>
                <Subtitle variant="s6" fontWeight="medium">
                  {requestTimeOff.period}
                </Subtitle>
                <Tooltip text="You need to request your manager to approve this">
                  <Icons.ExclamationCircleIcon
                    className="alert"
                    data-testid="Alert"
                  />
                </Tooltip>
              </Styled.PeriodContainer>

              <Subtitle variant="s6" fontWeight="hair">
                {requestTimeOff.summary}
              </Subtitle>
            </Styled.DatesContainer>
            <Styled.ButtonsContainer>
              <Button
                color="alternative"
                variant="ghost"
                sizeVariant="large"
                data-testid="Edit"
                onClick={onEdit}
                aria-label="Edit Button"
                icon="PencilIcon"
              />

              <Button
                color="primary"
                variant="ghost"
                sizeVariant="large"
                data-testid="Delete"
                onClick={onDelete}
                aria-label="Delete Button"
                icon="TrashIcon"
              />
            </Styled.ButtonsContainer>
            <Styled.Divider className="divider" />
          </Styled.LiWrapper>
        ))}
      </Styled.UlWrapper>
    </Styled.SummaryWrapper>
  );
}
