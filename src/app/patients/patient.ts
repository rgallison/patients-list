
export interface PatientObj {
  name: string;
  address: Address;
  clinic: string;
  msn: number;
  sex: string;
  weight: { value: number, unit: string};
  height: { value: number, unit: string};
  dob: string;
  notes?: string | undefined;
}

export class Patient {
  public name: string;
  public address: Address;
  public clinic: string;
  public msn: number;
  public sex: string;
  public weight: { value: number, unit: string};
  public height: { value: number, unit: string};
  public dob: string;
  public notes: string | undefined;

  constructor(patient: PatientObj){
    Object.assign(this, patient);
  }

  formatAddress(): string {
    let { street, city, state, zipcode } = this.address;
    return `${street}, ${city}, ${state}, ${zipcode}`;
  }
}



export interface Address { street: string, city: string, state: string, zipcode: string };