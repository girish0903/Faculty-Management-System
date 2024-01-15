// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authentication.guard';  // Import AuthGuard
import { PhdRegistrationComponent } from './phd-registration/phd-registration.component';
import { ResearchStudentsComponent } from './research-students/research-students.component';
import { BooksPublishedComponent } from './books-published/books-published.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: 'phd-registration', component: PhdRegistrationComponent, canActivate: [AuthGuard] },
  { path: 'research-students', component: ResearchStudentsComponent, canActivate: [AuthGuard] },
  { path: 'books-published', component: BooksPublishedComponent, canActivate: [AuthGuard] },
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
