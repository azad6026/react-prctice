const INTEGER_FORMATTER = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 0,
});
export const formatOperand = (operand: string) => {
  if (operand === "" || operand === null) return;
  const [integer, decimal] = operand.split(".");
  if (decimal === undefined) return INTEGER_FORMATTER.format(Number(integer));
  return `${INTEGER_FORMATTER.format(Number(integer))}.${decimal}`;
};
