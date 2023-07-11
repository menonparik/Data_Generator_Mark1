import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class DataService{
    private sample: any[][] = []; 
    private heading: any[] = [];
    
    setData(sample: any[][]){
        this.sample=sample;
    }
    getData() {
        return this.sample;
      }
     // private dataSubject1 = new BehaviorSubject<any[]>([]);

      setData1(heading: any[]){
          this.heading=heading;
      }
      getData1() {
         return this.heading;
        }
}