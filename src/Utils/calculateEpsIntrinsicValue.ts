export const calculateEpsIntrinsicValue = (epsGrowthRate: number, eps: number, pe: number, years: number): number => {
  return eps * Math.pow((1 + epsGrowthRate), years) * pe;
}
