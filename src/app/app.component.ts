import { Component  } from '@angular/core';

@Component({
  selector: 'customer-database',
  template: `
            <customer-table (selectedSlug)="viewInfoHandler($event)"></customer-table>
            <info-table [customerSlug]="selectedSlug"></info-table>
            `
})
export class AppComponent {

  selectedSlug: string = "";
  
  viewInfoHandler(slug: string) {
    this.selectedSlug = slug;
  }
}
