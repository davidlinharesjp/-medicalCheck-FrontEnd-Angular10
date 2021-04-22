import { Donor } from './donor.model';
export interface DetailsDonors {

  description: string;
  total: number;
  porcentage: number;
  media: number;
  donors: Array<Donor>;  
}