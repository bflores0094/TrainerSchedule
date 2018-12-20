import { Component, OnInit, Input } from '@angular/core';
import { Meet } from './../meet.model';

@Component({
  selector: 'app-meet-list',
  templateUrl: './meet-list.component.html',
  styleUrls: ['./meet-list.component.css']
})
export class MeetListComponent implements OnInit {

  @Input() meet: Meet;
  constructor() { }

  ngOnInit() {
    
  }

}
