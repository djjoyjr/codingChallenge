import { Component } from '@angular/core';
import { RolesComponent } from "../roles/roles.component";
import { DesignationComponent } from "../designation/designation.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'main',
  standalone: true,
  imports: [RolesComponent, DesignationComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  currentComponent: string = 'Roles';

  changeTab(tabName: string): void {
    this.currentComponent = tabName;
  }

}
