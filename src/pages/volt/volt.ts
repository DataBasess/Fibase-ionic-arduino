import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PowerProvider } from '../../providers/power/power';
import { logPower } from '../../model/logPower';


@IonicPage()
@Component({
  selector: 'page-volt',
  templateUrl: 'volt.html',
})
export class VoltPage {

  listVolt:logPower[];
  volt=[];
  time=[];
  amp=[];
  lineVolt={};
  lineAmp={};

  public lineChartData:Array<any> = [
    {data: [0], label: 'Series A'}
  ];
  public lineChartLabels:Array<any>;// = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  
  public randomize():void {
    /* let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
    console.log(this.lineChartData); */
    
  }
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private power:PowerProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VoltPage');
    this.chartVolt();
  }

  chartVolt(){
    this.power.getLogPower().subscribe(log=>{
      this.listVolt = log;
      for(let key of this.listVolt){
        //console.log(key.volt);
        this.volt.push(key.volt);
        this.time.push(key.time);
        this.amp.push(key.amp);
      }
      //console.log(this.volt);
      //console.log(this.time);
      //this.lineChartData
      let v = this.volt;
      let a = this.amp;
      this.lineVolt = {data:v,label:'Volt'};
      this.lineAmp  = {data:a,label:'Amp'};
      console.log(this.lineVolt);
      this.lineChartData.push(this.lineVolt);
      this.lineChartData.push(this.lineAmp);
      
      
      this.lineChartLabels = this.time;


    })
  }

}
