import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
  courses: Course[] = [];

  constructor(private http: HttpClient) { }

  getAll(): Observable<Course[]> {
    return this.http.get<ApiResponse>(this.url + 'read').pipe(
      map((res) => {
        this.courses = res['courses'];
        return this.courses
      })
    )
  }

  write(c: Course): Observable<Course[]> {
    return this.http.post<ApiResponse>(this.url + 'write', {courses: c}).pipe(
      map((res) => {
        this.courses.push(res['courses'][0]);
        return this.courses;
      })
    )
  }

  delete(c: Course): Observable<Course[]> {
    const params = new HttpParams().set('id', c.id!.toString());
    return this.http.delete(this.url + 'delete', {params: params}).pipe(
      map((res) => {
        const filter = this.courses.filter((course) => {
          return course['id'] !== c.id;
        })

        return this.courses = filter;
      })
    )
  }
}
