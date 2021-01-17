const PUBLIC_KEY = process.env.REACT_APP_ALPHAVANTAGE_API_KEY;

const baseUrl = 'https://www.alphavantage.co';

const auth = `&apikey=${PUBLIC_KEY}`;

const getRequestUrl = (type: string, ticker: string): string => `${baseUrl}/query?function=${type}&symbol=${ticker}${auth}`;

export const getResponseData = async(type: string, ticker: string) => {
  const response = await fetch(getRequestUrl(type, ticker));
  const data = await response.json();

  return data;
}
