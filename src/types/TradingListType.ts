export interface TradingListType {
  pair: string;
  lastPrice: number;
  change: number;
  type: 'host_coins' | 'new_list',
  image: string;
  chartData: number[]
}
