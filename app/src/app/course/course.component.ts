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

  courseInstance = new Course()

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.select();
  }

  create() {

  }

  select() {
    this.courseService.getAll().subscribe(
      (res: Course[]) => {
        this.courses = res;
      }
    );
  }


  update() {

  }

  delete() {

  }
}
