import { devices } from '@/styles/devices';
import styled, { css } from 'styled-components';
import { SummaryProps } from './types';

export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) => props.theme.color.contrasts.lightContrast};
  padding: 40px;
  border-radius: 10px;
  width: 100%;
  max-width: 100%;

  @media ${devices.mobile} {
    padding: 24px;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 24px;
  gap: 24px;
  width: 100%;
  max-width: 100%;

  @media ${devices.mobile} {
    gap: 14px;
  }
`;

export const DatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 100%;
  gap: 6px;

  @media ${devices.tablet} {
    gap: 4px;
  }
`;

const User = {
  employee: css`
    div {
      display: block;
    }
  `,

  manager: css`
    div {
      display: none;
    }
  `,
};

export const PeriodContainer = styled.div<SummaryProps>`
  display: flex;
  flex-direction: row;
  gap: 10px;

  @media ${devices.mobile} {
    gap: 6px;
  }

  & .alert {
    width: 1.125rem;
    height: 1.125rem;
    color: ${(props) => props.theme.color.brandColors.red};

    path {
      stroke-width: 0.125rem;
      margin-bottom: 0;
    }
  }

  ${({ variant }) => User[variant]}
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  gap: 212px;

  @media ${devices.tablet} {
    gap: 121px;
  }

  @media ${devices.mobile} {
    gap: 14px;
    flex-direction: column;
    align-items: flex-start;
  }

  .divider {
    margin: 2px;
    height: 0.063rem;
    width: 100%;
    background-color: ${(props) => props.theme.color.contrasts.lowestContrast};
    display: none;

    @media ${devices.mobile} {
      display: block;
    }
  }

  &:last-of-type .divider {
    display: none;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 6px;
`;
