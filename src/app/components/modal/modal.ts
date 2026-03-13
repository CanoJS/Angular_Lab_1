import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl:'./modal.html',
  styleUrls: ['./modal.css']
})

export class Modal{

@Input() meal:any;

@Output() close = new EventEmitter();

}