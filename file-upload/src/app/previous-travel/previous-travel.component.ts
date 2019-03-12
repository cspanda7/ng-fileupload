import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray,Validators} from '@angular/forms'
import { Select2Data } from 'ng-select2-component/lib/select2-utils';
// import {Select2OptionData} from 'ng2-select2/ng2-select2';

@Component({
  selector: 'app-previous-travel',
  templateUrl: './previous-travel.component.html',
  styleUrls: ['./previous-travel.component.scss']
})
export class PreviousTravelComponent implements OnInit {
  tarvelForm:FormGroup;
  exampleData:Select2Data;
  constructor() { }

  ngOnInit() {
    this.exampleData = [
      { value: 'AK', label: 'Alaska' },
      { value: 'HI', label: 'Hawaii', disabled: true },
      { value: 'CA', label: 'California' },
      { value: 'NV', label: 'Nevada' },
      { value: 'OR', label: 'Oregon' },
      { value: 'WA', label: 'Washington' },
      { value: 'AZ', label: 'Arizona' },
      { value: 'CO', label: 'Colorado' },
      { value: 'ID', label: 'Idaho' },
      { value: 'MT', label: 'Montana' },
      { value: 'NE', label: 'Nebraska' },
      { value: 'NM', label: 'New Mexico' },
      { value: 'ND', label: 'North Dakota' },
      { value: 'UT', label: 'Utah' },
      { value: 'WY', label: 'Wyoming' },
      { value: 'AL', label: 'Alabama' },
      { value: 'AR', label: 'Arkansas' },
      { value: 'IL', label: 'Illinois' },
      { value: 'IA', label: 'Iowa' },
      { value: 'KS', label: 'Kansas' },
      { value: 'KY', label: 'Kentucky' },
      { value: 'LA', label: 'Louisiana' },
      { value: 'MN', label: 'Minnesota' },
      { value: 'MS', label: 'Mississippi' },
      { value: 'MO', label: 'Missouri' },
      { value: 'OK', label: 'Oklahoma' },
      { value: 'SD', label: 'South Dakota' },
      { value: 'TX', label: 'Texas' },
      { value: 'TN', label: 'Tennessee' },
      { value: 'WI', label: 'Wisconsin' },
      { value: 'CT', label: 'Connecticut' },
      { value: 'DE', label: 'Delaware' },
      { value: 'FL', label: 'Florida' },
      { value: 'GA', label: 'Georgia' },
      { value: 'IN', label: 'Indiana' },
      { value: 'ME', label: 'Maine' },
      { value: 'MD', label: 'Maryland' },
      { value: 'MA', label: 'Massachusetts' },
      { value: 'MI', label: 'Michigan' },
      { value: 'NH', label: 'New Hampshire' },
      { value: 'NJ', label: 'New Jersey' },
      { value: 'NY', label: 'New York' },
      { value: 'NC', label: 'North Carolina' },
      { value: 'OH', label: 'Ohio' },
      { value: 'PA', label: 'Pennsylvania' },
      { value: 'RI', label: 'Rhode Island' },
      { value: 'SC', label: 'South Carolina' },
      { value: 'VT', label: 'Vermont' },
      { value: 'VA', label: 'Virginia' },
      { value: 'WV', label: 'West Virginia' }
  ];
    let travels=new FormArray([]);
    this.tarvelForm=new FormGroup({
      'travelList':travels
    });
   console.log(this.tarvelForm.get('travelList'));
  }
  Add(){
    debugger
    (<FormArray>this.tarvelForm.get('travelList')).push(
      new FormGroup({
        'fromDate':new FormControl(null,Validators.required),
        'toDate':new FormControl(null,[
          Validators.required
        ]),
        'destination':new FormControl(null,Validators.required),
      })
    )
    console.log(this.tarvelForm.get('travelList'));
  }
  delete(index:number){
    (<FormArray>this.tarvelForm.get('travelList')).removeAt(index);
  }
  onSubmit(){
  console.log(this.tarvelForm.value); 
  }
}
