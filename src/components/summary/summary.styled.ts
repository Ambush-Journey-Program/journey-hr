import { devices } from '@/styles/devices';
import styled, { css } from 'styled-components';
import { SummaryProps } from './types';

export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) => props.theme.color.contrasts.lightContrast};
  padding: 2.5rem;
  border-radius: 0.625rem;
  width: 100%;
  max-width: 100%;

  @media ${devices.mobile} {
    padding: ${(props) => props.theme.spacings.spacing05};
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacings.spacing05};
  gap: ${(props) => props.theme.spacings.spacing05};
  width: 100%;
  max-width: 100%;

  @media ${devices.mobile} {
    gap: 0.875rem;
  }
`;

export const DatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 100%;
  gap: 0.375rem;

  @media ${devices.tablet} {
    gap: ${(props) => props.theme.spacings.spacing01};
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
  gap: 0.625rem;

  @media ${devices.mobile} {
    gap: 0.375rem;
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
  gap: 13.25rem;

  @media ${devices.tablet} {
    gap: 7.563rem;
  }

  @media ${devices.mobile} {
    gap: 0.875rem;
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
  gap: 0.375rem;
`;
