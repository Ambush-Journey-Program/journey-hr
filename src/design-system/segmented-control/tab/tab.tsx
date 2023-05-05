import { TabProps } from './types';
import * as Styled from './tab.styled';
import * as Icons from '@heroicons/react/24/solid';
import { Paragraphs } from '@/design-system';

export function Tab({
  label,
  fontWeight = 'light',
  labelSize = 'default',
  icon,
  href,
}: TabProps) {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();
  };
  const TheIcon = icon && Icons[icon];
  const linkIcon = TheIcon && <TheIcon data-testid="button-icon" />;
  return (
    <Styled.Tab href={href} onClick={handleClick}>
      <Paragraphs size={labelSize} fontWeight={fontWeight}>
        {linkIcon}
        {label}
      </Paragraphs>
    </Styled.Tab>
  );
}
