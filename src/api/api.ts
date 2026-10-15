import axios from 'axios';
const apiUrl =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false';

export interface Coin {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
}

const api = axios.create({
  baseURL: apiUrl,
});

export const getData = async () => {
  const { data } = await api.get<Coin[]>('/');
  return data;
};
