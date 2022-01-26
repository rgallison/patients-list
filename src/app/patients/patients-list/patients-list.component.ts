import { Component, Inject, InjectionToken, Injector, Input, OnInit } from '@angular/core';
import{ consts } from '../../core/global-constants';
import { Patient } from '../patient';
import { PATIENTS } from '../mocks/mock-patients';

import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../core/modal/modal.component';
import { Modal } from '../../core/modal/modal.interface';
import { PatientFormComponent } from '../patient-form/patient-form.component';

@Component({
  selector: 'patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.less']
})
export class PatientsListComponent implements OnInit {
  patients: Patient[] = PATIENTS;
  
  constructor(public modal: MatDialog, public injector: Injector) { 
  }

  ngOnInit(): void {
  }

  openPatientViewModal(patient: Patient): void {
    const modalConfig: Modal = {
      header: patient.name,
      content: ViewPatientModalComponent,
      inputs: Injector.create({providers: [{provide: Patient, useValue: patient}], parent: this.injector}),
      confirmButtonLabel: 'Close',
      callbackMethod: () => {

      },
    }
    this.modal.open(ModalComponent, {
      width: consts.MODAL_WIDTH,
      data: modalConfig,
    });
  }

  openPatientAddModal() {
    const modalConfig: Modal = {
      header: 'Add Patient',
      content: PatientFormComponent,
      cancelButtonLabel: 'Cancel',
      confirmButtonLabel: 'Add',
      callbackMethod: () => {

      },
    };
    this.modal.open(ModalComponent, {
      width: consts.MODAL_WIDTH,
      data: modalConfig,
    });
  }
}


@Component({
  selector: 'view-patient',
  templateUrl: './view-patient.modal.html'
})
export class ViewPatientModalComponent {  
  constructor(public patient: Patient){
  }
}