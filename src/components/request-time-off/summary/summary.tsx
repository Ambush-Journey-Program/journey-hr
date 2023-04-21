/* eslint-disable react/no-children-prop */
import { Title, Subtitle, Paragraphs, Button, Tooltip } from '@ambush/ui';
import { SummaryProps } from './types';
import * as Styled from './summary.styled';

export function Summary({ onDelete, onEdit }: SummaryProps) {
  return (
    <Styled.Wrapper data-testid="summary">
      <Title variant="h6">Request Summary</Title>
      <Styled.SummaryWrapper data-testid="Summary">
        {summaryList.map((summaryList, index) => (
          <Styled.ListComponent key={index}>
            <Styled.datesContainer>
              <div>
                <Subtitle variant={'s6'} fontWeight={'medium'}>
                  Nov 01 Wed - Nov 30 Thu, 2023
                </Subtitle>
                <Tooltip
                  text={'You need to request your manager to approve this'}
                >
                  <Styled.AlertIcon />
                </Tooltip>
              </div>

              <Paragraphs size="large" fontWeight="semibold">
                {
                  /* {summaryList.resume} */ '06 Recharge Days, 1 US Holidays, 1 Optional Holidays'
                }
              </Paragraphs>
            </Styled.datesContainer>
            <Styled.buttonsContainer>
              <Button
                icon="PencilIcon"
                color="primary"
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
            </Styled.buttonsContainer>
          </Styled.ListComponent>
        ))}
      </Styled.SummaryWrapper>
    </Styled.Wrapper>
  );
}
