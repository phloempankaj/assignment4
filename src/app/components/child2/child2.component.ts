import { Component, OnInit, OnChanges } from "@angular/core";
import { HelloService } from "src/app/services/hello.service";
@Component({
  selector: "app-child2",
  templateUrl: "./child2.component.html",
  styleUrls: ["./child2.component.css"],
})
export class Child2Component implements OnInit, OnChanges {
  title = "Child 2";
  num: number;
  constructor(private hs: HelloService) {
    this.num = 0;
  }

  ngOnInit(): void {
    this.hs.getData().subscribe((n: number) => {
      this.num = n;
    });
  }
  ngOnChanges() {}
  onClick() {
    this.hs.decrease();
  }
}
