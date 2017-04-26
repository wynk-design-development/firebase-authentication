import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DrillsPage } from './drills';

@NgModule({
  declarations: [
    DrillsPage,
  ],
  imports: [
    IonicModule.forRoot(DrillsPage),
  ],
  exports: [
    DrillsPage
  ]
})
export class DrillsModule {}
