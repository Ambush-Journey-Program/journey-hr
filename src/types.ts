export type WithRequiredProperty<T, Key extends keyof T> = T & {
  [Property in Key]-?: T[Property];
};

export type WithOptionalProperty<
  Type,
  TypeRequired extends keyof Type,
> = Partial<Type> & Required<Pick<Type, TypeRequired>>;
