import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { RosterPage } from './roster';

@NgModule({
  declarations: [
    RosterPage,
  ],
  imports: [
    IonicModule.forRoot(RosterPage),
  ],
  exports: [
    RosterPage
  ]
})
export class RosterModule {}
