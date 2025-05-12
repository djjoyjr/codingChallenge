import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';
import { APIResponseModel } from '../model/interface/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>("/api/ClientStrive/GetAllClients")
  }

  getAllEmployees(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>("/api/ClientStrive/GetAllEmployee")
  }

  addUpdateClient(obj: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>("/api/ClientStrive/AddUpdateClient", obj)
  }

  deleteClientById(id: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>("/api/ClientStrive/DeleteClientByClientId?clientId="+id)
  }

  addUpdateClientProject(obj: any): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>("/api/ClientStrive/AddUpdateClientProject", obj)
  }

  getAllClientProjects(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>("/api/ClientStrive/GetAllClientProjects")
  }

}
