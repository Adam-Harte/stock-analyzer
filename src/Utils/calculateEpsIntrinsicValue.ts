export const calculateEpsIntrinsicValue = (equityGrowthRate: number, eps: number, pe: number, years: number): number => {
  return eps * Math.pow((1 + equityGrowthRate), years) * pe;
}
