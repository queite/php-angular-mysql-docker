import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Course } from './course';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  url= 'http://localhost/';
  course: Course[] = [];

  constructor(private http: HttpClient) { }

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url + 'list.php').pipe(
      map((res) => {
        this.course = res;
        return this.course
      })
    )
  }
}
