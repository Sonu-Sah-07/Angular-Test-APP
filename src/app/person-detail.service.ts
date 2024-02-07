import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonDetailService {
  urlPeople = 'https://tekdi-challenges.appspot.com/api/People';

  constructor(private httpClient: HttpClient) { };

  addPerson(data:any){
    return this.httpClient.post(this.urlPeople, data)
  }

  getPerson(){
    return this.httpClient.get(this.urlPeople)
  }

  editPerson(data:any,id:number){
    return this.httpClient.patch(this.urlPeople+"/"+id,data)
  }
}
