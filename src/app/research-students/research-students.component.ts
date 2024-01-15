// research-students.component.ts

import { Component, OnInit } from '@angular/core';
import { ResearchStudentsService } from '../services/research-students.service';

@Component({
  selector: 'app-research-students',
  templateUrl: './research-students.component.html',
  styleUrls: ['./research-students.component.css'],
})
export class ResearchStudentsComponent implements OnInit {
  public researchStudents: any[] = []; // Update the type based on your actual data structure
  public showForm: boolean = false;
  public isEditMode: boolean = false;
  public formData: any = {};
  public searchType: string = 'name'; // Default search type
  public searchName: string = '';
  public searchDate: string = '';

  constructor(private researchStudentsService: ResearchStudentsService) {}

  ngOnInit(): void {
    this.loadResearchStudents();
  }

  private loadResearchStudents(): void {
    // Fetch data from the service
    this.researchStudentsService.getResearchStudents().subscribe(
      (data) => {
        this.researchStudents = data;
      },
      (error) => {
        console.error('Error loading Research Students:', error);
      }
    );
  }
  
  public onAddClick(): void {
    this.showForm = true;
    this.isEditMode = false;
    this.formData = {};
  }

  public onEditClick(student: any): void {
    this.showForm = true;
    this.isEditMode = true;
    this.formData = { ...student };
  }

  public onFormSubmit(): void {
    if (this.isEditMode) {
      this.researchStudentsService.updateResearchStudents(this.formData).subscribe(
        () => {
          this.loadResearchStudents();
          this.showForm = false;
          this.formData = {};
        },
        (error) => {
          console.error('Error updating Research Student:', error);
        }
      );
    } else {
      this.researchStudentsService.addResearchStudents(this.formData).subscribe(
        () => {
          this.loadResearchStudents();
          this.showForm = false;
          this.formData = {};
        },
        (error) => {
          console.error('Error adding Research Student', error);
        }
      );
    }
  }

  
  public onSearchSubmit(): void {
    if (!this.searchName && !this.searchDate) {
      // If no search criteria provided, load all data
      this.loadResearchStudents();
    } else {
      if (this.searchType === 'name') {
        // Search by name
        this.researchStudentsService.searchByName(this.searchName).subscribe(
          (data) => {
            this.researchStudents = data;
          },
          (error) => {
            console.error('Error searching by name:', error);
          }
        );
      } else if (this.searchType === 'date') {
        // Search by date
        this.researchStudentsService.searchByDate(this.searchDate).subscribe(
          (data) => {
            this.researchStudents = data;
          },
          (error) => {
            console.error('Error searching by date:', error);
          }
        );
      }
    }
  }
}

