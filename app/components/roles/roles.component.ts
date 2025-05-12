import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { APIResponseModel, IRole } from '../../model/interface/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'roles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {
  firstName: string = "";
  isActive: boolean = false;
  currentDate: Date = new Date();
  roleList: IRole[] = [];

  http = inject(HttpClient);

  ngOnInit():void {
    this.getAllRoles();
  }

  getAllRoles() {
    this.http.get<APIResponseModel>("/api/ClientStrive/GetAllRoles").subscribe((res: APIResponseModel) => {
      this.roleList = res.data;
    })
  }

}
