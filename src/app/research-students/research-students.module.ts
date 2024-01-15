// research-students.module.ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResearchStudentsComponent } from './research-students.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  { path: '', component: ResearchStudentsComponent },
  // Add other routes specific to research-students module
];

@NgModule({
  declarations: [ResearchStudentsComponent],
  imports: [RouterModule.forChild(routes), [CommonModule], FormsModule],
})
export class ResearchStudentsModule {}
