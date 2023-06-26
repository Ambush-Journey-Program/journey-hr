import { Button } from '@/design-system';
import { devices } from '@/styles/devices';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  gap: 27px;
  padding: ${(props) => props.theme.spacings.spacing05};
  margin-top: ${(props) => props.theme.spacings.spacing04};
  margin-left: 0;
  margin-right: 0;
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.contrasts.lightContrast};

  @media ${devices.mobile} {
    padding: ${(props) => props.theme.spacings.spacing04};
  }

  @media ${devices.tablet} {
    gap: ${(props) => props.theme.spacings.spacing07};
  }

  @media ${devices.tabletLarge} {
    gap: ${(props) => props.theme.spacings.spacing06};
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.313rem;
  @media ${devices.mobile} {
    flex-direction: column;
    align-items: start;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacings.spacing04};
  margin-bottom: 0;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacings.spacing02};
`;
export const BalanceDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2.625rem;

  @media ${devices.mobile} {
    span {
      display: none;
    }
    gap: ${(props) => props.theme.spacings.spacing05};
  }

  @media ${devices.desktop} {
    display: flex;
  }
`;

export const VeticalLine = styled.hr`
  border: 1px solid ${(props) => props.theme.color.contrasts.lowestContrast};
  margin-bottom: 0;
  padding-bottom: 0;

  @media ${devices.mobile} {
    gap: ${(props) => props.theme.spacings.spacing05};
  }

  @media ${devices.mobile}, ${devices.tablet}, ${devices.tabletLarge} {
    display: none;
  }

  @media ${devices.desktop} {
    display: block;
  }
`;
export const StyledButton = styled(Button)`
  align-items: center;
  width: 10rem;
  height: 2.5rem;
  @media ${devices.mobile} {
    width: 100%;
  }
`;
