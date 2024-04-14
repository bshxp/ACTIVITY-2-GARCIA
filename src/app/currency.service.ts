import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private exchangeRates: { [key: string]: number } = {
    'USD': 1,   
    'EUR': 0.85,  
    
  };

  constructor() { }

  convert(amount: number, from: string, to: string): number {
    if (from === to) {
      return amount; 
    }

    const rateFrom = this.exchangeRates[from];
    const rateTo = this.exchangeRates[to];

    if (rateFrom && rateTo) {
      return (amount / rateFrom) * rateTo; 
    } else {
      throw new Error('Exchange rate not available for selected currencies');
    }
  }
}
