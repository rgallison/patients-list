import { Component, OnInit, Inject, Injector } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalActionsService } from '../../services/modal-actions.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent {
  injector: Injector;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any, 
    private inj: Injector
  ) { 
    this.injector = modalData.inputs;
  }
  
  handleModalSubmit() {
    this.modalData.callbackMethod();
    this.dialogRef.close();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
