import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

//Components
import { ListComponent } from '../components/login.component';

/**
 * Generated class for the Drills page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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
