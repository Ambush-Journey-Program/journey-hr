/* eslint-disable react/no-children-prop */
import { Title, Subtitle, Paragraphs, Button, Tooltip } from '@ambush/ui';
import { SummaryProps } from './types';
import * as Styled from './summary.styled';

export function Summary({ onDelete, onEdit }: SummaryProps) {
  return (
    <Styled.Wrapper data-testid="summary">
      <Title variant="h6">Request Summary</Title>
      <Styled.SummaryWrapper data-testid="Summary">
        <Styled.ListComponent>
          <Styled.DatesContainer>
            <Styled.PeriodContainer>
              <Subtitle variant="s6" fontWeight="medium">
                Nov 01 Wed - Nov 30 Thu, 2023
              </Subtitle>
              <Tooltip
                text={'You need to request your manager to approve this'}
                children={'a'}
              />
            </Styled.PeriodContainer>

            <Subtitle variant="s6" fontWeight="hair">
              {
                /* {summaryList.resume} */ '06 Recharge Days, 1 US Holidays, 1 Optional Holidays'
              }
            </Subtitle>
          </Styled.DatesContainer>
          <Styled.ButtonsContainer>
            <Button
              icon="PencilIcon"
              color="secondary"
              variant="ghost"
              sizeVariant="large"
              onClick={onEdit}
              aria-label="Edit Button"
            />

            <Button
              icon="TrashIcon"
              color="primary"
              variant="ghost"
              sizeVariant="large"
              onClick={onDelete}
              aria-label="Delete Button"
            />
          </Styled.ButtonsContainer>
        </Styled.ListComponent>
      </Styled.SummaryWrapper>
    </Styled.Wrapper>
  );
}
// {
//   summaryList.map((summaryList, index) => (key = { index }));
// }
