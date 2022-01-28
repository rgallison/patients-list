
export interface PatientObj {
  name: string;
  address: Address;
  clinic: string;
  msn: number;
  sex: string;
  weight: { value: number, unit: string};
  height: { value: number, unit: string};
  dob: Date;
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
  public dob: Date;
  public notes: string | undefined;

  constructor(patient: PatientObj){
    this.name = patient.name;
    this.address = patient.address;
    this.clinic = patient.clinic;
    this.msn = patient.msn;
    this.sex = patient.sex;
    this.weight = patient.weight;
    this.height = patient.height;
    this.dob = patient.dob;
    this.notes = patient.notes;
  }

  formattedAddress(): string {
    let { street, city, state, zipcode } = this.address;
    return `${street}, ${city}, ${state}, ${zipcode}`;
  }

  formattedDate(): string {
    let date = this.dob;
    if (typeof date !== 'string'){
      var year = date.getFullYear();
    
      var month = (1 + date.getMonth()).toString();
    
      var day = date.getDate().toString();
      day = day.length > 1 ? day : '0' + day;
      return month + '/' + day + '/' + year;
    }
    return date;
  }
}

export interface Address { street: string, city: string, state: string, zipcode: string };