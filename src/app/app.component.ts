import {Component} from '@angular/core';
import {DataService} from "./data.service";
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('myAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),
      transition('small <=> large', animate('500ms ease-in', keyframes([
        style({opacity: 0, transform: 'translatey(-75%)', offset: 0}),
        style({opacity: 1, transform: 'translatey(35px)', offset: 0.5}),
        style({opacity: 1, transform: 'translatey(0)', offset: 1}),
      ]))),
    ]),
  ]
})
export class AppComponent {

  // state: string = 'small';
  // cars = [];

  constructor(private dataService: DataService) {
    // this.cars = dataService.cars;
  }

  // animateMe() {
  //   this.state = (this.state === 'small' ? 'large' : 'small');
  // }
  //
  title: string = "APP";
  //
  // ngOnInit() {
  //   console.log(this.dataService.cars);
  //
  //   this.title = this.dataService.myData();
  // }
  //
  //
  // isColorFull = '';
  //
  // changeColors() {
  //   this.isColorFull = this.isColorFull === '' ? 'color-full' : '';
  // }
}
