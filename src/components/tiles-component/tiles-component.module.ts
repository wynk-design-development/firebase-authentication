import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TilesComponent } from './tiles-component';

@NgModule({
  declarations: [
    TilesComponent,
  ],
  imports: [
    IonicModule.forRoot(TilesComponent),
  ],
  exports: [
    TilesComponent
  ]
})
export class TilesComponentModule {}
