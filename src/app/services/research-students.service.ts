// research-students.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResearchStudentsService {
  private apiUrl = 'http://localhost:3000/api/research-students'; // Update with your API endpoint

  constructor(private http: HttpClient) {}

  getResearchStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addResearchStudents(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  updateResearchStudents(data: any): Observable<any> {
    const url = `${this.apiUrl}/${data.id}`;
    return this.http.put<any>(url, data);
  }

  
  searchByName(name: string): Observable<any[]> {
    const url = `${this.apiUrl}/search-by-name/${name}`;
    return this.http.get<any[]>(url);
  }

  searchByDate(date: string): Observable<any[]> {
    const url = `${this.apiUrl}/search-by-date/${date}`;
    return this.http.get<any[]>(url);
  }
}

  // Add other methods as needed, e.g., addResearchStudent, updateResearchStudent, deleteResearchStudent
