export const calculateFcfIntrinsicValue = (freeCashFlowGrowthRate: number, startingFreeCashFlow: number, years: number): number => {
  return startingFreeCashFlow * Math.pow((1 + freeCashFlowGrowthRate), years);
}
