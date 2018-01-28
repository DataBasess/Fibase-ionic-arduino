import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database-deprecated';
import { Device } from '../../model/device';
import { FirebaseListFactoryOpts } from 'angularfire2/database-deprecated/interfaces';

@Injectable()
export class DatabaseProvider {

  opts: FirebaseListFactoryOpts;
  
  constructor(
    public http: HttpClient,
    private databaseRD:AngularFireDatabase
  ) {
    console.log('Hello DatabaseProvider Provider');
  }
  
  
  
  switchDevice(key:string,control:number):Promise<void>{
    console.log('key',key);
    console.log('device',control);    
    return this.databaseRD.object('/device/'+key+'/control').set(control);
  }

  //ใช้สำหรับเพิ่มข้อมูลแบบ object
  setObjectDevice(key:string,value):Promise<void>{
    return this.databaseRD.object('/device/'+key).set(value);
  }
  //ใช้สำหรับแก้ไขข้อมูลแบบ object
  updateObjectDevice(key:string,value):Promise<void>{
    return this.databaseRD.object('/device/'+key).update(value);
  }
  //ใช้สำหรับลบข้อมูลแบบ object
  removeObjectDevice(key:string):Promise<void>{
    return this.databaseRD.object('/device/'+key).remove();
  }
  //ใช้สำหรับเรียกข้อมูลทั้งหมดใน list มาแสดง
  getListDevice():FirebaseListObservable<Device[]>{
    return this.databaseRD.list('/device');
  }
  //ใช้สำหรับเพิ่มข้อมูลลงใน list แบบไม่มี key
  pushListDevice(value:Device){
    return this.databaseRD.list('/device').push(value);
  }
  //ใช้สำหรับเพิ่มข้อมูลลงใน list แบบมี key
  setListDevice(key:string,value:Device){
    return this.databaseRD.list('/device').set(key,value);
  }
  //ใช้สำหรับแก้ไขข้อมูลใน list 
  updateListDevice(key:string,value:Device){
    return this.databaseRD.list('/device').update(key,value);
  }
  //ใช้สำหรับลบข้อมูลใน list 
  removeListDevice(key:string){
    return this.databaseRD.list('/device').remove(key);
  }
  //ใช้สำหรับค้นหาข้อมูลข้อมูลใน list แบบ key:value
  searchListDevice(key:any,value:any):FirebaseListObservable<Device[]>{
    if(key!=''){
      this.opts = {query: {orderByChild:key,equalTo:value,} }
      return this.databaseRD.list('/device',this.opts);
    }else{
      this.opts = {query: {limitToFirst:4} }
      return this.databaseRD.list('/device',this.opts);
    }
    
  }
  //ใช้สำหรับค้นหาข้อมูลข้อมูลแบบ object
  searchObjectDevice(key:any):FirebaseObjectObservable<Device>{    
    return this.databaseRD.object('/device/'+key);
  }
}
