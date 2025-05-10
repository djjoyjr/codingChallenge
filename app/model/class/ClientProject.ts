export class ClientProject {
  clientName: string;
  clientProjectId: number;
  empCode: string;
  empDesignation: string;
  empEmailId: string;
  empId: number;
  empName: string;
  expectedEndDate: Date;
  projectName: string;
  startDate: Date;


  constructor() {
    this.clientName = '',
    this.clientProjectId = 0,
    this.empCode = "",
    this.empDesignation = '',
    this.empEmailId = '',
    this.empId = 0,
    this.empName = '',
    this.expectedEndDate = new Date();
    this.projectName = '',
    this.startDate = new Date()
  }
}
