import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PowerProvider } from '../../providers/power/power';

@IonicPage()
@Component({
  selector: 'page-power',
  templateUrl: 'power.html',
})
export class PowerPage {

  amount:number;
  energy:number;
  switchPower:number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private power:PowerProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PowerPage');
    this. getPower();    
  }

  async getPower(){
    await this.power.getAmount().subscribe(amount=>{
      console.log('amount :',amount.$value);
      this.amount = amount.$value;
    });

    await this.power.getEnergy().subscribe(energy=>{
      console.log('energy :',energy.$value);
      this.energy = energy.$value;
    });

    await this.power.getSwitch().subscribe(sw=>{
      console.log('Switch :',sw.$value);
      this.switchPower = sw.$value;
    });

  }

  updatePower(switchPower:number){
    let power;
    switchPower == 1 ? power = 0 : power = 1;
    this.power.updateSwitch(power).then(()=>{
      console.log(power);      
    }).catch(e=>{
      console.error(e);      
    })

  }

}
