import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: Course[] = [];

  courseInstance = new Course();

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.getAll();
  }

  create() {
    this.courseService.create(this.courseInstance).subscribe(
      (res: Course[]) => {
        this.courses = res;
        this.courseInstance.courseName = '';
        this.courseInstance.coursePrice = 0;
        this.getAll();
      }
    )
  }

  getAll() {
    this.courseService.getAll().subscribe(
      (res: Course[]) => {
        this.courses = res;
      }
    );
  }


  update() {
    this.courseService.update(this.courseInstance).subscribe(
      (res) => {
        this.courses = res;
        this.courseInstance.courseName = '';
        this.courseInstance.coursePrice = 0;
        this.getAll();
      }
    )
  }

  delete() {
    this.courseService.delete(this.courseInstance).subscribe(
      (res: Course[]) => {
        this.courses = res;
        this.courseInstance.courseName = '';
        this.courseInstance.coursePrice = 0;
        this.getAll();
      }
    )
  }

  select(c: Course) {
    this.courseInstance.id = c.id;
    this.courseInstance.courseName = c.courseName;
    this.courseInstance.coursePrice = c.coursePrice;
  }
}
