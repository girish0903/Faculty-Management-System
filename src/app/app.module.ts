// app.module.ts
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';  // Import your AppRoutingModule
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhdRegistrationModule } from './phd-registration/phd-registration.module';
import { ResearchStudentsModule } from './research-students/research-students.module';
import { BooksPublishedModule } from './books-published/books-published.module';
import { AuthGuard } from './authentication.guard';  // Import AuthGuard
import { PhdRegistrationComponent } from './phd-registration/phd-registration.component';
import { BooksPublishedComponent } from './books-published/books-published.component';
import { ResearchStudentsComponent } from './research-students/research-students.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,  // Include your AppRoutingModule here
    RouterModule.forRoot([]),  // Include this if not present
  ],
  providers: [AuthGuard],  // Provide AuthGuard globally
  bootstrap: [AppComponent],
})
export class AppModule {}
