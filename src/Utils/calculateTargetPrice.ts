export const calculateTargetPrice = (intrinsicValue: number, discountPercentage: number, safetyMargin: number, years: number): number => {
  const discountedValue = intrinsicValue / Math.pow((1 + discountPercentage), years);

  return discountedValue - ((discountedValue / 100) * safetyMargin);
}
