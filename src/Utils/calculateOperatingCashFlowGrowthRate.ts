export const calculateOperatingCashFlowGrowthRate = (startOperatingCashFlow: number, endOperatingCashFlow: number): string => ((endOperatingCashFlow - startOperatingCashFlow) / startOperatingCashFlow).toFixed(2);