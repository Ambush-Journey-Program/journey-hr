export type ParagraphType =
  | 'giant'
  | 'extralarge'
  | 'large'
  | 'medium'
  | 'default'
  | 'small'
  | 'extrasmall'
  | 'tiny';

export type TextWeight = 'hair' | 'light' | 'semibold' | 'semihair';

export type ColorType =
  | 'red'
  | 'purple'
  | 'yellow'
  | 'dark'
  | 'light'
  | 'error';

export type ParagraphProps = {
  children: React.ReactNode;
  size: ParagraphType;
  fontWeight: TextWeight;
  colorVariant?: ColorType;
};

type WithOptionalProperty<
  Type,
  TypeRequired extends keyof Type,
> = Partial<Type> & Required<Pick<Type, TypeRequired>>;

type RequiredProps = 'colorVariant' | 'fontWeight' | 'size';

export type ParagraphStyleProps = WithOptionalProperty<
  ParagraphProps,
  RequiredProps
>;
