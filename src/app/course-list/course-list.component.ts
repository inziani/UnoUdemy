import { Component, OnInit } from '@angular/core';
import { Course } from '../shared/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  coursesList: Course[] = [
    new Course("Maths", 101, "Addition"),
    new Course("English", 201, "Grammar and Comprehension")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
