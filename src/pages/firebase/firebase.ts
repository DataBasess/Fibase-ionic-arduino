import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { Device } from '../../model/device';
import { DateTime } from 'ionic-angular/components/datetime/datetime';

@IonicPage()
@Component({
  selector: 'page-firebase',
  templateUrl: 'firebase.html',
})
export class FirebasePage {

  devicelist:Device[];
  dataobject:Device = new Device(
    '',1,'','08:00','12:00','18:00'
  );
  timeNow:Date;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private db:DatabaseProvider
  ) {

    let id = localStorage.getItem('ID');
    localStorage.clear();

    setInterval(() => {
      this.timeNow = new Date();      
      let Hours = this.timeNow.getHours();
      let Minutes = this.timeNow.getMinutes();
      let HM = Hours+':'+Minutes;
      console.log(Hours+':'+Minutes);
      this.db.setObjectDevice('Light_bulb/time_now',HM)
      .then(result=>{
        console.log(result);        
      })
    }, 30000);
  }
    
    

  ionViewDidLoad() {    
    
    console.log('ionViewDidLoad FirebasePage');
    
    /* this.db.searchObjectDevice('Light_bulb').subscribe(dataobject=>{
      this.dataobject = dataobject;
      console.log('Object',this.dataobject);
    }) */

    this.db.searchListDevice('','').subscribe(datalist=>{
      this.devicelist = datalist;
      console.log('List',this.devicelist);
    })
  }

  

  switchDevice(device){
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

  setTime(device){
    console.log(device);
    this.db.updateObjectDevice('Light_bulb',device)
    .then(result=>{
      console.log(result);      
    })
  }



}
