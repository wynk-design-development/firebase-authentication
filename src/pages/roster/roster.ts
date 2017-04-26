import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-roster',
  templateUrl: 'roster.html',
})
export class RosterPage {

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams
  ) {}



  ionViewDidLoad() {
    console.log('ionViewDidLoad Roster');
  }
}
