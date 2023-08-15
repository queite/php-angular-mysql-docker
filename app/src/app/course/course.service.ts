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

  create(c: Course): Observable<Course[]> {
    return this.http.post(this.url + 'create', c).pipe(
      map((res: any) => {
        this.courses.push(res);

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

  update(c: Course): Observable<Course[]> {
    console.log("c service", c);

    return this.http.put(this.url + 'update', c).pipe(
      map((res) => {
        console.log('res service', res);
        
        const modifiedCourse = this.courses.find(course => course['id'] === c['id']);
        console.log('modifiedCourse',modifiedCourse);

        if(modifiedCourse) {
          modifiedCourse.courseName = c.courseName;
          modifiedCourse.coursePrice = c.coursePrice;
        }

        return this.courses;
      })
    )
  }
}
