import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

//Components
import { ListComponent } from '../components/login.component';


@IonicPage()
@Component({
  selector: 'page-drills',
  templateUrl: 'drills.html',
})



export class DrillsPage {
  constructor () {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Drills');
  }
}
