import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'

@Component({
    selector: 'my-app',
    template: `<button (click)="onClick($event)">Submit</button>
               <button on-click="onClick($event)">Submit</button>
              `
})
export class AppComponent {
  onClick($event){
    console.log('Clicked!', $event)
  }
}
