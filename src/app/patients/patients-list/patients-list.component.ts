import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  
  constructor(public modal: MatDialog) { 
  }

  ngOnInit(): void {
  }

  openPatientViewModal(patient: Patient): void {
    const modalConfig: Modal = {
      header: patient.name,
      content: PatientViewModalComponent,
      input: { patient },
      confirmButtonLabel: 'Close',
      callbackMethod: (data) => {
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
      callbackMethod: (data) => {
        this.patients.push(new Patient(data.patient));
      },
    };
    this.modal.open(ModalComponent, {
      width: consts.MODAL_WIDTH,
      data: modalConfig,
    });
  }

  openPatientEditModal(patient: Patient) {
    const modalConfig: Modal = {
      header: 'Edit Patient',
      content: PatientFormComponent,
      input: { patient },
      cancelButtonLabel: 'Cancel',
      confirmButtonLabel: 'Save',
      callbackMethod: (data) => {
        let patientIndex = this.patients.findIndex((p => p.msn === data.patient.msn));
        this.patients[patientIndex] = new Patient(data.patient);
      },
    };
    this.modal.open(ModalComponent, {
      width: consts.MODAL_WIDTH,
      data: modalConfig,
    });
  }

  openPatientDeleteModal(patient: Patient) {
    const modalConfig: Modal = {
      header: 'Delete Patient',
      content: PatientDeleteModalComponent,
      input: { patient },
      cancelButtonLabel: 'Cancel',
      confirmButtonLabel: 'Delete',
      callbackMethod: (data) => {
        this.patients = this.patients.filter((p) => p.msn !== data.patient.msn );
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
export class PatientViewModalComponent {  
  @Input() patient: Patient;
}

@Component({
  selector: 'view-patient',
  template: `<div>Are you sure you want to delete the following patient?</div>
            <p><strong>{{patient.name}}</strong><br>{{patient.msn}}</p>`
})
export class PatientDeleteModalComponent implements OnInit{  
  @Input() patient: Patient;
  @Output() output: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    this.output.emit({ patient: this.patient });
  }
}