import { Component } from '@angular/core';
import { CurrencyApiService } from '../currency-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  currencies: { label: string; value: string; name: string; rate: number }[] = [];
  amount: number = 0;
  selectedCurrencyFrom: string = 'USD';
  selectedCurrencyTo: string = 'EUR';
  exchangedAmount: number = 0;

  constructor(private currencyService: CurrencyApiService, private router: Router) { }

  ionViewWillEnter() {
    this.fetchCurrencies();
  }

  fetchCurrencies() {
    this.currencyService.getCurrencies().subscribe(
      (data: any) => {
        // Extract currencies from API response and populate the array
        this.currencies = Object.keys(data.rates).map(currency => ({
          label: currency + ' - ' + data.rates[currency],
          value: currency,
          name: currency,
          rate: data.rates[currency]
        }));
      },
      error => {
        console.error('Error fetching currencies:', error);
      }
    );
  }

  exchangeCurrencies() {
    const fromCurrencyRate = this.getCurrencyRate(this.selectedCurrencyFrom);
    const toCurrencyRate = this.getCurrencyRate(this.selectedCurrencyTo);

    if (fromCurrencyRate && toCurrencyRate) {
      this.exchangedAmount = (this.amount / fromCurrencyRate) * toCurrencyRate;
      alert(`Exchanged Amount: ${this.exchangedAmount.toFixed(2)} ${this.selectedCurrencyTo}`);
    } else {
      console.error('Currency rates not found for selected currencies.');
    }
  }

  getCurrencyRate(currency: string): number | undefined {
    return this.currencies.find(curr => curr.value === currency)?.rate;
  }

  logout() {
    localStorage.removeItem('userToken');
    this.router.navigateByUrl('/login');
    alert('Logout');
  }
}
