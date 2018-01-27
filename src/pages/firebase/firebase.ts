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
  device:Device;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private db:DatabaseProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirebasePage');
    /* this.db.getListDevice().subscribe(datalist=>{
      this.devicelist = datalist;
      console.log(this.devicelist);
    }) */
    this.db.searchObjectDevice('').subscribe(dataobject=>{
      this.device = dataobject;
      console.log('Object',this.device);
    })

    this.db.searchListDevice('','').subscribe(datalist=>{
      this.devicelist = datalist;
      console.log('List',this.devicelist);
    })
  }

  

  switchDevice(device:Device){
    console.log('Deviec',device.$key);
    if(device.control===1){
      console.log('Deviec',0);
      this.db.switchDevice(device.$key,0);
      
    }
    if(device.control===0){
      console.log('Deviec',1);
      this.db.switchDevice(device.$key,1);
    }
    
  }

}
