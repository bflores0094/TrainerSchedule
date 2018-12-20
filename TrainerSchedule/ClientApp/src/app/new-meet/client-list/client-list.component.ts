import { Component, OnInit, Input } from '@angular/core';
import { Client } from './../../view-meets/client.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  @Input() client: Client;
  constructor() { }

  ngOnInit() {
  }

}
