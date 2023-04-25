import { Button } from '@/design-system/button/button';
import { devices } from '@/styles/devices';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

type UserVariants = {
  [key: string]: FlattenSimpleInterpolation;
};

type Tooltip = {
  variant: 'employee' | 'manager';
};

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

export const UlWrapper = styled.ul`
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

const User: UserVariants = {
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

export const PeriodContainer = styled.div<Tooltip>`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media ${devices.mobile} {
    gap: 6px;
  }

  ${({ variant }) => User[variant]}
`;
export const Divider = styled.span`
  display: none;
  @media ${devices.mobile} {
    display: block;
    margin: 2px;
    height: 1px;
    width: 100%;
    background-color: ${(props) => props.theme.color.contrasts.lowestContrast};
  }
`;

export const ListComponent = styled.li`
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
  &:last-of-type .divider {
    display: none;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 9px;
`;

export const IconButton = styled(Button)`
  padding: 6px;
`;
