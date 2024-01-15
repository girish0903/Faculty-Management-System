// login.component.ts
import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthenticationService) {}

  login(): void {
    const isAuthenticated = this.authService.login(this.username, this.password);

    if (isAuthenticated) {
      // Redirect to the desired page or perform any other actions
    } else {
      alert('Invalid username or password');
    }
  }
}
