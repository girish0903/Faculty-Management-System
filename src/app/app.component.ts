// app.component.ts

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { RouterModule, Routes } from '@angular/router';
import { PhdRegistrationComponent } from './phd-registration/phd-registration.component';
import { BooksPublishedComponent } from './books-published/books-published.component';
import { ResearchStudentsComponent } from './research-students/research-students.component';
import { AuthGuard } from './authentication.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Inject the AuthenticationService
  constructor(
    public authService: AuthenticationService,
    private router: Router
  ) {}

  navigateToModule(module: string): void {
    this.router.navigate([`/${module}`]);
  }
}
