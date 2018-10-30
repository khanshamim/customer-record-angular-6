import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'customer-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
    
    @Output() selectedSlug: EventEmitter<string> =   new EventEmitter();
    
    private _slug;

  constructor() {
    this.setSlug(this.customers[0].slug);
    this.selectedSlug.emit(this.getSlug());
   }
  customers = [
    { firstName: "Henry", lastName: "Gerard", age: 21, slug: 'henry-gerard' },
    { firstName: "Michael", lastName: "Platini", age: 40, slug: 'michael-platini' },
    { firstName: "Louis", lastName: "Figo", age: 37, slug: 'louis-figo' },
    { firstName: "Cristiana", lastName: "Ronaldinho", age: 15, slug: 'cristiana-ronaldinho' },
    { firstName: "Leonardo", lastName: "Messiah", age: 25, slug: 'leonardo-messiah' }
  ]

  notifyParentComponent(slug) {
      this.setSlug(slug);
    this.selectedSlug.emit(this.getSlug());
  }

  setSlug(slug) {
    // slug setter function
    return this._slug = slug;
  }

  getSlug() {
    // slug getter function 
    return this._slug;
  }
}
