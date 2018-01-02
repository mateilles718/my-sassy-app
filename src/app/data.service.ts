import {Injectable} from '@angular/core';

@Injectable()

export class DataService {

  constructor() {
  }

  cars = ['Ford', 'BMW', 'Volkswagen'];

  myData() {
    return "This is my data, man!";
  }

}
