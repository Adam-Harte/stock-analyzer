export const calculateGrossMarginGrowthRate = (revenue: number, costOfGoodsSold: number): number => {
  return (revenue - costOfGoodsSold) / revenue * 100;
}
