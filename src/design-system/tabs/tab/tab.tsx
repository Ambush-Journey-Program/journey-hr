import { TabProps } from './types';
import * as Styled from './tab.styled';
import * as Icons from '@heroicons/react/24/solid';

export function Tab({
  label,
  fontWeight = 'light',
  labelSize = 'default',
  icon,
}: TabProps) {
  const TheIcon = icon && Icons[icon];
  const linkIcon = TheIcon && <TheIcon data-testid="button-icon" />;
  return (
    <>
      <Styled.Tab>
        <Styled.ParagraphsStyle size={labelSize} fontWeight={fontWeight}>
          {linkIcon}
          {label}
        </Styled.ParagraphsStyle>
      </Styled.Tab>
      {/* {children} */}
    </>
  );
}
