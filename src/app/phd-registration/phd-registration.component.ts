// phd-registration.component.ts

import { Component, OnInit } from '@angular/core';
import { PhdRegistrationService } from '../services/phd-registration.service';

@Component({
  selector: 'app-phd-registration',
  templateUrl: './phd-registration.component.html',
  styleUrls: ['./phd-registration.component.css'],
})
export class PhdRegistrationComponent implements OnInit {
  public phdRegistrations: any[] = [];
  public showForm: boolean = false;
  public isEditMode: boolean = false;
  public formData: any = {};
  public searchType: string = 'name'; // Default search type
  public searchName: string = '';
  public searchDate: string = '';

  constructor(private phdRegistrationService: PhdRegistrationService) {}

  ngOnInit(): void {
    this.loadPhdRegistrations();
  }

  private loadPhdRegistrations(): void {
    this.phdRegistrationService.getPhdRegistrations().subscribe(
      (data) => {
        this.phdRegistrations = data;
      },
      (error) => {
        console.error('Error loading Phd Registrations:', error);
      }
    );
  }

  public onAddClick(): void {
    this.showForm = true;
    this.isEditMode = false;
    this.formData = {};
  }

  public onEditClick(registration: any): void {
    this.showForm = true;
    this.isEditMode = true;
    this.formData = { ...registration };
  }

  public onFormSubmit(): void {
    if (this.isEditMode) {
      this.phdRegistrationService.updatePhdRegistration(this.formData).subscribe(
        () => {
          this.loadPhdRegistrations();
          this.showForm = false;
          this.formData = {};
        },
        (error) => {
          console.error('Error updating Phd Registration:', error);
        }
      );
    } else {
      this.phdRegistrationService.addPhdRegistration(this.formData).subscribe(
        () => {
          this.loadPhdRegistrations();
          this.showForm = false;
          this.formData = {};
        },
        (error) => {
          console.error('Error adding Phd Registration:', error);
        }
      );
    }
  }

  public onSearchSubmit(): void {
    if (!this.searchName && !this.searchDate) {
      // If no search criteria provided, load all data
      this.loadPhdRegistrations();
    } else {
      if (this.searchType === 'name') {
        // Search by name
        this.phdRegistrationService.searchByName(this.searchName).subscribe(
          (data) => {
            this.phdRegistrations = data;
          },
          (error) => {
            console.error('Error searching by name:', error);
          }
        );
      } else if (this.searchType === 'date') {
        // Search by date
        this.phdRegistrationService.searchByDate(this.searchDate).subscribe(
          (data) => {
            this.phdRegistrations = data;
          },
          (error) => {
            console.error('Error searching by date:', error);
          }
        );
      }
    }
  }
}