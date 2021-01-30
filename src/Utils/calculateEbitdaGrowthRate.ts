export const calculateEbitdaGrowthRate = (currentEbitda: number, priorEbitda: number): string => ((currentEbitda - priorEbitda) / priorEbitda * 100).toFixed(2);
