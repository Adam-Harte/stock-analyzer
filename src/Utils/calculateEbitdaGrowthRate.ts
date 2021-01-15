export const calculateEbitdaGrowthRate = (currentEbitda: number, priorEbitda: number): number => {
  return (currentEbitda - priorEbitda) / priorEbitda * 100;
}
