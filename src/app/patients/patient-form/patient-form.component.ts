import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CLINICS } from '../../clinics/mock-clinics';

@Component({
  selector: 'patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.less']
})
export class PatientFormComponent implements OnInit{
  @Output() output: EventEmitter<any> = new EventEmitter<any>();

  states = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];
  clinics = CLINICS;
  patientForm = this.fb.group({
    name: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    clinic: [''],
    msn: [''],
    dob: [''],
    sex: [''],
    height: this.fb.group({
      value: [''],
      unit: ['']
    }),
    weight: this.fb.group({
      value: [''],
      unit: ['']
    }),
    notes: ['']
  });

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.patientForm.valueChanges.subscribe(val => {
      this.output.emit({ patient: val });
    });
  }

  onSubmit() {

  }

}
