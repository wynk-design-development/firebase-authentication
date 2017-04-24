import { Component } from '@angular/core';

/**
 * Generated class for the TilesComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'tiles-component',
  templateUrl: 'tiles-component.html'
})
export class TilesComponent {

  text: string;

  constructor() {
    console.log('Hello TilesComponent Component');
    this.text = 'Hello World';
  }

}
