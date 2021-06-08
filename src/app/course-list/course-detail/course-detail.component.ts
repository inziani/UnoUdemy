import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/course.model';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  @Input() courseItems: Course;

  constructor(courseItems: Course) {
    this.courseItems = courseItems;
  }

  ngOnInit(): void {
  }

}
