import {Component} from '@angular/core';
import { CoursesService } from './courses.service';
@Component({
    selector: 'courses',
    template: `
            <h2>{{ title }}</h2>
            {{date | date:'mediumDate'}}
            <ul>
                <li *ngFor="let course of courses">
                    {{course}}
                </li>
            </ul>
            {{text | summary:100}} <br />
            <button class="btn btn-primary" (click)="onSave($event)">Save</button>
        `
})
export class CoursesComponent {
    title = "List of courses";
    date = Date.now();
    text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
    courses;
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
    onSave($event){
        console.log("Button was clicked", $event);
    }
}