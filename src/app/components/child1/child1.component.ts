import { Component, OnInit, OnChanges } from "@angular/core";
import { HelloService } from "../../services/hello.service";

@Component({
  selector: "app-child1",
  templateUrl: "./child1.component.html",
  styleUrls: ["./child1.component.css"],
})
export class Child1Component implements OnInit, OnChanges {
  title = "Child 1";
  num: number;
  constructor(private hs: HelloService) {
    this.num = 0;
  }

  ngOnInit(): void {
    this.hs.getData().subscribe((n: number) => {
      this.num = n;
    });
    console.log("Child 1 (Init): " + this.num);
  }
  ngOnChanges() {}
  onClick() {
    this.hs.increase();
  }
}
