import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { Device } from '../../model/device';

@IonicPage()
@Component({
  selector: 'page-firebase',
  templateUrl: 'firebase.html',
})
export class FirebasePage {

  devicelist:Device[];
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private db:DatabaseProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirebasePage');
    this.db.getDevice().subscribe(datalist=>{
      this.devicelist = datalist;
      console.log(this.devicelist);
    })
  }

}
