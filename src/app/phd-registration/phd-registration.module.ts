import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule

import { RouterModule, Routes } from '@angular/router';
import { PhdRegistrationComponent } from './phd-registration.component';

const routes: Routes = [
  { path: '', component: PhdRegistrationComponent },
  // Add other routes specific to phd-registration module
];

@NgModule({
  declarations: [PhdRegistrationComponent],
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule],  // Add FormsModule to imports
})
export class PhdRegistrationModule {}
