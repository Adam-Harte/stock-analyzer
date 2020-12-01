import React, { useState } from 'react';

import { StockContext } from '../../Context/StockContext';

const API_KEY = process.env.REACT_APP_ALPHAVANTAGE_API_KEY;

export const StockSearch: React.FC = () => {
  const [ticker, setTicker] = useState<string>('');
  const [overview, setOverview] = useState<{ [key: string]: any } | null>(null);
  const [balanceSheet, setBalanceSheet] = useState<{ [key: string]: any } | null>(null);
  const [incomeStatement, setIncomeStatement] = useState<{ [key: string]: any } | null>(null);
  const [cashFlow, setCashFlow] = useState<{ [key: string]: any } | null>(null);
  const [earnings, setEarnings] = useState<{ [key: string]: any } | null>(null);

  const getData = async(url: string, cb: (data: { [key: string]: any }) => void) => {
    const response = await fetch(url);
    const data = await response.json();

    cb(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTicker(e.currentTarget.value);
  };

  const handleClick = (): void => {
    getData(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${value}&apikey=${API_KEY}`, setOverview);
    getData(`https://www.alphavantage.co/query?function==BALANCE_SHEET&symbol=${value}&apikey=${API_KEY}`, setBalanceSheet);
    getData(`https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${value}&apikey=${API_KEY}`, setIncomeStatement);
    getData(`https://www.alphavantage.co/query?function=CASH_FLOW&symbol=${value}&apikey=${API_KEY}`, setCashFlow);
    getData(`https://www.alphavantage.co/query?function=EARNINGS&symbol=${value}&apikey=${API_KEY}`, setEarnings);
  };

  return (
    <StockContext.Provider value={{
      overview,
      balanceSheet,
      incomeStatement,
      cashFlow,
      earnings,
    }}>
      <div>
        <label htmlFor="stockInput">Get Stock key ratios</label>
        <input
          type="text"
          name="stockInput"
          id="stockInput"
          prefix="Ticker"
          onChange={handleChange}
          value={ticker}
        />
        <button type="button" onClick={handleClick}>Get ratios</button>
      </div>
    </StockContext.Provider>
  );
};
