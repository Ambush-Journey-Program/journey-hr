import { Title, Subtitle, Tooltip, Button } from '@ambush/ui';
import { SummaryProps } from './types';
import * as Styled from './summary.styled';
import * as Icons from '@heroicons/react/24/outline';
import { requestTimeOffmock } from './mock-response';

export function Summary ({ onDelete, onEdit, variant }: SummaryProps) {
  return (
    <Styled.SummaryWrapper data-testid="summary">
      <Title variant="h6">Request Summary</Title>
      <Styled.Ul>
        {requestTimeOffmock.map((requestTimeOff) => (
          <Styled.Li key={requestTimeOff.id}>
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
            <span className="divider"></span>
          </Styled.Li>
        ))}
      </Styled.Ul>
    </Styled.SummaryWrapper>
  );
}
