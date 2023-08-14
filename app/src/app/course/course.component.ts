import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  url = 'http://localhost/';
  courses: Course[] = [];

  constructor(private http: HttpClient) {}

  create(): void {

  }

  select(): void {

  }


  update() {

  }

  delete() {

  }
}
