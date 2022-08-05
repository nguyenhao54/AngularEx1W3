import { Component, Input, OnInit } from '@angular/core';
import { Obj } from 'src/obj';
import { AddObj } from 'src/addObj';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  addobjs: AddObj[] = [];
  constructor() {}
  maxid: number = 0;
  ngOnInit(): void {}
  deleteObj(obj: AddObj) {
    this.addobjs = this.addobjs.filter((o) => o.id != obj.id);
  }
  add(obj: Obj) {
    console.log(obj);
    const newAddObj = {
      id: this.maxid,
      obj: obj,
    };
    console.log(this.addobjs.length);
    this.maxid++;
    this.addobjs.push(newAddObj);
  }
}
