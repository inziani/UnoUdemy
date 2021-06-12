import {
  Component,
  Input,
  OnInit } from '@angular/core';
import { Course } from '../../shared/course.model';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  @Input() courseItems!: Course;

  constructor() {

  }

  ngOnInit(): void {
  }

}
