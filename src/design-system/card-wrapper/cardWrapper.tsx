import * as Styled from './cardWrapper.styled';


export type CardProps = {
  children: JSX.Element | string;
};

export default function CardWrapper({ children }: CardProps) {
  return <Styled.Card>{children}</Styled.Card>;
}
