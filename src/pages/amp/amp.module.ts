import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmpPage } from './amp';

@NgModule({
  declarations: [
    AmpPage,
  ],
  imports: [
    IonicPageModule.forChild(AmpPage),
  ],
})
export class AmpPageModule {}
