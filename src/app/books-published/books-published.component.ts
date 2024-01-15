// books-published.component.ts
import { Component, OnInit } from '@angular/core';
import { BooksPublishedService } from '../services/books-published.service';

@Component({
  selector: 'app-books-published',
  templateUrl: './books-published.component.html',
  styleUrls: ['./books-published.component.css'],
})
export class BooksPublishedComponent implements OnInit {
  public booksPublished: any[] = []; // Update the type based on your actual data structure
  public showForm: boolean = false;
  public isEditMode: boolean = false;
  public formData: any = {};
  public searchType: string = 'bookTitle'; // Default search type
  public searchTitle: string = '';
  public searchDate: string = '';

  constructor(private booksPublishedService: BooksPublishedService) {}

  ngOnInit(): void {
    this.loadBooksPublished();
    console.log('ngOnInit called');
  }

  private loadBooksPublished(): void {
    // Fetch data from the service
    this.booksPublishedService.getBooksPublished().subscribe(
      (data) => {
        this.booksPublished = data;
      },
      (error) => {
        console.error('Error loading Books Published:', error);
      }
    );
  }

  public onAddClick(): void {
    this.showForm = true;
    this.isEditMode = false;
    this.formData = {};
  }

  public onEditClick(book: any): void {
    this.showForm = true;
    this.isEditMode = true;
    this.formData = { ...book };
  }

  public onFormSubmit(): void {
    if (this.isEditMode) {
      this.booksPublishedService.updateBook(this.formData).subscribe(
        () => {
          this.loadBooksPublished();
          this.showForm = false;
          this.formData = {};
        },
        (error) => {
          console.error('Error updating Book:', error);
        }
      );
    } else {
      this.booksPublishedService.addBook(this.formData).subscribe(
        () => {
          this.loadBooksPublished();
          this.showForm = false;
          this.formData = {};
        },
        (error) => {
          console.error('Error adding Book:', error);
        }
      );
    }
  }
  
  public onSearchSubmit(): void {
    if (!this.searchTitle && !this.searchDate) {
      // If no search criteria provided, load all data
      this.loadBooksPublished();
    } else {
      console.log('Search by Title:',this.searchTitle);
      if (this.searchType === 'bookTitle') {
        // Search by title
        this.booksPublishedService.searchByTitle(this.searchTitle).subscribe(
          (data) => {
            console.log('Search by Title API Response:', data);
            this.booksPublished = data;
          },
          (error) => {
            console.error('Error searching by title:', error);
          }
        );
      } else if (this.searchType === 'date') {
        // Search by date
        this.booksPublishedService.searchByDate(this.searchDate).subscribe(
          (data) => {
            this.booksPublished = data;
          },
          (error) => {
            console.error('Error searching by date:', error);
          }
        );
      }
    }
  }
}