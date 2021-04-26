import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoadorService {

  constructor(private httpClient: HttpClient) { }

  insertJson(body) {
    return this.httpClient.post(`${environment.urlBackEnd}`, body);
  }

  insertDonor(body) {
    return this.httpClient.post(`${environment.urlBackEnd}/insert`, body);
  }

  getDonor() {
    return this.httpClient.get(`${environment.urlBackEnd}`);
  }

  insertFileJson(fileToUpload: File){
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.httpClient.post(`${environment.urlBackEnd}/jsonFile`, formData);
  }

}
