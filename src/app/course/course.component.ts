import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent{
  courseCategory = [
    {id: 1, name: "Development"},
    {id: 2, name: "Art"},
    {id: 3, name: "Language"}
  ];
}
