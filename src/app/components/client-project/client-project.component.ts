import { Component, OnInit, inject } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/role';
import { ClientProject } from '../../model/class/ClientProject';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit  {

  clientService = inject(ClientService)
  clientProjectList: ClientProject[] = [];

  ngOnInit(): void {
    this.getAllClientProjects();
  }

  getAllClientProjects(): void {
    this.clientService.getAllClientProjects().subscribe((res: APIResponseModel) => {
      this.clientProjectList = res.data;
    })
  }

}
