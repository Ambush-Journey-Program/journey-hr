const AMOUNT_PEOPLE = 20;
export function generateAmountPeopleOptions() {
  let amountOptions = [];
  for (let index = 8; index <= AMOUNT_PEOPLE; index++) {
    amountOptions.push({
      label: index.toString(),
      value: index.toString(),
    });
  }
  return amountOptions;
}
