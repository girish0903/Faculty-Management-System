// books-published.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksPublishedService {
  private apiUrl = 'http://localhost:3000/api/books-published'; // Update with your API endpoint

  constructor(private http: HttpClient) {}

  getBooksPublished(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      tap((data: any) => console.log('Books Published API Response:', data)),
      catchError((error: any) => {
        // Handle error
        console.error('Books Published API Error:', error);
        throw error; // Re-throw the error to propagate it further
      })
    );
  }

  addBook(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  updateBook(data: any): Observable<any> {
    const url = `${this.apiUrl}/${data.id}`;
    return this.http.put<any>(url, data);
  }

  searchByTitle(title: string): Observable<any[]> {
    const url = `${this.apiUrl}/search/title/${title}`;
    return this.http.get<any[]>(url).pipe(
      tap((data: any) => console.log('Search by Title API Response:', data)),
      catchError((error: any) => {
        console.error('Error searching by title:', error);
        throw error;
      })
    );
  }

  searchByDate(date: string): Observable<any[]> {
    const url = `${this.apiUrl}/search/date/${date}`;
    console.log('Search by Date URL:', url); // Log the URL
    return this.http.get<any[]>(url);
  }
}