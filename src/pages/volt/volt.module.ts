import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VoltPage } from './volt';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    VoltPage,
  ],
  imports: [
    IonicPageModule.forChild(VoltPage),
    ChartsModule
  ],
})
export class VoltPageModule {}
