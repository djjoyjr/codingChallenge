import { Component, inject, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { APIResponseModel, IDesignation } from '../../model/interface/interfaces';

@Component({
  selector: 'designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {
  designationList: IDesignation[] = [];
  isLoading: boolean = true;
  mainService = inject(MainService);


  ngOnInit(): void {
    this.mainService.getDesignations().subscribe((res: APIResponseModel) => {
      this.designationList = res.data;
      this.isLoading = false;
    }, error => {
      console.error("API Error");
      this.isLoading = false;
    })
  }

}
