import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage {
  display: string = ''; // Initialize the display string
  history: string[] = []; // Array to store calculation history

  buttons: { value: string, color?: string }[] = [
    { value: '7' }, { value: '8' }, { value: '9' }, { value: '/', color: 'orange' },
    { value: '4' }, { value: '5' }, { value: '6' }, { value: '*', color: 'orange' },
    { value: '1' }, { value: '2' }, { value: '3' }, { value: '-', color: 'orange' },
    { value: '0' }, { value: '.' }, { value: '=', color: 'orange' }, { value: '+', color: 'orange' },
    { value: 'C', color: 'red' },
  ];

  constructor() { }

  onButtonClick(value: string) {
    if (value === 'C') {
      this.display = ''; 
    } else if (value === '=') {
      
      this.history.push(this.display + ' = ' + eval(this.display));
      this.display = eval(this.display); 
    } else {
      this.display += value; 
    }
  }
}
