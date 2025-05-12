import { Component, OnInit, inject } from '@angular/core';
import { APIResponseModel } from '../../model/interface/interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(): void {
    this.http.get<APIResponseModel>("/api/ClientStrive/getAllEmployee").subscribe((res: APIResponseModel) => {
      console.log('employees: ', res.data);
    })
  }

}
