import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Pages
import { DrillsPage } from '../../pages/drills/drills';
import { RosterPage } from '../../pages/roster/roster';


@Component({
  selector: 'tiles-component',
  templateUrl: 'tiles-component.html'
})



export class TilesComponent {
  text: string;

  constructor ( public nav: NavController ) {}



  public goToDrillsPage() {
  	this.nav.push(DrillsPage);
  } //goToDrillPage



  public goToRosterPage() {
  	this.nav.push(RosterPage);
  } //goToDrillPage
}
