import React, { useState } from 'react';

import { getResponseData } from '../../Api/alphaVantageApi';
import { StockContext } from '../../Context/StockContext';

import './StockSearch.css';

export const StockSearch: React.FC = () => {
  const [ticker, setTicker] = useState<string>('');
  const [searchDisabled, setSearchDisabled] = useState<boolean>(false);
  const [overview, setOverview] = useState<{ [key: string]: any } | null>(null);
  const [balanceSheet, setBalanceSheet] = useState<{ [key: string]: any } | null>(null);
  const [incomeStatement, setIncomeStatement] = useState<{ [key: string]: any } | null>(null);
  const [cashFlow, setCashFlow] = useState<{ [key: string]: any } | null>(null);
  const [earnings, setEarnings] = useState<{ [key: string]: any } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTicker(e.currentTarget.value);
  };

  const handleClick = async (): Promise<any> => {
    setSearchDisabled(true);
    const overviewData = await getResponseData('OVERVIEW', ticker.toUpperCase());
    setOverview(overviewData);
    const balanceSheetData = await getResponseData('BALANCE_SHEET', ticker.toUpperCase());
    setBalanceSheet(balanceSheetData);
    const incomeStatementData = await getResponseData('INCOME_STATEMENT', ticker.toUpperCase());
    setIncomeStatement(incomeStatementData);
    const cashFlowData = await getResponseData('CASH_FLOW', ticker.toUpperCase());
    setCashFlow(cashFlowData);
    const earningsData = await getResponseData('EARNINGS', ticker.toUpperCase());
    setEarnings(earningsData);
    setTimeout(() => {
      setSearchDisabled(false);
    }, 6000);
  };

  console.log(overview);
  console.log(cashFlow);

  return (
    <StockContext.Provider value={{
      overview,
      balanceSheet,
      incomeStatement,
      cashFlow,
      earnings,
    }}>
      <div className="stock-search">
        <label htmlFor="stockInput">Get Stock key ratios</label>
        <input
          className="stock-search__input"
          type="text"
          name="stockInput"
          id="stockInput"
          prefix="Enter stock ticker symbol"
          onChange={handleChange}
          value={ticker}
        />
        <button
          className="stock-search__button"
          type="button"
          onClick={handleClick}
          disabled={searchDisabled}
        >
          Get ratios
        </button>
      </div>
    </StockContext.Provider>
  );
};
