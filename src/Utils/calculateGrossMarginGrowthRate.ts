export const calculateGrossMarginGrowthRate = (revenue: number, costOfGoodsSold: number): string => ((revenue - costOfGoodsSold) / revenue * 100).toFixed(2);
