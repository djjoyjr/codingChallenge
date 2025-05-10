import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'login',
  standalone: true,
  imports: [FormsModule],
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userName: string = '';
  password: string = '';

  constructor() {}
 
  get isValidYn(): boolean {
    return !!this.userName && !!this.password;
  }

  loginUser(): void {
    try {
      if (this.password && this.password == this.userName.toLowerCase()) {
        alert("logged in");
      }
      else {
        throw ("Unable to log in.  User ID and Password not found.")
      }
    }
    catch (error) {
      let errorMessage: string = error && error.toString() ? error.toString() : "Unknown Error Occurred";
      console.error("error: ", errorMessage);
    }
  }
}
