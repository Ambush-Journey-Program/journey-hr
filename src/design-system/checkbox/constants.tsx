const AMOUNT_CHECK_BOX = 4;
export function generateSizeList() {
  let amountOptions = [];
  for (let index = 1; index <= AMOUNT_CHECK_BOX; index++) {
    amountOptions.push({
      label: 'Label',
      description: 'Description',
    });
  }
  return amountOptions;
}
