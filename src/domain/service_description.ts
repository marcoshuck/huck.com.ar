export interface ServiceDescription {
  title: string;
  description: string;
  amount: number;
  currency: string;
  type: 'session' | 'pack' | 'month';
}
