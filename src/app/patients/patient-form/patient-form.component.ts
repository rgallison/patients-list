import { formatDate } from '@angular/common';
import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CLINICS } from '../../clinics/mock-clinics';
import { Patient } from '../patient';

@Component({
  selector: 'patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.less']
})
export class PatientFormComponent implements OnInit{
  @Input() patient: any = {
    msn: NaN,
    height: { value: NaN, unit: '' },
    weight: { value: NaN, unit: '' },
  };
  @Output() output: EventEmitter<any> = new EventEmitter<any>();
  patientForm: FormGroup;
  states = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];
  clinics = CLINICS;
  
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.patientForm = this.fb.group({
      name: [this.patient.name || '', Validators.required],
      address: this.fb.group({
        street: [this.patient.address ? this.patient.address.street : ''],
        city: [this.patient.address ? this.patient.address.city : ''],
        state: [this.patient.address ? this.patient.address.state : ''],
        zipcode: [this.patient.address ? this.patient.address.zipcode : '']
      }),
      clinic: [this.patient.clinic || '', Validators.required],
      msn: [this.patient.msn || '', Validators.required],
      dob: [this.patient.dob ? this.patient.dob : '', Validators.required],
      sex: [this.patient.sex || '', Validators.required],
      height: this.fb.group({
        value: [this.patient.height.value || ''],
        unit: [this.patient.height.unit]
      }),
      weight: this.fb.group({
        value: [this.patient.weight.value || ''],
        unit: [this.patient.weight.unit]
      }),
      notes: [this.patient.notes || '']
    });
    this.sendOutput(this.patientForm);

    
    this.patientForm.valueChanges.subscribe(val => {
      this.sendOutput(val);
    });
  }

  sendOutput(formOutput: FormGroup) {
    this.output.emit({ patient: formOutput, isValid: this.patientForm.status });
  }

}
