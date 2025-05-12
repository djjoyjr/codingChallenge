import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/interface/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }



  getDesignations(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>("/api/ClientStrive/GetAllDesignation")
  }

}
