import { Component } from '@angular/core';

@Component({
  selector: 'customer-database',
  templateUrl: `
  <customer-table></customer-table>
  <info-table></info-table>
  `
})
export class AppComponent {
  title = 'customer-records';
}
