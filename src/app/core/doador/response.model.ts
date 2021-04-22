import { DetailsDonors } from './details.donor.model';

export interface ResponseDTO {

  percentageOfObeseMen: number;
  percentageOfObeseWomen: number;
  averageDonorImcByAge: Array<DetailsDonors>;
  donorsByState: Array<DetailsDonors>;
  possibleDonorsByBloodType: Array<DetailsDonors>;
  averageDonorAgeByBloodType: Array<DetailsDonors>;

}

