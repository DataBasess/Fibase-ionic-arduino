import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/user';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user:User={username:'anuson',password:'1234'};
  message:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    ///console.log(this.user);
    
  }

  login(user:User){
     console.log(user);
     if(user.username=='anuson'&&user.password=='1234'){
       console.log("login");
       this.navCtrl.push('FirebasePage');       
     }else{
      console.log("Not login");
      this.message = 'Username or Password Woring';       
     }
     
  }

}
