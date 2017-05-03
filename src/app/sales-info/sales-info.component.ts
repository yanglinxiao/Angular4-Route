import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-sales-info',
  templateUrl: './sales-info.component.html',
  styleUrls: ['./sales-info.component.css']
})
export class SalesInfoComponent implements OnInit {

  private salesId : number;

  constructor(private routerInfo : ActivatedRoute) { }

  ngOnInit() {
    this.salesId = this.routerInfo.snapshot.params['id'];
  }

}
