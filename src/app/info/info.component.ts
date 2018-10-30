import { Component, OnInit, OnChanges,  Input ,SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'info-table',
  templateUrl: './info.component.html',
})
export class InfoComponent implements OnInit , OnChanges  {
   
    selectedCustomer: any[]; 
    
    private _slug;
    get customerSlug(): any {
      return this._slug;
    }
    
    @Input()
    set customerSlug(val: any) {
      this._slug = val;
    }

      
  customers = {
    'henry-gerard':
    ["Henry", "Gerard", 21, 'Livershool', 'Male', '3123', 'India', 'TN'],
    'michael-platini':
    ["Michael", "Platini", 40, 'Czecha', 'Male', '3198', 'USA', 'SF'],
    'louis-figo':
    ["Louis", "Figo", 37, 'Reala Madrida', 'Male', '3176', 'France', 'PA'],
    'cristiana-ronaldinho':
    ["Cristiana", "Ronaldinho", 15, 'Portugalia', 'Female', '3178', 'Portugal', 'LB'],
    'leonardo-messiah':
    ["Leonardo", "Messiah", 25, 'Barceloja', 'Female', '3165', 'Argentina', 'BA']
  }

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {   
    const currentCustomerSlug: SimpleChange = changes.customerSlug;
    if(currentCustomerSlug.currentValue){
        this.selectedCustomer = this.customers[currentCustomerSlug.currentValue];
    }
 }
  
  ngOnInit() {}

}
