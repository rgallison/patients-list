import { Component, Inject, ViewContainerRef, ViewChild, ComponentFactoryResolver, ComponentFactory, ComponentRef } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

const VALID = 'VALID';
const INVALID = 'INVALID';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent{
  @ViewChild("modalContent", { read: ViewContainerRef }) contentContainer: ViewContainerRef ;
  componentRef: ComponentRef<any>;
  contentOutput: any;
  disableButton: boolean;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
    private resolver: ComponentFactoryResolver
  ) {}

  ngAfterViewInit(): void {
    this.createComponent();
  }
  
  handleModalSubmit() {
    this.modalData.callbackMethod(this.contentOutput);
    this.closeDialog();
  }

  closeDialog(): void {
    this.dialogRef.close();
    this.componentRef.destroy(); 
  }

  createComponent() {
    // this.contentContainer.clear(); 
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(this.modalData.content);
    this.componentRef = this.contentContainer.createComponent(factory);
    if (this.modalData.input) {
      Object.assign(this.componentRef.instance, this.modalData.input);
    }

    if (this.componentRef.instance.output) {
      this.componentRef.instance.output.subscribe(val => {
        this.disableButton = val.hasOwnProperty('isValid') ? val.isValid === INVALID : false;
        this.contentOutput = val;
      });
    }
  }


}
