import { Injectable } from "@angular/core";

export interface Patient {
  name: string;
  address: string;
  clinic: string;
  msn: number;
  sex: string;
  weight: { value: number, unit: string};
  height: { value: number, unit: string};
  dob: string;
  notes?: string;
}

@Injectable()
export class Patient implements Patient {
  constructor(patient:Patient){
    Object.assign(this, patient);
  }
}

