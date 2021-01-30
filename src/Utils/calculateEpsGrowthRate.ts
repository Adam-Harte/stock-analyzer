export const calculateEpsGrowthRate = (startEps: number, endEps: number): string => (((endEps - startEps) / startEps) * 100).toFixed(2);