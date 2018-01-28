export class Device{
    key?: string;
    control: number;
    icon:string;
    time_morning:string;
    time_noon:string;
    time_night:string;
    constructor(
        key: string,
        control:number,
        icon:string,
        time_morning:string,
        time_noon:string,
        time_night:string
    ){  
        this.key    = key;
        this.control = control;
        this.icon=icon;
        this.time_morning =time_morning;
        this.time_noon = time_noon;
        this.time_night = time_night;
    }
}