import { Button } from '@/design-system';
import { devices } from '@/styles/devices';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  gap: 27px;
  padding: 24px;
  margin: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.contrasts.lightContrast};

  @media ${devices.mobile} {
    padding: 20px;
  }
  @media ${devices.tablet} {
    gap: 48px;
  }
  @media ${devices.tabletLarge} {
    gap: 32px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 21px;
  @media ${devices.mobile} {
    flex-direction: column;
    align-items: start;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 0;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const BalanceDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 42px;

  @media ${devices.mobile} {
    span {
      display: none;
    }

    gap: 24px;
  }
  @media ${devices.mobile} {
    gap: 24px;
  }
`;

export const VeticalLine = styled.hr`
  display: block;
  border: 1px solid ${(props) => props.theme.color.contrasts.lowestContrast};

  margin-bottom: 0;
  padding-bottom: 0;
`;
export const btn = styled(Button)`
  align-items: center;
  width: 160px;
  height: 40px;
  @media ${devices.mobile} {
    width: 100%;
  }
`;
