import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Obj } from 'src/obj';
import { AddObj } from 'src/addObj';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css'],
})
export class RowComponent implements OnInit {
  constructor() {}
  @Input() addobj!: AddObj;
  @Output() onDeleteObj: EventEmitter<AddObj> = new EventEmitter();

  ngOnInit(): void {}
  onDelete(obj: AddObj) {
    this.onDeleteObj.emit(obj);
  }
}
