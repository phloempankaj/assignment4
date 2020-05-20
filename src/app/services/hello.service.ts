import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HelloService {
  data: number;
  dataSource = new BehaviorSubject(null);
  constructor() {
    this.data = 0;
    this.dataSource.next(0);
  }

  increase() {
    this.data++;
    this.dataSource.next(this.data);
    console.log(this.data);
  }
  decrease() {
    this.data--;
    this.dataSource.next(this.data);
    console.log(this.data);
  }
  getData() {
    return this.dataSource.asObservable();
  }
}
