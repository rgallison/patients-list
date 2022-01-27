import { Patient } from '../patient';

export const PATIENTS: Patient[] = [
  new Patient({ 
    name: 'Asiyah Reyes',
    clinic: 'Great River Community Hospital',
    msn: 2384695,
    address: { street: '1096 S Gaylord St', city: 'Denver',	state: 'CO', zipcode: '80209'},
    sex: 'F',
    weight: { value: 68, unit: 'kg' },
    height: { value: 160, unit: 'cm' },
    dob: '1/14/1981',
    notes: '<p>Airway obstruction alcoholism arteries and veins arthritis chromosomes constipation er glycogen iv kidney laparoscopy lung function tests lymph node nicotine nutrition pneumonia sphenopalatineganglioneuralgia spirometer triggers umbilical cord white blood cells.</p>'
  }),
  new Patient ({ 
    name: 'Jesse North',
    clinic: 'Harmony Clinic',
    msn: 4389769,
    address: { street: '3155 Smithfield Avenue', city: 'Amarillo', state: 'TX', zipcode: '79101'},
    sex: 'M',
    weight: { value: 65, unit: 'kg' },
    height: { value: 180, unit: 'cm' },
    dob: '6/22/1970'
   }),
  new Patient ({ 
    name: 'Reema Chan',
    clinic: 'Pearl River Hospital',
    msn: 34082992,
    address: { street: '1257 Trymore Road', city: 'Geneva', state: 'NY', zipcode: '14456' }, 
    sex: 'F',
    weight: { value: 51, unit: 'kg' },
    height: { value: 150, unit: 'cm' },
    dob: '11/3/1966'
  })];

