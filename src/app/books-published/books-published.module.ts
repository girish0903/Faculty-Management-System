// books-published.module.ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksPublishedComponent } from './books-published.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  { path: '', component: BooksPublishedComponent },
  // Add other routes specific to books-published module
];

@NgModule({
  declarations: [BooksPublishedComponent],
  imports: [RouterModule.forChild(routes), [CommonModule],FormsModule],
})
export class BooksPublishedModule {}
