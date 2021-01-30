import React from 'react';

interface StockContextTypes {
  overview: { [key: string]: any } | null,
  balanceSheet: { [key: string]: any } | null,
  incomeStatement: { [key: string]: any } | null,
  cashFlow: { [key: string]: any } | null,
  earnings: { [key: string]: any } | null,
}

export const StockContext = React.createContext<StockContextTypes>({
  overview: null,
  balanceSheet: null,
  incomeStatement: null,
  cashFlow: null,
  earnings: null,
});
