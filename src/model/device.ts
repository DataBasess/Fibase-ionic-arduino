export class Device{
    $key: string;
    control: number;
    constructor(
        $key: string,
        control:number
    ){  
        this.$key    = $key;
        this.control = control;
    }
}