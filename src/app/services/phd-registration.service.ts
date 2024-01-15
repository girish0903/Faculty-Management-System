import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhdRegistrationService {
  private apiUrl = 'http://localhost:3000/api/phd-registration';

  constructor(private http: HttpClient) {}

  getPhdRegistrations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addPhdRegistration(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  updatePhdRegistration(data: any): Observable<any> {
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
