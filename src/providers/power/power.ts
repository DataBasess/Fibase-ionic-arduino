import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase ,FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database-deprecated';
import { logPower } from '../../model/logPower';

@Injectable()
export class PowerProvider {

  constructor(
    public http: HttpClient,
    private db:AngularFireDatabase
  ) {
    console.log('Hello PowerProvider Provider');
  }

  getAmount(){
    return this.db.object('/amount');
  }

  getEnergy(){
    return this.db.object('/energy');
  }

  getSwitch(){
    return this.db.object('/device/Deley2/control');
  }

  updateSwitch(switchPower:number):Promise<void>{
    return this.db.object('/device/Deley2/control').set(switchPower);
  }

  getLogPower():FirebaseListObservable<logPower[]>{
    return this.db.list('/logPower');
  }

}
