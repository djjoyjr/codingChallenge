import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/interfaces';


@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  readonly MIN_NAME_LENGTH: number = 2;
  clientObj: Client = new Client();
  clientList: Client[] = [];
  

  clientService = inject(ClientService)

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient() {
    this.clientService.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    })
  }

  onEditItem(data: Client) {
    this.clientObj = data;
  }

  onDelete(clientId: number) {
    const confirmDelete = confirm(`Are you sure you want to delete this client?`);
    if (confirmDelete) {
      this.clientService.deleteClientById(clientId).subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert("Client Deleted Successfully");
          this.loadClient();
          this.reset();
        }
        else {
          alert("Client Deletion Failed");
          console.error("Client Deletion Failed");
        }
      })
    }
  }

  get saveOrUpdate(): string {
    return this.clientObj.clientId != 0 ? 'Update' : 'Save';
  }

  reset(): void {
    this.clientObj = new Client();
  }

  onSaveClient() {
    let _saveOrUpdate: string = this.saveOrUpdate;
    this.clientService.addUpdateClient(this.clientObj).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert(`Client ${_saveOrUpdate} Successful!`);
        this.loadClient();
        this.reset();
      }
      else {
        alert(`Unable to ${_saveOrUpdate} Client`);
        console.error(`Unable to ${_saveOrUpdate} Client`);
      }
    })
  }


}
