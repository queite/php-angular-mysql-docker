import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Course } from './course';
import { Observable } from 'rxjs/internal/Observable';

interface ApiResponse {
  courses: Course[]; // Define the expected shape of the response
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  url= 'http://localhost/';
  course: Course[] = [];

  constructor(private http: HttpClient) { }

  getAll(): Observable<Course[]> {
    console.log(this.http.get<ApiResponse>(this.url + 'read'));

    return this.http.get<ApiResponse>(this.url + 'read').pipe(
      map((res) => {
        console.log(res);
        this.course = res['courses'];
        return this.course
      })
    )
  }
}
